import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BUSINESS, getWhatsAppInquiryUrl } from '../data/business';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change or Escape key
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const desktopNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/story' },
    { name: 'Cakes', path: '/cakes' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Ordering', path: '/order' },
    { name: 'Contact', path: '/contact' },
  ];

  const mobileNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/story' },
    { name: 'Cakes', path: '/cakes' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Ordering', path: '/order' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-xs border-b border-[#2D241E]/10'
          : 'bg-[#FDFBF7]/90 backdrop-blur-xs border-b border-[#2D241E]/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Brand Identity */}
          <Link
            to="/"
            id="nav-brand-logo"
            className="flex flex-col group focus:outline-hidden py-1"
            aria-label="Sisters Blessed Treats - Home"
          >
            <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#2D241E] group-hover:text-[#B4975A] transition-colors whitespace-nowrap">
              Sisters Blessed Treats
            </span>
            <span className="text-[9px] uppercase tracking-[0.22em] text-[#B4975A] font-sans font-medium whitespace-nowrap">
              PHI • Lusaka, Zambia
            </span>
          </Link>

          {/* Desktop Navigation Links & Action */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <nav className="flex items-center gap-5 lg:gap-7 text-[11px] uppercase tracking-[0.14em] font-medium" aria-label="Main Navigation">
              {desktopNavLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={({ isActive }) =>
                    `relative py-1 transition-colors whitespace-nowrap ${
                      isActive
                        ? 'text-[#B4975A] font-semibold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#B4975A]'
                        : 'text-[#2D241E]/85 hover:text-[#B4975A] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B4975A] hover:after:w-full after:transition-all after:duration-300'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <a
              href={getWhatsAppInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-cta-whatsapp"
              className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] font-medium bg-[#2D241E] text-[#FDFBF7] px-4 py-2 hover:bg-[#B4975A] transition-colors duration-200 shadow-xs whitespace-nowrap rounded-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#B4975A]" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2D241E] hover:text-[#B4975A] focus:outline-hidden"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden bg-[#FDFBF7] border-b border-[#2D241E]/15 px-6 pt-4 pb-7 space-y-5 shadow-lg"
        >
          <div className="flex flex-col space-y-3 pt-2">
            {mobileNavLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-[0.15em] font-medium py-1.5 border-b border-[#2D241E]/10 transition-colors ${
                    isActive ? 'text-[#B4975A] font-semibold pl-1 border-[#B4975A]' : 'text-[#2D241E] hover:text-[#B4975A]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={getWhatsAppInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-nav-whatsapp"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#2D241E] text-[#FDFBF7] hover:bg-[#B4975A] text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-medium rounded-[2px] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#B4975A]" />
              <span>Order on WhatsApp →</span>
            </a>
            <p className="text-center text-[9px] uppercase tracking-[0.2em] text-[#2D241E]/60 mt-3 font-sans">
              PHI, Paul Ngozi Road • Lusaka, Zambia
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
