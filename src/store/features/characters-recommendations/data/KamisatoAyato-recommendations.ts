import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  constellationOrSignatureWeapon: "Сигна",
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponIds: [WeaponIds.HARAN_GEPPAKU_FUTSU],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1, overallLevel: 1 },
    { type: "combat2", priority: "В первую очередь", recommendedLevel: "8 - 10", overallLevel: 10 },
    { type: "combat3", priority: "Во вторую очередь", recommendedLevel: "8 - 10", overallLevel: 9 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.TALENT_GAINS_HYDRO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_2,
  ],
  weapons: [
    { id: WeaponIds.HARAN_GEPPAKU_FUTSU, best: "Лучшее решение", r: 1 },
    { id: WeaponIds.FINALE_OF_THE_DEEP, best: "Лучшее доступное решение", r: 5 },
    { id: WeaponIds.AMENOMA_KAGEUCHI, r: 5 },
    { id: WeaponIds.BLACKCLIFF_LONGSWORD, best: "Лучшее доступное решение (когда работает на 3-х стаках)", r: 5 },
  ],
} as CharacterRecommendations;
