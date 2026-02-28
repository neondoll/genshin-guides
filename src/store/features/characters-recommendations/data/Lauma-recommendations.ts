import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { CharacterIds } from "@/types/characters.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { ElementIds, ElementNames } from "@/types/elements.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [
      { ids: [ArtifactSetIds.GILDED_DREAMS] },
      { ids: [ArtifactSetIds.DEEPWOOD_MEMORIES] },
      { ids: [ArtifactSetIds.SILKEN_MOONS_SERENADE] },
      { ids: [ArtifactSetIds.GILDED_DREAMS, ArtifactSetIds.WANDERERS_TROUPE] },
    ],
    stats: {
      sands: [{ name: Stats.ELEMENTAL_MASTERY }, { name: Stats.ENERGY_RECHARGE }],
      goblet: [{ name: Stats.ELEMENTAL_MASTERY }],
      circlet: [
        { name: Stats.ELEMENTAL_MASTERY, notes: ["Лучше"] },
        { name: Stats.CRIT_RATE },
        { name: Stats.CRIT_DMG },
      ],
      additional: [
        { name: Stats.ELEMENTAL_MASTERY, notes: ["~ 1100"] },
        { name: Stats.ENERGY_RECHARGE, notes: ["~ 160%-200%"] },
        { name: Stats.CRIT_RATE },
        { name: Stats.CRIT_DMG },
      ],
    },
  },
  attackCombinations: {
    "В одну цель": ["Взрыв стихий", "к концу бонуса", "Элем. навык"],
    "В несколько целей": ["Элем. навык (Долгое нажатие)", "Взрыв стихий"],
  },
  constellationOrSignatureWeapon: "C1 < Сигна < C2",
  detachments: [
    {
      description: "Бутонизация",
      template: [
        { type: "element", id: ElementIds.HYDRO },
        { type: "character", id: CharacterIds.NILOU },
        { type: "character", id: CharacterIds.LAUMA },
        { type: "element", id: ElementIds.DENDRO },
      ],
    },
    {
      description: "Цветение",
      template: [
        { type: "character", id: CharacterIds.LAUMA },
        { type: "element", id: ElementIds.HYDRO },
        { type: "element", id: ElementIds.PYRO },
        { type: "other", title: `${ElementNames.DENDRO}/${ElementNames.HYDRO}/${ElementNames.PYRO} персонаж` },
      ],
    },
    {
      description: "Вегетация",
      template: [
        { type: "character", id: CharacterIds.LAUMA },
        { type: "element", id: ElementIds.HYDRO },
        { type: "element", id: ElementIds.ELECTRO },
        { type: "other", title: `${ElementNames.DENDRO}/${ElementNames.HYDRO}/${ElementNames.ELECTRO} персонаж` },
      ],
    },
  ],
  keyConstellations: [2],
  recommendedLevel: "90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS, CharacterRoleIds.SUPPORT],
  signatureWeaponIds: [WeaponIds.NIGHTWEAVERS_LOOKING_GLASS],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: 10 },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_LAUMA_IN_6_0_AnimeCool, VideoSourceIds.GUIDE_TO_LAUMA_IN_6_0_MironMinMax],
  weapons: [
    { id: WeaponIds.NIGHTWEAVERS_LOOKING_GLASS, best: "Лучшее оружие" },
    { id: WeaponIds.A_THOUSAND_FLOATING_DREAMS },
    { id: WeaponIds.SUNNY_MORNING_SLEEP_IN },
    { id: WeaponIds.STARCALLERS_WATCH },
    { id: WeaponIds.ETHERLIGHT_SPINDLELUTE, best: "Лучшее эвентовое оружие" },
    { id: WeaponIds.BLACKMARROW_LANTERN, best: "Лучшее доступное оружие" },
    { id: WeaponIds.SACRIFICIAL_FRAGMENTS },
    { id: WeaponIds.FAVONIUS_CODEX },
    { id: WeaponIds.THRILLING_TALES_OF_DRAGON_SLAYERS },
  ],
} as CharacterRecommendations;
