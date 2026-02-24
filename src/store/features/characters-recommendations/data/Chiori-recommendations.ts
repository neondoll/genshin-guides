import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponNames } from "@/types/weapons.types";

export default {
  constellationOrSignatureWeapon: "С1",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS],
  signatureWeaponNames: [WeaponNames.URAKU_MISUGIRI],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1 },
    { type: "combat2", priority: "В первую очередь", recommendedLevel: "9 - 10" },
    { type: "combat3", priority: "Во вторую очередь", recommendedLevel: "6 - 8" },
  ],
  videoSourceIds: [
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.TALENT_GAINS_GEO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [
    { name: WeaponNames.URAKU_MISUGIRI, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.CINNABAR_SPINDLE, best: "Лучшее эвентовое оружие", r: 5 },
    { name: WeaponNames.FESTERING_DESIRE, best: "Лучшее эвентовое оружие", r: 5 },
    { name: WeaponNames.HARBINGER_OF_DAWN, best: "Лучшее доступное оружие", r: 5 },
    { name: WeaponNames.FLUTE_OF_EZPITZAL, r: 5 },
  ],
} as CharacterRecommendations;
