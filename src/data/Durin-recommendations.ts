import { CharacterNames, CharacterRoleIds, VideoSourceIds, WeaponNames } from "@/types/base.types";
import type { CharacterRecommendations } from "@/types/recommendations.types";

export default {
  detachments: [
    {
      description: `${CharacterNames.DURIN} как основной дамагер (реакция Пар)`,
      template: [CharacterNames.DURIN, "Гидро персонаж", "Полезный персонаж", CharacterNames.BENNETT],
      variants: [
        [CharacterNames.DURIN, CharacterNames.MONA, CharacterNames.FURINA, CharacterNames.BENNETT],
        [CharacterNames.DURIN, CharacterNames.XINGQIU, CharacterNames.FURINA, CharacterNames.BENNETT],
        [CharacterNames.DURIN, CharacterNames.XINGQIU, CharacterNames.FISCHL, CharacterNames.BENNETT],
      ],
    },
    {
      description: `${CharacterNames.DURIN} как основной дамагер (реакция Перегрузка)`,
      template: [CharacterNames.DURIN, CharacterNames.CHEVREUSE, CharacterNames.BENNETT, "Электро персонаж"],
      variants: [[CharacterNames.DURIN, CharacterNames.CHEVREUSE, CharacterNames.BENNETT, CharacterNames.FISCHL]],
    },
    {
      description: `${CharacterNames.DURIN} как основной дамагер из кармана`,
      template: [CharacterNames.DURIN, CharacterNames.MONA, "Полезный персонаж", "Полезный персонаж"],
    }
  ],
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