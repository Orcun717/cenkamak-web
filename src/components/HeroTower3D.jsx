import React, { useState } from 'react';
import {
  ShieldAlert,
  ArrowUpRight,
  Layers,
  Gauge,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/catalogData';

export default function HeroTower3D({ lang, lightMode, onOpenQuoteModal }) {
  const [activeShowcaseIdx, setActiveShowcaseIdx] = useState(0);
  const activeProduct = PRODUCTS[activeShowcaseIdx] || PRODUCTS[0];

  return (
    <section
      id="top"
      className="relative min-h-screen pt-28 lg:pt-36 pb-16 overflow-hidden industrial-grid-bg flex flex-col justify-between"
    >
      {/* Ambient Radial Glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#FF5722]/15 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 right-0 w-[480px] h-[480px] rounded-full bg-sky-500/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left 6 Columns: Brand Slogan, Technical Copy & CTAs */}
        <div className="lg:col-span-6 space-y-6 z-10">
          {/* Technical Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FF5722]/10 border border-[#FF5722]/40 text-[#FF5722] text-xs font-tech font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
            <span>CENKAMAK • ST52 (S355JR) & OTOMATİK DENGELEME TEKNOLOJİSİ</span>
          </div>

          {/* Main Hero Slogan */}
          <h1
            className={`font-display text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight ${
              lightMode ? 'text-slate-900' : 'text-white'
            }`}
          >
            {lang === 'tr' ? (
              <>
                Yüksekte <span className="text-[#FF5722]">Güven,</span>{' '}
                <span className="block mt-1">
                  Şantiyede Maksimum <span className="underline decoration-[#FF5722]/60">Verimlilik</span>
                </span>
              </>
            ) : (
              <>
                Safety at <span className="text-[#FF5722]">Height,</span>{' '}
                <span className="block mt-1">
                  Maximum Efficiency <span className="underline decoration-[#FF5722]/60">on Site</span>
                </span>
              </>
            )}
          </h1>

          {/* Hero Subtext */}
          <p
            className={`text-base sm:text-lg leading-relaxed max-w-xl ${
              lightMode ? 'text-slate-700' : 'text-slate-300'
            }`}
          >
            {COMPANY_INFO.heroSubtext[lang]}
          </p>

          {/* Key Safety Highlights Pill Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            <div
              className={`p-3 rounded-xl border flex items-center gap-2.5 ${
                lightMode
                  ? 'bg-white/90 border-slate-200'
                  : 'bg-[#1E2229]/80 border-white/10'
              }`}
            >
              <ShieldAlert className="w-5 h-5 text-[#FF5722] shrink-0" />
              <div className="text-xs">
                <div className="font-tech font-bold text-[#FF5722]">PARAŞÜT FREN</div>
                <div className={lightMode ? 'text-slate-600' : 'text-slate-400'}>
                  {lang === 'tr' ? 'Santrifüj + Motor Fren' : 'Centrifugal + Motor Brake'}
                </div>
              </div>
            </div>

            <div
              className={`p-3 rounded-xl border flex items-center gap-2.5 ${
                lightMode
                  ? 'bg-white/90 border-slate-200'
                  : 'bg-[#1E2229]/80 border-white/10'
              }`}
            >
              <Gauge className="w-5 h-5 text-[#FFB300] shrink-0" />
              <div className="text-xs">
                <div className="font-tech font-bold text-[#FFB300]">OTOMATİK DENGELEME</div>
                <div className={lightMode ? 'text-slate-600' : 'text-slate-400'}>
                  {lang === 'tr' ? '30m Senkronizasyon' : '30m Auto-Leveling'}
                </div>
              </div>
            </div>

            <div
              className={`p-3 rounded-xl border flex items-center gap-2.5 ${
                lightMode
                  ? 'bg-white/90 border-slate-200'
                  : 'bg-[#1E2229]/80 border-white/10'
              }`}
            >
              <Layers className="w-5 h-5 text-sky-400 shrink-0" />
              <div className="text-xs">
                <div className="font-tech font-bold text-sky-400">ST52 YAPI ÇELİĞİ</div>
                <div className={lightMode ? 'text-slate-600' : 'text-slate-400'}>
                  {lang === 'tr' ? 'Korozyonsuz Mastlar' : 'High-Tensile Masts'}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => onOpenQuoteModal(activeProduct)}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF5722] to-[#F4511E] text-white font-display font-bold text-sm shadow-xl shadow-[#FF5722]/30 flex items-center gap-2"
            >
              <span>{lang === 'tr' ? 'Projenize Özel Teklif Alın' : 'Get Custom Project Quote'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right 6 Columns: Static Product Showcase Card */}
        <div className="lg:col-span-6 relative">
          <div
            className={`relative rounded-2xl overflow-hidden border ${
              lightMode
                ? 'bg-[#121418] border-slate-300 shadow-2xl'
                : 'bg-[#121418]/90 border-white/15 neon-border-orange'
            }`}
          >
            {/* Top Header Strip */}
            <div className="px-4 py-3 bg-[#1E2229]/90 border-b border-white/10 flex items-center justify-between text-xs font-tech text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-bold text-white">{activeProduct.code}:</span>
                <span className="text-[#FF5722]">{activeProduct.shortName[lang]}</span>
              </div>
              <span className="text-[11px] text-[#FFB300] font-semibold">
                {activeProduct.badge[lang]}
              </span>
            </div>

            {/* Static Product Image Display */}
            <div className="relative w-full h-[380px] sm:h-[430px] bg-black">
              <img
                src={activeProduct.image}
                alt={activeProduct.name[lang]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-transparent opacity-80" />

              {/* Static Technical Summary Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-white/10 text-xs font-tech grid grid-cols-3 gap-3">
                <div>
                  <span className="text-slate-400 block text-[10px]">
                    {lang === 'tr' ? 'MAKS. YÜKSEKLİK' : 'MAX HEIGHT'}
                  </span>
                  <span className="text-white font-bold text-sm">
                    {activeProduct.highlights[0].value}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">
                    {lang === 'tr' ? 'KAPASİTE' : 'CAPACITY'}
                  </span>
                  <span className="text-[#FFB300] font-bold text-sm">
                    {activeProduct.highlights[1].value}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">
                    {lang === 'tr' ? 'AZAMİ GENİŞLİK' : 'MAX SPAN'}
                  </span>
                  <span className="text-emerald-400 font-bold text-sm">
                    {activeProduct.highlights[2].value}
                  </span>
                </div>
              </div>
            </div>

            {/* Static Model Switcher Tabs */}
            <div className="p-3 bg-[#1E2229]/95 border-t border-white/10 grid grid-cols-3 gap-2 text-xs font-tech">
              {PRODUCTS.map((prod, idx) => (
                <button
                  key={prod.id}
                  onClick={() => setActiveShowcaseIdx(idx)}
                  className={`px-3 py-2 rounded-lg font-bold flex items-center justify-center gap-1.5 ${
                    activeShowcaseIdx === idx
                      ? 'bg-[#FF5722] text-white'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{prod.shortName[lang]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fast Statistics Counter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full mt-12">
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl border ${
            lightMode
              ? 'bg-white/90 border-slate-200 shadow-xl'
              : 'glass-panel border-white/10'
          }`}
        >
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between p-3 rounded-xl ${
                idx < 3 ? 'lg:border-r lg:border-white/10 lg:pr-6' : ''
              }`}
            >
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#FF5722] tracking-tight">
                {stat.decimals
                  ? stat.value.toFixed(stat.decimals).replace('.', ',')
                  : stat.value}
                <span className="text-xl sm:text-2xl text-[#FFB300]">
                  {lang === 'en' && stat.suffixEn ? stat.suffixEn : stat.suffix}
                </span>
              </div>
              <div className="mt-1.5">
                <div
                  className={`font-display font-bold text-sm ${
                    lightMode ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  {stat.label[lang]}
                </div>
                <div className="font-tech text-xs text-slate-400 mt-0.5">{stat.sub[lang]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
