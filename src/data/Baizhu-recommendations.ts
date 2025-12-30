import { CharacterRoleIds } from "@/store/features/character-roles";
import { WeaponNames } from "@/store/features/weapons";
import { VideoSourceIds } from "@/types/base.types";
import type { CharacterRecommendations } from "@/types/recommendations.types";

export default {
  constellationOrSignatureWeapon: "С1",
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SUPPORT, CharacterRoleIds.SURVIVABILITY],
  signatureWeaponNames: [WeaponNames.JADEFALLS_SPLENDOR],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", referenceLevel: 8 },
    { type: "combat3", priority: "В первую очередь", referenceLevel: 8 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_2,
  ],
  weapons: [
    { name: WeaponNames.FAVONIUS_CODEX, best: "Лучшее оружие", r: 5 },
    { name: WeaponNames.HAKUSHIN_RING, r: 5 },
    { name: WeaponNames.JADEFALLS_SPLENDOR, r: 1 },
    { name: WeaponNames.THRILLING_TALES_OF_DRAGON_SLAYERS, best: "Лучшее доступное оружие", r: 5 },
    { name: WeaponNames.PROTOTYPE_AMBER, r: 5 },
  ],
} as CharacterRecommendations;
