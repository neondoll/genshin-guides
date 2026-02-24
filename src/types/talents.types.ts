import type { Talent as TalentDB } from "genshin-db";

import type { CharacterName, TravelerName } from "./characters.types";
import type { ElementName } from "./elements.types";

export interface Talent extends TalentDB {
  name: TalentName;
}

export type TalentName = Exclude<CharacterName, TravelerName> | `Путешественница (${ElementName})`;
