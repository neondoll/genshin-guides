import { ArtifactSetNames } from "@/types/artifact-sets.types";
import { CharacterNames } from "@/types/characters.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { ElementNames } from "@/types/elements.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponNames } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [{ type: "complete", name: ArtifactSetNames.A_DAY_CARVED_FROM_RISING_WINDS }],
    stats: {
      sands: [{ name: Stats.ATK_PERCENTAGE }],
      goblet: [{ name: Stats.ATK_PERCENTAGE }, { name: Stats.PYRO_DMG_BONUS }],
      circlet: [{ name: Stats.CRIT_RATE }, { name: Stats.CRIT_DMG }],
      additional: [{ name: Stats.CRIT_RATE }, { name: Stats.CRIT_DMG }, { name: Stats.ATK_PERCENTAGE }],
    },
  },
  detachments: [
    {
      template: [
        { type: "character", name: CharacterNames.VARKA },
        { type: "element", name: ElementNames.PYRO },
        { type: "element", name: ElementNames.PYRO },
        { type: "element", name: ElementNames.ANEMO },
      ],
      variants: [
        [
          { type: "character", name: CharacterNames.VARKA },
          { type: "character", name: CharacterNames.BENNETT },
          { type: "character", name: CharacterNames.DURIN },
          { type: "character", name: CharacterNames.VENTI },
        ],
        [
          { type: "character", name: CharacterNames.VARKA },
          { type: "character", name: CharacterNames.BENNETT },
          { type: "character", name: CharacterNames.DURIN },
          { type: "character", name: CharacterNames.LAN_YAN },
        ],
        [
          { type: "character", name: CharacterNames.VARKA },
          { type: "character", name: CharacterNames.BENNETT },
          { type: "character", name: CharacterNames.CHEVREUSE },
          { type: "character", name: CharacterNames.SUCROSE },
        ],
      ],
    },
    {
      template: [
        { type: "character", name: CharacterNames.VARKA },
        { type: "element", name: ElementNames.HYDRO },
        { type: "element", name: ElementNames.HYDRO },
        { type: "element", name: ElementNames.ANEMO },
      ],
      variants: [
        [
          { type: "character", name: CharacterNames.VARKA },
          { type: "character", name: CharacterNames.FURINA },
          { type: "character", name: CharacterNames.YELAN },
          { type: "character", name: CharacterNames.JEAN },
        ],
      ],
    },
    {
      template: [
        { type: "character", name: CharacterNames.VARKA },
        { type: "element", name: ElementNames.ELECTRO },
        { type: "element", name: ElementNames.ELECTRO },
        { type: "element", name: ElementNames.ANEMO },
      ],
      variants: [
        [
          { type: "character", name: CharacterNames.VARKA },
          { type: "character", name: CharacterNames.IANSAN },
          { type: "character", name: CharacterNames.KUJOU_SARA },
          { type: "character", name: CharacterNames.VENTI },
        ],
      ],
    },
    {
      template: [
        { type: "character", name: CharacterNames.VARKA },
        { type: "element", name: ElementNames.CRYO },
        { type: "element", name: ElementNames.CRYO },
        { type: "element", name: ElementNames.ANEMO },
      ],
      variants: [
        [
          { type: "character", name: CharacterNames.VARKA },
          { type: "character", name: CharacterNames.ESCOFFIER },
          { type: "character", name: CharacterNames.SHENHE },
          { type: "character", name: CharacterNames.VENTI },
        ],
      ],
    },
  ],
  signatureWeaponNames: [WeaponNames.WOLFS_GRAVESTONE],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_VARKA_IN_6_4_xPandaChannelx],
  weapons: [
    { name: WeaponNames.WOLFS_GRAVESTONE, best: "Лучшее оружие", postfix: "сигна" },
    { name: WeaponNames.SERPENT_SPINE },
    { name: WeaponNames.WOLFS_GRAVESTONE },
    { name: WeaponNames.TIDAL_SHADOW, best: "Лучшее доступное оружие" },
  ],
} as CharacterRecommendations;
