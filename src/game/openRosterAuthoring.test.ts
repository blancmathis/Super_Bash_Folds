import { describe, expect, it, vi } from "vitest";

vi.mock("./generated/openFighterRegistry", async (importOriginal) => {
  const original = await importOriginal<typeof import("./generated/openFighterRegistry")>();
  return {
    ...original,
    OPEN_FIGHTER_PACKS: original.OPEN_FIGHTER_PACKS.map((pack, index) => index === 0 ? {
      ...pack,
      gameplay: { ...pack.gameplay, normals: { jab: { label: "Pack-authored jab", damage: 19, startup: 12, hitboxes: [{ offset: { x: 28, y: 5 }, radius: 12 }] } } },
    } : pack),
  };
});

import { OPEN_ROSTER } from "./openRoster";
import { OPEN_FIGHTER_PACKS } from "./generated/openFighterRegistry";

describe("normal authoring registry integration", () => {
  it("threads generated gameplay.normals through the actual roster constructor", () => {
    const id = OPEN_FIGHTER_PACKS[0]!.id;
    expect(OPEN_ROSTER[id].attacks.jab).toMatchObject({ label: "Pack-authored jab", damage: 19, startup: 12, hitboxes: [{ offset: { x: 28, y: 5 }, radius: 12 }] });
    expect(OPEN_ROSTER[id].attacks["neutral-special"].label).toBe(OPEN_FIGHTER_PACKS[0]!.gameplay.specials["neutral-special"].label);
  });
});
