import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  constellationOrSignatureWeapon: "Сигна",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS],
  signatureWeaponIds: [WeaponIds.LUMIDOUCE_ELEGY],
  videoSourceIds: [
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [
    { id: WeaponIds.LUMIDOUCE_ELEGY, best: "Лучшее решение", r: 1 },
    { id: WeaponIds.BLACKCLIFF_POLE, r: 5 },
    { id: WeaponIds.FAVONIUS_LANCE, best: "Лучшее доступное решение", r: 5 },
  ],
} as CharacterRecommendations;
