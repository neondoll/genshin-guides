import type { CharacterId, TravelerId } from "./characters.types";
import type { ElementId } from "./elements.types";

export type TalentId = Exclude<CharacterId, TravelerId> | `traveler_${ElementId}`;

export interface Talent {
  id: TalentId;
  name: string;
  combat1: string;
  combat2: string;
  combat3: string;
  version: string;
}

export type TalentListItem = Pick<Talent, "id" | "name">;
