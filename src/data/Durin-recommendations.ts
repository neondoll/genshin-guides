import { CharacterRoleIds, VideoSourceIds, WeaponNames } from "@/types/base.types";
import type { CharacterRecommendations } from "@/types/recommendations.types";

export default {
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS, CharacterRoleIds.SUPPORT],
  signatureWeaponNames: [WeaponNames.ATHAME_ARTIS],
  talents: [
    { type: "combat1", priority: "По необходимости", referenceLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", referenceLevel: 9 },
    { type: "combat3", priority: "В первую очередь", referenceLevel: 10 },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_DURIN_IN_6_2],
  weapons: [
    { name: WeaponNames.ATHAME_ARTIS, best: "Лучшее оружие" },
  ],
} as CharacterRecommendations;