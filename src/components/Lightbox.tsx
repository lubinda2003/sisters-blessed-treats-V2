import React, { useEffect } from 'react';
import { X, MessageCircle, Sparkles } from 'lucide-react';
import { getWhatsAppInquiryUrl } from '../data/business';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    title: string;
    category: string;
    tag?: string;
    suggestedFile: string;
    description?: string;
  } | null;
}

export const Lightbox: React.FC<LightboxProps> = ({ isOpen, onClose, item }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  return (
    <div
      id="lightbox-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2D241E]/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div
        className="relative max-w-3xl w-full bg-[#FDFBF7] border border-[#B4975A]/40 rounded-xs shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-[#2D241E]/80 text-[#FDFBF7] hover:bg-[#2D241E] hover:text-[#B4975A] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Visual Showcase Container */}
          <div className="md:w-3/5 bg-[#2D241E] flex items-center justify-center min-h-[300px] sm:min-h-[400px] relative overflow-hidden">
            <img
              src={item.suggestedFile}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover max-h-[450px]"
              onError={(e) => {
                // Fallback to placeholder if not found
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute bottom-3 left-3 bg-[#2D241E]/80 backdrop-blur-xs px-2.5 py-1 border border-[#B4975A]/30">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B4975A] font-semibold">
                {item.category} • {item.tag || 'Artisan Design'}
              </span>
            </div>
          </div>

          {/* Details & WhatsApp Action */}
          <div className="md:w-2/5 p-6 sm:p-7 flex flex-col justify-between bg-[#FDFBF7]">
            <div>
              <div className="inline-block px-2.5 py-0.5 bg-[#F5F0E6] text-[#B4975A] border border-[#B4975A]/30 text-[10px] uppercase tracking-widest font-medium rounded-xs mb-2">
                {item.category}
              </div>
              <h3 id="lightbox-title" className="font-serif text-xl sm:text-2xl font-normal text-[#2D241E] mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-[#2D241E]/80 leading-relaxed font-sans mb-4">
                {item.description || 'Handcrafted fresh to order by the religious sisters in PHI, Lusaka. Tailored to your preferred size and flavour.'}
              </p>
              <div className="py-2 border-y border-[#2D241E]/10 text-xs text-[#2D241E]/70 space-y-1">
                <p>• <strong>Location:</strong> PHI, Paul Ngozi Road</p>
                <p>• <strong>Notice:</strong> 2+ days advance</p>
                <p>• <strong>Delivery:</strong> Available across Lusaka</p>
              </div>
            </div>

            <div className="mt-6 pt-4">
              <a
                href={getWhatsAppInquiryUrl({ category: item.title })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#2D241E] text-[#FDFBF7] text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-[#B4975A] transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#B4975A]" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
