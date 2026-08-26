// Centralized image mapping for Sisters Blessed Treats assets
// All images are imported as standard ESM modules so Vite hashes and bundles them into dist/assets/

import heroCakeBg from './hero_cake_bg_1787739909601.jpg';
import heroSignatureCake from './hero_signature_cake_1787593172850.jpg';
import heroCakeUser from './hero_cake_user_1787596833049.jpg';

import celebrationCake from './celebration_cake_1787593362688.jpg';
import weddingCake from './wedding_cake_1787593376445.jpg';
import customCake from './custom_cake_1787593390662.jpg';

import flavourVanilla from './flavour_vanilla_1787593518436.jpg';
import flavourStrawberry from './flavour_strawberry_1787593538696.jpg';
import flavourChocolate from './flavour_chocolate_1787593554107.jpg';
import flavourRedvelvet from './flavour_redvelvet_1787593569715.jpg';

import storyBakingCraft from './story_baking_craft_1787593189585.jpg';

import galleryCelebration1 from './gallery_celebration_1_1787593852515.jpg';
import galleryWedding1 from './gallery_wedding_1_1787593870250.jpg';
import galleryRedvelvet1 from './gallery_redvelvet_1_1787593887083.jpg';
import galleryFloral1 from './gallery_floral_1_1787593902931.jpg';
import galleryChocolate1 from './gallery_chocolate_1_1787593917484.jpg';
import galleryStrawberry1 from './gallery_strawberry_1_1787593933434.jpg';
import galleryMinimalTier from './gallery_minimal_tier_1787593962843.jpg';
import galleryCustomMilestone from './gallery_custom_milestone_1787593980887.jpg';
import galleryVanillaCrumb from './gallery_vanilla_crumb_1787594395290.jpg';
import galleryBentoVintage from './gallery_bento_vintage_1787594409068.jpg';
import galleryGrandCascade from './gallery_grand_cascade_1787594422167.jpg';
import galleryRusticBerry from './gallery_rustic_berry_1787594435133.jpg';
import galleryMilestoneGold from './gallery_milestone_gold_1787594448064.jpg';
import galleryPaletteFloral from './gallery_palette_floral_1787594462887.jpg';

export const IMAGES = {
  // Hero & Brand
  heroCakeBg,
  heroSignatureCake,
  heroCakeUser,

  // Core Categories
  celebrationCake,
  weddingCake,
  customCake,

  // Flavours
  flavourVanilla,
  flavourStrawberry,
  flavourChocolate,
  flavourRedvelvet,

  // Story & Mission
  storyBakingCraft,

  // Gallery Items
  galleryCelebration1,
  galleryWedding1,
  galleryRedvelvet1,
  galleryFloral1,
  galleryChocolate1,
  galleryStrawberry1,
  galleryMinimalTier,
  galleryCustomMilestone,
  galleryVanillaCrumb,
  galleryBentoVintage,
  galleryGrandCascade,
  galleryRusticBerry,
  galleryMilestoneGold,
  galleryPaletteFloral,
} as const;

export type ImageKey = keyof typeof IMAGES;
