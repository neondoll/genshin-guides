import type { CharacterRecommendations } from "../types";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";

export default {
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SUPPORT],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", referenceLevel: 6 },
    { type: "combat3", priority: "В первую очередь", referenceLevel: 6 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
  ],
  weapons: [
    { name: WeaponNames.THRILLING_TALES_OF_DRAGON_SLAYERS, best: "Лучшее оружие", r: 5 },
    { name: WeaponNames.HAKUSHIN_RING, best: "Лучшее оружие", r: 5 },
    { name: WeaponNames.A_THOUSAND_FLOATING_DREAMS, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.SACRIFICIAL_FRAGMENTS, r: 5 },
    { name: WeaponNames.FAVONIUS_CODEX, r: 5 },
  ],
} as CharacterRecommendations;
