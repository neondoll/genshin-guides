import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: {
      Пар: [
        { ids: [ArtifactSetIds.EMBLEM_OF_SEVERED_FATE], best: true, percent: 1.0000 },
        { ids: [ArtifactSetIds.CRIMSON_WITCH_OF_FLAMES], percent: 0.9954 },
        { ids: [ArtifactSetIds.CRIMSON_WITCH_OF_FLAMES, ArtifactSetIds.EMBLEM_OF_SEVERED_FATE], percent: 0.9277 },
      ],
      Перегрузка: [
        { ids: [ArtifactSetIds.EMBLEM_OF_SEVERED_FATE], best: true, percent: 1.0000 },
        { ids: [ArtifactSetIds.CRIMSON_WITCH_OF_FLAMES], percent: 0.9595 },
        { ids: [ArtifactSetIds.CRIMSON_WITCH_OF_FLAMES, ArtifactSetIds.EMBLEM_OF_SEVERED_FATE], percent: 0.9408 },
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
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1, overallLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", recommendedLevel: "6 - 9", overallLevel: 6 },
    { type: "combat3", priority: "В первую очередь", recommendedLevel: "9 - 10", overallLevel: 10 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.GUIDE_TO_XIANGLING_IN_6_0,
    VideoSourceIds.TALENT_GAINS_PYRO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
    VideoSourceIds.XIANGLING_ELEMENTAL_BURST_GUIDE,
  ],
  weapons: {
    Пар: [
      { id: WeaponIds.STAFF_OF_THE_SCARLET_SANDS, best: "Лучшее оружие", percent: 1.07 },
      { id: WeaponIds.BALLAD_OF_THE_FJORDS, r: 5, percent: 1.06 },
      { id: WeaponIds.WAVEBREAKERS_FIN, r: 5, percent: 1.02 },
      { id: WeaponIds.FRACTURED_HALO, percent: 1.02 },
      { id: WeaponIds.STAFF_OF_HOMA, percent: 1.01 },
      { id: WeaponIds.ENGULFING_LIGHTNING, percent: 1.01 },
      { id: WeaponIds.DEATHMATCH, r: 5, percent: 1.01 },
      { id: WeaponIds.LUMIDOUCE_ELEGY, percent: 1.00 },
      { id: WeaponIds.THE_CATCH, best: "Лучшее доступное оружие", r: 5, percent: 1.00 },
      { id: WeaponIds.SYMPHONIST_OF_SCENTS, percent: 0.99 },
      { id: WeaponIds.BALLAD_OF_THE_FJORDS, r: 1, percent: 0.99 },
      { id: WeaponIds.SKYWARD_SPINE, percent: 0.98 },
      { id: WeaponIds.DRAGONS_BANE, r: 5, percent: 0.97 },
      { id: WeaponIds.DEATHMATCH, r: 1, percent: 0.97 },
      { id: WeaponIds.PRIMORDIAL_JADE_WINGED_SPEAR, percent: 0.97 },
      { id: WeaponIds.CRIMSON_MOONS_SEMBLANCE, percent: 0.95 },
      { id: WeaponIds.BLOODSOAKED_RUINS, percent: 0.95 },
      { id: WeaponIds.CALAMITY_QUELLER, percent: 0.95 },
      { id: WeaponIds.WAVEBREAKERS_FIN, r: 1, percent: 0.93 },
      { id: WeaponIds.MISSIVE_WINDSPEAR, percent: 0.93 },
      { id: WeaponIds.VORTEX_VANQUISHER, percent: 0.92 },
      { id: WeaponIds.BLACKCLIFF_POLE, postfix: "0 стаков", percent: 0.90 },
      { id: WeaponIds.FAVONIUS_LANCE, percent: 0.89 },
      { id: WeaponIds.TAMAYURATEI_NO_OHANASHI, percent: 0.89 },
    ],
    Перегрузка: [
      { id: WeaponIds.STAFF_OF_THE_SCARLET_SANDS, best: "Лучшее оружие", percent: 1.06 },
      { id: WeaponIds.LUMIDOUCE_ELEGY, percent: 1.05 },
      { id: WeaponIds.FRACTURED_HALO, percent: 1.05 },
      { id: WeaponIds.STAFF_OF_HOMA, percent: 1.05 },
      { id: WeaponIds.SYMPHONIST_OF_SCENTS, percent: 1.04 },
      { id: WeaponIds.DEATHMATCH, r: 5, percent: 1.03 },
      { id: WeaponIds.PRIMORDIAL_JADE_WINGED_SPEAR, percent: 1.03 },
      { id: WeaponIds.WAVEBREAKERS_FIN, r: 5, percent: 1.02 },
      { id: WeaponIds.ENGULFING_LIGHTNING, percent: 1.02 },
      { id: WeaponIds.SKYWARD_SPINE, percent: 1.01 },
      { id: WeaponIds.THE_CATCH, best: "Лучшее доступное оружие", r: 5, percent: 1.00 },
      { id: WeaponIds.CALAMITY_QUELLER, percent: 0.99 },
      { id: WeaponIds.DEATHMATCH, r: 1, percent: 0.99 },
      { id: WeaponIds.CRIMSON_MOONS_SEMBLANCE, percent: 0.98 },
      { id: WeaponIds.BLOODSOAKED_RUINS, percent: 0.98 },
      { id: WeaponIds.VORTEX_VANQUISHER, percent: 0.95 },
      { id: WeaponIds.WAVEBREAKERS_FIN, r: 1, percent: 0.94 },
      { id: WeaponIds.BALLAD_OF_THE_FJORDS, r: 5, percent: 0.93 },
      { id: WeaponIds.BALLAD_OF_THE_FJORDS, r: 1, percent: 0.92 },
      { id: WeaponIds.BLACKCLIFF_POLE, postfix: "0 стаков", percent: 0.92 },
      { id: WeaponIds.TAMAYURATEI_NO_OHANASHI, percent: 0.90 },
      { id: WeaponIds.FAVONIUS_LANCE, percent: 0.89 },
      { id: WeaponIds.DRAGONS_BANE, r: 5, percent: 0.88 },
      { id: WeaponIds.MISSIVE_WINDSPEAR, percent: 0.85 },
    ],
  },
} as CharacterRecommendations;
