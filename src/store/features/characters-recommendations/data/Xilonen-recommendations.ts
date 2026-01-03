import type { CharacterRecommendations } from "../types";
import { ArtifactSetNames } from "../../artifact-sets";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";
import { Stats } from "@/types/base.types";

export default {
  artifacts: {
    sets: [{ type: "complete", name: ArtifactSetNames.SCROLL_OF_THE_HERO_OF_CINDER_CITY }],
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
  signatureWeaponNames: [WeaponNames.PEAK_PATROL_SONG],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: 8 },
  ],
  videoSourceIds: [
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [
    { name: WeaponNames.PEAK_PATROL_SONG, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.FAVONIUS_SWORD, best: "Лучшее доступное оружие", r: 5 },
    { name: WeaponNames.FLUTE_OF_EZPITZAL, best: "Лучшее крафтовое оружие", r: 5 },
  ],
} as CharacterRecommendations;
