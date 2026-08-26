import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MessageCircle, Calendar, ShieldCheck, Truck, CreditCard, Phone, Mail, MapPin, Check, ArrowRight } from 'lucide-react';
import { BUSINESS, ORDERING_TERMS, getWhatsAppInquiryUrl } from '../data/business';
import { SEO } from '../components/SEO';

export const OrderPage: React.FC = () => {
  const [selectedCakeType, setSelectedCakeType] = useState('Celebration Cake (6″ Tier)');
  const [selectedFlavour, setSelectedFlavour] = useState('Vanilla');
  const [targetDate, setTargetDate] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('Yango Delivery (Lusaka)');

  const steps = [
    {
      number: '01',
      title: 'Choose your cake',
      text: 'Select your preferred cake category (Celebration, Wedding, or Custom), size (4″, 6″, 8″ or multi-tier), and signature flavour.',
    },
    {
      number: '02',
      title: 'Tell us your requirements',
      text: 'Message us on WhatsApp with your celebration date, personalized inscription, decorative theme, and delivery address.',
    },
    {
      number: '03',
      title: 'Pay 50% deposit',
      text: 'A 50% commitment deposit secures your reserved date on our baking calendar via Bank Transfer, Airtel Money, or Cash.',
    },
    {
      number: '04',
      title: 'Delivery or collection',
      text: 'Your cake is freshly baked and dispatched via trusted Yango transport across Lusaka, or ready for collection at our kitchen in PHI.',
    },
  ];

  const handleCustomOrderClick = () => {
    const inquiryUrl = getWhatsAppInquiryUrl({
      category: selectedCakeType,
      flavour: selectedFlavour,
      date: targetDate || 'As advised',
    });
    window.open(inquiryUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-8 sm:py-14 bg-[#FDFBF7]">
      <SEO
        title="Ordering Guidelines & How to Order"
        description="Learn how to order custom cakes from Sisters Blessed Treats: 2+ days advance notice, 50% commitment deposit, and Lusaka-wide Yango delivery."
        canonicalPath="/order"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16 lg:space-y-20">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F5F0E6] border border-[#B4975A]/30 text-[#B4975A] text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium rounded-[2px]">
            <Sparkles className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-[#B4975A]" />
            <span>Ordering Guidelines</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D241E] leading-tight tracking-tight">
            How to Place Your Order
          </h1>
          <p className="text-[#2D241E]/80 text-base sm:text-lg font-normal leading-relaxed font-sans">
            Our straightforward ordering process ensures your cake is baked with dedicated time, prayerful care, and on-time delivery across Lusaka.
          </p>
        </div>

        {/* 4 Steps Sequence (Editorial Clean Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              id={`order-step-${step.number}`}
              className="bg-[#F5F0E6] border border-[#B4975A]/25 rounded-[2px] p-4 sm:p-5 hover:border-[#B4975A] hover:shadow-xs transition-all duration-200 flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold block font-sans">
                  Step {step.number}
                </span>
                <h3 className="font-serif text-xl font-normal text-[#2D241E] group-hover:text-[#B4975A] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#2D241E]/80 leading-relaxed font-sans">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Information & Logistics Strip (Editorial Section) */}
        <div className="py-8 sm:py-10 px-6 sm:px-10 bg-[#F5F0E6] border border-[#B4975A]/25 rounded-[2px] space-y-8">
          <div className="max-w-2xl space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#FDFBF7] border border-[#B4975A]/30 text-[#B4975A] text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium rounded-[2px] mb-1">
              <Sparkles className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-[#B4975A]" />
              <span>Bakery Policies</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2D241E]">
              Terms, Timeline & Delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Order Information */}
            <div className="space-y-2 bg-[#FDFBF7] border border-[#B4975A]/20 rounded-[2px] p-4 sm:p-5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold font-sans block">
                01. Advance Notice
              </span>
              <h3 className="font-serif text-lg font-normal text-[#2D241E]">
                2+ Days Notice
              </h3>
              <ul className="space-y-1.5 text-xs text-[#2D241E]/80 font-sans pt-1">
                <li className="flex items-start gap-2">
                  <span className="text-[#B4975A] font-serif">•</span>
                  <span><strong>Standard Notice:</strong> Orders should be placed at least <strong>2 days ahead</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B4975A] font-serif">•</span>
                  <span><strong>Wedding Tiers:</strong> Multi-tier cakes should be booked 1–2 weeks in advance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B4975A] font-serif">•</span>
                  <span><strong>Rush Orders:</strong> Subject to kitchen capacity.</span>
                </li>
              </ul>
            </div>

            {/* Delivery & Collection */}
            <div className="space-y-2 bg-[#FDFBF7] border border-[#B4975A]/20 rounded-[2px] p-4 sm:p-5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold font-sans block">
                02. Fulfillment
              </span>
              <h3 className="font-serif text-lg font-normal text-[#2D241E]">
                Lusaka Delivery via Yango
              </h3>
              <ul className="space-y-1.5 text-xs text-[#2D241E]/80 font-sans pt-1">
                <li className="flex items-start gap-2">
                  <span className="text-[#B4975A] font-serif">•</span>
                  <span><strong>Doorstep Delivery:</strong> Handled securely through Yango across Lusaka.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B4975A] font-serif">•</span>
                  <span><strong>Delivery Fee:</strong> Determined by destination distance from PHI.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B4975A] font-serif">•</span>
                  <span><strong>Self-Collection:</strong> Direct collection at Paul Ngozi Road in PHI.</span>
                </li>
              </ul>
            </div>

            {/* Payment Details */}
            <div className="space-y-2 bg-[#FDFBF7] border border-[#B4975A]/20 rounded-[2px] p-4 sm:p-5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold font-sans block">
                03. Payment Terms
              </span>
              <h3 className="font-serif text-lg font-normal text-[#2D241E]">
                50% Commitment Deposit
              </h3>
              <ul className="space-y-1.5 text-xs text-[#2D241E]/80 font-sans pt-1">
                <li className="flex items-start gap-2">
                  <span className="text-[#B4975A] font-serif">•</span>
                  <span><strong>Bank Transfer:</strong> Direct deposit details sent on order confirmation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B4975A] font-serif">•</span>
                  <span><strong>Airtel Money:</strong> Convenient mobile transfer to our business line.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B4975A] font-serif">•</span>
                  <span><strong>Balance:</strong> Remaining 50% payable upon collection or dispatch.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Quick-Start WhatsApp Inquiry Section */}
        <div className="bg-[#F5F0E6] border border-[#B4975A]/25 rounded-[2px] p-6 sm:p-10 space-y-6">
          <div className="max-w-2xl space-y-1">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B4975A] font-semibold block font-sans">
              Start Your Order
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2D241E]">
              Compose WhatsApp Order Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-[#2D241E]/80 font-sans">
              Select your initial preferences below and click to open a pre-formatted message directly with the sisters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="order-cake-type" className="block text-[10px] uppercase tracking-wider text-[#2D241E]/70 font-semibold font-sans">
                Cake Type & Size
              </label>
              <select
                id="order-cake-type"
                value={selectedCakeType}
                onChange={(e) => setSelectedCakeType(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#FDFBF7] border border-[#2D241E]/20 text-xs text-[#2D241E] focus:outline-hidden focus:border-[#B4975A] rounded-[2px]"
              >
                <option>Celebration Cake (4″ Tier)</option>
                <option>Celebration Cake (6″ Tier)</option>
                <option>Celebration Cake (8″ Tier)</option>
                <option>Wedding Cake (Multi-Tier)</option>
                <option>Custom / Specialty Cake</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="order-flavour" className="block text-[10px] uppercase tracking-wider text-[#2D241E]/70 font-semibold font-sans">
                Signature Flavour
              </label>
              <select
                id="order-flavour"
                value={selectedFlavour}
                onChange={(e) => setSelectedFlavour(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#FDFBF7] border border-[#2D241E]/20 text-xs text-[#2D241E] focus:outline-hidden focus:border-[#B4975A] rounded-[2px]"
              >
                <option>Vanilla</option>
                <option>Strawberry</option>
                <option>Chocolate</option>
                <option>Red Velvet</option>
                <option>Multi-Flavour Tier (Wedding)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="order-date" className="block text-[10px] uppercase tracking-wider text-[#2D241E]/70 font-semibold font-sans">
                Celebration Date
              </label>
              <input
                id="order-date"
                type="date"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                className="w-full px-3 py-2 bg-[#FDFBF7] border border-[#2D241E]/20 text-xs text-[#2D241E] focus:outline-hidden focus:border-[#B4975A] rounded-[2px]"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="order-delivery" className="block text-[10px] uppercase tracking-wider text-[#2D241E]/70 font-semibold font-sans">
                Fulfillment
              </label>
              <select
                id="order-delivery"
                value={deliveryMethod}
                onChange={(e) => setDeliveryMethod(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#FDFBF7] border border-[#2D241E]/20 text-xs text-[#2D241E] focus:outline-hidden focus:border-[#B4975A] rounded-[2px]"
              >
                <option>Yango Delivery (Lusaka)</option>
                <option>Kitchen Pickup (PHI, Lusaka)</option>
              </select>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-5 border-t border-[#2D241E]/10">
            <div className="text-xs text-[#2D241E]/70 font-sans">
              Direct line: <strong>{BUSINESS.phoneDisplay}</strong> • Location: <strong>PHI, Paul Ngozi Road</strong>
            </div>
            <button
              type="button"
              id="order-submit-whatsapp"
              onClick={handleCustomOrderClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2D241E] text-[#FDFBF7] text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-medium rounded-[2px] hover:bg-[#B4975A] transition-colors duration-200 cursor-pointer shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#B4975A]" />
              <span>Order on WhatsApp →</span>
            </button>
          </div>
        </div>

        {/* Direct Contact Reference Strip (Editorial Minimalist) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          <div className="bg-[#F5F0E6] border border-[#B4975A]/25 rounded-[2px] p-4 sm:p-5 space-y-1">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold block font-sans">Phone & WhatsApp</span>
            <a href={getWhatsAppInquiryUrl()} target="_blank" rel="noopener noreferrer" className="font-serif text-base text-[#2D241E] hover:text-[#B4975A] transition-colors block">
              {BUSINESS.phoneDisplay}
            </a>
          </div>

          <div className="bg-[#F5F0E6] border border-[#B4975A]/25 rounded-[2px] p-4 sm:p-5 space-y-1">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold block font-sans">Email Inquiries</span>
            <a href={`mailto:${BUSINESS.email}`} className="font-serif text-base text-[#2D241E] hover:text-[#B4975A] transition-colors block break-all">
              {BUSINESS.email}
            </a>
          </div>

          <div className="bg-[#F5F0E6] border border-[#B4975A]/25 rounded-[2px] p-4 sm:p-5 space-y-1">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold block font-sans">Bakery Kitchen</span>
            <p className="font-serif text-base text-[#2D241E]">
              {BUSINESS.address}, Lusaka
            </p>
          </div>
        </div>

        {/* Bottom Editorial Navigation */}
        <div className="border-t border-[#2D241E]/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/cakes"
            className="group inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#2D241E] hover:text-[#B4975A] font-medium border-b border-[#2D241E]/30 hover:border-[#B4975A] pb-0.5 transition-all duration-200"
          >
            <span>← Review cake catalogue</span>
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#2D241E] hover:text-[#B4975A] font-medium border-b border-[#2D241E]/30 hover:border-[#B4975A] pb-0.5 transition-all duration-200"
          >
            <span>Kitchen location & hours →</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

