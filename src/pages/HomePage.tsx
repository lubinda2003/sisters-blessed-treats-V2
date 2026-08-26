import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { BUSINESS, CATEGORIES, FLAVOURS, getWhatsAppInquiryUrl } from '../data/business';
import { IMAGES } from '../assets/images';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { SEO } from '../components/SEO';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0 bg-[#FDFBF7]">
      <SEO
        title="Artisan Bakery in Lusaka"
        description="Handcrafted celebration cakes, wedding tiers, and scratch bakes by dedicated religious sisters in PHI, Lusaka, Zambia."
        canonicalPath="/"
      />
      
      {/* 1. Hero Section: Clean, Uncluttered, Visual Centerpiece */}
      <section
        id="hero"
        aria-label="Welcome to Sisters Blessed Treats"
        className="relative min-h-[440px] sm:min-h-[560px] lg:min-h-[620px] flex items-center overflow-hidden bg-[#F5EFEB] border-b border-[#2D241E]/10"
      >
        {/* Background Image: Centerpiece Cake Positioned to the Right */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroCakeBg}
            alt="Artisan 3-Tier Ivory & Gold Celebration Cake"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-[82%_center] sm:object-right"
          />
          {/* Gentle Left-Biased Scrim: Keeps text readable on the left while showcasing the cake on the right */}
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#FDFBF7]/95 via-[#FDFBF7]/75 via-45% to-transparent" />
          <div className="sm:hidden absolute inset-0 bg-gradient-to-r from-[#FDFBF7]/90 via-[#FDFBF7]/55 via-65% to-transparent" />
        </div>

        {/* Hero Content: Compact and Balanced for Mobile, Expansive on Desktop */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-18 lg:py-24">
          <div className="max-w-[280px] sm:max-w-lg lg:max-w-xl space-y-2.5 sm:space-y-5">
            
            {/* Subtle Origin Kicker */}
            <span className="text-[9px] sm:text-xs uppercase tracking-[0.22em] text-[#B4975A] font-semibold block font-sans">
              Handcrafted in Lusaka
            </span>

            {/* Main Headline (Compact on Mobile, Grand on Desktop) */}
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-[#2D241E] leading-[1.18] tracking-tight">
              Cakes crafted for life’s special moments.
            </h1>

            {/* Concise Tagline */}
            <p className="text-[#2D241E]/80 text-xs sm:text-base font-normal leading-relaxed font-sans">
              Artisan celebration cakes, wedding tiers, and scratch bakes prepared with quiet care by religious sisters in PHI.
            </p>

            {/* Action Buttons: Compact and Proportionate on Mobile */}
            <div className="pt-1.5 flex flex-row items-center gap-2 sm:gap-4 flex-wrap">
              <Link
                to="/cakes"
                id="hero-cta-explore"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:px-6 sm:py-3 bg-[#2D241E] hover:bg-[#B4975A] text-[#FDFBF7] text-[11px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.16em] font-medium transition-colors duration-200 shadow-xs"
              >
                <span>Explore Cakes</span>
                <ArrowRight className="w-3 h-3 text-[#B4975A]" />
              </Link>

              <a
                href={getWhatsAppInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-whatsapp"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:px-6 sm:py-3 bg-[#FDFBF7]/95 hover:bg-[#F5F0E6] text-[#2D241E] border border-[#2D241E]/25 hover:border-[#B4975A] text-[11px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.16em] font-semibold transition-colors duration-200 shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#B4975A]" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Cake Collections Showcase */}
      <section
        id="home-cakes"
        aria-label="Cake Offerings"
        className="py-12 sm:py-18 bg-[#FDFBF7]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 pb-3 border-b border-[#2D241E]/10 gap-3">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B4975A] font-semibold block mb-1 font-sans">
                Our Creations
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2D241E]">
                Cakes for Every Occasion
              </h2>
            </div>
            <Link
              to="/cakes"
              className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-[#2D241E] hover:text-[#B4975A] font-medium border-b border-[#2D241E]/30 pb-0.5 transition-colors"
            >
              <span>View Full Menu</span>
              <ArrowRight className="w-3 h-3 text-[#B4975A]" />
            </Link>
          </div>

          {/* 3 Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-md sm:max-w-none mx-auto">
            {CATEGORIES.map((category) => (
              <div
                key={category.id}
                className="flex flex-col justify-between space-y-3 group bg-[#F5F0E6]/50 sm:bg-transparent p-3 sm:p-0 border border-[#2D241E]/10 sm:border-0"
              >
                <div className="space-y-2.5">
                  <div className="overflow-hidden">
                    <ImagePlaceholder
                      id={`home-cake-${category.id}`}
                      label={category.title}
                      subLabel={category.subtitle}
                      aspectRatio="landscape"
                      suggestedFile={category.suggestedImage}
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold block font-sans">
                      {category.subtitle}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-[#2D241E]">
                      {category.title}
                    </h3>
                    <p className="font-serif text-sm font-medium text-[#B4975A]">
                      {category.priceRange}
                    </p>
                    <p className="text-xs text-[#2D241E]/75 leading-relaxed font-sans pt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={getWhatsAppInquiryUrl({ category: category.title })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-[#2D241E] hover:text-[#B4975A] font-medium border-b border-[#2D241E]/30 hover:border-[#B4975A] pb-0.5 transition-colors"
                  >
                    <span>Inquire on WhatsApp</span>
                    <ArrowRight className="w-3 h-3 text-[#B4975A]" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Signature Flavours */}
      <section
        id="home-flavours"
        aria-label="Signature Flavours"
        className="py-10 sm:py-16 bg-[#F5EFEB] border-y border-[#2D241E]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-10 pb-3 border-b border-[#2D241E]/10 gap-3">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B4975A] font-semibold block mb-1 font-sans">
                Baked from Scratch
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2D241E]">
                Signature Flavours
              </h2>
            </div>
            <Link
              to="/flavours"
              className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-[#2D241E] hover:text-[#B4975A] font-medium border-b border-[#2D241E]/30 pb-0.5 transition-colors self-start sm:self-auto"
            >
              <span>Explore All Flavours</span>
              <ArrowRight className="w-3 h-3 text-[#B4975A]" />
            </Link>
          </div>

          {/* 4 Interactive Visual Flavour Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {FLAVOURS.map((flavour) => (
              <Link
                key={flavour.id}
                to={`/flavours#flavour-${flavour.id}`}
                className="bg-[#FDFBF7] border border-[#2D241E]/10 p-2.5 sm:p-3.5 hover:border-[#B4975A] hover:shadow-xs transition-all duration-200 flex flex-col justify-between group rounded-xs"
              >
                <div className="space-y-2.5">
                  <div className="overflow-hidden relative rounded-xs">
                    <ImagePlaceholder
                      id={`home-flavour-${flavour.id}`}
                      label={flavour.name}
                      subLabel={flavour.highlight}
                      aspectRatio="landscape"
                      suggestedFile={flavour.suggestedFile}
                    />
                    <div
                      className="absolute top-2 right-2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-white/90 shadow-xs"
                      style={{ backgroundColor: flavour.accentColor }}
                      title={`${flavour.name} Accent`}
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.18em] text-[#B4975A] font-semibold block font-sans truncate">
                      {flavour.highlight}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-normal text-[#2D241E] group-hover:text-[#B4975A] transition-colors">
                      {flavour.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#2D241E]/75 leading-relaxed font-sans line-clamp-2 sm:line-clamp-3">
                      {flavour.notes}
                    </p>
                  </div>
                </div>

                <div className="pt-2 sm:pt-2.5 mt-2 border-t border-[#2D241E]/8 flex items-center justify-between">
                  <span className="text-[9px] sm:text-[10px] text-[#2D241E]/60 uppercase tracking-widest font-sans">
                    Scratch Recipe
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-[#B4975A] uppercase tracking-wider font-semibold font-sans group-hover:translate-x-0.5 transition-transform">
                    Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Visual Portfolio Preview */}
      <section
        id="home-gallery"
        aria-label="Cake Gallery Preview"
        className="py-12 sm:py-18 bg-[#FDFBF7]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 pb-3 border-b border-[#2D241E]/10 gap-3">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B4975A] font-semibold block mb-1 font-sans">
                Gallery
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2D241E]">
                Recent Confections
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-[#2D241E] hover:text-[#B4975A] font-medium border-b border-[#2D241E]/30 pb-0.5 transition-colors"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-3 h-3 text-[#B4975A]" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-6">
            <div className="space-y-1.5">
              <ImagePlaceholder
                id="home-gallery-1"
                label="Celebration Tier"
                subLabel="Single Tier Design"
                aspectRatio="landscape"
                suggestedFile={IMAGES.galleryCelebration1}
              />
              <p className="text-[11px] sm:text-xs font-serif text-[#2D241E] truncate">Single Tier Occasion</p>
            </div>
            <div className="space-y-1.5">
              <ImagePlaceholder
                id="home-gallery-2"
                label="Wedding Cake"
                subLabel="Multi-Tier Architecture"
                aspectRatio="landscape"
                suggestedFile={IMAGES.galleryWedding1}
              />
              <p className="text-[11px] sm:text-xs font-serif text-[#2D241E] truncate">Multi-Tier Wedding</p>
            </div>
            <div className="col-span-2 sm:col-span-1 space-y-1.5">
              <ImagePlaceholder
                id="home-gallery-3"
                label="Red Velvet Crumb"
                subLabel="Artisan Sponge Detail"
                aspectRatio="landscape"
                suggestedFile={IMAGES.galleryRedvelvet1}
              />
              <p className="text-[11px] sm:text-xs font-serif text-[#2D241E] truncate">Signature Red Velvet</p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Simple Inquiry / Order Banner */}
      <section
        id="home-cta"
        aria-label="Order Inquiry"
        className="py-12 sm:py-16 bg-[#F5F0E6] border-t border-[#2D241E]/10"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#B4975A] font-semibold block font-sans">
            Custom Orders
          </span>
          
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2D241E]">
            Have a celebration in mind?
          </h2>

          <p className="text-[#2D241E]/80 text-xs sm:text-sm font-sans leading-relaxed">
            Message us on WhatsApp to discuss sizes, flavor combinations, and custom designs for your event.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
            <a
              href={getWhatsAppInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2D241E] text-[#FDFBF7] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#B4975A] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#B4975A]" />
              <span>Order on WhatsApp</span>
            </a>
            <Link
              to="/order"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-[#2D241E] hover:text-[#B4975A] font-medium border-b border-[#2D241E]/30 pb-0.5 transition-colors"
            >
              <span>Ordering Guide</span>
              <ArrowRight className="w-3 h-3 text-[#B4975A]" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
