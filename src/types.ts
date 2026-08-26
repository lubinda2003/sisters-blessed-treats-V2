export interface CakeSize {
  id: string;
  name: string;
  diameter: string;
  servings: string;
  description: string;
  bestFor: string;
}

export interface CakeFlavour {
  id: string;
  name: string;
  notes: string;
  accentColor: string;
  highlight?: string;
  suggestedFile?: string;
  image?: string;
}

export interface CakeCategory {
  id: string;
  title: string;
  subtitle: string;
  priceRange: string;
  description: string;
  leadTime: string;
  features: string[];
  suggestedImage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  tag?: string;
  aspect: 'square' | 'portrait' | 'landscape';
  imageSrc?: string;
  suggestedFile: string;
}

export interface OrderDetail {
  advanceNotice: string;
  emergencyNotice: string;
  depositPercentage: number;
  deliveryProvider: string;
  deliveryFeeNote: string;
  paymentMethods: string[];
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  address: string;
  city: string;
  country: string;
  phoneDisplay: string;
  phoneRaw: string;
  email: string;
  tiktok: string;
  whatsappUrl: string;
  operatingSince: string;
}

