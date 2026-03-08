import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  constellationOrSignatureWeapon: "Сигна",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SUPPORT, CharacterRoleIds.SURVIVABILITY],
  signatureWeaponIds: [WeaponIds.CRANES_ECHOING_CALL],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1 },
    { type: "combat2", priority: "Не качаем", recommendedLevel: 1 },
    { type: "combat3", priority: "В первую очередь", recommendedLevel: 6 },
  ],
  videoSourceIds: [
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.TALENT_GAINS_ANEMO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [
    { id: WeaponIds.CRANES_ECHOING_CALL, best: "Лучшее решение", r: 1 },
    { id: WeaponIds.OATHSWORN_EYE, best: "Лучшее эвентовое решение", r: 5 },
    { id: WeaponIds.FAVONIUS_CODEX, best: "Лучшее доступное решение", r: 5 },
  ],
} as CharacterRecommendations;
