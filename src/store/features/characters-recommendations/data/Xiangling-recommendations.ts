import type { CharacterRecommendations } from "../types";
import { ArtifactSetNames } from "../../artifact-sets";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";
import { Stats } from "@/types/base.types";

export default {
  artifacts: {
    sets: {
      Пар: [
        { type: "complete", name: ArtifactSetNames.EMBLEM_OF_SEVERED_FATE, best: true, percent: 1.0000 },
        { type: "complete", name: ArtifactSetNames.CRIMSON_WITCH_OF_FLAMES, percent: 0.9954 },
        {
          type: "combined",
          names: [ArtifactSetNames.CRIMSON_WITCH_OF_FLAMES, ArtifactSetNames.EMBLEM_OF_SEVERED_FATE],
          percent: 0.9277,
        },
      ],
      Перегрузка: [
        { type: "complete", name: ArtifactSetNames.EMBLEM_OF_SEVERED_FATE, best: true, percent: 1.0000 },
        { type: "complete", name: ArtifactSetNames.CRIMSON_WITCH_OF_FLAMES, percent: 0.9595 },
        {
          type: "combined",
          names: [ArtifactSetNames.CRIMSON_WITCH_OF_FLAMES, ArtifactSetNames.EMBLEM_OF_SEVERED_FATE],
          percent: 0.9408,
        },
      ],
    },
    stats: {
      sands: [
        { name: Stats.ENERGY_RECHARGE, notes: ["Ставим если без этого показателя в часах мы не закрываем требования"] },
        {
          name: Stats.ATK_PERCENTAGE,
          notes: ["Ставим если без ВЭ в часах мы закрываем требования для отрядов без Пара"],
        },
        {
          name: Stats.ELEMENTAL_MASTERY,
          notes: ["Ставим если без ВЭ в часах мы закрываем требования для отрядов с Паром"],
        },
      ],
      goblet: [{ name: Stats.PYRO_DMG_BONUS }],
      circlet: [{ name: Stats.CRIT_RATE }, { name: Stats.CRIT_DMG }],
      additional: [
        { name: Stats.CRIT_RATE },
        { name: Stats.CRIT_DMG },
        { name: Stats.ATK_PERCENTAGE },
        { name: Stats.ENERGY_RECHARGE, notes: ["Приоритетно"] },
        { name: Stats.ELEMENTAL_MASTERY, notes: ["Если играем в Паре"] },
      ],
    },
  },
  keyConstellations: [3, 4],
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", referenceLevel: 9 },
    { type: "combat3", priority: "В первую очередь", referenceLevel: 10 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.GUIDE_TO_XIANGLING_IN_6_0,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
    VideoSourceIds.XIANGLING_ELEMENTAL_BURST_GUIDE,
  ],
  weapons: {
    Пар: [
      { name: WeaponNames.STAFF_OF_THE_SCARLET_SANDS, best: "Лучшее оружие", percent: 1.07 },
      { name: WeaponNames.BALLAD_OF_THE_FJORDS, r: 5, percent: 1.06 },
      { name: WeaponNames.WAVEBREAKERS_FIN, r: 5, percent: 1.02 },
      { name: WeaponNames.FRACTURED_HALO, percent: 1.02 },
      { name: WeaponNames.STAFF_OF_HOMA, percent: 1.01 },
      { name: WeaponNames.ENGULFING_LIGHTNING, percent: 1.01 },
      { name: WeaponNames.DEATHMATCH, r: 5, percent: 1.01 },
      { name: WeaponNames.LUMIDOUCE_ELEGY, percent: 1.00 },
      { name: WeaponNames.THE_CATCH, best: "Лучшее доступное оружие", r: 5, percent: 1.00 },
      { name: WeaponNames.SYMPHONIST_OF_SCENTS, percent: 0.99 },
      { name: WeaponNames.BALLAD_OF_THE_FJORDS, r: 1, percent: 0.99 },
      { name: WeaponNames.SKYWARD_SPINE, percent: 0.98 },
      { name: WeaponNames.DRAGONS_BANE, r: 5, percent: 0.97 },
      { name: WeaponNames.DEATHMATCH, r: 1, percent: 0.97 },
      { name: WeaponNames.PRIMORDIAL_JADE_WINGED_SPEAR, percent: 0.97 },
      { name: WeaponNames.CRIMSON_MOONS_SEMBLANCE, percent: 0.95 },
      { name: WeaponNames.BLOODSOAKED_RUINS, percent: 0.95 },
      { name: WeaponNames.CALAMITY_QUELLER, percent: 0.95 },
      { name: WeaponNames.WAVEBREAKERS_FIN, r: 1, percent: 0.93 },
      { name: WeaponNames.MISSIVE_WINDSPEAR, percent: 0.93 },
      { name: WeaponNames.VORTEX_VANQUISHER, percent: 0.92 },
      { name: WeaponNames.BLACKCLIFF_POLE, postfix: "0 стаков", percent: 0.90 },
      { name: WeaponNames.FAVONIUS_LANCE, percent: 0.89 },
      { name: WeaponNames.TAMAYURATEI_NO_OHANASHI, percent: 0.89 },
    ],
    Перегрузка: [
      { name: WeaponNames.STAFF_OF_THE_SCARLET_SANDS, best: "Лучшее оружие", percent: 1.06 },
      { name: WeaponNames.LUMIDOUCE_ELEGY, percent: 1.05 },
      { name: WeaponNames.FRACTURED_HALO, percent: 1.05 },
      { name: WeaponNames.STAFF_OF_HOMA, percent: 1.05 },
      { name: WeaponNames.SYMPHONIST_OF_SCENTS, percent: 1.04 },
      { name: WeaponNames.DEATHMATCH, r: 5, percent: 1.03 },
      { name: WeaponNames.PRIMORDIAL_JADE_WINGED_SPEAR, percent: 1.03 },
      { name: WeaponNames.WAVEBREAKERS_FIN, r: 5, percent: 1.02 },
      { name: WeaponNames.ENGULFING_LIGHTNING, percent: 1.02 },
      { name: WeaponNames.SKYWARD_SPINE, percent: 1.01 },
      { name: WeaponNames.THE_CATCH, best: "Лучшее доступное оружие", r: 5, percent: 1.00 },
      { name: WeaponNames.CALAMITY_QUELLER, percent: 0.99 },
      { name: WeaponNames.DEATHMATCH, r: 1, percent: 0.99 },
      { name: WeaponNames.CRIMSON_MOONS_SEMBLANCE, percent: 0.98 },
      { name: WeaponNames.BLOODSOAKED_RUINS, percent: 0.98 },
      { name: WeaponNames.VORTEX_VANQUISHER, percent: 0.95 },
      { name: WeaponNames.WAVEBREAKERS_FIN, r: 1, percent: 0.94 },
      { name: WeaponNames.BALLAD_OF_THE_FJORDS, r: 5, percent: 0.93 },
      { name: WeaponNames.BALLAD_OF_THE_FJORDS, r: 1, percent: 0.92 },
      { name: WeaponNames.BLACKCLIFF_POLE, postfix: "0 стаков", percent: 0.92 },
      { name: WeaponNames.TAMAYURATEI_NO_OHANASHI, percent: 0.90 },
      { name: WeaponNames.FAVONIUS_LANCE, percent: 0.89 },
      { name: WeaponNames.DRAGONS_BANE, r: 5, percent: 0.88 },
      { name: WeaponNames.MISSIVE_WINDSPEAR, percent: 0.85 },
    ],
  },
} as CharacterRecommendations;
