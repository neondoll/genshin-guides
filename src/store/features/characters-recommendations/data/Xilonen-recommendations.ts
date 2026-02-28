import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [{ ids: [ArtifactSetIds.SCROLL_OF_THE_HERO_OF_CINDER_CITY] }],
    stats: {
      sands: [{ name: Stats.DEF_PERCENTAGE }, { name: Stats.ENERGY_RECHARGE }],
      goblet: [{ name: Stats.DEF_PERCENTAGE }],
      circlet: [{ name: Stats.DEF_PERCENTAGE }, { name: Stats.CRIT_RATE }, { name: Stats.HEALING_BONUS }],
      additional: [
        { name: Stats.DEF_PERCENTAGE },
        { name: Stats.ENERGY_RECHARGE, notes: ["~160% ВЭ для стабильной ульты"] },
      ],
    },
  },
  constellationOrSignatureWeapon: "С1 < Сигна < С2",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SUPPORT, CharacterRoleIds.SURVIVABILITY],
  signatureWeaponIds: [WeaponIds.PEAK_PATROL_SONG],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1 },
    { type: "combat2", priority: "В первую очередь", recommendedLevel: "9 - 10" },
    { type: "combat3", priority: "Во вторую очередь", recommendedLevel: "1 - 8" },
  ],
  videoSourceIds: [
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.TALENT_GAINS_GEO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [
    { id: WeaponIds.PEAK_PATROL_SONG, best: "Лучшее оружие", r: 1 },
    { id: WeaponIds.FAVONIUS_SWORD, best: "Лучшее доступное оружие", r: 5 },
    { id: WeaponIds.FLUTE_OF_EZPITZAL, best: "Лучшее крафтовое оружие", r: 5 },
  ],
} as CharacterRecommendations;
