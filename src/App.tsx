import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { StoryPage } from './pages/StoryPage';
import { CakesPage } from './pages/CakesPage';
import { GalleryPage } from './pages/GalleryPage';
import { FlavoursPage } from './pages/FlavoursPage';
import { OrderPage } from './pages/OrderPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#2D241E] font-sans antialiased selection:bg-[#B4975A]/25 overflow-x-hidden">
        {/* Fixed Header Navigation */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main id="main-content" className="flex-grow pt-16 sm:pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/cakes" element={<CakesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/flavours" element={<FlavoursPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback route */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Global Footer with Route Links */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
