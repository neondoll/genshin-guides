import { CharacterRoleIds } from "@/types/character-roles";
import { CharacterIds } from "@/types/characters";
import type { CharacterRecommendations } from "@/types/characters-recommendations";
import { VideoSourceIds } from "@/types/video-sources";
import { WeaponIds } from "@/types/weapons";

export default {
  id: CharacterIds.YUMEMIZUKI_MIZUKI,
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.SUPPORT, CharacterRoleIds.SURVIVABILITY],
  signatureWeaponIds: [WeaponIds.SUNNY_MORNING_SLEEP_IN],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1 },
    { type: "combat2", priority: "В первую очередь", recommendedLevel: 6 },
    { type: "combat3", priority: "Во вторую очередь", recommendedLevel: 6 },
  ],
  videoSourceIds: [VideoSourceIds.TALENT_GAINS_ANEMO],
} as CharacterRecommendations;
