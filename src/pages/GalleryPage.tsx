import React, { useState } from 'react';
import { Sparkles, MessageCircle, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS, getWhatsAppInquiryUrl } from '../data/business';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { Lightbox } from '../components/Lightbox';
import { SEO } from '../components/SEO';

interface GalleryExtendedItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  aspect: 'square' | 'portrait' | 'landscape';
  suggestedFile: string;
  description: string;
}

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryExtendedItem | null>(null);

  const portfolioItems: GalleryExtendedItem[] = [
    {
      id: 'g-1',
      title: 'Golden Celebration Tier',
      category: 'Celebration',
      tag: 'Single Tier',
      aspect: 'portrait',
      suggestedFile: '/images/cakes/gallery-celebration-1.jpg',
      description: 'Single tier birthday cake with golden brushed trim, delicate piping, and soft ivory buttercream.',
    },
    {
      id: 'g-2',
      title: 'Grand Matrimonial 3-Tier',
      category: 'Wedding',
      tag: '3-Tier Arch',
      aspect: 'portrait',
      suggestedFile: '/images/cakes/gallery-wedding-1.jpg',
      description: 'Multi-tier architectural centerpiece for holy matrimony and reception celebrations across Lusaka.',
    },
    {
      id: 'g-3',
      title: 'Artisan Red Velvet Crumb',
      category: 'Signature Flavour',
      tag: 'Crumb Detail',
      aspect: 'square',
      suggestedFile: '/images/cakes/gallery-redvelvet-1.jpg',
      description: 'Deep crimson cocoa sponge layered with velvety frosting and delicate crumb garnishing.',
    },
    {
      id: 'g-4',
      title: 'Hand-Piped Botanical Florals',
      category: 'Custom Artistry',
      tag: 'Piping Detail',
      aspect: 'square',
      suggestedFile: '/images/cakes/gallery-floral-1.jpg',
      description: 'Bespoke hand-piped buttercream botanicals and floral wreaths crafted with patience.',
    },
    {
      id: 'g-5',
      title: 'Decadent Chocolate Ganache Tier',
      category: 'Signature Flavour',
      tag: 'Pure Cocoa',
      aspect: 'landscape',
      suggestedFile: '/images/cakes/gallery-chocolate-1.jpg',
      description: 'Rich dark cocoa sponge layered with glossy chocolate glaze and smooth cocoa buttercream.',
    },
    {
      id: 'g-6',
      title: 'Strawberry Blush Celebration',
      category: 'Celebration',
      tag: 'Pastel Finish',
      aspect: 'portrait',
      suggestedFile: '/images/cakes/gallery-strawberry-1.jpg',
      description: 'Delicate strawberry infused sponge with blush buttercream swirls and natural berry accents.',
    },
    {
      id: 'g-7',
      title: 'Minimalist Ivory 2-Tier',
      category: 'Wedding',
      tag: '2-Tier Minimal',
      aspect: 'square',
      suggestedFile: '/images/cakes/gallery-minimal-tier.jpg',
      description: 'Clean architectural two-tier design with subtle palette lines for modern ceremonies.',
    },
    {
      id: 'g-8',
      title: 'Bespoke Custom Milestone Cake',
      category: 'Custom Artistry',
      tag: 'Milestone Theme',
      aspect: 'landscape',
      suggestedFile: '/images/cakes/gallery-custom-milestone.jpg',
      description: 'Tailored personalized cake designed for graduations, corporate gatherings, and anniversaries.',
    },
    {
      id: 'g-9',
      title: 'Madagascar Vanilla Bean Crumb',
      category: 'Signature Flavour',
      tag: 'Golden Sponge',
      aspect: 'square',
      suggestedFile: '/images/cakes/gallery-vanilla-crumb.jpg',
      description: 'Moist golden crumb textured with pure Madagascar bourbon vanilla bean specks and whipped frosting.',
    },
    {
      id: 'g-10',
      title: 'Vintage Lambeth Bento Cake',
      category: 'Celebration',
      tag: 'Bento Style',
      aspect: 'portrait',
      suggestedFile: '/images/cakes/gallery-bento-vintage.jpg',
      description: 'Delicate mini bento occasion cake with Victorian shell piping borders and antique pastel accents.',
    },
    {
      id: 'g-11',
      title: 'Grand 4-Tier Floral Cascade',
      category: 'Wedding',
      tag: '4-Tier Matrimony',
      aspect: 'portrait',
      suggestedFile: '/images/cakes/gallery-grand-cascade.jpg',
      description: 'Opulent matrimonial confection with cascading handcrafted sugar blossoms and edible gold foil.',
    },
    {
      id: 'g-12',
      title: 'Rustic Semi-Naked Berry Tier',
      category: 'Celebration',
      tag: 'Rustic Botanical',
      aspect: 'square',
      suggestedFile: '/images/cakes/gallery-rustic-berry.jpg',
      description: 'Delicate scraped vanilla buttercream tier crowned with fresh blackberries, sliced figs, and organic honey.',
    },
    {
      id: 'g-13',
      title: 'Milestone Black & Gold Marble',
      category: 'Custom Artistry',
      tag: '24k Gold Marble',
      aspect: 'landscape',
      suggestedFile: '/images/cakes/gallery-milestone-gold.jpg',
      description: 'Striking dark espresso and warm ivory marble finish with hand-painted gold leaf for milestone achievements.',
    },
    {
      id: 'g-14',
      title: 'Impasto Palette Knife Florals',
      category: 'Custom Artistry',
      tag: 'Palette Knife',
      aspect: 'square',
      suggestedFile: '/images/cakes/gallery-palette-floral.jpg',
      description: 'Artisan dimensional buttercream oil-painting strokes in dusty rose, champagne, and antique gold.',
    },
  ];

  const categories = ['All', 'Celebration', 'Wedding', 'Signature Flavour', 'Custom Artistry'];

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="py-8 sm:py-12 bg-[#FDFBF7]">
      <SEO
        title="Artisan Cake Gallery"
        description="View our curated portfolio of celebration cakes, wedding tiers, bespoke floral piping, and crumb textures handcrafted in Lusaka."
        canonicalPath="/gallery"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8 sm:space-y-12">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 max-w-4xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F0E6] border border-[#B4975A]/30 text-[#B4975A] text-[10px] uppercase tracking-[0.2em] font-medium rounded-xs mb-3">
              <Sparkles className="w-3 h-3 text-[#B4975A]" />
              <span>Artisan Portfolio</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D241E] leading-tight tracking-tight">
              The Artisan Cake Gallery
            </h1>
            <p className="text-[#2D241E]/80 text-sm sm:text-base mt-2 font-normal leading-relaxed font-sans">
              A curated visual collection of celebration tiers, multi-tier wedding centerpieces, bespoke florals, and crumb textures handcrafted in Lusaka.
            </p>
          </div>
          
          <div className="text-xs text-[#2D241E]/60 font-sans italic shrink-0">
            Click any cake to inspect details in lightbox
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#2D241E]/10">
          {categories.map((cat) => {
            const count = cat === 'All'
              ? portfolioItems.length
              : portfolioItems.filter((i) => i.category === cat).length;
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xs transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#2D241E] text-[#FDFBF7] shadow-xs'
                    : 'bg-[#F5F0E6] text-[#2D241E]/80 hover:text-[#2D241E] hover:bg-[#EAE2D5]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-[#B4975A] text-[#2D241E] font-semibold' : 'bg-[#2D241E]/10 text-[#2D241E]/70'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Masonry / Dynamic Aspect Ratio Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-[#F5F0E6] border border-[#B4975A]/25 rounded-xs p-2 sm:p-2.5 cursor-pointer hover:border-[#B4975A] hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="relative">
                  <ImagePlaceholder
                    id={`gallery-${item.id}`}
                    label={item.title}
                    subLabel={`${item.category} • ${item.tag}`}
                    aspectRatio={item.aspect}
                    suggestedFile={item.suggestedFile}
                    priorityBadge={item.category}
                  />

                  {/* Hover Overlay Zoom Icon */}
                  <div className="absolute inset-0 bg-[#2D241E]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none rounded-xs">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-[#FDFBF7] text-[#2D241E] text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold rounded-xs shadow-sm">
                      <ZoomIn className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#B4975A]" />
                      <span>View Cake</span>
                    </span>
                  </div>
                </div>

                <div className="p-2 sm:p-3">
                  <div className="flex items-center justify-between text-[8px] sm:text-[10px] uppercase tracking-wider text-[#B4975A] font-semibold mb-0.5 sm:mb-1">
                    <span>{item.category}</span>
                    <span className="hidden sm:inline">{item.tag}</span>
                  </div>
                  <h3 className="font-serif text-sm sm:text-base font-normal text-[#2D241E] group-hover:text-[#B4975A] transition-colors line-clamp-1 sm:line-clamp-none">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#2D241E]/75 mt-0.5 sm:mt-1 font-sans line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="px-2 sm:px-3 pb-1.5 sm:pb-2 pt-1 flex items-center justify-between border-t border-[#2D241E]/10">
                <span className="text-[9px] sm:text-[10px] text-[#2D241E]/60 uppercase tracking-widest font-sans">PHI</span>
                <span className="text-[9px] sm:text-[10px] text-[#B4975A] uppercase tracking-widest font-semibold font-sans">Inquire →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct WhatsApp Callout (Refined Editorial Banner) */}
        <div className="py-10 sm:py-12 px-6 sm:px-10 bg-[#F5F0E6] border border-[#2D241E]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#2D241E]">
              Have a specific design in mind?
            </h3>
            <p className="text-xs sm:text-sm text-[#2D241E]/80 font-sans">
              Send us reference photos on WhatsApp. We bake custom and personalised celebration cakes to order.
            </p>
          </div>
          <a
            href={getWhatsAppInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D241E] text-[#FDFBF7] text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-medium rounded-[2px] hover:bg-[#B4975A] transition-colors duration-200 shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#B4975A]" />
            <span>Send Photo on WhatsApp →</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        item={selectedItem}
      />
    </div>
  );
};
