import { type CharacterName, CharacterNames } from "@/types/base.types";
import type { CharacterRecommendations } from "@/types/recommendations.types";

export default {
  [CharacterNames.AINO]: (await import("./Aino-recommendations")).default,
  [CharacterNames.ALBEDO]: (await import("./Albedo-recommendations")).default,
  [CharacterNames.ALHAITHAM]: (await import("./Alhaitham-recommendations")).default,
  [CharacterNames.ARLECCHINO]: (await import("./Arlecchino-recommendations")).default,
  [CharacterNames.BAIZHU]: (await import("./Baizhu-recommendations")).default,
  [CharacterNames.BARBARA]: (await import("./Barbara-recommendations")).default,
  [CharacterNames.BEIDOU]: (await import("./Beidou-recommendations")).default,
  [CharacterNames.BENNETT]: (await import("./Bennett-recommendations")).default,
  [CharacterNames.DILUC]: (await import("./Diluc-recommendations")).default,
  [CharacterNames.DIONA]: (await import("./Diona-recommendations")).default,
  [CharacterNames.DORI]: (await import("./Dori-recommendations")).default,
  [CharacterNames.DURIN]: (await import("./Durin-recommendations")).default,
  [CharacterNames.GANYU]: (await import("./Ganyu-recommendations")).default,
  [CharacterNames.GOROU]: (await import("./Gorou-recommendations")).default,
  [CharacterNames.JEAN]: (await import("./Jean-recommendations")).default,
  [CharacterNames.KAMISATO_AYAKA]: (await import("./KamisatoAyaka-recommendations")).default,
  [CharacterNames.KAMISATO_AYATO]: (await import("./KamisatoAyato-recommendations")).default,
  [CharacterNames.VARESA]: (await import("./Varesa-recommendations")).default,
  [CharacterNames.VENTI]: (await import("./Venti-recommendations")).default,
} as Record<CharacterName, CharacterRecommendations>;
