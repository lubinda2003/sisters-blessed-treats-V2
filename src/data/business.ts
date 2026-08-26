import { BusinessInfo, CakeCategory, CakeFlavour, CakeSize, GalleryItem, OrderDetail } from '../types';
import { IMAGES } from '../assets/images';

export const BUSINESS: BusinessInfo = {
  name: 'Sisters Blessed Treats',
  tagline: 'Cakes made for life’s special moments.',
  address: 'PHI, Paul Ngozi Road',
  city: 'Lusaka',
  country: 'Zambia',
  phoneDisplay: '+260 975 023 108',
  phoneRaw: '260975023108',
  email: 'mnyambe2018@gmail.com',
  tiktok: 'Sisters Blessed Treats',
  whatsappUrl: 'https://wa.me/260975023108',
  operatingSince: 'Established in Lusaka — Handcrafted with religious devotion',
};

export const FLAVOURS: CakeFlavour[] = [
  {
    id: 'vanilla',
    name: 'Vanilla',
    notes: 'Aromatic, delicate crumb infused with pure vanilla essence and velvety buttercream.',
    accentColor: '#D9B982',
    highlight: 'Classic & Pure',
    suggestedFile: IMAGES.flavourVanilla,
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    notes: 'Bright berry notes, balanced natural sweetness, and a soft, fragrant texture.',
    accentColor: '#C47474',
    highlight: 'Fresh Berry Essence',
    suggestedFile: IMAGES.flavourStrawberry,
  },
  {
    id: 'chocolate',
    name: 'Chocolate',
    notes: 'Rich cocoa richness with deep, comforting moisture and luscious chocolate finish.',
    accentColor: '#5C3A21',
    highlight: 'Decadent & Moist',
    suggestedFile: IMAGES.flavourChocolate,
  },
  {
    id: 'red-velvet',
    name: 'Red Velvet',
    notes: 'Classic crimson crumb with a subtle hint of cocoa, paired with smooth frosting.',
    accentColor: '#8C2B32',
    highlight: 'Signature Crimson',
    suggestedFile: IMAGES.flavourRedvelvet,
  },
];

export const SIZES: CakeSize[] = [
  {
    id: '4-inch',
    name: '4 Inch Tier',
    diameter: '4″ (10 cm)',
    servings: '2 – 4 Servings',
    description: 'Intimate celebration or personal treat, prepared with artisan attention.',
    bestFor: 'Intimate birthdays & private gifting',
  },
  {
    id: '6-inch',
    name: '6 Inch Tier',
    diameter: '6″ (15 cm)',
    servings: '6 – 10 Servings',
    description: 'The classic centerpiece for family tables and gatherings.',
    bestFor: 'Family dinners & small celebrations',
  },
  {
    id: '8-inch',
    name: '8 Inch Tier',
    diameter: '8″ (20 cm)',
    servings: '14 – 20+ Servings',
    description: 'Generous tiers for grand celebrations and milestone events.',
    bestFor: 'Milestone parties & receptions',
  },
];

