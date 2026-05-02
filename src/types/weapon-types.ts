export const WeaponTypeIds = {
  SWORD_ONE_HAND: "sword_one_hand",
  CLAYMORE: "claymore",
  POLE: "pole",
  CATALYST: "catalyst",
  BOW: "bow",
} as const;
export type WeaponTypeId = typeof WeaponTypeIds[keyof typeof WeaponTypeIds];

export interface WeaponType {
  id: WeaponTypeId;
  name: string;
  image: string;
}
