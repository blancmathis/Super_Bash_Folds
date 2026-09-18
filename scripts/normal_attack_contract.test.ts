import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { NORMAL_ATTACK_DEFINITIONS, validateNormalOverrides } from "./normal_attack_contract.mjs";

const valid = () => ({ jab: { active: 4, damage: 5, hitboxes: [{ offset: { x: 10, y: 0 }, endOffset: { x: 40, y: 5 }, radius: 10, activeStart: 1, activeEnd: 3 }] } });

describe("normal attack data contract", () => {
  it("keeps editor definitions identical to the CLI contract", () => {
    const schema = JSON.parse(readFileSync("fighters/fighter.schema.json", "utf8"));
    for (const [name, definition] of Object.entries(NORMAL_ATTACK_DEFINITIONS)) {
      expect(schema.$defs[name]).toEqual(definition);
    }
    expect(schema.properties.gameplay.properties.normals).toEqual({ $ref: "#/$defs/normalOverrides" });
  });
  it("accepts authored chains and an optional empty family", () => {
    expect(() => validateNormalOverrides(valid())).not.toThrow();
    expect(() => validateNormalOverrides({})).not.toThrow();
  });
  it("accepts zero recovery, zero damage, and explicitly disabled charging", () => {
    expect(() => validateNormalOverrides({ jab: { recovery: 0, damage: 0, chargeable: false } })).not.toThrow();
  });
  it.each([
    ["null family", null], ["array family", []], ["unknown move", { kick: { damage: 3 } }],
    ["special override", { "up-special": { damage: 3 } }], ["empty move", { jab: {} }],
    ["null move", { jab: null }], ["executable field", { jab: { onHit: "code" } }],
    ["unsupported projectile", { jab: { projectile: {} } }], ["nonfinite", { jab: { damage: Infinity } }],
    ["NaN", { jab: { damage: NaN } }], ["negative damage", { jab: { damage: -1 } }],
    ["fractional frames", { jab: { startup: 2.5 } }], ["zero active", { jab: { active: 0 } }],
    ["blank label", { jab: { label: "  " } }], ["missing vector axis", { jab: { offset: { x: 1 } } }],
    ["unknown vector field", { jab: { offset: { x: 1, y: 2, z: 3 } } }],
    ["empty chain", { jab: { hitboxes: [] } }], ["null hitbox", { jab: { hitboxes: [null] } }],
    ["radius silently clamped by engine", { jab: { hitboxes: [{ offset: { x: 0, y: 0 }, radius: 2 }] } }],
    ["missing interpolation end", { jab: { hitboxes: [{ offset: { x: 0, y: 0 }, endOffset: { x: 1, y: 1 }, radius: 8 }] } }],
    ["invalid kind", { jab: { hitboxes: [{ offset: { x: 0, y: 0 }, radius: 8, kind: "ghost" }] } }],
    ["reversed active window", { jab: { active: 5, hitboxes: [{ offset: { x: 0, y: 0 }, radius: 8, activeStart: 3, activeEnd: 2 }] } }],
    ["outside inherited active phase", { jab: { hitboxes: [{ offset: { x: 0, y: 0 }, radius: 8, activeEnd: 2 }] } }],
    ["null optional vector", { jab: { movement: null } }],
    ["wrong boolean", { jab: { chargeable: "yes" } }],
    ["prototype key", JSON.parse('{"__proto__":{"damage":3}}')],
  ])("rejects %s", (_label, value) => {
    expect(() => validateNormalOverrides(value)).toThrow(/gameplay\.normals/);
  });
  it("caps hitbox count", () => {
    expect(() => validateNormalOverrides({ jab: { hitboxes: Array.from({ length: 17 }, () => ({ offset: { x: 0, y: 0 }, radius: 8 })) } })).toThrow(/1–16/);
  });
  it.each(["rivo", "bront"])("validates the %s design prototype without publishing it", (name) => {
    const value = JSON.parse(readFileSync(`docs/design/prototypes/${name}.normals.json`, "utf8"));
    expect(Object.keys(value)).toHaveLength(13);
    expect(() => validateNormalOverrides(value)).not.toThrow();
  });
});
