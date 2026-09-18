import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { buildStandardAttacks, type FighterMoveProfile, type NormalAttackOverrides } from "./fighterBuilders";
import { competitiveHitboxesForMove } from "./engine";
import { OPEN_FIGHTER_PACKS } from "./generated/openFighterRegistry";
import { NORMAL_ACTIVE_FRAMES } from "../../scripts/normal_attack_contract.mjs";

const profile = (): FighterMoveProfile => ({
  fighterName: "Test author", power: 1, speed: 1, reach: 1,
  specials: {
    "neutral-special": { label: "Neutral", damage: 7 },
    "side-special": { label: "Side", damage: 9 },
    "up-special": { label: "Up", damage: 8 },
    "down-special": { label: "Down", damage: 6 },
  },
});

describe("authored normal attacks", () => {
  it.each(OPEN_FIGHTER_PACKS)("preserves the full baseline attack family for $id", ({ id, identity, gameplay }) => {
    // These hashes were computed from the original builder at the recorded commit,
    // not from the new implementation. A change requires an explicit balance review.
    const fixture = JSON.parse(readFileSync("src/game/fixtures/legacyAttackHashes.json", "utf8"));
    const actual = buildStandardAttacks({ ...gameplay, fighterName: identity.displayName } as FighterMoveProfile);
    expect(createHash("sha256").update(JSON.stringify(actual)).digest("hex")).toBe(fixture.hashes[id]);
  });
  it("keeps inherited active windows aligned with the pack validator", () => {
    const attacks = buildStandardAttacks(profile());
    for (const [name, active] of Object.entries(NORMAL_ACTIVE_FRAMES)) {
      expect(attacks[name as keyof typeof attacks].active).toBe(active);
    }
  });
  it("applies absolute author values after global scaling, not twice", () => {
    const attacks = buildStandardAttacks({ ...profile(), power: 2, speed: 2, reach: 2,
      normals: { jab: { label: "Authored palm", startup: 9, damage: 10, radius: 16, offset: { x: 48, y: 7 } } },
    });
    expect(attacks.jab).toMatchObject({ label: "Authored palm", startup: 9, damage: 10, radius: 16, offset: { x: 48, y: 7 }, hitstop: 5, shieldDamage: 9.5 });
    expect(attacks.jab.recovery).toBe(5);
  });
  it("preserves explicit dependent values and the neutral zero values", () => {
    const attacks = buildStandardAttacks({ ...profile(), normals: { jab: {
      damage: 0, baseKnockback: 20, hitstop: 0, hitstun: 0, shieldDamage: 0, recovery: 0,
    } } });
    expect(attacks.jab).toMatchObject({ damage: 0, hitstop: 0, hitstun: 0, shieldDamage: 0, recovery: 0 });
  });
  it("recomputes inherited dependent fields only when their cause is authored", () => {
    const attacks = buildStandardAttacks({ ...profile(), normals: { jab: { damage: 14, baseKnockback: 80 } } });
    expect(attacks.jab).toMatchObject({ hitstop: 6, hitstun: 28, shieldDamage: 12.5 });
  });
  it("keeps unspecified normals and all specials untouched", () => {
    const before = buildStandardAttacks(profile());
    const after = buildStandardAttacks({ ...profile(), normals: { jab: { damage: 11 } } });
    for (const name of Object.keys(before) as (keyof typeof before)[]) {
      if (name !== "jab") expect(after[name]).toEqual(before[name]);
    }
  });
  it("does not share mutable author data between fighters", () => {
    const normals: NormalAttackOverrides = { jab: { offset: { x: 30, y: 4 }, movement: { x: 2, y: 0 }, airMovement: { x: 1, y: 0 }, hitboxes: [
      { offset: { x: 10, y: 0 }, endOffset: { x: 20, y: 0 }, radius: 8, activeEnd: 1 },
    ] } };
    const first = buildStandardAttacks({ ...profile(), normals });
    const second = buildStandardAttacks({ ...profile(), normals });
    first.jab.offset.x = 999;
    first.jab.movement!.x = 999;
    first.jab.airMovement!.x = 999;
    first.jab.hitboxes![0]!.offset.x = 999;
    first.jab.hitboxes![0]!.endOffset!.x = 999;
    expect(second.jab.offset.x).toBe(30);
    expect(second.jab.movement!.x).toBe(2);
    expect(second.jab.airMovement!.x).toBe(1);
    expect(second.jab.hitboxes![0]!.offset.x).toBe(10);
    expect(second.jab.hitboxes![0]!.endOffset!.x).toBe(20);
    expect(normals.jab!.offset!.x).toBe(30);
    expect(normals.jab!.hitboxes![0]!.offset.x).toBe(10);
  });
  it("delivers authored chains to the real engine with inclusive active windows", () => {
    const jab = buildStandardAttacks({ ...profile(), normals: { jab: { active: 5, hitboxes: [
      { offset: { x: 10, y: 0 }, endOffset: { x: 30, y: 10 }, radius: 12, activeStart: 1, activeEnd: 3, kind: "sweet" },
    ] } } }).jab;
    expect(competitiveHitboxesForMove("jab", jab, 0)).toEqual([]);
    expect(competitiveHitboxesForMove("jab", jab, 1)[0]?.offset).toEqual({ x: 10, y: 0 });
    expect(competitiveHitboxesForMove("jab", jab, 2)[0]).toMatchObject({ offset: { x: 20, y: 5 }, radius: 12, kind: "sweet" });
    expect(competitiveHitboxesForMove("jab", jab, 3)[0]?.offset).toEqual({ x: 30, y: 10 });
    expect(competitiveHitboxesForMove("jab", jab, 4)).toEqual([]);
  });
  it.each(["rivo", "bront"])("builds all thirteen %s normals without adding a roster entry", (name) => {
    const normals = JSON.parse(readFileSync(`docs/design/prototypes/${name}.normals.json`, "utf8")) as NormalAttackOverrides;
    const attacks = buildStandardAttacks({ ...profile(), normals });
    for (const [move, authored] of Object.entries(normals)) {
      expect(attacks[move as keyof typeof attacks]).toMatchObject(authored);
    }
    expect(OPEN_FIGHTER_PACKS.some((pack) => (pack.id as string) === name)).toBe(false);
  });
});