export const CATEGORIES: CakeCategory[] = [
  {
    id: 'celebration-cakes',
    title: 'Celebration Cakes',
    subtitle: 'Birthdays, graduations, baby showers, and personal milestones',
    priceRange: 'Approx. K200 – K5,000',
    description: 'Custom baked according to your size, signature flavour, and decorative theme. Made fresh to order with care and patience.',
    leadTime: '2+ days notice',
    suggestedImage: IMAGES.celebrationCake,
    features: [
      'Available in 4″, 6″, and 8″ tiers',
      '4 signature flavour choices',
      'Personalized inscription & styling',
    ],
  },
  {
    id: 'wedding-cakes',
    title: 'Wedding Cakes',
    subtitle: 'Centerpieces crafted for holy matrimony and receptions',
    priceRange: 'From K3,500 upwards',
    description: 'Bespoke multi-tiered architectural creations baked with spiritual devotion and refined elegance for your sacred union.',
    leadTime: 'Advance booking recommended',
    suggestedImage: IMAGES.weddingCake,
    features: [
      'Multi-tiered architectural designs',
      'Multi-flavour tier combinations',
      'Careful handling & delivery setup',
    ],
  },
  {
    id: 'custom-cakes',
    title: 'Custom & Specialty',
    subtitle: 'Bespoke designs, unique themes, and corporate confections',
    priceRange: 'Custom quote on request',
    description: 'Bring your specific concept, dietary request, or theme to life. We handcraft unique confections tailored to your vision.',
    leadTime: '3+ days notice',
    suggestedImage: IMAGES.customCake,
    features: [
      'Unique decorative themes',
      'Custom sizing & tiered layouts',
      'Direct consultation on WhatsApp',
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Golden Celebration Tier',
    category: 'Celebration',
    tag: 'Single Tier',
    aspect: 'portrait',
    suggestedFile: IMAGES.galleryCelebration1,
  },
  {
    id: 'g-2',
    title: 'Grand Matrimonial 3-Tier',
    category: 'Wedding',
    tag: '3-Tier Arch',
    aspect: 'portrait',
    suggestedFile: IMAGES.galleryWedding1,
  },
  {
    id: 'g-3',
    title: 'Artisan Red Velvet Crumb',
    category: 'Signature Flavour',
    tag: 'Crumb Detail',
    aspect: 'square',
    suggestedFile: IMAGES.galleryRedvelvet1,
  },
  {
    id: 'g-4',
    title: 'Hand-Piped Botanical Florals',
    category: 'Custom Artistry',
    tag: 'Piping Detail',
    aspect: 'square',
    suggestedFile: IMAGES.galleryFloral1,
  },
  {
    id: 'g-5',
    title: 'Decadent Chocolate Ganache Tier',
    category: 'Signature Flavour',
    tag: 'Pure Cocoa',
    aspect: 'landscape',
    suggestedFile: IMAGES.galleryChocolate1,
  },
  {
    id: 'g-6',
    title: 'Strawberry Blush Celebration',
    category: 'Celebration',
    tag: 'Pastel Finish',
    aspect: 'portrait',
    suggestedFile: IMAGES.galleryStrawberry1,
  },
  {
    id: 'g-7',
    title: 'Minimalist Ivory 2-Tier',
    category: 'Wedding',
    tag: '2-Tier Minimal',
    aspect: 'square',
    suggestedFile: IMAGES.galleryMinimalTier,
  },
  {
    id: 'g-8',
    title: 'Bespoke Custom Milestone Cake',
    category: 'Custom Artistry',
    tag: 'Milestone Theme',
    aspect: 'landscape',
    suggestedFile: IMAGES.galleryCustomMilestone,
  },
  {
    id: 'g-9',
    title: 'Madagascar Vanilla Bean Crumb',
    category: 'Signature Flavour',
    tag: 'Golden Sponge',
    aspect: 'square',
    suggestedFile: IMAGES.galleryVanillaCrumb,
  },
  {
    id: 'g-10',
    title: 'Vintage Lambeth Bento Cake',
    category: 'Celebration',
    tag: 'Bento Style',
    aspect: 'portrait',
    suggestedFile: IMAGES.galleryBentoVintage,
  },
  {
    id: 'g-11',
    title: 'Grand 4-Tier Floral Cascade',
    category: 'Wedding',
    tag: '4-Tier Matrimony',
    aspect: 'portrait',
    suggestedFile: IMAGES.galleryGrandCascade,
  },
  {
    id: 'g-12',
    title: 'Rustic Semi-Naked Berry Tier',
    category: 'Celebration',
    tag: 'Rustic Botanical',
    aspect: 'square',
    suggestedFile: IMAGES.galleryRusticBerry,
  },
  {
    id: 'g-13',
    title: 'Milestone Black & Gold Marble',
    category: 'Custom Artistry',
    tag: '24k Gold Marble',
    aspect: 'landscape',
    suggestedFile: IMAGES.galleryMilestoneGold,
  },
  {
    id: 'g-14',
    title: 'Impasto Palette Knife Florals',
    category: 'Custom Artistry',
    tag: 'Palette Knife',
    aspect: 'square',
    suggestedFile: IMAGES.galleryPaletteFloral,
  },
];

export const ORDERING_TERMS: OrderDetail = {
  advanceNotice: 'Orders should normally be placed at least 2 days in advance.',
  emergencyNotice: 'Emergency & rush orders attract an additional fee.',
  depositPercentage: 50,
  deliveryProvider: 'Yango Delivery',
  deliveryFeeNote: 'Delivery is available across Lusaka for a fee depending on the customer’s location.',
  paymentMethods: ['Bank Transfer', 'Airtel Money', 'Cash'],
};

export function getWhatsAppInquiryUrl(params?: {
  flavour?: string;
  size?: string;
  category?: string;
  date?: string;
}): string {
  const base = `https://wa.me/${BUSINESS.phoneRaw}`;
  let message = `Hello Sisters Blessed Treats, I would like to inquire about ordering a cake.`;
  
  if (params?.category) {
    message += `\nType: ${params.category}`;
  }
  if (params?.size) {
    message += `\nSize: ${params.size}`;
  }
  if (params?.flavour) {
    message += `\nFlavour: ${params.flavour}`;
  }
  if (params?.date) {
    message += `\nRequested Date: ${params.date}`;
  }
  
  message += `\n\nPlease let me know your availability and how to proceed with the 50% deposit.`;
  return `${base}?text=${encodeURIComponent(message)}`;
}

