import { CharacterRoleIds, VideoSourceIds, WeaponNames } from "@/types/base.types";
import type { CharacterRecommendations } from "@/types/recommendations.types";

export default {
  constellationOrSignatureWeapon: "Сигна",
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponNames: [WeaponNames.HARAN_GEPPAKU_FUTSU],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: 8 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_2,
  ],
  weapons: [
    { name: WeaponNames.HARAN_GEPPAKU_FUTSU, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.FINALE_OF_THE_DEEP, best: "Лучшее доступное оружие", r: 5 },
    { name: WeaponNames.AMENOMA_KAGEUCHI, r: 5 },
    { name: WeaponNames.BLACKCLIFF_LONGSWORD, best: "Лучшее доступное оружие (когда работает на 3-х стаках)", r: 5 },
  ],
} as CharacterRecommendations;
