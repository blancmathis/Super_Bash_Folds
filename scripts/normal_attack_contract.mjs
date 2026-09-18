/** Data-only normal attacks. No callbacks, projectiles, or arbitrary engine flags. */
export const NORMAL_ACTIVE_FRAMES = Object.freeze({
  jab: 2, "dash-attack": 6, "forward-tilt": 4, "up-tilt": 5, "down-tilt": 4,
  "forward-smash": 5, "up-smash": 6, "down-smash": 7,
  "neutral-air": 9, "forward-air": 6, "back-air": 5, "up-air": 6, "down-air": 7,
});

const number = (minimum) => ({ type: "number", ...(minimum === undefined ? {} : { minimum }) });
const integer = (minimum) => ({ type: "integer", minimum });
const vector = {
  type: "object", additionalProperties: false, required: ["x", "y"],
  properties: { x: number(), y: number() },
};

/** Used both by the CLI validator and the editor-schema parity test. */
export const NORMAL_ATTACK_DEFINITIONS = {
  normalVector: vector,
  normalHitbox: {
    type: "object", additionalProperties: false, required: ["offset", "radius"],
    properties: {
      offset: { $ref: "#/$defs/normalVector" },
      endOffset: { $ref: "#/$defs/normalVector" },
      radius: number(4), activeStart: integer(0), activeEnd: integer(0),
      damageMultiplier: number(0), knockbackMultiplier: number(0), priority: integer(0),
      kind: { enum: ["sweet", "normal", "sour"] },
    },
    dependentRequired: { endOffset: ["activeEnd"] },
  },
  normalAttack: {
    type: "object", additionalProperties: false, minProperties: 1,
    properties: {
      label: { type: "string", pattern: "\\S" },
      startup: integer(1), active: integer(1), recovery: integer(0), damage: number(0),
      angle: { ...number(0), maximum: 360 }, baseKnockback: number(0), knockbackGrowth: number(0),
      hitstop: integer(0), hitstun: integer(0), radius: number(4),
      offset: { $ref: "#/$defs/normalVector" },
      hitboxes: { type: "array", minItems: 1, maxItems: 16, items: { $ref: "#/$defs/normalHitbox" } },
      shieldDamage: number(0), movement: { $ref: "#/$defs/normalVector" },
      airMovement: { $ref: "#/$defs/normalVector" },
      chargeable: { type: "boolean" }, maxChargeFrames: integer(1),
    },
  },
  normalOverrides: {
    type: "object", additionalProperties: false,
    properties: Object.fromEntries(Object.keys(NORMAL_ACTIVE_FRAMES).map((name) => [name, { $ref: "#/$defs/normalAttack" }])),
  },
};

const assert = (condition, path, problem) => {
  if (!condition) throw new Error(`${path}: ${problem}`);
};

/** Small closed validator for precisely the schema vocabulary used above. */
function validate(value, schema, path) {
  if (schema.$ref) {
    const definition = NORMAL_ATTACK_DEFINITIONS[schema.$ref.replace("#/$defs/", "")];
    assert(definition, path, "unknown internal schema reference");
    return validate(value, definition, path);
  }
  if (schema.enum) assert(schema.enum.includes(value), path, `expected ${schema.enum.join(" | ")}`);
  switch (schema.type) {
    case "object": {
      assert(value !== null && typeof value === "object" && !Array.isArray(value), path, "expected an object");
      const keys = Object.keys(value);
      assert(keys.length >= (schema.minProperties ?? 0), path, "at least one authored field is required");
      for (const key of schema.required ?? []) assert(Object.hasOwn(value, key), `${path}.${key}`, "required field is missing");
      for (const key of keys) {
        assert(Object.hasOwn(schema.properties, key), `${path}.${key}`, "unknown field");
        validate(value[key], schema.properties[key], `${path}.${key}`);
      }
      for (const [key, required] of Object.entries(schema.dependentRequired ?? {})) {
        if (Object.hasOwn(value, key)) {
          for (const dependency of required) assert(Object.hasOwn(value, dependency), `${path}.${dependency}`, `required with ${key}`);
        }
      }
      break;
    }
    case "array":
      assert(Array.isArray(value), path, "expected an array");
      assert(value.length >= schema.minItems && value.length <= schema.maxItems, path, `expected ${schema.minItems}–${schema.maxItems} entries`);
      value.forEach((entry, index) => validate(entry, schema.items, `${path}[${index}]`));
      break;
    case "number":
    case "integer":
      assert(typeof value === "number" && Number.isFinite(value), path, "expected a finite number");
      if (schema.type === "integer") assert(Number.isInteger(value), path, "expected an integer");
      if (schema.minimum !== undefined) assert(value >= schema.minimum, path, `must be >= ${schema.minimum}`);
      if (schema.maximum !== undefined) assert(value <= schema.maximum, path, `must be <= ${schema.maximum}`);
      break;
    case "string":
      assert(typeof value === "string", path, "expected a string");
      if (schema.pattern) assert(new RegExp(schema.pattern).test(value), path, "must contain non-whitespace text");
      break;
    case "boolean":
      assert(typeof value === "boolean", path, "expected a boolean");
      break;
  }
}

/** Frames are zero-based within the move's active phase; both ends are inclusive. */
export function validateNormalOverrides(value, path = "gameplay.normals") {
  validate(value, NORMAL_ATTACK_DEFINITIONS.normalOverrides, path);
  for (const [name, move] of Object.entries(value)) {
    const active = move.active ?? NORMAL_ACTIVE_FRAMES[name];
    for (const [index, hitbox] of (move.hitboxes ?? []).entries()) {
      const at = `${path}.${name}.hitboxes[${index}]`;
      const start = hitbox.activeStart ?? 0;
      const end = hitbox.activeEnd ?? active - 1;
      assert(start <= end, at, "activeStart must not exceed activeEnd");
      assert(end < active, at, `hitbox must fit inside ${active} active frames`);
    }
  }
}
