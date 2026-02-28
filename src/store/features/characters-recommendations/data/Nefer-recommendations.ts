import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { CharacterIds } from "@/types/characters.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { ElementIds } from "@/types/elements.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [
      { ids: [ArtifactSetIds.NIGHT_OF_THE_SKYS_UNVEILING], best: true },
      { ids: [ArtifactSetIds.MARECHAUSSEE_HUNTER] },
      { ids: [ArtifactSetIds.GILDED_DREAMS] },
      { ids: [ArtifactSetIds.FLOWER_OF_PARADISE_LOST] },
    ],
    stats: {
      sands: [{ name: Stats.ELEMENTAL_MASTERY }],
      goblet: [{ name: Stats.ELEMENTAL_MASTERY }],
      circlet: [{ name: Stats.CRIT_RATE }, { name: Stats.CRIT_DMG }],
      additional: [
        { name: Stats.CRIT_RATE, notes: ["Приоритетно"] },
        { name: Stats.CRIT_DMG, notes: ["Приоритетно"] },
        { name: Stats.ELEMENTAL_MASTERY },
      ],
    },
  },
  attackCombinations: [
    "Таланты отряда:<br><span class='text-dendro'>Создаем бутоны</span><br><span class='text-[75%]'>Убеждаемся, что есть <span class='text-dendro'>Заряды росы</span> и <span class='text-dendro'>бутоны</span> на поле</span>",
    "Навык:<br><span class='text-dendro'>Вход в стойку</span><br><span class='text-[75%]'><span class='text-dendro'>Бутоны</span> стали <span class='text-dendro'>Ядрами лжи</span></span>",
    "3x Заряженная атака:<br><span class='text-dendro'>Урон проекциями</span><br><span class='text-[75%]'><span class='text-dendro'>Ядра лжи</span> поглощаются и увеличивают урон</span>",
    "Навык:<br><span class='text-dendro'>Вход в стойку</span>",
    "3x Заряженная атака:<br><span class='text-dendro'>Урон проекциями</span>",
    "Взрыв стихии<br><span class='text-[75%]'>Применяется, если:<br>1. Нужно добить врага<br>2. Откаты навыков персонажей в отряде слишком длинные<br><br>В иных ситуациях игнорируется почти всегда, но, при желании, можно глянуть анимацию</span>",
  ],
  detachments: [
    {
      template: [
        { type: "character", id: CharacterIds.NEFER },
        { type: "element", id: ElementIds.DENDRO },
        { type: "element", id: ElementIds.HYDRO },
        { type: "other", title: "Саппорт" },
      ],
    },
  ],
  keyConstellations: [2],
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponIds: [WeaponIds.RELIQUARY_OF_TRUTH],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: "1-8" },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_NEFER_IN_6_1_AnimeCool, VideoSourceIds.GUIDE_TO_NEFER_IN_6_1_MironMinMax],
  weapons: [
    { id: WeaponIds.RELIQUARY_OF_TRUTH, best: "Лучшее оружие", percent: 1.2412 },
    { id: WeaponIds.NIGHTWEAVERS_LOOKING_GLASS, percent: 1.0948 },
    { id: WeaponIds.DAWNING_FROST, r: 5, percent: 1.0884 },
    { id: WeaponIds.TOME_OF_THE_ETERNAL_FLOW, percent: 1.0351 },
    { id: WeaponIds.STARCALLERS_WATCH, percent: 1.0119 },
    { id: WeaponIds.SUNNY_MORNING_SLEEP_IN, percent: 1.0047 },
    { id: WeaponIds.BLACKMARROW_LANTERN, best: "Лучшее доступное оружие", r: 5, percent: 1.0000 },
    { id: WeaponIds.DAWNING_FROST, r: 1, percent: 0.9962 },
    { id: WeaponIds.A_THOUSAND_FLOATING_DREAMS, percent: 0.9848 },
    { id: WeaponIds.BLACKMARROW_LANTERN, r: 1, percent: 0.9679 },
    { id: WeaponIds.THE_WIDSITH, r: 5, percent: 0.9611 },
  ],
} as CharacterRecommendations;
