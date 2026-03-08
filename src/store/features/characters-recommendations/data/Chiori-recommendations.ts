import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  constellationOrSignatureWeapon: "С1",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS],
  signatureWeaponIds: [WeaponIds.URAKU_MISUGIRI],
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
    { id: WeaponIds.URAKU_MISUGIRI, best: "Лучшее решение", r: 1 },
    { id: WeaponIds.CINNABAR_SPINDLE, best: "Лучшее эвентовое решение", r: 5 },
    { id: WeaponIds.FESTERING_DESIRE, best: "Лучшее эвентовое решение", r: 5 },
    { id: WeaponIds.HARBINGER_OF_DAWN, best: "Лучшее доступное решение", r: 5 },
    { id: WeaponIds.FLUTE_OF_EZPITZAL, r: 5 },
  ],
} as CharacterRecommendations;
