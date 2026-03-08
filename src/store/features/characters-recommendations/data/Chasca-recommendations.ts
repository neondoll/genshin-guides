import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  constellationOrSignatureWeapon: "Сигна",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponIds: [WeaponIds.ASTRAL_VULTURES_CRIMSON_PLUMAGE],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1 },
    { type: "combat2", priority: "В первую очередь", recommendedLevel: 10 },
    { type: "combat3", priority: "Во вторую очередь", recommendedLevel: 8 },
  ],
  videoSourceIds: [
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.GUIDE_TO_CHASCA_IN_5_8,
    VideoSourceIds.TALENT_GAINS_ANEMO,
  ],
  weapons: [
    { id: WeaponIds.ASTRAL_VULTURES_CRIMSON_PLUMAGE, best: "Лучшее решение", r: 1 },
    { id: WeaponIds.CHAIN_BREAKER, best: "Лучшее доступное решение", r: 5 },
  ],
} as CharacterRecommendations;
