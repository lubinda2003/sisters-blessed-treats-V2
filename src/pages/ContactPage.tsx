import React from 'react';
import { Sparkles, MessageCircle, Phone, Mail, MapPin, Clock, Share2, ArrowRight } from 'lucide-react';
import { BUSINESS, getWhatsAppInquiryUrl } from '../data/business';
import { SEO } from '../components/SEO';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-8 sm:py-14 bg-[#FDFBF7]">
      <SEO
        title="Contact & Order Inquiries"
        description="Connect with Sisters Blessed Treats in PHI, Lusaka. Order on WhatsApp, call, or email for custom cakes and wedding consultations."
        canonicalPath="/contact"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16 lg:space-y-20">
        
        {/* Page Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F5F0E6] border border-[#B4975A]/30 text-[#B4975A] text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium rounded-[2px]">
            <Sparkles className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-[#B4975A]" />
            <span>Connect with the Sisters</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D241E] leading-tight tracking-tight">
            Contact & Order Inquiries
          </h1>
          <p className="text-[#2D241E]/80 text-base sm:text-lg font-normal leading-relaxed font-sans">
            We would be blessed to bake for your upcoming occasion. Reach out directly via WhatsApp, phone, or email.
          </p>
        </div>

        {/* Primary Contact Channels Grid (Editorial Split) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* WhatsApp / Direct Phone */}
          <div className="bg-[#F5F0E6] border border-[#B4975A]/25 rounded-[2px] p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#B4975A] hover:shadow-xs transition-all duration-200">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold block font-sans">
                Primary Channel
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2D241E]">
                WhatsApp & Direct Call
              </h2>
              <p className="text-xs sm:text-sm text-[#2D241E]/80 leading-relaxed font-sans">
                The fastest way to confirm date availability, discuss custom flavours, and share design inspiration photos.
              </p>
              <div className="py-3 border-y border-[#2D241E]/12">
                <span className="font-serif text-2xl font-normal text-[#2D241E] block">
                  {BUSINESS.phoneDisplay}
                </span>
                <span className="text-[11px] text-[#2D241E]/60 font-sans block mt-0.5">
                  Available for orders and inquiries daily
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2D241E] text-[#FDFBF7] text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-medium rounded-[2px] hover:bg-[#B4975A] transition-colors duration-200 shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#B4975A]" />
                <span>Order on WhatsApp →</span>
              </a>
            </div>
          </div>

          {/* Email & Location */}
          <div className="bg-[#F5F0E6] border border-[#B4975A]/25 rounded-[2px] p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#B4975A] hover:shadow-xs transition-all duration-200">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold block font-sans">
                Bakery Location
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2D241E]">
                Kitchen & Workshop
              </h2>
              <p className="text-xs sm:text-sm text-[#2D241E]/80 leading-relaxed font-sans">
                Located in the quiet neighborhood of PHI on Paul Ngozi Road in Lusaka. Order collection and direct consultations arranged by appointment.
              </p>
              <div className="py-3 border-y border-[#2D241E]/12 space-y-1">
                <p className="font-serif text-lg text-[#2D241E]">
                  {BUSINESS.address}, {BUSINESS.city}, Zambia
                </p>
                <p className="text-xs text-[#2D241E]/75 font-sans">
                  Email: <a href={`mailto:${BUSINESS.email}`} className="text-[#B4975A] hover:underline font-medium">{BUSINESS.email}</a>
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`mailto:${BUSINESS.email}`}
                className="group inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#2D241E] hover:text-[#B4975A] font-medium border-b border-[#2D241E]/30 hover:border-[#B4975A] pb-0.5 transition-all duration-200"
              >
                <span>Send an email inquiry</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B4975A] transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>

        {/* Quick Details Strip */}
        <div className="py-8 sm:py-10 px-6 sm:px-8 bg-[#F5F0E6] border border-[#B4975A]/25 rounded-[2px] grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-1">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold block font-sans">Social Media</span>
            <p className="font-serif text-base text-[#2D241E]">TikTok</p>
            <p className="text-xs text-[#2D241E]/70 font-sans">@{BUSINESS.tiktok}</p>
          </div>

          <div className="space-y-1">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold block font-sans">Order Lead Time</span>
            <p className="font-serif text-base text-[#2D241E]">2+ Days Advance</p>
            <p className="text-xs text-[#2D241E]/70 font-sans">For celebration cakes</p>
          </div>

          <div className="space-y-1">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold block font-sans">Emergency Slots</span>
            <p className="font-serif text-base text-[#2D241E]">Rush Orders</p>
            <p className="text-xs text-[#2D241E]/70 font-sans">Subject to daily capacity</p>
          </div>
        </div>

        {/* Direct Action Banner */}
        <div className="py-12 px-6 sm:px-10 bg-[#2D241E] text-[#FDFBF7] text-center space-y-4 rounded-[2px]">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal max-w-xl mx-auto">
            Ready to arrange your cake?
          </h2>
          <p className="text-xs sm:text-sm text-[#CFC2B6] max-w-md mx-auto font-sans leading-relaxed">
            Message the sisters directly on WhatsApp to discuss your event date, serving count, and custom decorations.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#B4975A] text-[#2D241E] text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-semibold rounded-[2px] hover:bg-[#c9aa66] transition-colors duration-200 shadow-xs cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#2D241E]" />
              <span>Order on WhatsApp →</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

