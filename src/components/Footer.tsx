import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, MapPin, Phone, Mail } from 'lucide-react';
import { BUSINESS } from '../data/business';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="site-footer"
      className="bg-[#241C17] text-[#FDFBF7] pt-12 sm:pt-16 pb-8 border-t border-[#3E3027]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-[#FDFBF7]/10">
          
          {/* Brand & Story (Span 5) */}
          <div className="md:col-span-5 space-y-3">
            <div>
              <span className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-[#FDFBF7] block">
                Sisters Blessed Treats
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#B4975A] font-sans font-medium block mt-1">
                Convent Bakery • Lusaka, Zambia
              </span>
            </div>

            <p className="text-xs text-[#CFC2B6] max-w-sm leading-relaxed font-sans">
              Scratch-baked celebration cakes and matrimonial tiers prepared with quiet devotion and pure ingredients by religious sisters on Paul Ngozi Road, PHI.
            </p>
          </div>

          {/* Quick Navigation (Span 3) */}
          <div className="md:col-span-3 space-y-3 font-sans">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#B4975A] font-semibold block">
              Pages
            </span>
            <ul className="space-y-2 text-xs text-[#CFC2B6]">
              <li>
                <Link to="/" className="hover:text-[#B4975A] transition-colors inline-block">Home</Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-[#B4975A] transition-colors inline-block">Our Story & Ministry</Link>
              </li>
              <li>
                <Link to="/cakes" className="hover:text-[#B4975A] transition-colors inline-block">Cake Offerings</Link>
              </li>
              <li>
                <Link to="/flavours" className="hover:text-[#B4975A] transition-colors inline-block">Signature Flavours</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#B4975A] transition-colors inline-block">Visual Portfolio</Link>
              </li>
              <li>
                <Link to="/order" className="hover:text-[#B4975A] transition-colors inline-block">How to Order</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#B4975A] transition-colors inline-block">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Bakery Information & Contacts (Span 4) */}
          <div className="md:col-span-4 space-y-3 font-sans">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#B4975A] font-semibold block">
              Bakery Information
            </span>
            
            <div className="space-y-2.5 text-xs text-[#CFC2B6]">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#B4975A] shrink-0 mt-0.5" />
                <span>{BUSINESS.address}, {BUSINESS.city}, Zambia</span>
              </p>

              <p className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#B4975A] shrink-0" />
                <a
                  href={`tel:+${BUSINESS.phoneRaw}`}
                  className="hover:text-[#B4975A] transition-colors"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </p>

              <p className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#B4975A] shrink-0" />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="hover:text-[#B4975A] transition-colors"
                >
                  {BUSINESS.email}
                </a>
              </p>
            </div>

            <p className="text-[11px] text-[#A8988C] pt-1">
              Advance Notice: 48 hours recommended for custom orders.
            </p>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#A8988C] font-sans">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Sisters Blessed Treats. Handcrafted in PHI, Lusaka.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#CFC2B6] hover:text-[#B4975A] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3 text-[#B4975A]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
