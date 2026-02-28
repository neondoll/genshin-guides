export const ElementIds = {
  ANEMO: "anemo",
  CRYO: "cryo",
  DENDRO: "dendro",
  ELECTRO: "electro",
  GEO: "geo",
  HYDRO: "hydro",
  PYRO: "pyro",
} as const;
export type ElementId = typeof ElementIds[keyof typeof ElementIds];

export const ElementNames = {
  ANEMO: "Анемо",
  CRYO: "Крио",
  DENDRO: "Дендро",
  ELECTRO: "Электро",
  GEO: "Гео",
  HYDRO: "Гидро",
  PYRO: "Пиро",
} as const;
export type ElementName = typeof ElementNames[keyof typeof ElementNames];

export interface Element {
  id: ElementId;
  name: ElementName;
  color: string;
  region: string;
  archon: string;
  image: string;
}

export type ElementListItem = Pick<Element, "id" | "name" | "color" | "image">;
