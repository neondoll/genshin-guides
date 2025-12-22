import { CharacterRoleIds, VideoSourceIds, WeaponNames } from "@/types/base.types";
import type { CharacterRecommendations } from "@/types/recommendations.types";

export default {
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: 6 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
  ],
  weapons: [
    { name: WeaponNames.URAKU_MISUGIRI, best: "Лучшее оружие", r: 1, percent: 1.241 },
    { name: WeaponNames.PRIMORDIAL_JADE_CUTTER, r: 1 },
    { name: WeaponNames.CINNABAR_SPINDLE, best: "Лучшее эвентовое оружие", r: 5, percent: 1.229 },
    { name: WeaponNames.FESTERING_DESIRE, best: "Лучшее эвентовое оружие", r: 5 },
    { name: WeaponNames.HARBINGER_OF_DAWN, best: "Лучшее доступное оружие", r: 5, percent: 1.000 },
    { name: WeaponNames.FLUTE_OF_EZPITZAL, r: 5 },
  ],
} as CharacterRecommendations;
