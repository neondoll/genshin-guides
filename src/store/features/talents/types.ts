import type { Talent as TalentDB } from "genshin-db";

import type { CharacterName } from "../characters";

export interface Talent extends TalentDB {
  name: CharacterName;
}
