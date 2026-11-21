import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  ShieldCheck,
  Award,
  Layers,
  PhoneCall,
  Globe,
  FileDown,
  Menu,
  X,
  ArrowUpRight,
  Cpu,
  Building2,
  Calculator,
  Sun,
  Moon
} from 'lucide-react';
import CenkamakLogo from './CenkamakLogo';
import { PRODUCTS, COMPANY_INFO } from '../data/catalogData';

export default function Navbar({
  lang,
  setLang,
  lightMode,
  setLightMode,
  onSelectProduct,
  onOpenQuoteModal
}) {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ctaRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    {
      id: 'kurumsal',
      label: lang === 'tr' ? 'Kurumsal' : 'Corporate',
      href: '#kurumsal'
    },
    {
      id: 'urunler',
      label: lang === 'tr' ? 'Ürünler' : 'Products',
      href: '#urunler',
      hasMega: true
    },
    {
      id: 'guvenlik',
      label: lang === 'tr' ? 'Güvenlik Sistemleri' : 'Security Systems',
      href: '#bilesenler'
    },
    {
      id: 'referanslar',
      label: lang === 'tr' ? 'Referanslar' : 'Projects',
      href: '#referanslar'
    },
    {
      id: 'iletisim',
      label: lang === 'tr' ? 'İletişim' : 'Contact',
      href: '#iletisim'
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? lightMode
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-lg py-2.5'
            : 'bg-[#121418]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-2.5'
          : lightMode
          ? 'bg-white/75 backdrop-blur-md border-b border-slate-200/70 py-4'
          : 'bg-gradient-to-b from-[#121418]/95 to-[#121418]/40 backdrop-blur-md border-b border-white/5 py-4'
      }`}
      onMouseLeave={() => setMegaMenuOpen(false)}
    >
      {/* Top Industrial Telemetry Bar */}
      <div
        className={`hidden lg:block border-b transition-all duration-300 ${
          scrolled ? 'h-0 opacity-0 overflow-hidden border-transparent' : 'pb-2.5 mb-2.5 border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-xs font-tech">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2 text-[#FF5722] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
              ST52 (S355JR) YÜKSEK MUKAVEMETLİ ÇELİK ÜRETİM
            </span>
            <span className={lightMode ? 'text-slate-600' : 'text-slate-400'}>
              TS EN 1495+A2 • DIN EN 1495 • ISO 9001:2008 • CE
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className={`hover:text-[#FF5722] transition-colors flex items-center gap-1.5 ${
                lightMode ? 'text-slate-700' : 'text-slate-300'
              }`}
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#FF5722]" />
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#top" className="focus:outline-none">
          <CenkamakLogo size="md" lightMode={lightMode} />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => item.hasMega && setMegaMenuOpen(true)}
            >
              <a
                href={item.href}
                onClick={() => setMegaMenuOpen(false)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                  lightMode
                    ? 'text-slate-700 hover:text-[#FF5722] hover:bg-slate-100'
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
                {item.hasMega && (
                  <ChevronDown
                    className={`w-4 h-4 text-[#FF5722] transition-transform duration-200 ${
                      megaMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </a>
            </div>
          ))}
        </nav>

        {/* Right Controls: Language, Contrast Mode, Estimator & CTA */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Theme Contrast Toggle (Dark / Light Industrial) */}
          <button
            onClick={() => setLightMode(!lightMode)}
            title={
              lightMode
                ? lang === 'tr'
                  ? 'Koyu Endüstriyel Mod'
                  : 'Dark Industrial Mode'
                : lang === 'tr'
                ? 'Açık Kontrast Modu'
                : 'Light High-Contrast Mode'
            }
            className={`p-2 rounded-lg border transition-colors ${
              lightMode
                ? 'bg-slate-100 border-slate-300 text-slate-800 hover:border-[#FF5722]'
                : 'bg-[#1E2229] border-white/10 text-slate-300 hover:border-[#FF5722] hover:text-white'
            }`}
          >
            {lightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-[#FFB300]" />}
          </button>

          {/* Language Switcher TR / EN */}
          <div
            className={`flex items-center rounded-lg p-0.5 border font-tech text-xs ${
              lightMode ? 'bg-slate-100 border-slate-300' : 'bg-[#1E2229] border-white/10'
            }`}
          >
            <button
              onClick={() => setLang('tr')}
              className={`px-2.5 py-1.5 rounded-md font-bold transition-all ${
                lang === 'tr'
                  ? 'bg-[#FF5722] text-white shadow'
                  : lightMode
                  ? 'text-slate-600 hover:text-slate-900'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              TR
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1.5 rounded-md font-bold transition-all ${
                lang === 'en'
                  ? 'bg-[#FF5722] text-white shadow'
                  : lightMode
                  ? 'text-slate-600 hover:text-slate-900'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Quick Estimator Link */}
          <a
            href="#estimator"
            className={`px-3 py-2 rounded-lg border text-xs font-tech font-semibold transition-all flex items-center gap-1.5 ${
              lightMode
                ? 'border-slate-300 text-slate-800 hover:border-[#FF5722] hover:text-[#FF5722]'
                : 'border-white/15 bg-white/5 text-slate-200 hover:border-[#FF5722] hover:text-[#FF5722]'
            }`}
          >
            <Calculator className="w-3.5 h-3.5 text-[#FF5722]" />
            {lang === 'tr' ? 'Sistem Hesapla' : 'Estimator'}
          </a>

          {/* Teklif Al Button */}
          <button
            ref={ctaRef}
            onClick={() => onOpenQuoteModal()}
            className="relative group overflow-hidden rounded-lg bg-gradient-to-r from-[#FF5722] to-[#F4511E] px-5 py-2.5 text-sm font-display font-bold text-white shadow-lg shadow-[#FF5722]/25 flex items-center gap-2"
          >
            <span>{lang === 'tr' ? 'Teklif Al' : 'Get a Quote'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
            className="px-2.5 py-1.5 rounded-lg bg-[#1E2229] border border-white/15 text-xs font-tech font-bold text-[#FF5722]"
          >
            {lang.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-2 rounded-lg border ${
              lightMode
                ? 'bg-slate-100 border-slate-300 text-slate-900'
                : 'bg-[#1E2229] border-white/10 text-white'
            }`}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Smooth Mega-Menu Dropdown */}
      {megaMenuOpen && (
        <div
          onMouseEnter={() => setMegaMenuOpen(true)}
          onMouseLeave={() => setMegaMenuOpen(false)}
          className={`hidden xl:block absolute top-full left-0 right-0 border-b shadow-2xl transition-all duration-300 ${
            lightMode
              ? 'bg-white/95 backdrop-blur-2xl border-slate-200 text-slate-900'
              : 'bg-[#121418]/95 backdrop-blur-2xl border-white/10 text-white'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-12 gap-6">
            {/* Left Column: Category Intro */}
            <div className="col-span-3 flex flex-col justify-between pr-4 border-r border-white/10">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-tech uppercase tracking-widest text-[#FF5722] font-bold">
                  <Layers className="w-3.5 h-3.5" />
                  {lang === 'tr' ? 'CENKAMAK ÜRÜN GRUBU' : 'CENKAMAK PRODUCT LINE'}
                </span>
                <h3 className="font-display text-xl font-bold mt-2">
                  {lang === 'tr'
                    ? 'Dış Cephe Erişim ve Çalışma Platformları'
                    : 'Facade Access & Work Platforms'}
                </h3>
                <p className={`text-xs mt-2 leading-relaxed ${lightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                  {lang === 'tr'
                    ? 'St52 (S355JR) sertifikalı çelik konstrüksiyon, yüksek mukavemetli mastlar ve çift kademeli paraşüt fren güvenliği.'
                    : 'St52 (S355JR) certified steel structure, high-tensile masts, and dual-stage parachute brake safety.'}
                </p>
              </div>
            </div>

            {/* Right 9 Columns: 3 Main Product Cards */}
            <div className="col-span-9 grid grid-cols-3 gap-4">
              {PRODUCTS.map((prod) => (
                <a
                  key={prod.id}
                  href="#urunler"
                  onClick={() => {
                    onSelectProduct(prod.id);
                    setMegaMenuOpen(false);
                  }}
                  className={`group rounded-xl p-3.5 border flex flex-col justify-between ${
                    lightMode
                      ? 'bg-slate-50 border-slate-200 hover:border-[#FF5722]'
                      : 'bg-[#1E2229]/80 border-white/10 hover:border-[#FF5722]/70'
                  }`}
                >
                  <div>
                    <div className="relative h-28 rounded-lg overflow-hidden mb-3 bg-black">
                      <img
                        src={prod.image}
                        alt={prod.name[lang]}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#121418]/90 text-[#FF5722] font-tech text-[10px] font-bold border border-[#FF5722]/40">
                        {prod.code}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-sm group-hover:text-[#FF5722] transition-colors line-clamp-1">
                      {prod.shortName[lang]}
                    </h4>
                    <p
                      className={`text-[11px] mt-1 line-clamp-2 ${
                        lightMode ? 'text-slate-600' : 'text-slate-400'
                      }`}
                    >
                      {prod.summary[lang]}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-tech">
                    <span className="text-[#FFB300] font-semibold">{prod.highlights[0].value}</span>
                    <span className="text-[#FF5722] font-bold flex items-center gap-0.5">
                      {lang === 'tr' ? 'İncele' : 'Inspect'}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className={`xl:hidden border-b px-6 py-5 space-y-4 ${
            lightMode ? 'bg-white border-slate-200 text-slate-900' : 'bg-[#121418] border-white/10 text-white'
          }`}
        >
          <div className="grid grid-cols-1 gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 px-3 rounded-lg font-display font-semibold hover:bg-[#FF5722]/10 hover:text-[#FF5722] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-lg bg-[#FF5722] text-white font-display font-bold text-sm"
            >
              {lang === 'tr' ? 'Hemen Teklif Al' : 'Request a Quote'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
