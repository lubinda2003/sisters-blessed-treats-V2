import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MessageCircle, ArrowRight, Check } from 'lucide-react';
import { FLAVOURS, getWhatsAppInquiryUrl } from '../data/business';
import { IMAGES } from '../assets/images';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { SEO } from '../components/SEO';

export const FlavoursPage: React.FC = () => {
  const flavourDetails = [
    {
      id: 'vanilla',
      name: 'Vanilla',
      subtitle: 'Pure Madagascar Essence & Buttercream',
      notes: 'An aromatic, delicate golden crumb infused with pure vanilla extract. Balanced with velvety whipped buttercream that enhances without overpowering.',
      accentColor: '#D9B982',
      pairing: 'Pairs beautifully with fresh floral decoration and all occasion tiers.',
      suggestedFile: IMAGES.flavourVanilla,
    },
    {
      id: 'strawberry',
      name: 'Strawberry',
      subtitle: 'Natural Berry Infusion & Blush Finish',
      notes: 'Bright berry notes, balanced natural sweetness, and a soft, fragrant sponge texture. Handcrafted with authentic fruit reduction.',
      accentColor: '#C47474',
      pairing: 'Popular for baby showers, feminine birthdays, and springtime celebrations.',
      suggestedFile: IMAGES.flavourStrawberry,
    },
    {
      id: 'chocolate',
      name: 'Chocolate',
      subtitle: 'Decadent Cocoa Richness & Silky Glaze',
      notes: 'Rich cocoa sponge baked with deep moisture and layered with luscious chocolate fudge buttercream. Pure indulgence for chocolate connoisseurs.',
      accentColor: '#5C3A21',
      pairing: 'A standout crowd favorite for milestone parties and celebration centerpieces.',
      suggestedFile: IMAGES.flavourChocolate,
    },
    {
      id: 'red-velvet',
      name: 'Red Velvet',
      subtitle: 'Signature Crimson Sponge & Smooth Frosting',
      notes: 'Classic crimson sponge with a nuanced whisper of cocoa and buttermilk tang, married seamlessly with silky vanilla frosting.',
      accentColor: '#8C2B32',
      pairing: 'The quintessential centerpiece for romantic unions, weddings, and anniversaries.',
      suggestedFile: IMAGES.flavourRedvelvet,
    },
  ];

  return (
    <div className="py-8 sm:py-14 bg-[#FDFBF7]">
      <SEO
        title="Signature Flavours"
        description="Discover our 4 scratch-baked flavours: pure Vanilla, natural Strawberry, rich Chocolate, and signature Red Velvet."
        canonicalPath="/flavours"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16 lg:space-y-20">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F5F0E6] border border-[#B4975A]/30 text-[#B4975A] text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium rounded-[2px]">
            <Sparkles className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-[#B4975A]" />
            <span>Artisan Bakery Recipes</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D241E] leading-tight tracking-tight">
            Four Signature Flavours
          </h1>
          <p className="text-[#2D241E]/80 text-base sm:text-lg font-normal leading-relaxed font-sans">
            Prepared from scratch with pure butter, real cocoa, honest vanilla extracts, and natural berry infusions. Never artificial pre-mixes.
          </p>
        </div>

        {/* 4 Flavours Editorial Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {flavourDetails.map((flavour) => (
            <div
              key={flavour.id}
              id={`flavour-${flavour.id}`}
              className="bg-[#F5F0E6] border border-[#B4975A]/25 rounded-[2px] p-4 sm:p-5 hover:border-[#B4975A] hover:shadow-xs transition-all duration-200 flex flex-col justify-between group space-y-5"
            >
              <div className="space-y-3.5">
                <div className="relative overflow-hidden rounded-[2px]">
                  <ImagePlaceholder
                    id={`flavour-image-${flavour.id}`}
                    label={`${flavour.name} Recipe`}
                    subLabel={flavour.subtitle}
                    aspectRatio="landscape"
                    suggestedFile={flavour.suggestedFile}
                    priorityBadge={flavour.name}
                  />
                  <div
                    className="absolute top-3 right-3 w-3.5 h-3.5 rounded-full border-2 border-[#FDFBF7] shadow-xs"
                    style={{ backgroundColor: flavour.accentColor }}
                    title={`${flavour.name} Palette Indicator`}
                  />
                </div>

                <div className="space-y-2 p-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold block font-sans">
                      Signature Recipe
                    </span>
                    <span className="text-[9px] text-[#2D241E]/50 uppercase tracking-widest font-sans">
                      Scratch Baked
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl font-normal text-[#2D241E] group-hover:text-[#B4975A] transition-colors">
                    {flavour.name}
                  </h2>
                  <p className="text-xs font-serif italic text-[#B4975A]">
                    {flavour.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#2D241E]/80 leading-relaxed font-sans pt-1">
                    {flavour.notes}
                  </p>

                  <div className="pt-2 border-t border-[#2D241E]/10">
                    <p className="text-[11px] text-[#2D241E]/70 font-sans">
                      <strong>Pairing:</strong> {flavour.pairing}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#2D241E]/10">
                <a
                  href={getWhatsAppInquiryUrl({ flavour: flavour.name })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 bg-[#2D241E] text-[#FDFBF7] text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-medium rounded-[2px] hover:bg-[#B4975A] transition-colors duration-200 shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#B4975A]" />
                  <span>Order {flavour.name} on WhatsApp →</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Flavour Combinations & Tiering Info (Editorial Banner) */}
        <div className="py-8 sm:py-10 px-6 sm:px-10 bg-[#F5F0E6] border border-[#B4975A]/25 rounded-[2px] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl space-y-1 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B4975A] font-semibold block font-sans">
              Multi-Flavour Tiers
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#2D241E]">
              Custom Combinations for Multi-Tier Cakes
            </h3>
            <p className="text-xs sm:text-sm text-[#2D241E]/80 font-sans leading-relaxed">
              For 2-tier and 3-tier wedding or celebration cakes, you may select different flavours for each tier (for example, rich Chocolate on the bottom tier and delicate Vanilla or Strawberry on the top tier).
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 shrink-0">
            <Link
              to="/cakes"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-[#2D241E] text-[#FDFBF7] text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-medium rounded-[2px] hover:bg-[#B4975A] transition-colors duration-200 shadow-xs"
            >
              <span>View cake tiers →</span>
            </Link>
            <Link
              to="/order"
              className="group inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#2D241E] hover:text-[#B4975A] font-medium border-b border-[#2D241E]/30 hover:border-[#B4975A] pb-0.5 transition-all duration-200"
            >
              <span>How to order</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B4975A] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

