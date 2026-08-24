import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MessageCircle, ArrowRight, Check } from 'lucide-react';
import { BUSINESS, getWhatsAppInquiryUrl } from '../data/business';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { SEO } from '../components/SEO';

export const StoryPage: React.FC = () => {
  return (
    <div className="py-8 sm:py-14 bg-[#FDFBF7]">
      <SEO
        title="Our Story & Ministry"
        description="Learn about the dedicated religious sisters behind Sisters Blessed Treats, handcrafting cakes on Paul Ngozi Road in PHI, Lusaka, Zambia."
        canonicalPath="/story"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-14 sm:space-y-20">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#B4975A] font-semibold block font-sans">
            Our Story & Ministry
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D241E] leading-tight tracking-tight">
            A ministry of sweetness, baked with devotion and quiet care.
          </h1>
          <p className="text-[#2D241E]/80 text-base sm:text-lg font-normal leading-relaxed font-sans">
            Handcrafted with prayerful patience, honest ingredients, and unhurried craftsmanship by dedicated religious sisters in Lusaka, Zambia.
          </p>
        </div>

        {/* Narrative & Kitchen Photo Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual Showcase (Span 5) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <ImagePlaceholder
                id="story-kitchen-image"
                label="Artisan Bakery Kitchen"
                subLabel="Religious Sisters in Lusaka"
                aspectRatio="portrait"
                suggestedFile="/images/story/sisters-baking-craft.jpg"
                priorityBadge="Convent Kitchen"
              />
              <div className="pt-3 flex items-center justify-between text-[11px] text-[#2D241E]/70 font-sans border-t border-[#2D241E]/10 mt-2">
                <span className="italic font-serif">Convent Kitchen • PHI, Paul Ngozi Road</span>
                <span className="text-[#B4975A] font-medium tracking-wider uppercase text-[9px]">Lusaka, Zambia</span>
              </div>
            </div>
          </div>

          {/* Narrative Content (Span 7) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 lg:pl-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2D241E] leading-snug">
              Baked as a labor of gratitude, prayer, and genuine fellowship.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#2D241E]/85 leading-relaxed font-sans">
              <p>
                Operating from our convent kitchen on Paul Ngozi Road in the quiet neighborhood of PHI, Lusaka, Sisters Blessed Treats is run by dedicated religious sisters who regard baking as a meaningful expression of hospitality, devotion, and joy.
              </p>
              <p>
                For every order entrusted to our kitchen, we bring quiet patience and prayerful care to every stage—from the delicate fold of the sponge batter to the smoothing of rich buttercream finishes.
              </p>
              <p>
                We have the privilege of handcrafting bespoke celebration tiers for family birthdays, graduations, wedding receptions, and sacred milestones across Lusaka.
              </p>
            </div>

            {/* Core Values Minimalist Strip (No Heavy Boxes) */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#2D241E]/12">
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold block font-sans">Ministry</span>
                <h3 className="font-serif text-base text-[#2D241E] font-medium">Religious Sisters</h3>
                <p className="text-xs text-[#2D241E]/75 leading-relaxed font-sans">Spiritual care, humility, and dedication in every bake.</p>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold block font-sans">Philosophy</span>
                <h3 className="font-serif text-base text-[#2D241E] font-medium">100% Made to Order</h3>
                <p className="text-xs text-[#2D241E]/75 leading-relaxed font-sans">Always fresh, pure butter, never pre-baked or frozen.</p>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold block font-sans">Community</span>
                <h3 className="font-serif text-base text-[#2D241E] font-medium">PHI, Lusaka</h3>
                <p className="text-xs text-[#2D241E]/75 leading-relaxed font-sans">Serving families, churches, and milestone celebrations.</p>
              </div>
            </div>

          </div>

        </div>

        {/* Our Baking Philosophy & Standards (Editorial Section) */}
        <div className="py-10 sm:py-14 px-6 sm:px-10 bg-[#F5F0E6] border-y border-[#2D241E]/10 space-y-8">
          <div className="max-w-2xl space-y-1">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B4975A] font-semibold block font-sans">
              Baking Standards
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2D241E]">
              Honest Ingredients, Unhurried Craft
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2 border-t border-[#2D241E]/15 pt-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold font-sans block">
                01. Pure Natural Essences
              </span>
              <p className="text-xs sm:text-sm text-[#2D241E]/80 leading-relaxed font-sans">
                We use pure vanilla extract, authentic cocoa powders, and fresh berry essences to create rich, nuanced flavor profiles.
              </p>
            </div>

            <div className="space-y-2 border-t border-[#2D241E]/15 pt-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold font-sans block">
                02. Small Batch Preparation
              </span>
              <p className="text-xs sm:text-sm text-[#2D241E]/80 leading-relaxed font-sans">
                Every cake is mixed, baked, and iced individually for your specific celebration date with dedicated artisan attention.
              </p>
            </div>

            <div className="space-y-2 border-t border-[#2D241E]/15 pt-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold font-sans block">
                03. Lusaka Delivery Care
              </span>
              <p className="text-xs sm:text-sm text-[#2D241E]/80 leading-relaxed font-sans">
                Every tier is packed securely in sturdy bakery boxing and dispatched via trusted Yango transport across Lusaka.
              </p>
            </div>
          </div>
        </div>

        {/* Heritage & Foundation */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-1">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B4975A] font-semibold block font-sans">
              Heritage & Foundation
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2D241E]">
              The Heart of Our Ministry
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-t border-[#2D241E]/20 pt-4 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold block font-sans">
                Founded in Faith
              </span>
              <h3 className="font-serif text-xl font-normal text-[#2D241E]">
                Convent Kitchen Roots
              </h3>
              <p className="text-xs text-[#2D241E]/80 leading-relaxed font-sans">
                Born out of a convent community in Lusaka with a devotion to handcrafted baking and thoughtful service to local families.
              </p>
            </div>

            <div className="border-t border-[#2D241E]/20 pt-4 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold block font-sans">
                Crafted with Purpose
              </span>
              <h3 className="font-serif text-xl font-normal text-[#2D241E]">
                Occasion & Milestone Tiers
              </h3>
              <p className="text-xs text-[#2D241E]/80 leading-relaxed font-sans">
                From children’s birthdays to graduations and anniversaries, every cake is styled to honor the occasion’s significance.
              </p>
            </div>

            <div className="border-t border-[#2D241E]/20 pt-4 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold block font-sans">
                Sacred Moments
              </span>
              <h3 className="font-serif text-xl font-normal text-[#2D241E]">
                Matrimonial Centerpieces
              </h3>
              <p className="text-xs text-[#2D241E]/80 leading-relaxed font-sans">
                Handcrafting multi-tier architectural wedding cakes tailored for solemn nuptials and celebratory receptions in Lusaka.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Navigation (Refined Story Transition) */}
        <div className="py-8 sm:py-10 px-6 sm:px-8 bg-[#F5F0E6] border border-[#2D241E]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold block font-sans">
              Discover Our Creations
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#2D241E]">
              Explore Our Cake Offerings & Recipes
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 shrink-0">
            <Link
              to="/cakes"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#2D241E] text-[#FDFBF7] text-[11px] uppercase tracking-[0.14em] font-medium rounded-xs hover:bg-[#B4975A] transition-colors duration-200"
            >
              <span>View Cake Tiers</span>
              <ArrowRight className="w-3 h-3 text-[#B4975A]" />
            </Link>
            <Link
              to="/flavours"
              className="text-[11px] uppercase tracking-[0.14em] text-[#2D241E] hover:text-[#B4975A] font-medium border-b border-[#2D241E]/30 pb-0.5 transition-colors"
            >
              <span>Signature Flavours</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

