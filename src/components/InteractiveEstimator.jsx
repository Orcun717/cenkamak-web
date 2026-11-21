import React, { useState, useMemo } from 'react';
import {
  Calculator,
  ArrowUpRight,
  Layers,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Send
} from 'lucide-react';
import { PRODUCTS, COMPANY_INFO } from '../data/catalogData';

export default function InteractiveEstimator({ lang, lightMode, onTransferToQuote }) {
  const [buildingHeight, setBuildingHeight] = useState(85); // 6m to 150m
  const [facadeWidth, setFacadeWidth] = useState(18); // 3m to 30m
  const [usageType, setUsageType] = useState('twin'); // 'twin' | 'single' | 'corner'
  const [submittedMsg, setSubmittedMsg] = useState(false);

  // Intelligent Engineering Recommendation Engine
  const recommendation = useMemo(() => {
    let model = PRODUCTS[0]; // default Twin Platform
    let reasonTr = '';
    let reasonEn = '';
    let mastColumns = 2;
    const tieInterval = 6;

    if (usageType === 'corner') {
      model = PRODUCTS[2]; // CK 2000 Çift Köşe
      mastColumns = 2;
      reasonTr =
        'Girintili, çıkıntılı ve L/U tipi açılı mimari cephelerde 21 metreye kadar köşe sarma kapasitesiyle CK 2000 Çift Köşe önerilir.';
      reasonEn =
        'For recessed, protruding, and L-shaped architectural facades up to 21m total span, CK 2000 Twin Corner is recommended.';
    } else if (usageType === 'single' || facadeWidth <= 10) {
      model = PRODUCTS[1]; // Tek Kolonlu Platform
      mastColumns = 1;
      reasonTr = `${facadeWidth}m cephe genişliği için 10m kapasiteli, ekonomik ve hızlı kurulan Tek Kolonlu Dış Cephe Platformu idealdir.`;
      reasonEn = `For ${facadeWidth}m facade width, the Single Column Work Platform (up to 10m span) offers maximum agility and economy.`;
    } else {
      model = PRODUCTS[0]; // Çift Kolonlu Platform
      mastColumns = 2;
      reasonTr = `${facadeWidth}m geniş cephede kesintisiz cam, granit, mantolama ve kaplama işleri için 30m kapasiteli Çift Kolonlu Platform önerilir.`;
      reasonEn = `For ${facadeWidth}m wide facade works, the Twin Column Work Platform (up to 30m span, 4x2.2 kW) is recommended.`;
    }

    const mastPerColumn = Math.ceil(buildingHeight / 1.5);
    const totalMasts = mastPerColumn * mastColumns;
    const totalAnchors = Math.max(1, Math.floor(buildingHeight / tieInterval)) * mastColumns;

    return {
      model,
      reason: { tr: reasonTr, en: reasonEn },
      mastColumns,
      mastPerColumn,
      totalMasts,
      totalAnchors,
      tieInterval
    };
  }, [buildingHeight, facadeWidth, usageType]);

  const handleTransfer = () => {
    setSubmittedMsg(true);
    setTimeout(() => setSubmittedMsg(false), 3000);
    onTransferToQuote({
      product: recommendation.model,
      buildingHeight,
      facadeWidth,
      usageType,
      totalMasts: recommendation.totalMasts,
      totalAnchors: recommendation.totalAnchors
    });
  };

  return (
    <section
      id="estimator"
      className={`py-24 border-t transition-colors ${
        lightMode
          ? 'bg-slate-100 border-slate-200 text-slate-900'
          : 'bg-[#161920] border-white/10 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5722]/15 border border-[#FF5722]/40 text-[#FF5722] text-xs font-tech font-bold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE CONFIGURATOR & QUOTE ESTIMATOR</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 tracking-tight">
            {lang === 'tr' ? (
              <>
                Akıllı <span className="text-[#FF5722]">Sistem & Teklif</span> Hesaplama Aracı
              </>
            ) : (
              <>
                Smart <span className="text-[#FF5722]">System & Quote</span> Estimator
              </>
            )}
          </h2>
          <p
            className={`text-sm sm:text-base mt-2 ${
              lightMode ? 'text-slate-600' : 'text-slate-400'
            }`}
          >
            {lang === 'tr'
              ? 'Şantiyenizin bina yüksekliğini, cephe genişliğini ve operasyon türünü seçin; mühendislik algoritmamız en uygun CENKAMAK modelini, mast modül sayısını ve ankraj ihtiyacını anında hesaplasın.'
              : 'Select your building height, facade width, and operation type; our engineering calculator instantly determines the ideal CENKAMAK model, mast count, and anchorage ties.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 7 Columns: Interactive Parameter Sliders & Selectors */}
          <div
            className={`lg:col-span-7 rounded-3xl p-6 sm:p-8 border flex flex-col justify-between space-y-8 ${
              lightMode
                ? 'bg-white border-slate-200 shadow-xl'
                : 'bg-[#1E2229]/90 border-white/10 shadow-2xl'
            }`}
          >
            {/* 1. Operation / Platform Type */}
            <div className="space-y-3">
              <label className="block font-tech text-xs font-bold uppercase tracking-wider text-[#FF5722]">
                1. {lang === 'tr' ? 'DIŞ CEPHE PLATFORM TÜRÜ SEÇİN' : 'SELECT FACADE PLATFORM TYPE'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'twin',
                    title: {
                      tr: 'Geniş Cephe Kaplama & Cam (Çift Kolon)',
                      en: 'Wide Facade Cladding & Glass (Twin)'
                    },
                    sub: { tr: '10m - 30m Geniş Çalışma Platformu', en: '10m - 30m Wide Work Platform' }
                  },
                  {
                    id: 'single',
                    title: {
                      tr: 'Dar Cephe & Hızlı Kurulum (Tek Kolon)',
                      en: 'Narrow Facade & Agile Setup (Single)'
                    },
                    sub: { tr: '3m - 10m Kompakt Çalışma Platformu', en: '3m - 10m Compact Work Platform' }
                  },
                  {
                    id: 'corner',
                    title: {
                      tr: 'Girintili / Çıkıntılı Köşe Mimari Cephe',
                      en: 'Recessed / Corner Architectural Facade'
                    },
                    sub: { tr: '21m Köşe Saran Özel Platform', en: '21m Wrap-Around Corner System' }
                  }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setUsageType(opt.id)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      usageType === opt.id
                        ? 'bg-[#FF5722]/15 border-[#FF5722] ring-2 ring-[#FF5722]/25'
                        : lightMode
                        ? 'bg-slate-50 border-slate-200 hover:border-slate-300'
                        : 'bg-[#121418]/70 border-white/10 hover:border-white/25'
                    }`}
                  >
                    <div className="font-display font-bold text-sm">{opt.title[lang]}</div>
                    <div className="font-tech text-xs text-[#FFB300] mt-1">{opt.sub[lang]}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Building Height Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="font-tech text-xs font-bold uppercase tracking-wider text-[#FF5722]">
                  2. {lang === 'tr' ? 'BİNA YÜKSEKLİĞİ (METRE)' : 'BUILDING HEIGHT (METERS)'}
                </label>
                <span className="px-3 py-1 rounded-lg bg-[#FF5722] text-white font-display font-extrabold text-lg">
                  {buildingHeight} m
                </span>
              </div>
              <input
                type="range"
                min="6"
                max="150"
                step="1"
                value={buildingHeight}
                onChange={(e) => setBuildingHeight(Number(e.target.value))}
                className="w-full accent-[#FF5722] h-2.5 bg-slate-700 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-tech text-slate-400">
                <span>6m (Ankrajsız Sınır)</span>
                <span>50m (Orta Yükseklik)</span>
                <span>100m (Yüksek Yapı)</span>
                <span>150m (Maksimum)</span>
              </div>
            </div>

            {/* 3. Facade Width Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="font-tech text-xs font-bold uppercase tracking-wider text-[#FF5722]">
                  3. {lang === 'tr' ? 'CEPHE ÇALIŞMA GENİŞLİĞİ (METRE)' : 'FACADE WORKING WIDTH (METERS)'}
                </label>
                <span className="px-3 py-1 rounded-lg bg-[#FFB300] text-[#121418] font-display font-extrabold text-lg">
                  {facadeWidth} m
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="30"
                step="1"
                value={facadeWidth}
                onChange={(e) => setFacadeWidth(Number(e.target.value))}
                className="w-full accent-[#FFB300] h-2.5 bg-slate-700 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-tech text-slate-400">
                <span>3m (Minimum)</span>
                <span>10m (Tek Kolon Max)</span>
                <span>21m (Çift Köşe Max)</span>
                <span>30m (Çift Kolon Max)</span>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Recommended Model & Live Hardware Breakdown */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-[#121418] border border-[#FF5722]/60 neon-border-orange text-white flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#FF5722]/20 border border-[#FF5722]/50 text-[#FF5722] font-tech text-xs font-bold">
                  {lang === 'tr' ? 'ÖNERİLEN CENKAMAK SİSTEMİ' : 'RECOMMENDED CENKAMAK SYSTEM'}
                </span>
                <span className="font-tech text-xs text-emerald-400 font-bold">
                  {recommendation.model.code}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={recommendation.model.image}
                  alt={recommendation.model.name[lang]}
                  className="w-24 h-24 rounded-xl object-cover border border-white/15 shrink-0"
                />
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white">
                    {recommendation.model.name[lang]}
                  </h3>
                  <p className="text-xs font-tech text-[#FFB300] mt-1">
                    {recommendation.model.steelGrade} • TS EN Sertifikalı
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-white/5 p-3.5 rounded-xl border border-white/10">
                {recommendation.reason[lang]}
              </p>

              {/* Calculated Hardware Telemetry */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#1E2229] border border-white/10">
                  <span className="text-[11px] font-tech text-slate-400 block">
                    {lang === 'tr' ? 'MAST ADEDİ' : 'MAST UNITS'}
                  </span>
                  <span className="font-display font-extrabold text-xl text-[#FF5722]">
                    {recommendation.totalMasts} Adet
                  </span>
                  <span className="text-[10px] font-tech text-slate-400 block">
                    ({recommendation.mastColumns} Kolon x 1.5m Modül)
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#1E2229] border border-white/10">
                  <span className="text-[11px] font-tech text-slate-400 block">
                    {lang === 'tr' ? 'CEPHE ANKRAJ SETİ' : 'WALL ANCHORAGE SETS'}
                  </span>
                  <span className="font-display font-extrabold text-xl text-[#FFB300]">
                    {recommendation.totalAnchors} Set
                  </span>
                  <span className="text-[10px] font-tech text-slate-400 block">
                    (Her {recommendation.tieInterval}m Aralıkla)
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#1E2229] border border-white/10">
                  <span className="text-[11px] font-tech text-slate-400 block">
                    {lang === 'tr' ? 'TAŞIMA KAPASİTESİ' : 'PAYLOAD CAPACITY'}
                  </span>
                  <span className="font-tech font-bold text-sm text-emerald-400">
                    {recommendation.model.capacity?.[lang] || recommendation.model.highlights[1]?.value}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#1E2229] border border-white/10">
                  <span className="text-[11px] font-tech text-slate-400 block">
                    {lang === 'tr' ? 'MOTOR & SEYİR HIZI' : 'DRIVE & SPEED'}
                  </span>
                  <span className="font-tech font-bold text-sm text-sky-400">
                    {recommendation.model.highlights[3]?.value}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
              <button
                type="button"
                onClick={handleTransfer}
                className="w-full py-4 px-5 rounded-xl bg-gradient-to-r from-[#FF5722] to-[#F4511E] text-white font-display font-bold text-sm shadow-xl shadow-[#FF5722]/30 hover:shadow-[#FF5722]/50 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>
                  {lang === 'tr'
                    ? 'Hesaplanan Sistemi Teklif Formuna Aktar'
                    : 'Transfer Configuration to Quote Form'}
                </span>
              </button>

              {submittedMsg && (
                <div className="text-center text-xs font-tech text-emerald-400 flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>
                    {lang === 'tr'
                      ? 'Parametreler teklif formuna başarıyla aktarıldı!'
                      : 'Parameters transferred to quote form!'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
