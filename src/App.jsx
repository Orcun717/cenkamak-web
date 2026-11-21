import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroTower3D from './components/HeroTower3D';
import ProductComparisonSection from './components/ProductComparisonSection';
import ComponentsSafetySection from './components/ComponentsSafetySection';
import CertificatesProjectsSection from './components/CertificatesProjectsSection';
import InteractiveEstimator from './components/InteractiveEstimator';
import CorporateFooter from './components/CorporateFooter';

export default function App() {
  const [lang, setLang] = useState('tr');
  const [lightMode, setLightMode] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState('twin-platform');
  const [prefilledQuote, setPrefilledQuote] = useState(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const handleOpenQuote = (productObj = null) => {
    if (productObj) {
      setPrefilledQuote({
        product: productObj,
        buildingHeight: 100,
        facadeWidth: 15
      });
    }
    const contactEl = document.getElementById('iletisim');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'auto' });
    }
  };

  const handleTransferFromEstimator = (configData) => {
    setPrefilledQuote(configData);
    const contactEl = document.getElementById('iletisim');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'auto' });
    }
  };

  return (
    <div
      className={`min-h-screen ${
        lightMode ? 'bg-slate-50 text-slate-900' : 'bg-[#121418] text-slate-100'
      }`}
    >
      {/* Header & Mega-Menu Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        lightMode={lightMode}
        setLightMode={setLightMode}
        onSelectProduct={(id) => {
          setSelectedProductId(id);
        }}
        onOpenQuoteModal={handleOpenQuote}
      />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <HeroTower3D
          lang={lang}
          lightMode={lightMode}
          onOpenQuoteModal={handleOpenQuote}
        />

        {/* 2. Product Lineup & Comparison Tabs */}
        <ProductComparisonSection
          lang={lang}
          lightMode={lightMode}
          selectedProductId={selectedProductId}
          setSelectedProductId={setSelectedProductId}
          onOpenQuoteModal={handleOpenQuote}
        />

        {/* 3. Components & Security Systems Gallery */}
        <ComponentsSafetySection lang={lang} lightMode={lightMode} />

        {/* 4. Certificates (Lightbox) & Architectural Projects Gallery */}
        <CertificatesProjectsSection lang={lang} lightMode={lightMode} />

        {/* 5. Smart Quote Estimator (System Calculator) */}
        <InteractiveEstimator
          lang={lang}
          lightMode={lightMode}
          onTransferToQuote={handleTransferFromEstimator}
        />
      </main>

      {/* 6. Corporate Profile, Factory Showcase, Contact Form & Footer */}
      <CorporateFooter
        lang={lang}
        lightMode={lightMode}
        prefilledQuote={prefilledQuote}
        quoteModalOpen={quoteModalOpen}
        setQuoteModalOpen={setQuoteModalOpen}
      />
    </div>
  );
}
