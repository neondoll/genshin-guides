import fs from "fs/promises";
import genshinDb from "genshin-db";
import path from "path";

import type {
  ArtifactSet,
  ArtifactSetId,
  ArtifactSetListItem,
  ArtifactSetName,
} from "../src/types/artifact-sets.types";
import type { Character, CharacterId, CharacterListItem, CharacterName } from "../src/types/characters.types";
import type { Element, ElementId, ElementListItem, ElementName } from "../src/types/elements.types";
import type { Talent, TalentId, TalentListItem } from "../src/types/talents.types";
import type { Weapon, WeaponId, WeaponListItem, WeaponName } from "../src/types/weapons.types";

const OUTPUT_DIR = path.resolve("public/data");

// Вспомогательная функция для безопасного имени файла
function toSafeId(name: string) {
  return name.toLowerCase().replace(/[()"']/g, "").replace(/[\s-]+/g, "_");
}

// Преобразование типа элемента
function getElementId(elementType: string) {
  return elementType.replace(/^ELEMENT_/i, "").toLowerCase() as ElementId | "none";
}

// Типы для входных данных, обогащённые id
interface GenshinDbArtifact extends Omit<genshinDb.Artifact, "id"> {
  id: ArtifactSetId;
  name: ArtifactSetName;
}

interface GenshinDbCharacter extends Omit<genshinDb.Character, "id"> {
  id: CharacterId;
  name: CharacterName;
  elementText: ElementName | "Нет";
}

interface GenshinDbElement extends genshinDb.Element {
  id: ElementId;
  name: ElementName;
}

interface GenshinDbTalent extends Omit<genshinDb.Talent, "id"> {
  id: TalentId;
}

interface GenshinDbWeapon extends Omit<genshinDb.Weapon, "id"> {
  id: WeaponId;
  name: WeaponName;
}

// --- Трансформеры ---

function transformArtifactDetail(item: GenshinDbArtifact): ArtifactSet {
  const data: ArtifactSet = {
    id: item.id,
    name: item.name,
    rarityList: item.rarityList,
    effect1Pc: item.effect1Pc,
    effect2Pc: item.effect2Pc,
    effect4Pc: item.effect4Pc,
    image: item.images.mihoyo_flower ?? item.images.mihoyo_plume ?? item.images.mihoyo_sands ?? item.images.mihoyo_goblet ?? item.images.mihoyo_circlet,
    // images: item.images,
    version: item.version,
  };

  if (item.flower) {
    data.flower = {
      name: item.flower.name,
      // relicType: item.flower.relicType,
      relicText: item.flower.relicText,
      // description: item.flower.description,
      // story: item.flower.story,
      image: item.images.mihoyo_flower,
    };
  }

  if (item.plume) {
    data.plume = {
      name: item.plume.name,
      // relicType: item.plume.relicType,
      relicText: item.plume.relicText,
      // description: item.plume.description,
      // story: item.plume.story,
      image: item.images.mihoyo_plume,
    };
  }

  if (item.sands) {
    data.sands = {
      name: item.sands.name,
      // relicType: item.sands.relicType,
      relicText: item.sands.relicText,
      // description: item.sands.description,
      // story: item.sands.story,
      image: item.images.mihoyo_sands,
    };
  }

  if (item.goblet) {
    data.goblet = {
      name: item.goblet.name,
      // relicType: item.goblet.relicType,
      relicText: item.goblet.relicText,
      // description: item.goblet.description,
      // story: item.goblet.story,
      image: item.images.mihoyo_goblet,
    };
  }

  if (item.circlet) {
    data.circlet = {
      name: item.circlet.name,
      // relicType: item.circlet.relicType,
      relicText: item.circlet.relicText,
      // description: item.circlet.description,
      // story: item.circlet.story,
      image: item.images.mihoyo_circlet,
    };
  }

  return data;
}

function transformArtifactListItem(item: GenshinDbArtifact): ArtifactSetListItem {
  return {
    id: item.id,
    name: item.name,
    rarityList: item.rarityList,
    image: item.images.mihoyo_flower ?? item.images.mihoyo_plume ?? item.images.mihoyo_sands ?? item.images.mihoyo_goblet ?? item.images.mihoyo_circlet,
  };
}

function transformCharacterDetail(item: GenshinDbCharacter): Character {
  return {
    id: item.id,
    name: item.name,
    fullName: item.fullname,
    title: item.title,
    // description: item.description,
    // weaponType: item.weaponType,
    weaponText: item.weaponText,
    // bodyType: item.bodyType,
    // gender: item.gender,
    // qualityType: item.qualityType,
    rarity: item.rarity,
    // birthdaymmdd: item.birthdaymmdd,
    birthday: item.birthday,
    elementId: getElementId(item.elementType),
    // elementType: item.elementType,
    elementText: item.elementText,
    affiliation: item.affiliation,
    // associationType: item.associationType,
    region: item.region,
    // substatType: item.substatType,
    substatText: item.substatText,
    constellation: item.constellation,
    // cv: item.cv,
    // costs: item.costs,
    image: item.images.mihoyo_icon,
    // images: item.images,
    // url: item.url,
    // stats: item.stats,
    version: item.version,
  };
}

function transformCharacterListItem(item: GenshinDbCharacter): CharacterListItem {
  return {
    id: item.id,
    name: item.name,
    rarity: item.rarity,
    elementId: getElementId(item.elementType),
    elementText: item.elementText,
    image: item.images.mihoyo_icon,
  };
}

function transformElementDetail(item: GenshinDbElement): Element {
  return {
    id: item.id,
    name: item.name,
    // type: item.type,
    color: item.color,
    // emoji: item.emoji,
    region: item.region,
    archon: item.archon,
    // theme: item.theme,
    image: item.images.wikia,
    // images: item.images,
  };
}

function transformElementListItem(item: GenshinDbElement): ElementListItem {
  return { id: item.id, name: item.name, color: item.color, image: item.images.wikia };
}

function transformTalentDetail(item: GenshinDbTalent): Talent {
  return {
    id: item.id,
    name: item.name,
    combat1: item.combat1?.name ?? "",
    // combat1: item.combat1,
    combat2: item.combat2?.name ?? "",
    // combat2: item.combat2,
    // combatsp: item.combatsp,
    // combatju: item.combatju,
    combat3: item.combat3?.name ?? "",
    // combat3: item.combat3,
    // passive1: item.passive1,
    // passive2: item.passive2,
    // passive3: item.passive3,
    // passive4: item.passive4,
    // costs: item.costs,
    // images: item.images,
    version: item.version,
  };
}

function transformTalentListItem(item: GenshinDbTalent): TalentListItem {
  return { id: item.id, name: item.name };
}

function transformWeaponDetail(item: GenshinDbWeapon): Weapon {
  return {
    id: item.id,
    name: item.name,
    dupealias: item.dupealias,
    // description: item.description,
    // descriptionRaw: item.descriptionRaw,
    // weaponType: item.weaponType,
    weaponText: item.weaponText,
    rarity: item.rarity,
    // story: item.story,
    // baseAtkValue: item.baseAtkValue,
    // mainStatType: item.mainStatType,
    mainStatText: item.mainStatText,
    // baseStatText: item.baseStatText,
    effectName: item.effectName,
    effectTemplateRaw: item.effectTemplateRaw,
    r1: item.r1,
    r2: item.r2,
    r3: item.r3,
    r4: item.r4,
    r5: item.r5,
    // costs: item.costs,
    image: item.images.mihoyo_icon,
    // images: item.images,
    // stats: item.stats,
    version: item.version,
  };
}

function transformWeaponListItem(item: GenshinDbWeapon): WeaponListItem {
  return { id: item.id, name: item.name, rarity: item.rarity, image: item.images.mihoyo_icon };
}

// Тип для всех возможных функций genshin-db
type GenshinDbFunction = "artifacts" | "characters" | "elements" | "talents" | "weapons";

// Типы для входных данных (обогащённые id)
type InputData<F extends GenshinDbFunction>
  = F extends "artifacts" ? GenshinDbArtifact
    : F extends "characters" ? GenshinDbCharacter
      : F extends "elements" ? GenshinDbElement
        : F extends "talents" ? GenshinDbTalent
          : F extends "weapons" ? GenshinDbWeapon
            : never;

// Типы для выходных данных
type OutputDataDetail<F extends GenshinDbFunction>
  = F extends "artifacts" ? ArtifactSet
    : F extends "characters" ? Character
      : F extends "elements" ? Element
        : F extends "talents" ? Talent
          : F extends "weapons" ? Weapon
            : never;

type OutputDataList<F extends GenshinDbFunction>
  = F extends "artifacts" ? ArtifactSetListItem
    : F extends "characters" ? CharacterListItem
      : F extends "elements" ? ElementListItem
        : F extends "talents" ? TalentListItem
          : F extends "weapons" ? WeaponListItem
            : never;

// Конфигурация категории
interface CategoryConfig<F extends GenshinDbFunction> {
  function: F;
  transformDetail: (item: InputData<F>) => OutputDataDetail<F>;
  transformList: (item: InputData<F>) => OutputDataList<F>;
  filterNames?: (names: string[]) => string[];
}

// Конфигурация категории
const CATEGORIES = {
  "artifact-sets": {
    function: "artifacts" as const,
    transformDetail: transformArtifactDetail,
    transformList: transformArtifactListItem,
  },
  "characters": {
    function: "characters" as const,
    transformDetail: transformCharacterDetail,
    transformList: transformCharacterListItem,
  },
  "elements": {
    function: "elements" as const,
    transformDetail: transformElementDetail,
    transformList: transformElementListItem,
  },
  "talents": {
    function: "talents" as const,
    transformDetail: transformTalentDetail,
    transformList: transformTalentListItem,
  },
  "weapons": {
    function: "weapons" as const,
    transformDetail: transformWeaponDetail,
    transformList: transformWeaponListItem,
    filterNames: (names) => {
      // Убираем дубли
      const unique = [...new Set(names)];

      // Исключаем "Легендарный клинок Иссин" (английское имя)
      return unique.filter(name => name !== "Prized Isshin Blade");
    },
  },
} satisfies {
  "artifact-sets": CategoryConfig<"artifacts">;
  "characters": CategoryConfig<"characters">;
  "elements": CategoryConfig<"elements">;
  "talents": CategoryConfig<"talents">;
  "weapons": CategoryConfig<"weapons">;
};

// Функция для безопасного создания директории
async function ensureDir(dir: string) {
  try {
    await fs.mkdir(dir, { recursive: true });
  }
  catch (err) {
    // Проверяем, что ошибка не "EEXIST" (папка уже существует)
    if (err && typeof err === "object" && "code" in err && err.code === "EEXIST") {
      return;
    }

    throw err;
  }
}

// Генерация данных для одной категории
async function generateCategory<F extends GenshinDbFunction>(categoryName: string, config: CategoryConfig<F>) {
  console.log(`Генерация данных для ${categoryName}...`);

  // Получаем все имена элементов в категории
  let names = genshinDb[config.function]("names", {
    matchCategories: true,
    resultLanguage: genshinDb.Language.English,
  });

  // Применяем фильтр, если он задан
  if (config.filterNames) {
    names = config.filterNames(names);
  }

  // Получаем данные для каждого имени и дополняем id
  const items = names.map((name) => {
    const data = genshinDb[config.function](name, {
      queryLanguages: [genshinDb.Language.English, genshinDb.Language.Russian],
      resultLanguage: genshinDb.Language.Russian,
    });

    if (!data) {
      throw new Error(`Данные не найдены для ${name} в категории ${categoryName}`);
    }

    return { ...data, id: toSafeId(name) } as InputData<F>; // здесь требуется утверждение, т.к. мы добавляем поле id
  });

  // Создаём папку категории
  const categoryDir = path.join(OUTPUT_DIR, categoryName);
  await ensureDir(categoryDir);

  // Генерируем индексный файл (список)
  const indexData = items.map(item => config.transformList(item));
  await fs.writeFile(path.join(categoryDir, "index.json"), JSON.stringify(indexData, null, 2));

  // Генерируем отдельные файлы (детальная информация)
  const detailsDir = path.join(categoryDir, "details");
  await ensureDir(detailsDir);

  for (const item of items) {
    const id = item.id;
    const safeId = id.replace(/[^a-z0-9]/gi, "_");

    if (id !== safeId) {
      console.warn({ id, safeId });
    }

    // const safeId = toSafeId(item.id); // уже безопасно, но на всякий случай
    const detailData = config.transformDetail(item);
    await fs.writeFile(path.join(detailsDir, `${safeId}.json`), JSON.stringify(detailData, null, 2));
  }

  console.log(`✓ ${categoryName} – ${items.length} элементов`);
}

// Основная функция
async function main() {
  try {
    console.log("Начинаем генерацию статических данных...");
    await ensureDir(OUTPUT_DIR);

    // Явно вызываем для каждой категории – так TypeScript выводит типы без any
    await generateCategory("artifact-sets", CATEGORIES["artifact-sets"]);
    await generateCategory("characters", CATEGORIES["characters"]);
    await generateCategory("elements", CATEGORIES["elements"]);
    await generateCategory("talents", CATEGORIES["talents"]);
    await generateCategory("weapons", CATEGORIES["weapons"]);

    console.log("✅ Генерация завершена!");
  }
  catch (err) {
    console.error("❌ Ошибка генерации:", err);
    process.exit(1);
  }
}

main();
