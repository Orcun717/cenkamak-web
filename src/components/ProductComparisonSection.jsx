import React, { useState } from 'react';
import {
  Layers,
  CheckCircle2,
  ArrowUpRight,
  Table,
  Box,
  ShieldCheck,
  Zap,
  Maximize2
} from 'lucide-react';
import { PRODUCTS } from '../data/catalogData';

export default function ProductComparisonSection({
  lang,
  lightMode,
  selectedProductId,
  setSelectedProductId,
  onInspectIn3D,
  onOpenQuoteModal
}) {
  const [viewMode, setViewMode] = useState('detail'); // 'detail' | 'matrix'
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const currentProduct =
    PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  const handleTabChange = (id) => {
    setSelectedProductId(id);
    setActivePhotoIdx(0);
    setViewMode('detail');
  };

  return (
    <section
      id="urunler"
      className={`py-24 border-t transition-colors ${
        lightMode
          ? 'bg-slate-50 border-slate-200 text-slate-900'
          : 'bg-[#121418] border-white/10 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5722]/15 border border-[#FF5722]/40 text-[#FF5722] text-xs font-tech font-bold uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" />
              <span>{lang === 'tr' ? 'KATALOG ÜRÜN YELPAZESİ' : 'CATALOG PRODUCT LINEUP'}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 tracking-tight">
              {lang === 'tr' ? (
                <>
                  Yüksek Mukavemetli <span className="text-[#FF5722]">Dikey Erişim</span> Sistemleri
                </>
              ) : (
                <>
                  High-Tensile <span className="text-[#FF5722]">Vertical Access</span> Systems
                </>
              )}
            </h2>
          </div>

          {/* Toggle between Detailed Spec View and 4-Model Comparison Matrix */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('detail')}
              className={`px-4 py-2.5 rounded-xl font-tech text-xs font-bold border transition-all flex items-center gap-2 ${
                viewMode === 'detail'
                  ? 'bg-[#FF5722] text-white border-[#FF5722]'
                  : lightMode
                  ? 'bg-white border-slate-300 text-slate-700'
                  : 'bg-[#1E2229] border-white/10 text-slate-300'
              }`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>{lang === 'tr' ? 'Detaylı Teknik İnceleme' : 'Detailed Technical Specs'}</span>
            </button>

            <button
              onClick={() => setViewMode('matrix')}
              className={`px-4 py-2.5 rounded-xl font-tech text-xs font-bold border transition-all flex items-center gap-2 ${
                viewMode === 'matrix'
                  ? 'bg-[#FF5722] text-white border-[#FF5722]'
                  : lightMode
                  ? 'bg-white border-slate-300 text-slate-700'
                  : 'bg-[#1E2229] border-white/10 text-slate-300'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>{lang === 'tr' ? '3 Model Karşılaştırma Tablosu' : '3-Model Comparison Matrix'}</span>
            </button>
          </div>
        </div>

        {/* 3 Product Selection Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {PRODUCTS.map((prod) => {
            const isSelected = prod.id === currentProduct.id && viewMode === 'detail';
            return (
              <button
                key={prod.id}
                onClick={() => handleTabChange(prod.id)}
                className={`text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? lightMode
                      ? 'bg-white border-[#FF5722] shadow-xl ring-2 ring-[#FF5722]/25'
                      : 'bg-[#1E2229] border-[#FF5722] neon-border-orange'
                    : lightMode
                    ? 'bg-white border-slate-200 hover:border-slate-300'
                    : 'bg-[#1E2229]/60 border-white/10 hover:border-white/25'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#FF5722]/15 text-[#FF5722] font-tech text-[11px] font-bold">
                    {prod.code}
                  </span>
                  <span className="text-[11px] font-tech text-[#FFB300] font-semibold">
                    {prod.highlights[0].value}
                  </span>
                </div>
                <div className="font-display font-bold text-base leading-snug">
                  {prod.shortName[lang]}
                </div>
                <div
                  className={`text-xs font-tech mt-2 pt-2 border-t flex items-center justify-between ${
                    lightMode
                      ? 'border-slate-100 text-slate-500'
                      : 'border-white/10 text-slate-400'
                  }`}
                >
                  <span>{prod.highlights[1].value}</span>
                  <span className="text-[#FF5722] font-bold">→</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* VIEW MODE 1: Detailed Product View + Complete Specification Table */}
        {viewMode === 'detail' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 5 Columns: Product Visuals, Key Highlights & Actions */}
            <div className="lg:col-span-5 space-y-5">
              <div
                className={`rounded-2xl p-4 border ${
                  lightMode
                    ? 'bg-white border-slate-200 shadow-lg'
                    : 'bg-[#1E2229]/90 border-white/10 shadow-2xl'
                }`}
              >
                <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden bg-black">
                  <img
                    src={currentProduct.gallery[activePhotoIdx] || currentProduct.image}
                    alt={currentProduct.name[lang]}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#121418]/90 border border-[#FF5722]/50 text-xs font-tech font-bold text-[#FF5722]">
                    {currentProduct.badge[lang]}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-[#121418]/90 text-[11px] font-tech text-slate-200 border border-white/10">
                    {currentProduct.steelGrade}
                  </div>
                </div>

                {/* Thumbnail Strip */}
                <div className="grid grid-cols-4 gap-2 mt-3">
                  {currentProduct.gallery.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePhotoIdx(idx)}
                      className={`h-16 rounded-lg overflow-hidden border-2 ${
                        activePhotoIdx === idx
                          ? 'border-[#FF5722]'
                          : 'border-transparent opacity-65 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* 6 Key Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {currentProduct.highlights.map((hl, i) => (
                  <div
                    key={i}
                    className={`p-3.5 rounded-xl border ${
                      lightMode
                        ? 'bg-white border-slate-200'
                        : 'bg-[#1E2229]/80 border-white/10'
                    }`}
                  >
                    <div className="text-[11px] font-tech text-slate-400">{hl.label[lang]}</div>
                    <div className="font-display font-bold text-sm sm:text-base text-[#FF5722] mt-0.5">
                      {hl.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenQuoteModal(currentProduct)}
                  className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#FF5722] to-[#F4511E] text-white font-display font-bold text-sm shadow-lg shadow-[#FF5722]/25 flex items-center justify-center gap-2"
                >
                  <span>
                    {lang === 'tr'
                      ? `${currentProduct.shortName.tr} İçin Teklif Al`
                      : `Request Quote for ${currentProduct.shortName.en}`}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right 7 Columns: Full Catalog Technical Specifications Table */}
            <div
              className={`lg:col-span-7 rounded-2xl border overflow-hidden ${
                lightMode
                  ? 'bg-white border-slate-200 shadow-xl'
                  : 'bg-[#1E2229]/90 border-white/10 shadow-2xl'
              }`}
            >
              <div className="p-6 border-b border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-tech font-bold text-[#FF5722] uppercase tracking-wider">
                    {currentProduct.code} • TEKNİK ÖZELLİKLER TABLOSU
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-tech text-xs font-semibold">
                    CE • TS EN 1495+A2
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold mt-1">
                  {currentProduct.name[lang]}
                </h3>
                <p
                  className={`text-sm mt-2 leading-relaxed ${
                    lightMode ? 'text-slate-600' : 'text-slate-300'
                  }`}
                >
                  {currentProduct.summary[lang]}
                </p>
              </div>

              {/* Specification Rows from PDF Catalog */}
              <div className="divide-y divide-white/10 max-h-[540px] overflow-y-auto">
                {currentProduct.fullSpecs.map((row, idx) => (
                  <div
                    key={idx}
                    className={`px-6 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm transition-colors ${
                      idx % 2 === 0
                        ? lightMode
                          ? 'bg-slate-50/70'
                          : 'bg-white/[0.02]'
                        : ''
                    } hover:bg-[#FF5722]/10`}
                  >
                    <span
                      className={`font-medium ${
                        lightMode ? 'text-slate-600' : 'text-slate-300'
                      }`}
                    >
                      {row.key[lang]}
                    </span>
                    <span className="font-tech font-bold text-[#FF5722] sm:text-right">
                      {row.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* VIEW MODE 2: Side-by-Side 3-Model Comparison Matrix */
          <div
            className={`rounded-2xl border overflow-x-auto ${
              lightMode
                ? 'bg-white border-slate-200 shadow-xl'
                : 'bg-[#1E2229]/90 border-white/10 shadow-2xl'
            }`}
          >
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="border-b border-white/10 bg-[#121418]/60 text-xs font-tech uppercase text-slate-400">
                  <th className="p-4">{lang === 'tr' ? 'Teknik Parametre' : 'Parameter'}</th>
                  <th className="p-4 text-[#FFB300]">Çift Kolonlu Platform</th>
                  <th className="p-4 text-sky-400">Tek Kolonlu Platform</th>
                  <th className="p-4 text-emerald-400">CK 2000 Çift Köşe</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-xs sm:text-sm font-tech">
                <tr>
                  <td className="p-4 font-sans font-semibold text-slate-400">
                    {lang === 'tr' ? 'Taşıma Kapasitesi (Tonaj)' : 'Payload Capacity'}
                  </td>
                  <td className="p-4 font-bold text-[#FFB300]">2.000 – 3.000 kg (Genişliğe Göre)</td>
                  <td className="p-4 font-bold text-sky-400">1.000 – 1.500 kg</td>
                  <td className="p-4 font-bold text-emerald-400">2.000 – 2.500 kg (Çift Kolon)</td>
                </tr>
                <tr>
                  <td className="p-4 font-sans font-semibold text-slate-400">
                    {lang === 'tr' ? 'Maksimum Yükseklik (Ankrajlı)' : 'Max Anchored Height'}
                  </td>
                  <td className="p-4 font-bold">150 m (Özel: 150m+)</td>
                  <td className="p-4 font-bold">150 m</td>
                  <td className="p-4 font-bold">150 m</td>
                </tr>
                <tr>
                  <td className="p-4 font-sans font-semibold text-slate-400">
                    {lang === 'tr' ? 'Azami Cephe Genişliği' : 'Max Platform Span Width'}
                  </td>
                  <td className="p-4 font-bold text-[#FFB300]">30 m (Derinlik: 1360 mm)</td>
                  <td className="p-4 font-bold text-sky-400">10 m (Derinlik: 1360 mm)</td>
                  <td className="p-4 font-bold text-emerald-400">21 m Toplam (12m Kolon Arası)</td>
                </tr>
                <tr>
                  <td className="p-4 font-sans font-semibold text-slate-400">
                    {lang === 'tr' ? 'Dikey Çalışma Hızı' : 'Vertical Climbing Speed'}
                  </td>
                  <td className="p-4 font-bold">12 m/dk</td>
                  <td className="p-4 font-bold">12 m/dk</td>
                  <td className="p-4 font-bold">12 m/dk</td>
                </tr>
                <tr>
                  <td className="p-4 font-sans font-semibold text-slate-400">
                    {lang === 'tr' ? 'Motor & Sürücü Gücü' : 'Motor & Drive Power'}
                  </td>
                  <td className="p-4 font-bold">4 x 2.2 kW (380V / 12A)</td>
                  <td className="p-4 font-bold">2 x 2.2 kW (380V / 12A)</td>
                  <td className="p-4 font-bold">4 x 2.2 kW (380V / 24A)</td>
                </tr>
                <tr>
                  <td className="p-4 font-sans font-semibold text-slate-400">
                    {lang === 'tr' ? 'Mast Ölçüsü' : 'Mast Dimensions'}
                  </td>
                  <td className="p-4">525 x 525 x 1500 mm (74 kg)</td>
                  <td className="p-4">525 x 525 x 1500 mm (74 kg)</td>
                  <td className="p-4">525 x 525 x 1500 mm (74 kg)</td>
                </tr>
                <tr>
                  <td className="p-4 font-sans font-semibold text-slate-400">
                    {lang === 'tr' ? 'Cephe Ankraj Mesafesi' : 'Wall Anchorage Interval'}
                  </td>
                  <td className="p-4">6,00 m</td>
                  <td className="p-4">6,00 m</td>
                  <td className="p-4">6,00 m</td>
                </tr>
                <tr>
                  <td className="p-4 font-sans font-semibold text-slate-400">
                    {lang === 'tr' ? 'Güvenlik & Otomasyon' : 'Safety & Automation'}
                  </td>
                  <td className="p-4">Çift Motor Fren, Paraşüt, Otomatik Dengeleme</td>
                  <td className="p-4">Çift Motor Fren, Paraşüt, Manuel Acil İniş</td>
                  <td className="p-4">Çift Motor Fren, Paraşüt, Otomatik Dengeleme</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
