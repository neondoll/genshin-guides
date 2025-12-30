export const CharacterRoleIds = {
  ON_FIELD: "on-field",
  OFF_FIELD: "off-field",
  DPS: "dps",
  SUPPORT: "support",
  SURVIVABILITY: "survivability",
} as const;

export type CharacterRoleId = typeof CharacterRoleIds[keyof typeof CharacterRoleIds];

export interface CharacterRole {
  id: CharacterRoleId;
  name: string;
  description: string;
  image: string;
}
