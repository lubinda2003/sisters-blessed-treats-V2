import React, { useState } from 'react';
import { Sparkles, Cake } from 'lucide-react';

interface ImagePlaceholderProps {
  id?: string;
  src?: string;
  alt?: string;
  label: string;
  subLabel?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide' | 'hero' | 'compact';
  className?: string;
  suggestedFile?: string;
  priorityBadge?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  id,
  src,
  alt,
  label,
  subLabel = 'Artisan Confection',
  aspectRatio = 'landscape',
  className = '',
  suggestedFile,
  priorityBadge,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // If a src is provided and hasn't errored
  const activeSrc = src || (suggestedFile ? suggestedFile.replace(/^\/public/, '') : undefined);

  const aspectClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[4/5]',
    landscape: 'aspect-[16/10]',
    wide: 'aspect-[21/9]',
    hero: 'aspect-[16/10]',
    compact: 'aspect-[16/10]',
  }[aspectRatio];

  return (
    <div
      id={id}
      className={`relative w-full ${aspectClasses} bg-[#F7F2EA] border border-[#2D241E]/10 overflow-hidden flex flex-col items-center justify-center p-4 text-center group transition-all duration-300 hover:border-[#B4975A]/60 shadow-xs rounded-none ${className}`}
    >
      {/* If real image is present and loads */}
      {activeSrc && !imageError && (
        <img
          src={activeSrc}
          alt={alt || label}
          referrerPolicy="no-referrer"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-10 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Decorative Radial Grid / Grain */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#B4975A 1px, transparent 1px)`,
          backgroundSize: '16px 16px',
        }}
      />

      {/* Subtle Corner Accents */}
      <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-[#B4975A]/40" />
      <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r border-[#B4975A]/40" />
      <div className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l border-[#B4975A]/40" />
      <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-[#B4975A]/40" />

      {priorityBadge && (
        <div className="absolute top-3 left-3 z-20 px-2.5 py-1 bg-[#2D241E] text-[#FDFBF7] text-[9px] uppercase tracking-[0.2em] font-medium rounded-xs border border-[#B4975A]/40 shadow-xs">
          {priorityBadge}
        </div>
      )}

      {/* Boutique Aesthetic Cake Placeholder Art */}
      <div className="relative z-0 flex flex-col items-center max-w-[240px] space-y-2 p-2">
        <div className="w-10 h-10 rounded-full bg-[#FDFBF7] border border-[#B4975A]/30 flex items-center justify-center text-[#B4975A] shadow-xs group-hover:scale-105 transition-transform duration-300">
          <Cake className="w-4 h-4 text-[#B4975A]" />
        </div>
        
        <div>
          <p className="font-serif text-[#2D241E] text-sm sm:text-base font-normal tracking-tight leading-snug">
            {label}
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-0.5">
            <Sparkles className="w-2.5 h-2.5 text-[#B4975A]" />
            <span className="text-[10px] text-[#B4975A] tracking-[0.18em] uppercase font-sans font-medium">
              {subLabel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

