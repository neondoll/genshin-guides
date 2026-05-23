import { ArtifactSetIds } from "@/types/artifact-sets";
import { CharacterIds, CharacterNames } from "@/types/characters";
import type { CharacterRecommendations } from "@/types/characters-recommendations";
import { Stats } from "@/types/stats";
import { VideoSourceIds } from "@/types/video-sources";

export default {
  id: CharacterIds.PRUNE,
  artifacts: {
    sets: [{ ids: [ArtifactSetIds.VIRIDESCENT_VENERER] }, { ids: [ArtifactSetIds.CELESTIAL_GIFT] }],
    stats: {
      sands: [{ name: Stats.ATK_PERCENTAGE }, { name: Stats.ENERGY_RECHARGE }],
      goblet: [{ name: Stats.ATK_PERCENTAGE }],
      circlet: [{ name: Stats.ATK_PERCENTAGE }],
      additional: [{ name: Stats.ATK_PERCENTAGE }, { name: Stats.ENERGY_RECHARGE }],
    },
  },
  attackCombinations: ["Элем. навык", "Взрыв стихий (Активирует молот -> Даёт бонусы в отряд)"],
  detachments: [
    {
      description: CharacterNames.VARKA,
      template: [
        { type: "character", id: CharacterIds.VARKA },
        { type: "character", id: CharacterIds.PRUNE },
      ],
      variants: [
        [
          { type: "character", id: CharacterIds.VARKA },
          { type: "character", id: CharacterIds.PRUNE, artifactSetIds: [ArtifactSetIds.VIRIDESCENT_VENERER] },
          { type: "character", id: CharacterIds.DURIN },
          { type: "character", id: CharacterIds.NICOLE, artifactSetIds: [ArtifactSetIds.CELESTIAL_GIFT] },
        ],
      ],
    },
    {
      description: "Другие герои Ведьмовства",
      template: [
        { type: "other", title: "Дамагер из Шабаша" },
        { type: "character", id: CharacterIds.PRUNE },
      ],
      variants: [
        [
          { type: "character", id: CharacterIds.VENTI },
          { type: "character", id: CharacterIds.PRUNE },
          { type: "character", id: CharacterIds.DURIN },
          { type: "character", id: CharacterIds.NICOLE },
        ],
      ],
    },
    {
      description: "Остальные случаи",
      template: [
        { type: "other", title: "Дамагер не из Шабаша" },
        { type: "character", id: CharacterIds.PRUNE },
      ],
      variants: [
        [
          { type: "character", id: CharacterIds.FLINS },
          { type: "character", id: CharacterIds.INEFFA },
          { type: "character", id: CharacterIds.COLUMBINA },
          { type: "character", id: CharacterIds.PRUNE },
        ],
        [
          { type: "character", id: CharacterIds.GANYU },
          { type: "character", id: CharacterIds.DURIN },
          { type: "character", id: CharacterIds.NICOLE },
          { type: "character", id: CharacterIds.PRUNE },
        ],
      ],
    },
  ],
  keyConstellations: [2, 6],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_PRUNE_IN_6_6],
} as CharacterRecommendations;
