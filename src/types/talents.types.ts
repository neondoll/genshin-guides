import type { Talent as TalentDB } from "genshin-db";

import type { CharacterName } from "./characters.types";

export interface Talent extends TalentDB {
  name: CharacterName;
}
