import { ArtifactSetIds } from "@/types/artifact-sets";
import { CharacterIds } from "@/types/characters";
import type { CharacterRecommendations } from "@/types/characters-recommendations";
import { Stats } from "@/types/stats";
import { VideoSourceIds } from "@/types/video-sources";
import { WeaponIds } from "@/types/weapons";

export default {
  id: CharacterIds.NICOLE,
  artifacts: {
    sets: [{ ids: [ArtifactSetIds.CELESTIAL_GIFT] }],
    stats: {
      sands: [{ name: Stats.ATK_PERCENTAGE }, { name: Stats.ENERGY_RECHARGE }],
      goblet: [{ name: Stats.ATK_PERCENTAGE }],
      circlet: [{ name: Stats.ATK_PERCENTAGE }],
      additional: [{ name: Stats.ATK_PERCENTAGE }, { name: Stats.ENERGY_RECHARGE }],
    },
  },
  attackCombinations: ["Навык (Генерирует щит и энергию; Заливает АТК в отряд)", "Взрыв стихий (Создает проекции)"],
  detachments: [
    {
      template: [
        { type: "other", title: "Дамагер из Шабаша" },
        { type: "character", id: CharacterIds.NICOLE },
      ],
      variants: [
        [
          { type: "character", id: CharacterIds.VARKA },
          { type: "character", id: CharacterIds.NICOLE },
          { type: "character", id: CharacterIds.DURIN },
          { type: "character", id: CharacterIds.PRUNE, c: 6 },
        ],
        [
          { type: "character", id: CharacterIds.VENTI },
          { type: "character", id: CharacterIds.NICOLE },
          { type: "character", id: CharacterIds.DURIN },
          { type: "character", id: CharacterIds.PRUNE, c: 6 },
        ],
        [
          { type: "character", id: CharacterIds.KLEE },
          { type: "character", id: CharacterIds.CHEVREUSE },
          { type: "character", id: CharacterIds.FISCHL },
          { type: "character", id: CharacterIds.NICOLE },
        ],
        [
          { type: "character", id: CharacterIds.RAZOR },
          { type: "character", id: CharacterIds.NICOLE },
          { type: "character", id: CharacterIds.BENNETT, c: 6 },
          { type: "character", id: CharacterIds.CHEVREUSE },
        ],
        [
          { type: "character", id: CharacterIds.MONA, c: 6 },
          { type: "character", id: CharacterIds.NICOLE },
          { type: "character", id: CharacterIds.SUCROSE, c: 6 },
          {
            type: "character",
            id: CharacterIds.MAVUIKA,
            weaponId: WeaponIds.FAVONIUS_GREATSWORD,
            artifactSetIds: [ArtifactSetIds.SCROLL_OF_THE_HERO_OF_CINDER_CITY],
          },
        ],
      ],
    },
    {
      template: [
        { type: "other", title: "Дамагер не из Шабаша" },
        { type: "character", id: CharacterIds.NICOLE },
      ],
      variants: [
        [
          { type: "character", id: CharacterIds.CLORINDE },
          { type: "character", id: CharacterIds.NICOLE },
          { type: "character", id: CharacterIds.DURIN },
          { type: "character", id: CharacterIds.CHEVREUSE },
        ],
        [
          { type: "character", id: CharacterIds.VARESA },
          { type: "character", id: CharacterIds.IANSAN },
          { type: "character", id: CharacterIds.CHEVREUSE },
          { type: "character", id: CharacterIds.NICOLE },
        ],
        [
          { type: "character", id: CharacterIds.ARLECCHINO },
          { type: "character", id: CharacterIds.CHEVREUSE },
          { type: "character", id: CharacterIds.NICOLE },
          { type: "character", id: CharacterIds.FISCHL },
        ],
        [
          { type: "character", id: CharacterIds.ARLECCHINO },
          { type: "character", id: CharacterIds.DURIN },
          { type: "character", id: CharacterIds.NICOLE },
          { type: "character", id: CharacterIds.FISCHL },
        ],
      ],
    },
  ],
  keyConstellations: [1, 2, 6],
  recommendedLevel: "90/90",
  signatureWeaponIds: [WeaponIds.ANGELOS_HEPTADES],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1 },
    { type: "combat2", priority: "В первую очередь", recommendedLevel: 10 },
    { type: "combat3", priority: "Во вторую очередь", recommendedLevel: 8 },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_NICOLE_IN_6_6_MironMinMax],
  weapons: [
    {
      id: WeaponIds.ANGELOS_HEPTADES,
      best: "Лучшее решение",
      atk: 4047,
      basicAtk: 600,
      energyRecharge: "14 ед.",
      otherBonuses: ["26% урона герою на поле", "13% урона герою в кармане"],
    },
    { id: WeaponIds.CRANES_ECHOING_CALL, atk: 3917, basicAtk: 588 },
    { id: WeaponIds.SKYWARD_ATLAS, atk: 3865, basicAtk: 580 },
    { id: WeaponIds.MEMORY_OF_DUST, atk: 3793, basicAtk: 569 },
    { id: WeaponIds.CASHFLOW_SUPERVISION, atk: 3691, basicAtk: 554 },
    { id: WeaponIds.TULAYTULLAHS_REMEMBRANCE, atk: 3528, basicAtk: 529 },
    { id: WeaponIds.FLOWING_PURITY, atk: 3437, basicAtk: 516 },
    {
      id: WeaponIds.OATHSWORN_EYE,
      best: "Лучшее эвентовое решение",
      atk: 3437,
      basicAtk: 516,
      energyRecharge: "48% ВЭ",
    },
    {
      id: WeaponIds.HAKUSHIN_RING,
      atk: 3437,
      basicAtk: 516,
      energyRecharge: "30.6% ВЭ",
      otherBonuses: ["До 20% бонуса в отряд на 6 секунд"],
    },
    { id: WeaponIds.EYE_OF_PERCEPTION, atk: 3277, basicAtk: 492 },
    { id: WeaponIds.ROYAL_GRIMOIRE, atk: 3187, basicAtk: 478 },
    { id: WeaponIds.BALLAD_OF_THE_BOUNDLESS_BLUE, atk: 3187, basicAtk: 478, energyRecharge: "30.6% ВЭ" },
    {
      id: WeaponIds.FAVONIUS_CODEX,
      best: "Лучшее доступное решение",
      atk: 3014,
      basicAtk: 452,
      energyRecharge: "45.9% + подкачка в отряд",
    },
    { id: WeaponIds.STARCALLERS_WATCH, atk: 3832, basicAtk: 425, otherBonuses: ["28% урона герою на поле"] },
    {
      id: WeaponIds.THRILLING_TALES_OF_DRAGON_SLAYERS,
      atk: 2673,
      basicAtk: 401,
      otherBonuses: ["48% АТК герою на поле"],
    },
  ],
} as CharacterRecommendations;
