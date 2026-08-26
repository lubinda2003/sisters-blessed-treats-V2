import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MessageCircle, ArrowRight, Check } from 'lucide-react';
import { CATEGORIES, SIZES, getWhatsAppInquiryUrl } from '../data/business';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { SEO } from '../components/SEO';

export const CakesPage: React.FC = () => {
  const celebrationCake = CATEGORIES.find((c) => c.id === 'celebration-cakes')!;
  const weddingCake = CATEGORIES.find((c) => c.id === 'wedding-cakes')!;
  const customCake = CATEGORIES.find((c) => c.id === 'custom-cakes')!;

  return (
    <div className="py-8 sm:py-14 bg-[#FDFBF7]">
      <SEO
        title="Cakes for Every Occasion"
        description="Explore custom celebration cakes, multi-tier wedding centerpieces, sizes, and pricing handcrafted by Sisters Blessed Treats in PHI, Lusaka."
        canonicalPath="/cakes"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-14 sm:space-y-20">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#B4975A] font-semibold block font-sans">
            Artisan Cake Offerings
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D241E] leading-tight tracking-tight">
            Handcrafted for life's meaningful celebrations.
          </h1>
          <p className="text-[#2D241E]/80 text-base sm:text-lg font-normal leading-relaxed font-sans">
            Every creation is prepared fresh to order in PHI, Lusaka, using honest ingredients and tailored to your guest count and aesthetic vision.
          </p>
        </div>

        {/* 3 Main Offerings: Editorial 3-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-md lg:max-w-none mx-auto">
          
          {/* Offering 1: Celebration Cakes */}
          <div
            id="cakes-celebration"
            className="flex flex-col justify-between space-y-5 bg-[#F5F0E6]/50 lg:bg-transparent p-4 lg:p-0 border border-[#2D241E]/10 lg:border-0"
          >
            <div className="space-y-3.5">
              <div className="overflow-hidden">
                <ImagePlaceholder
                  id="cakes-celebration-image"
                  label={celebrationCake.title}
                  subLabel="Birthdays, Graduations & Milestones"
                  aspectRatio="landscape"
                  suggestedFile={celebrationCake.suggestedImage}
                  priorityBadge="4″ – 8″ Tiers"
                />
              </div>

              <div className="space-y-2.5 pt-1">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold block font-sans">
                    {celebrationCake.subtitle}
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#2D241E] mt-0.5">
                    {celebrationCake.title}
                  </h2>
                </div>

                <div className="py-1.5 border-y border-[#2D241E]/12 flex items-baseline justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-[#2D241E]/60 font-sans">Price Guide</span>
                  <span className="font-serif text-base sm:text-lg font-medium text-[#B4975A]">
                    {celebrationCake.priceRange}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#2D241E]/80 leading-relaxed font-sans">
                  {celebrationCake.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-[#2D241E]/10">
                  <span className="text-[9px] uppercase tracking-wider text-[#2D241E]/70 font-semibold block font-sans">
                    Includes & Details:
                  </span>
                  <ul className="space-y-1 text-xs text-[#2D241E]/85 font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-[#B4975A] font-serif">•</span>
                      <span>Sizes: 4″ (2–4 servings), 6″ (6–10), 8″ (14–20+)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B4975A] font-serif">•</span>
                      <span>4 flavours: Vanilla, Strawberry, Chocolate, Red Velvet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B4975A] font-serif">•</span>
                      <span>Custom piping, buttercream textures & inscriptions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppInquiryUrl({ category: 'Celebration Cake' })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#2D241E] text-[#FDFBF7] text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-medium rounded-[2px] hover:bg-[#B4975A] transition-colors duration-200"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#B4975A]" />
                <span>Inquire on WhatsApp →</span>
              </a>
            </div>
          </div>

          {/* Offering 2: Wedding Cakes */}
          <div
            id="cakes-wedding"
            className="flex flex-col justify-between space-y-5 bg-[#F5F0E6]/50 lg:bg-transparent p-4 lg:p-0 border border-[#2D241E]/10 lg:border-0"
          >
            <div className="space-y-3.5">
              <div className="overflow-hidden">
                <ImagePlaceholder
                  id="cakes-wedding-image"
                  label={weddingCake.title}
                  subLabel="Matrimonial Architecture"
                  aspectRatio="landscape"
                  suggestedFile={weddingCake.suggestedImage}
                  priorityBadge="Multi-Tier"
                />
              </div>

              <div className="space-y-2.5 pt-1">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold block font-sans">
                    {weddingCake.subtitle}
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#2D241E] mt-0.5">
                    {weddingCake.title}
                  </h2>
                </div>

                <div className="py-1.5 border-y border-[#2D241E]/12 flex items-baseline justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-[#2D241E]/60 font-sans">Price Guide</span>
                  <span className="font-serif text-base sm:text-lg font-medium text-[#B4975A]">
                    {weddingCake.priceRange}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#2D241E]/80 leading-relaxed font-sans">
                  {weddingCake.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-[#2D241E]/10">
                  <span className="text-[9px] uppercase tracking-wider text-[#2D241E]/70 font-semibold block font-sans">
                    Includes & Details:
                  </span>
                  <ul className="space-y-1 text-xs text-[#2D241E]/85 font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-[#B4975A] font-serif">•</span>
                      <span>2-tier, 3-tier, and multi-tier architectural options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B4975A] font-serif">•</span>
                      <span>Different flavours for individual tiers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B4975A] font-serif">•</span>
                      <span>Personalized WhatsApp consultation on styling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppInquiryUrl({ category: 'Wedding Cake' })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#2D241E] text-[#FDFBF7] text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-medium rounded-[2px] hover:bg-[#B4975A] transition-colors duration-200"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#B4975A]" />
                <span>Consult on Wedding Cake →</span>
              </a>
            </div>
          </div>

          {/* Offering 3: Custom & Specialty Cakes */}
          <div
            id="cakes-custom"
            className="flex flex-col justify-between space-y-5 bg-[#F5F0E6]/50 lg:bg-transparent p-4 lg:p-0 border border-[#2D241E]/10 lg:border-0"
          >
            <div className="space-y-3.5">
              <div className="overflow-hidden">
                <ImagePlaceholder
                  id="cakes-custom-image"
                  label={customCake.title}
                  subLabel="Bespoke Themes & Formats"
                  aspectRatio="landscape"
                  suggestedFile={customCake.suggestedImage}
                  priorityBadge="Bespoke"
                />
              </div>

              <div className="space-y-2.5 pt-1">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold block font-sans">
                    {customCake.subtitle}
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#2D241E] mt-0.5">
                    {customCake.title}
                  </h2>
                </div>

                <div className="py-1.5 border-y border-[#2D241E]/12 flex items-baseline justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-[#2D241E]/60 font-sans">Price Guide</span>
                  <span className="font-serif text-base sm:text-lg font-medium text-[#B4975A]">
                    {customCake.priceRange}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#2D241E]/80 leading-relaxed font-sans">
                  {customCake.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-[#2D241E]/10">
                  <span className="text-[9px] uppercase tracking-wider text-[#2D241E]/70 font-semibold block font-sans">
                    Includes & Details:
                  </span>
                  <ul className="space-y-1 text-xs text-[#2D241E]/85 font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-[#B4975A] font-serif">•</span>
                      <span>Custom color palettes, floral piping, and toppers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B4975A] font-serif">•</span>
                      <span>Corporate logos, graduation themes, and anniversaries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B4975A] font-serif">•</span>
                      <span>Direct quote tailored to your design inspiration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppInquiryUrl({ category: 'Custom Cake' })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#2D241E] text-[#FDFBF7] text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-medium rounded-[2px] hover:bg-[#B4975A] transition-colors duration-200"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#B4975A]" />
                <span>Request Custom Quote →</span>
              </a>
            </div>
          </div>
        </div>

        {/* Tier Sizing Guide (Editorial Clean Strip) */}
        <div className="py-10 sm:py-14 px-6 sm:px-10 bg-[#F5F0E6] border-y border-[#2D241E]/10 space-y-8">
          <div className="max-w-2xl space-y-1">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B4975A] font-semibold block font-sans">
              Portion Guide
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2D241E]">
              Selecting the Right Tier Size
            </h2>
            <p className="text-xs sm:text-sm text-[#2D241E]/80 font-sans">
              Approximate portions based on generous party slices. Multi-tier arrangements combine multiple diameters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {SIZES.map((size) => (
              <div
                key={size.id}
                className="border-t border-[#2D241E]/15 pt-4 space-y-2"
              >
                <span className="text-[10px] uppercase tracking-wider text-[#B4975A] font-semibold block font-sans">
                  {size.diameter}
                </span>
                <h3 className="font-serif text-xl font-normal text-[#2D241E]">
                  {size.name}
                </h3>
                <p className="font-serif text-sm font-medium text-[#B4975A]">
                  {size.servings}
                </p>
                <p className="text-xs text-[#2D241E]/75 leading-relaxed font-sans">
                  {size.description}
                </p>
                <div className="pt-2">
                  <span className="text-[11px] text-[#2D241E]/60 italic font-serif">
                    Best for: {size.bestFor}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial Links Out to Flavours & Ordering */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          <div className="border-t border-[#2D241E]/20 pt-6 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold block font-sans">
                Recipes
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#2D241E]">
                Signature Flavour Options
              </h3>
              <p className="text-xs sm:text-sm text-[#2D241E]/80 font-sans leading-relaxed">
                Choose from classic Vanilla, berry Strawberry, decadent Chocolate, or signature Red Velvet.
              </p>
            </div>
            <div className="pt-2">
              <Link
                to="/flavours"
                className="group inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#2D241E] hover:text-[#B4975A] font-medium border-b border-[#2D241E]/40 hover:border-[#B4975A] pb-1 transition-all duration-200"
              >
                <span>Explore flavours</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B4975A] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="border-t border-[#2D241E]/20 pt-6 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold block font-sans">
                Guidelines
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#2D241E]">
                How to Place an Order
              </h3>
              <p className="text-xs sm:text-sm text-[#2D241E]/80 font-sans leading-relaxed">
                Learn about the 4-step ordering process, 50% deposit, advance notice, and Lusaka delivery.
              </p>
            </div>
            <div className="pt-2">
              <Link
                to="/order"
                className="group inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#2D241E] hover:text-[#B4975A] font-medium border-b border-[#2D241E]/40 hover:border-[#B4975A] pb-1 transition-all duration-200"
              >
                <span>View ordering guide</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B4975A] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

