import type { CharacterRecommendations } from "../types";
import { ArtifactSetNames } from "../../artifact-sets";
import { CharacterRoleIds } from "../../character-roles";
import { CharacterNames } from "../../characters";
import { ElementNames } from "../../elements";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";

export default {
  artifacts: {
    sets: [
      { type: "complete", name: ArtifactSetNames.NIGHT_OF_THE_SKYS_UNVEILING, best: true },
      { type: "complete", name: ArtifactSetNames.MARECHAUSSEE_HUNTER },
      { type: "complete", name: ArtifactSetNames.GILDED_DREAMS },
      { type: "complete", name: ArtifactSetNames.FLOWER_OF_PARADISE_LOST },
    ],
    stats: {
      sands: [{ name: "Мастерство стихий" }],
      goblet: [{ name: "Мастерство стихий" }],
      circlet: [{ name: "Шанс крит. попадания" }, { name: "Крит. урон" }],
      additional: [
        { name: "Шанс крит. попадания", notes: ["Приоритетно"] },
        { name: "Крит. урон", notes: ["Приоритетно"] },
        { name: "Мастерство стихий" },
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
        { type: "character", name: CharacterNames.NEFER },
        { type: "element", name: ElementNames.DENDRO },
        { type: "element", name: ElementNames.HYDRO },
        { type: "other", title: "Саппорт" },
      ],
    },
  ],
  keyConstellations: [2],
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponNames: [WeaponNames.RELIQUARY_OF_TRUTH],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: "1-8" },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_NEFER_IN_6_1_AnimeCool, VideoSourceIds.GUIDE_TO_NEFER_IN_6_1_MironMinMax],
  weapons: [
    { name: WeaponNames.RELIQUARY_OF_TRUTH, best: "Лучшее оружие", percent: 1.2412 },
    { name: WeaponNames.NIGHTWEAVERS_LOOKING_GLASS, percent: 1.0948 },
    { name: WeaponNames.DAWNING_FROST, r: 5, percent: 1.0884 },
    { name: WeaponNames.TOME_OF_THE_ETERNAL_FLOW, percent: 1.0351 },
    { name: WeaponNames.STARCALLERS_WATCH, percent: 1.0119 },
    { name: WeaponNames.SUNNY_MORNING_SLEEP_IN, percent: 1.0047 },
    { name: WeaponNames.BLACKMARROW_LANTERN, best: "Лучшее доступное оружие", r: 5, percent: 1.0000 },
    { name: WeaponNames.DAWNING_FROST, r: 1, percent: 0.9962 },
    { name: WeaponNames.A_THOUSAND_FLOATING_DREAMS, percent: 0.9848 },
    { name: WeaponNames.BLACKMARROW_LANTERN, r: 1, percent: 0.9679 },
    { name: WeaponNames.THE_WIDSITH, r: 5, percent: 0.9611 },
  ],
} as CharacterRecommendations;
