import type { CharacterRecommendations } from "../types";
import { ArtifactSetNames } from "../../artifact-sets";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";
import { Stats } from "@/types/base.types";

export default {
  artifacts: {
    sets: [
      { type: "complete", name: ArtifactSetNames.SILKEN_MOONS_SERENADE, best: true },
      { type: "complete", name: ArtifactSetNames.NOBLESSE_OBLIGE },
      { type: "complete", name: ArtifactSetNames.INSTRUCTOR },
      { type: "complete", name: ArtifactSetNames.GILDED_DREAMS },
    ],
    stats: {
      sands: [{ name: Stats.ENERGY_RECHARGE }, { name: Stats.ELEMENTAL_MASTERY }],
      goblet: [{ name: Stats.ELEMENTAL_MASTERY }],
      circlet: [{ name: Stats.ELEMENTAL_MASTERY }],
      additional: [
        { name: Stats.ENERGY_RECHARGE, notes: ["от 160%", "~200%"] },
        { name: Stats.ELEMENTAL_MASTERY, notes: ["от 500"] },
      ],
    },
  },
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS],
  talents: [
    { type: "combat1", priority: "При необходимости" },
    { type: "combat2", priority: "Во вторую очередь" },
    { type: "combat3", priority: "В первую очередь" },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_AINO_IN_6_0],
  weapons: [
    { name: WeaponNames.FLAME_FORGED_INSIGHT },
    { name: WeaponNames.MASTER_KEY },
    { name: WeaponNames.MAKHAIRA_AQUAMARINE },
    { name: WeaponNames.FAVONIUS_GREATSWORD },
    { name: WeaponNames.SACRIFICIAL_GREATSWORD },
  ],
} as CharacterRecommendations;
