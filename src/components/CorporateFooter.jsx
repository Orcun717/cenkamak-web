import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  FileDown,
  Send,
  CheckCircle2,
  Building2,
  Globe,
  ShieldCheck,
  MessageCircle,
  ArrowUpRight,
  Printer,
  Instagram
} from 'lucide-react';
import CenkamakLogo from './CenkamakLogo';
import { COMPANY_INFO, PRODUCTS } from '../data/catalogData';

export default function CorporateFooter({
  lang,
  lightMode,
  prefilledQuote,
  quoteModalOpen,
  setQuoteModalOpen
}) {
  const [formState, setFormState] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    selectedModel: 'Çift Kolonlu Dış Cephe Platformu (Twin Work Platform)',
    buildingHeight: '85',
    facadeWidth: '18',
    notes: ''
  });
  const [sentSuccess, setSentSuccess] = useState(false);

  useEffect(() => {
    if (prefilledQuote) {
      setFormState((prev) => ({
        ...prev,
        selectedModel: prefilledQuote.product?.name?.[lang] || prev.selectedModel,
        buildingHeight: String(prefilledQuote.buildingHeight || prev.buildingHeight),
        facadeWidth: String(prefilledQuote.facadeWidth || prev.facadeWidth),
        notes:
          prefilledQuote.totalMasts
            ? `Hesaplanan Konfigürasyon: ${prefilledQuote.totalMasts} Adet Mast, ${prefilledQuote.totalAnchors} Set Cephe Ankrajı.`
            : prev.notes
      }));
    }
  }, [prefilledQuote, lang]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 5000);
  };

  return (
    <>
      {/* CORPORATE SECTION (Kurumsal Yapımız & Kahramanmaraş Fabrika) */}
      <section
        id="kurumsal"
        className={`py-24 border-t transition-colors ${
          lightMode
            ? 'bg-white border-slate-200 text-slate-900'
            : 'bg-[#121418] border-white/10 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 6 Cols: Factory Photo from Catalog Page 2 */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-[#FF5722]/40 shadow-2xl group">
                <img
                  src="catalog/factory-hq.jpg"
                  alt="CENKAMAK Kahramanmaraş Fabrika ve Ekibi"
                  loading="lazy"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-panel border border-white/10 text-white flex items-center justify-between">
                  <div>
                    <div className="text-xs font-tech text-[#FF5722] font-bold">
                      KAHRAMANMARAŞ MERKEZ FABRİKA
                    </div>
                    <div className="font-display font-bold text-sm sm:text-base mt-0.5">
                      CENKAMAK San. Tic. Ltd. Şti. Üretim Tesisleri
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-[#FF5722] text-white font-tech text-xs font-bold">
                    YERLİ ÜRETİM
                  </span>
                </div>
              </div>
            </div>

            {/* Right 6 Cols: Corporate Story (TR / EN from Catalog Page 3) */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5722]/15 border border-[#FF5722]/40 text-[#FF5722] text-xs font-tech font-bold uppercase tracking-widest">
                <Building2 className="w-3.5 h-3.5" />
                <span>{lang === 'tr' ? 'KURUMSAL YAPIMIZ' : 'INSTITUTIONAL PROFILE'}</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                {lang === 'tr' ? (
                  <>
                    Kahramanmaraş’tan <span className="text-[#FF5722]">Dünya Şantiyelerine</span> Uzanan Mühendislik Gücü
                  </>
                ) : (
                  <>
                    Engineering Power Extending from <span className="text-[#FF5722]">Kahramanmaraş</span> to Global Construction Sites
                  </>
                )}
              </h2>

              <div className="space-y-3.5">
                {COMPANY_INFO.corporateStory[lang].map((paragraph, i) => (
                  <p
                    key={i}
                    className={`text-sm sm:text-base leading-relaxed ${
                      lightMode ? 'text-slate-600' : 'text-slate-300'
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 pt-3">
                <div
                  className={`p-3.5 rounded-xl border ${
                    lightMode ? 'bg-slate-50 border-slate-200' : 'bg-[#1E2229] border-white/10'
                  }`}
                >
                  <div className="font-tech font-bold text-[#FF5722] text-sm">GÜVEN</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {lang === 'tr' ? 'Sertifikalı Tam Emniyet' : 'Certified Safety'}
                  </div>
                </div>
                <div
                  className={`p-3.5 rounded-xl border ${
                    lightMode ? 'bg-slate-50 border-slate-200' : 'bg-[#1E2229] border-white/10'
                  }`}
                >
                  <div className="font-tech font-bold text-[#FFB300] text-sm">KALİTE</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {lang === 'tr' ? 'St52 Yapı Çeliği' : 'St52 Structural Steel'}
                  </div>
                </div>
                <div
                  className={`p-3.5 rounded-xl border ${
                    lightMode ? 'bg-slate-50 border-slate-200' : 'bg-[#1E2229] border-white/10'
                  }`}
                >
                  <div className="font-tech font-bold text-sky-400 text-sm">HIZ & SERVİS</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {lang === 'tr' ? 'Orijinal Yedek Parça' : 'Original Spare Parts'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT, QUOTE FORM & INTERACTIVE MAP SECTION */}
      <section
        id="iletisim"
        className={`py-24 border-t transition-colors ${
          lightMode
            ? 'bg-slate-100 border-slate-200 text-slate-900'
            : 'bg-[#161920] border-white/10 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 5 Columns: Contact Details, Factory Map & E-Catalog PDF */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5722]/15 border border-[#FF5722]/40 text-[#FF5722] text-xs font-tech font-bold uppercase tracking-widest">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>MERKEZ & FABRİKA İLETİŞİM</span>
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-3">
                  {lang === 'tr' ? 'Bizimle İletişime Geçin' : 'Contact Our Engineering Team'}
                </h2>
              </div>

              <div
                className={`p-6 rounded-2xl border space-y-4 ${
                  lightMode
                    ? 'bg-white border-slate-200 shadow-lg'
                    : 'bg-[#1E2229]/90 border-white/10'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#FF5722] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-tech text-slate-400 uppercase">
                      {lang === 'tr' ? 'Telefon' : 'Phone'}
                    </div>
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                      className="font-tech font-bold text-base text-[#FF5722] hover:underline block mt-0.5"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#FF5722] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-tech text-slate-400 uppercase">E-Posta</div>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="font-tech text-sm hover:text-[#FF5722] transition-colors block"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <a
                      href={`mailto:${COMPANY_INFO.secondaryEmail}`}
                      className="font-tech text-xs text-slate-400 hover:text-[#FF5722] transition-colors block"
                    >
                      {COMPANY_INFO.secondaryEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Instagram className="w-5 h-5 text-[#FF5722] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-tech text-slate-400 uppercase">Instagram</div>
                    <a
                      href={`https://www.instagram.com/${COMPANY_INFO.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-tech text-sm font-semibold hover:text-[#FF5722] transition-colors block mt-0.5"
                    >
                      @{COMPANY_INFO.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Engineering Quote Request Form */}
            <div
              className={`lg:col-span-7 rounded-3xl p-6 sm:p-8 border ${
                lightMode
                  ? 'bg-white border-slate-200 shadow-xl'
                  : 'bg-[#1E2229]/90 border-white/10 shadow-2xl'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-tech text-[#FF5722] font-bold uppercase">
                    {lang === 'tr' ? 'HIZLI FİYAT & PROJE TEKLİF FORMU' : 'RAPID PROJECT QUOTE FORM'}
                  </span>
                  <h3 className="font-display text-2xl font-extrabold mt-1">
                    {lang === 'tr'
                      ? 'Şantiyeniz İçin Teknik Teklif İste'
                      : 'Request an Engineering Quotation'}
                  </h3>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-tech text-slate-400 mb-1">
                      {lang === 'tr' ? 'Adınız Soyadınız *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      placeholder={lang === 'tr' ? 'Örn: Ahmet Yılmaz' : 'e.g. John Doe'}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-[#FF5722] ${
                        lightMode
                          ? 'bg-slate-50 border-slate-300 text-slate-900'
                          : 'bg-[#121418] border-white/10 text-white'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-tech text-slate-400 mb-1">
                      {lang === 'tr' ? 'Firma / Şantiye Adı *' : 'Company / Project Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      placeholder={lang === 'tr' ? 'Örn: Yıldız İnşaat A.Ş.' : 'Company Ltd.'}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-[#FF5722] ${
                        lightMode
                          ? 'bg-slate-50 border-slate-300 text-slate-900'
                          : 'bg-[#121418] border-white/10 text-white'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-tech text-slate-400 mb-1">
                      {lang === 'tr' ? 'Telefon Numarası *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+90 5XX XXX XX XX"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-[#FF5722] ${
                        lightMode
                          ? 'bg-slate-50 border-slate-300 text-slate-900'
                          : 'bg-[#121418] border-white/10 text-white'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-tech text-slate-400 mb-1">
                      {lang === 'tr' ? 'E-Posta Adresi' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="ornek@firma.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-[#FF5722] ${
                        lightMode
                          ? 'bg-slate-50 border-slate-300 text-slate-900'
                          : 'bg-[#121418] border-white/10 text-white'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-tech text-slate-400 mb-1">
                      {lang === 'tr' ? 'İlgilenilen Model' : 'Selected System'}
                    </label>
                    <select
                      value={formState.selectedModel}
                      onChange={(e) => setFormState({ ...formState, selectedModel: e.target.value })}
                      className={`w-full px-3 py-3 rounded-xl border text-sm focus:outline-none focus:border-[#FF5722] ${
                        lightMode
                          ? 'bg-slate-50 border-slate-300 text-slate-900'
                          : 'bg-[#121418] border-white/10 text-white'
                      }`}
                    >
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.name[lang]}>
                          {p.shortName[lang]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-tech text-slate-400 mb-1">
                      {lang === 'tr' ? 'Bina Yüksekliği (m)' : 'Building Height (m)'}
                    </label>
                    <input
                      type="number"
                      value={formState.buildingHeight}
                      onChange={(e) =>
                        setFormState({ ...formState, buildingHeight: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-tech font-bold text-[#FF5722] focus:outline-none focus:border-[#FF5722] ${
                        lightMode
                          ? 'bg-slate-50 border-slate-300'
                          : 'bg-[#121418] border-white/10'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-tech text-slate-400 mb-1">
                      {lang === 'tr' ? 'Cephe Genişliği (m)' : 'Facade Width (m)'}
                    </label>
                    <input
                      type="number"
                      value={formState.facadeWidth}
                      onChange={(e) =>
                        setFormState({ ...formState, facadeWidth: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-tech font-bold text-[#FFB300] focus:outline-none focus:border-[#FF5722] ${
                        lightMode
                          ? 'bg-slate-50 border-slate-300'
                          : 'bg-[#121418] border-white/10'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-tech text-slate-400 mb-1">
                    {lang === 'tr'
                      ? 'Proje Detayları & Özel Talepler (Kiralama / Satın Alma / Özel Ankraj)'
                      : 'Project Notes & Special Requirements'}
                  </label>
                  <textarea
                    rows={3}
                    value={formState.notes}
                    onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                    placeholder={
                      lang === 'tr'
                        ? 'Şantiye şehri, teslim tarihi veya özel cephe detaylarını yazabilirsiniz...'
                        : 'Enter project city, timeline, or special facade geometry...'
                    }
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-[#FF5722] ${
                      lightMode
                        ? 'bg-slate-50 border-slate-300 text-slate-900'
                        : 'bg-[#121418] border-white/10 text-white'
                    }`}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#FF5722] to-[#F4511E] text-white font-display font-bold text-sm shadow-xl shadow-[#FF5722]/25 hover:shadow-[#FF5722]/45 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'tr' ? 'Teklif Talebini Gönder' : 'Submit Quote Request'}</span>
                  </button>
                </div>

                {sentSuccess && (
                  <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-xs font-tech flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>
                      {lang === 'tr'
                        ? 'Teklif talebiniz CENKAMAK proje departmanına iletildi. En kısa sürede dönüş yapılacaktır.'
                        : 'Your quote request has been registered with CENKAMAK Engineering.'}
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0D0F12] border-t border-white/10 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <CenkamakLogo size="sm" />
            <span className="text-xs font-tech text-slate-500">
              © {new Date().getFullYear()} {COMPANY_INFO.name} — Tüm Hakları Saklıdır.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs font-tech">
            <a href="#urunler" className="hover:text-[#FF5722] transition-colors">
              Çift Kolonlu Platform
            </a>
            <a href="#urunler" className="hover:text-[#FF5722] transition-colors">
              Tek Kolonlu Platform
            </a>
            <a href="#urunler" className="hover:text-[#FF5722] transition-colors">
              CK 2000 Çift Köşe
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
