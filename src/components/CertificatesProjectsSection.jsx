import React, { useState } from 'react';
import {
  Building2,
  X
} from 'lucide-react';
import { REFERENCE_PROJECTS } from '../data/catalogData';

export default function CertificatesProjectsSection({ lang, lightMode }) {
  const [projectFilter, setProjectFilter] = useState('all');
  const [projLightbox, setProjLightbox] = useState(null);

  const filteredProjects =
    projectFilter === 'all'
      ? REFERENCE_PROJECTS
      : REFERENCE_PROJECTS.filter((p) => p.category === projectFilter);

  return (
    <section
      id="referanslar"
      className={`py-24 border-t ${
        lightMode
          ? 'bg-white border-slate-200 text-slate-900'
          : 'bg-[#121418] border-white/10 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ARCHITECTURAL PROJECTS GALLERY (SKYSCRAPERS, CURVED BUILDINGS, CORNERS) */}
        <div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5722]/15 border border-[#FF5722]/40 text-[#FF5722] text-xs font-tech font-bold uppercase tracking-widest">
                <Building2 className="w-3.5 h-3.5" />
                <span>ZORLU MİMARİ PROJELER & SAHA REFERANSLARI</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 tracking-tight">
                {lang === 'tr' ? (
                  <>
                    Gökdelenler ve <span className="text-[#FF5722]">Kavisli Cephelerde</span> CENKAMAK İmzası
                  </>
                ) : (
                  <>
                    Skyscrapers & <span className="text-[#FF5722]">Curved Facade</span> Installations
                  </>
                )}
              </h2>
            </div>

            {/* Project Category Filter */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: { tr: 'Tümü (7)', en: 'All Projects (7)' } },
                { id: 'curved', label: { tr: 'Kavisli & Eğimli Binalar', en: 'Curved Towers' } },
                { id: 'skyscraper', label: { tr: 'Gökdelen Cepheleri', en: 'Skyscrapers' } },
                { id: 'corner', label: { tr: 'Köşe Sistemler', en: 'Corner Systems' } }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setProjectFilter(tab.id)}
                  className={`px-3.5 py-2 rounded-xl font-tech text-xs font-bold border ${
                    projectFilter === tab.id
                      ? 'bg-[#FF5722] text-white border-[#FF5722]'
                      : lightMode
                      ? 'bg-slate-100 border-slate-300 text-slate-700 hover:border-[#FF5722]'
                      : 'bg-[#1E2229] border-white/10 text-slate-300 hover:border-[#FF5722]'
                  }`}
                >
                  {tab.label[lang]}
                </button>
              ))}
            </div>
          </div>

          {/* Responsive Masonry-style Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[250px]">
            {filteredProjects.map((proj) => {
              const spanClass =
                proj.span === 'tall'
                  ? 'sm:row-span-2'
                  : proj.span === 'wide'
                  ? 'sm:col-span-2'
                  : '';
              return (
                <div
                  key={proj.id}
                  onClick={() => setProjLightbox(proj)}
                  className={`group relative rounded-2xl overflow-hidden border border-white/10 cursor-pointer bg-black ${spanClass}`}
                >
                  <img
                    src={proj.image}
                    alt={proj.title[lang]}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-[#121418]/25 to-transparent opacity-85" />

                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#FF5722] text-white font-tech text-xs font-bold shadow">
                    {proj.height}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-[11px] font-tech text-[#FFB300] font-semibold">
                      {proj.system}
                    </div>
                    <h4 className="font-display font-bold text-base mt-0.5">
                      {proj.title[lang]}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Project Lightbox Modal */}
      {projLightbox && (
        <div
          onClick={() => setProjLightbox(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full rounded-2xl bg-[#1E2229] border border-white/15 overflow-hidden shadow-2xl text-white"
          >
            <div className="px-6 py-4 bg-[#121418] border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-tech text-[#FF5722] font-bold">
                  {projLightbox.system} • {projLightbox.height}
                </span>
                <h4 className="font-display font-bold text-lg">{projLightbox.title[lang]}</h4>
              </div>
              <button
                onClick={() => setProjLightbox(null)}
                className="p-2 rounded-lg bg-[#FF5722] text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-black flex items-center justify-center max-h-[75vh] overflow-hidden">
              <img
                src={projLightbox.image}
                alt={projLightbox.title[lang]}
                className="max-h-[72vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
