import fs from "fs/promises";
import genshinDb from "genshin-db";
import path from "path";

const OUTPUT_DIR = path.resolve("public/data");

// Трансформер для артефактов (детальная информация)
function transformArtifactDetail(item) {
  const data = {
    id: item.id,
    name: item.name,
    rarityList: item.rarityList,
    effect1Pc: item.effect1Pc,
    effect2Pc: item.effect2Pc,
    effect4Pc: item.effect4Pc,
    image: item.images.mihoyo_flower || item.images.mihoyo_plume || item.images.mihoyo_sands || item.images.mihoyo_goblet || item.images.mihoyo_circlet,
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

// Трансформер для артефактов (список / карточка)
function transformArtifactListItem(item) {
  return {
    id: item.id,
    name: item.name,
    rarityList: item.rarityList,
    image: item.images.mihoyo_flower || item.images.mihoyo_plume || item.images.mihoyo_sands || item.images.mihoyo_goblet || item.images.mihoyo_circlet,
  };
}

// Трансформер для персонажей (детальная информация)
function transformCharacterDetail(item) {
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
    elementType: item.elementType,
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

// Трансформер для персонажей (список / карточка)
function transformCharacterListItem(item) {
  return {
    id: item.id,
    name: item.name,
    rarity: item.rarity,
    elementType: item.elementType,
    elementText: item.elementText,
    image: item.images.mihoyo_icon,
  };
}

// Трансформер для элементов (детальная информация)
function transformElementDetail(item) {
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

// Трансформер для элементов (список / карточка)
function transformElementListItem(item) {
  return { id: item.id, name: item.name, color: item.color, image: item.images.wikia };
}

// Трансформер для талантов (детальная информация)
function transformTalentDetail(item) {
  return {
    id: item.id,
    name: item.name,
    combat1: item.combat1.name,
    // combat1: item.combat1,
    combat2: item.combat2?.name,
    // combat2: item.combat2,
    // combatsp: item.combatsp,
    // combatju: item.combatju,
    combat3: item.combat3?.name,
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

// Трансформер для талантов (список / карточка)
function transformTalentListItem(item) {
  return { id: item.id, name: item.name };
}

// Трансформер для оружия (детальная информация)
function transformWeaponDetail(item) {
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

// Трансформер для оружия (список / карточка)
function transformWeaponListItem(item) {
  return { id: item.id, name: item.name, rarity: item.rarity, image: item.images.mihoyo_icon };
}

// Конфигурация для категорий
const CATEGORIES = {
  "artifact-sets": {
    function: "artifacts",
    transformDetail: transformArtifactDetail,
    transformList: transformArtifactListItem,
  },
  "characters": {
    function: "characters",
    transformDetail: transformCharacterDetail,
    transformList: transformCharacterListItem,
  },
  "elements": {
    function: "elements",
    transformDetail: transformElementDetail,
    transformList: transformElementListItem,
  },
  "talents": { function: "talents", transformDetail: transformTalentDetail, transformList: transformTalentListItem },
  "weapons": { function: "weapons", transformDetail: transformWeaponDetail, transformList: transformWeaponListItem },
};

// Функция для безопасного создания директории
async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  }
  catch (err) {
    if (err.code !== "EEXIST") {
      throw err;
    }
  }
}

// Генерация данных для одной категории
async function generateCategory(categoryName, config) {
  console.log(`Генерация данных для ${categoryName}...`);

  // Получаем все имена элементов в категории
  const names = genshinDb[config.function]("names", {
    matchCategories: true,
    resultLanguage: genshinDb.Language.English,
  });
  const items = names.map((name) => {
    const data = genshinDb[config.function](name, {
      queryLanguages: [genshinDb.Language.English, genshinDb.Language.Russian],
      resultLanguage: genshinDb.Language.Russian,
    });

    if (categoryName === "elements") {
      return { ...data, id: `ELEMENT_${name.toUpperCase()}` };
    }

    return data;
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
    const id = String(item.id || item.name);
    const safeId = id.replace(/[^a-z0-9]/gi, "_");

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

    for (const [name, config] of Object.entries(CATEGORIES)) {
      await generateCategory(name, config);
    }

    console.log("✅ Генерация завершена!");
  }
  catch (err) {
    console.error("❌ Ошибка генерации:", err);
    process.exit(1);
  }
}

main();
