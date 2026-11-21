import React, { useState } from 'react';
import {
  ShieldCheck,
  Wrench,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  Layers,
  ZoomIn,
  X
} from 'lucide-react';
import { COMPONENTS_GALLERY, SECURITY_SYSTEMS } from '../data/catalogData';

export default function ComponentsSafetySection({ lang, lightMode }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);

  const categories = [
    { id: 'all', label: { tr: 'Tüm Bileşenler (9)', en: 'All Components (9)' } },
    { id: 'mast', label: { tr: 'Çelik Mast & Ankraj', en: 'Steel Masts & Ties' } },
    { id: 'drive', label: { tr: 'Tahrik & Paraşüt Fren', en: 'Drive & Parachute Brake' } },
    { id: 'safety', label: { tr: 'Emniyet Mastı & Muhafaza', en: 'Safety Mast & Guardrails' } },
    { id: 'control', label: { tr: 'PLC Pano & Kaymaz Zemin', en: 'PLC Panel & Non-Slip Deck' } }
  ];

  const filteredComponents =
    activeCategory === 'all'
      ? COMPONENTS_GALLERY
      : activeCategory === 'control'
      ? COMPONENTS_GALLERY.filter((c) => c.category === 'control' || c.category === 'deck')
      : COMPONENTS_GALLERY.filter((c) => c.category === activeCategory);

  return (
    <section
      id="bilesenler"
      className={`py-24 border-t transition-colors ${
        lightMode
          ? 'bg-slate-100 border-slate-200 text-slate-900'
          : 'bg-[#161920] border-white/10 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5722]/15 border border-[#FF5722]/40 text-[#FF5722] text-xs font-tech font-bold uppercase tracking-widest">
              <Wrench className="w-3.5 h-3.5" />
              <span>
                {lang === 'tr'
                  ? 'SİSTEM BİLEŞENLERİ VE İŞ GÜVENLİĞİ DONANIMLARI'
                  : 'SYSTEM COMPONENTS & OCCUPATIONAL SAFETY HARDWARE'}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 tracking-tight">
              {lang === 'tr' ? (
                <>
                  Orijinal <span className="text-[#FF5722]">Parça Mimarisi</span> ve Güvenlik Sistemleri
                </>
              ) : (
                <>
                  Original <span className="text-[#FF5722]">Component Architecture</span> & Safety Systems
                </>
              )}
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl font-tech text-xs font-bold border transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#FF5722] text-white border-[#FF5722]'
                    : lightMode
                    ? 'bg-white border-slate-300 text-slate-700 hover:border-[#FF5722]'
                    : 'bg-[#1E2229] border-white/10 text-slate-300 hover:border-[#FF5722]/60'
                }`}
              >
                {cat.label[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* Components Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredComponents.map((comp) => (
            <div
              key={comp.id}
              onClick={() => setLightboxItem(comp)}
              className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                lightMode
                  ? 'bg-white border-slate-200 hover:border-[#FF5722] shadow-md hover:shadow-xl'
                  : 'bg-[#1E2229]/90 border-white/10 hover:border-[#FF5722]/80 hover:shadow-2xl'
              }`}
            >
              <div>
                {/* Catalog Component Image */}
                <div className="relative h-56 bg-white flex items-center justify-center p-4 overflow-hidden border-b border-slate-200/20">
                  <img
                    src={comp.image}
                    alt={comp.title[lang]}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#121418]/90 text-[#FF5722] font-tech text-xs font-bold border border-[#FF5722]/40">
                    {comp.code}
                  </span>
                  <button
                    className="absolute bottom-3 right-3 p-2 rounded-lg bg-[#121418]/80 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Zoom"
                  >
                    <ZoomIn className="w-4 h-4 text-[#FFB300]" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg group-hover:text-[#FF5722] transition-colors">
                    {comp.title[lang]}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm mt-2 leading-relaxed ${
                      lightMode ? 'text-slate-600' : 'text-slate-300'
                    }`}
                  >
                    {comp.desc[lang]}
                  </p>
                </div>
              </div>

              {/* Footer Dimensions & Weight */}
              <div className="px-5 py-3 bg-[#121418]/40 border-t border-white/10 flex items-center justify-between text-xs font-tech">
                <span className="text-[#FFB300] font-semibold">{comp.dimensions}</span>
                <span className="text-slate-400">{comp.weight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Security Banner Box: "İŞ GÜVENLİĞİ HER ZAMAN İLK ÖNCELİĞİMİZDİR" */}
        <div
          className={`rounded-3xl p-6 sm:p-10 border relative overflow-hidden ${
            lightMode
              ? 'bg-white border-slate-300 shadow-xl'
              : 'bg-gradient-to-br from-[#1E2229] via-[#121418] to-[#1E2229] border-[#FF5722]/40 neon-border-orange'
          }`}
        >
          {/* Top Hazard Stripe */}
          <div className="absolute top-0 left-0 right-0 h-2 hazard-stripes" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pt-2">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-tech font-bold text-[#FFB300] uppercase tracking-widest">
                <AlertTriangle className="w-4 h-4 text-[#FF5722]" />
                <span>
                  {lang === 'tr'
                    ? 'İŞ GÜVENLİĞİ HER ZAMAN İLK ÖNCELİĞİMİZDİR'
                    : 'OCCUPATIONAL SAFETY IS ALWAYS OUR FIRST PRIORITY'}
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold mt-2">
                {lang === 'tr'
                  ? '8 Kademeli Aktif ve Pasif Emniyet Protokolü'
                  : '8-Stage Active & Passive Safety Protocol'}
              </h3>
            </div>

            <div className="px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-tech text-xs font-bold flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span>TS EN 1495+A2 & DIN EN 1495 TAM UYUMLU</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SECURITY_SYSTEMS.map((sec, idx) => (
              <div
                key={sec.id}
                className={`p-4 rounded-xl border transition-all ${
                  lightMode
                    ? 'bg-slate-50 border-slate-200 hover:border-[#FF5722]'
                    : 'bg-[#121418]/80 border-white/10 hover:border-[#FF5722]/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-tech text-xs font-bold text-[#FF5722]">
                    SAFE-0{idx + 1}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="font-display font-bold text-sm">{sec.title[lang]}</h4>
                <p
                  className={`text-xs mt-1.5 leading-relaxed ${
                    lightMode ? 'text-slate-600' : 'text-slate-400'
                  }`}
                >
                  {sec.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Component Lightbox Modal */}
      {lightboxItem && (
        <div
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-2xl w-full rounded-2xl bg-[#1E2229] border border-white/15 overflow-hidden shadow-2xl text-white"
          >
            <div className="px-6 py-4 bg-[#121418] border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-tech text-[#FF5722] font-bold">
                  {lightboxItem.code}
                </span>
                <h4 className="font-display font-bold text-lg">{lightboxItem.title[lang]}</h4>
              </div>
              <button
                onClick={() => setLightboxItem(null)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 bg-white flex items-center justify-center max-h-[420px]">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title[lang]}
                className="max-h-[380px] object-contain"
              />
            </div>
            <div className="p-6 space-y-3">
              <p className="text-sm text-slate-300">{lightboxItem.desc[lang]}</p>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-tech">
                <span className="text-[#FFB300] font-bold">{lightboxItem.dimensions}</span>
                <span className="text-slate-400">{lightboxItem.weight}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
