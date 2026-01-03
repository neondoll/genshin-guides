import type { CharacterRecommendations } from "../types";
import { ArtifactSetNames } from "../../artifact-sets";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";
import { Stats } from "@/types/base.types";
import { formatPercent } from "@/utils/format";

export default {
  artifacts: {
    sets: [
      { type: "complete", name: ArtifactSetNames.TENACITY_OF_THE_MILLELITH },
      { type: "complete", name: ArtifactSetNames.MAIDEN_BELOVED },
      { type: "complete", name: ArtifactSetNames.FLOWER_OF_PARADISE_LOST },
      { type: "complete", name: ArtifactSetNames.GILDED_DREAMS },
    ],
    stats: {
      sands: [
        { name: Stats.ELEMENTAL_MASTERY, notes: [formatPercent(0.894)] },
        { name: Stats.HP_PERCENTAGE, notes: [formatPercent(0.073)] },
        { name: Stats.ATK_PERCENTAGE, notes: [formatPercent(0.016)] },
      ],
      goblet: [
        { name: Stats.ELEMENTAL_MASTERY, notes: [formatPercent(0.810)] },
        { name: Stats.HP_PERCENTAGE, notes: [formatPercent(0.114)] },
        { name: Stats.ELECTRO_DMG_BONUS, notes: [formatPercent(0.044)] },
      ],
      circlet: [
        { name: Stats.ELEMENTAL_MASTERY, notes: [formatPercent(0.807)] },
        { name: Stats.HEALING_BONUS, notes: [formatPercent(0.071)] },
        { name: Stats.HP_PERCENTAGE, notes: [formatPercent(0.056)] },
      ],
      additional: [
        { name: Stats.ELEMENTAL_MASTERY, notes: ["Приоритетно", "от 700"] },
        { name: Stats.HP_PERCENTAGE, notes: ["от 30000"] },
      ],
    },
  },
  keyConstellations: [2],
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SURVIVABILITY],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: 8 },
    { type: "combat3", priority: "Не качаем", referenceLevel: 1 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_2,
  ],
  weapons: [
    { name: WeaponNames.FREEDOM_SWORN, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.TOUKABOU_SHIGURE, best: "Лучшее эвентовое оружие", r: 5 },
    { name: WeaponNames.IRON_STING, best: "Лучшее доступное оружие", r: 5 },
  ],
} as CharacterRecommendations;
