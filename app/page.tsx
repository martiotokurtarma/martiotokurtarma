"use client";

import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  Car, 
  Wrench, 
  Truck, 
  Battery, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ChevronRight,
  AlertTriangle
} from 'lucide-react';

// Orijinal WhatsApp Logosu Bileşeni
const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // İletişim Bilgileri - İki farklı numara ve WhatsApp linkleri
  const contacts = [
    { 
      name: "Hakan KISAER", 
      phone: "0545 101 19 78", 
      call: "tel:05451011978",
      wa: "https://wa.me/905451011978"
    },
    { 
      name: "Orhan KISAER", 
      phone: "0530 977 25 16", 
      call: "tel:05309772516",
      wa: "https://wa.me/905309772516"
    }
  ];

  // Sayfa içi yumuşak kaydırma
  const scrollTo = (id = '') => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Google için Yapısal Veri (Schema.org - AutoTowing)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowing",
    "name": "Martı Oto Kurtarma",
    "image": "https://www.martiotokurtarma.com/logo.png",
    "@id": "https://www.martiotokurtarma.com",
    "url": "https://www.martiotokurtarma.com",
    "telephone": "+905451011978",
    "priceRange": "₺₺",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bursa",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.1828,
      "longitude": 29.0667 
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-red-200 selection:text-red-900">
      
      {/* Schema Markup Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Üst Bilgi Şeridi (Top Bar) */}
      <div className="hidden md:flex bg-zinc-900 text-zinc-300 py-2 text-sm">
        <div className="container mx-auto px-4 md:px-8 flex items-center max-w-7xl">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><MapPin size={16} className="text-red-500" /> Bursa ve Çevre İlçeler</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-red-500" /> 7/24 Kesintisiz Hizmet</span>
          </div>
        </div>
      </div>

      {/* Ana Navigasyon */}
      <nav className="bg-white border-b border-zinc-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex flex-col justify-center cursor-pointer" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="text-3xl font-black tracking-tight text-zinc-900 leading-none">MARTI</span>
              <span className="text-sm font-bold tracking-widest text-red-600 uppercase leading-none mt-1">Oto Kurtarma</span>
            </div>

            {/* Masaüstü Menü (Linkler) */}
            <div className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollTo('hizmetler')} className="text-zinc-600 hover:text-red-600 font-medium transition-colors">Hizmetler</button>
              <button onClick={() => scrollTo('hakkimizda')} className="text-zinc-600 hover:text-red-600 font-medium transition-colors">Hakkımızda</button>
            </div>

            {/* Masaüstü CTA (Hızlı Arama Butonları) */}
            <div className="hidden md:flex items-center gap-3">
              {/* Hakan İletişim Grubu */}
              <div className="flex items-center shadow-md rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <a href={contacts[0].call} className="bg-red-600 text-white px-4 py-2.5 rounded-l-xl hover:bg-red-700 flex flex-col items-center">
                  <span className="flex items-center gap-2 font-bold text-xs"><Phone size={12} fill="currentColor" className="animate-pulse" /> {contacts[0].name}</span>
                </a>
                <a href={contacts[0].wa} target="_blank" rel="noreferrer" className="bg-[#25D366] text-white px-3 py-2.5 rounded-r-xl hover:bg-[#20b858] border-l border-white/20 flex items-center justify-center" title="WhatsApp'tan Yaz">
                  <WhatsAppIcon size={16} />
                </a>
              </div>
              
              {/* Orhan İletişim Grubu */}
              <div className="flex items-center shadow-md rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <a href={contacts[1].call} className="bg-zinc-800 text-white px-4 py-2.5 rounded-l-xl hover:bg-zinc-700 flex flex-col items-center">
                  <span className="flex items-center gap-2 font-bold text-xs"><Phone size={12} fill="currentColor" className="animate-pulse" /> {contacts[1].name}</span>
                </a>
                <a href={contacts[1].wa} target="_blank" rel="noreferrer" className="bg-[#25D366] text-white px-3 py-2.5 rounded-r-xl hover:bg-[#20b858] border-l border-white/20 flex items-center justify-center" title="WhatsApp'tan Yaz">
                  <WhatsAppIcon size={16} />
                </a>
              </div>
            </div>

            {/* Mobil Menü Butonu */}
            <button 
              className="md:hidden p-2 text-zinc-600 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobil Menü Açılır Ekranı */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-zinc-200 shadow-2xl py-4 flex flex-col gap-4 z-50">
            <div className="px-4 pb-4 border-b border-zinc-100 flex flex-col gap-4">
              
              {/* Hakan Mobil */}
              <div className="bg-zinc-50 p-3 rounded-2xl border border-zinc-100">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">{contacts[0].name}</span>
                <div className="flex gap-2">
                  <a href={contacts[0].call} className="flex-1 bg-red-600 text-white py-3 rounded-xl flex justify-center items-center gap-2 font-bold active:scale-95 transition-transform shadow-md"><Phone size={18} fill="currentColor"/> Ara</a>
                  <a href={contacts[0].wa} target="_blank" rel="noreferrer" className="flex-1 bg-[#25D366] text-white py-3 rounded-xl flex justify-center items-center gap-2 font-bold active:scale-95 transition-transform shadow-md"><WhatsAppIcon size={18}/> WhatsApp</a>
                </div>
              </div>

              {/* Orhan Mobil */}
              <div className="bg-zinc-50 p-3 rounded-2xl border border-zinc-100">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">{contacts[1].name}</span>
                <div className="flex gap-2">
                  <a href={contacts[1].call} className="flex-1 bg-zinc-800 text-white py-3 rounded-xl flex justify-center items-center gap-2 font-bold active:scale-95 transition-transform shadow-md"><Phone size={18} fill="currentColor"/> Ara</a>
                  <a href={contacts[1].wa} target="_blank" rel="noreferrer" className="flex-1 bg-[#25D366] text-white py-3 rounded-xl flex justify-center items-center gap-2 font-bold active:scale-95 transition-transform shadow-md"><WhatsAppIcon size={18}/> WhatsApp</a>
                </div>
              </div>

            </div>
            <div className="pt-2">
              <button onClick={() => scrollTo('hizmetler')} className="w-full text-left px-6 py-3 text-zinc-800 font-medium hover:bg-zinc-50">Hizmetler</button>
              <button onClick={() => scrollTo('hakkimizda')} className="w-full text-left px-6 py-3 text-zinc-800 font-medium hover:bg-zinc-50">Hakkımızda</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero (Ana Görsel) Alanı */}
      <section className="relative bg-zinc-900 overflow-hidden">
        {/* Dekoratif Arka Plan Şekli */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-600 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-red-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-5xl py-8 md:py-24 relative z-10 flex flex-col items-center justify-center min-h-[auto] md:min-h-[60vh]">
          
          <div className="space-y-5 md:space-y-8 text-center w-full">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-zinc-800/80 border border-zinc-700 text-red-400 font-semibold text-xs md:text-sm mx-auto">
              <span className="relative flex h-2 w-2 md:h-3 md:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-red-500"></span>
              </span>
              Bursa 7/24 Acil Yol Yardım &amp; Oto Çekici
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1]">
              Bursa'nın Her Yerinde <br className="hidden md:block"/> Anında <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Yanınızdayız</span>
            </h1>
            
            <p className="text-sm md:text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed px-2 md:px-0">
              Aracınız mı arızalandı? Kazaya mı karıştınız? En kısa sürede yanınızdayız. Ekibimize tek tıkla hemen ulaşın.
            </p>
            
            {/* Ana Arama ve WhatsApp Kartları */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-6 w-full max-w-4xl mx-auto pt-2 md:pt-6">
              
              {/* Hakan Kartı */}
              <div className="w-full md:w-1/2 bg-white/5 backdrop-blur-sm border border-zinc-700/50 p-4 md:p-6 rounded-2xl flex flex-col items-center shadow-2xl">
                <div className="flex flex-row items-center justify-between w-full mb-3 md:mb-5">
                  <div className="text-left">
                    <h3 className="text-lg md:text-2xl font-black text-white">{contacts[0].name}</h3>
                  </div>
                  <span className="text-xs md:text-sm font-medium text-red-300 bg-red-500/10 px-2 py-1 md:px-3 md:py-1.5 rounded-lg border border-red-500/20">{contacts[0].phone}</span>
                </div>
                <div className="flex flex-row gap-2 w-full">
                  <a href={contacts[0].call} className="flex-1 flex items-center justify-center gap-1 md:gap-2 bg-red-600 hover:bg-red-500 text-white py-2.5 md:py-3.5 rounded-xl font-bold transition-all shadow-lg text-sm md:text-base">
                    <Phone size={16} className="animate-pulse" /> Ara
                  </a>
                  <a href={contacts[0].wa} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-1 md:gap-2 bg-[#25D366] hover:bg-[#20b858] text-white py-2.5 md:py-3.5 rounded-xl font-bold transition-all shadow-lg text-sm md:text-base">
                    <WhatsAppIcon size={16} /> WhatsApp
                  </a>
                </div>
              </div>

              {/* Orhan Kartı */}
              <div className="w-full md:w-1/2 bg-white/5 backdrop-blur-sm border border-zinc-700/50 p-4 md:p-6 rounded-2xl flex flex-col items-center shadow-2xl">
                <div className="flex flex-row items-center justify-between w-full mb-3 md:mb-5">
                  <div className="text-left">
                    <h3 className="text-lg md:text-2xl font-black text-white">{contacts[1].name}</h3>
                  </div>
                  <span className="text-xs md:text-sm font-medium text-zinc-300 bg-zinc-500/10 px-2 py-1 md:px-3 md:py-1.5 rounded-lg border border-zinc-500/20">{contacts[1].phone}</span>
                </div>
                <div className="flex flex-row gap-2 w-full">
                  <a href={contacts[1].call} className="flex-1 flex items-center justify-center gap-1 md:gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-white py-2.5 md:py-3.5 rounded-xl font-bold transition-all shadow-lg text-sm md:text-base">
                    <Phone size={16} className="animate-pulse" /> Ara
                  </a>
                  <a href={contacts[1].wa} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-1 md:gap-2 bg-[#25D366] hover:bg-[#20b858] text-white py-2.5 md:py-3.5 rounded-xl font-bold transition-all shadow-lg text-sm md:text-base">
                    <WhatsAppIcon size={16} /> WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* İstatistik / Güven Bandı - 4 Sütundan 3 Sütuna Düşürüldü */}
      <div className="bg-red-600 text-white relative z-20 shadow-lg">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-4 md:py-6">
          <div className="grid grid-cols-3 gap-4 md:gap-6 text-center divide-x divide-red-500/50">
            <div className="px-2">
              <div className="text-xl md:text-3xl font-black mb-1">7/24</div>
              <div className="text-[10px] md:text-sm font-medium text-red-100">Kesintisiz İletişim</div>
            </div>
            <div className="px-2">
              <div className="text-sm md:text-xl font-black mb-1">En Kısa Sürede</div>
              <div className="text-[10px] md:text-sm font-medium text-red-100">Hızlı Müdahale</div>
            </div>
            <div className="px-2">
              <div className="text-xl md:text-3xl font-black mb-1">Bursa</div>
              <div className="text-[10px] md:text-sm font-medium text-red-100">Tüm İlçelere Hizmet</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hizmetler Bölümü */}
      <section id="hizmetler" className="py-24 bg-zinc-50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-3">Çözümlerimiz</h2>
            <h3 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">Her Durumda Yanınızdayız</h3>
            <p className="text-lg text-zinc-600">Binek araçlardan ticari araçlara kadar, yolda karşılaştığınız her türlü aksilikte anında arayabileceğiniz profesyonel ekiplerimiz hazır.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kart 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                <Car className="text-red-600 group-hover:text-white transition-colors" size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-zinc-900">Otomobil Çekici</h4>
              <p className="text-zinc-600 leading-relaxed mb-8 flex-grow">Arızalı veya kazalı binek araçlarınızı, kayar kasa çekicilerimizle çizik dahi almadan istediğiniz servise ulaştırıyoruz.</p>
              
              <div className="space-y-4 mt-auto pt-6 border-t border-zinc-100">
                {/* Hakan Hızlı İletişim */}
                <div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">{contacts[0].name}</span>
                  <div className="flex gap-2">
                    <a href={contacts[0].call} className="flex-1 flex justify-center items-center gap-2 bg-zinc-50 hover:bg-red-50 text-zinc-800 hover:text-red-700 py-2.5 rounded-lg font-bold text-sm transition-colors border border-zinc-200"><Phone size={14}/> Ara</a>
                    <a href={contacts[0].wa} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 bg-zinc-50 hover:bg-green-50 text-zinc-800 hover:text-green-700 py-2.5 rounded-lg font-bold text-sm transition-colors border border-zinc-200"><WhatsAppIcon size={14}/> WhatsApp</a>
                  </div>
                </div>
                {/* Orhan Hızlı İletişim */}
                <div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">{contacts[1].name}</span>
                  <div className="flex gap-2">
                    <a href={contacts[1].call} className="flex-1 flex justify-center items-center gap-2 bg-zinc-50 hover:bg-zinc-200 text-zinc-800 py-2.5 rounded-lg font-bold text-sm transition-colors border border-zinc-200"><Phone size={14}/> Ara</a>
                    <a href={contacts[1].wa} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 bg-zinc-50 hover:bg-green-50 text-zinc-800 hover:text-green-700 py-2.5 rounded-lg font-bold text-sm transition-colors border border-zinc-200"><WhatsAppIcon size={14}/> WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Kart 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                <Truck className="text-red-600 group-hover:text-white transition-colors" size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-zinc-900">Ticari Araç Çekici</h4>
              <p className="text-zinc-600 leading-relaxed mb-8 flex-grow">Minibüs, panelvan ve hafif ticari araçlarınız için özel donanımlı, yüksek kapasiteli kurtarıcılarımızla hizmetinizdeyiz.</p>
              
              <div className="space-y-4 mt-auto pt-6 border-t border-zinc-100">
                {/* Hakan Hızlı İletişim */}
                <div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">{contacts[0].name}</span>
                  <div className="flex gap-2">
                    <a href={contacts[0].call} className="flex-1 flex justify-center items-center gap-2 bg-zinc-50 hover:bg-red-50 text-zinc-800 hover:text-red-700 py-2.5 rounded-lg font-bold text-sm transition-colors border border-zinc-200"><Phone size={14}/> Ara</a>
                    <a href={contacts[0].wa} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 bg-zinc-50 hover:bg-green-50 text-zinc-800 hover:text-green-700 py-2.5 rounded-lg font-bold text-sm transition-colors border border-zinc-200"><WhatsAppIcon size={14}/> WhatsApp</a>
                  </div>
                </div>
                {/* Orhan Hızlı İletişim */}
                <div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">{contacts[1].name}</span>
                  <div className="flex gap-2">
                    <a href={contacts[1].call} className="flex-1 flex justify-center items-center gap-2 bg-zinc-50 hover:bg-zinc-200 text-zinc-800 py-2.5 rounded-lg font-bold text-sm transition-colors border border-zinc-200"><Phone size={14}/> Ara</a>
                    <a href={contacts[1].wa} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 bg-zinc-50 hover:bg-green-50 text-zinc-800 hover:text-green-700 py-2.5 rounded-lg font-bold text-sm transition-colors border border-zinc-200"><WhatsAppIcon size={14}/> WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Kart 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                <Battery className="text-red-600 group-hover:text-white transition-colors" size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-zinc-900">Akü & Yol Yardım</h4>
              <p className="text-zinc-600 leading-relaxed mb-8 flex-grow">Akünüz mü bitti veya lastiğiniz mi patladı? Çekiciye gerek kalmadan konumunuza gelerek yerinde profesyonel müdahale sağlıyoruz.</p>
              
              <div className="space-y-4 mt-auto pt-6 border-t border-zinc-100">
                {/* Hakan Hızlı İletişim */}
                <div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">{contacts[0].name}</span>
                  <div className="flex gap-2">
                    <a href={contacts[0].call} className="flex-1 flex justify-center items-center gap-2 bg-zinc-50 hover:bg-red-50 text-zinc-800 hover:text-red-700 py-2.5 rounded-lg font-bold text-sm transition-colors border border-zinc-200"><Phone size={14}/> Ara</a>
                    <a href={contacts[0].wa} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 bg-zinc-50 hover:bg-green-50 text-zinc-800 hover:text-green-700 py-2.5 rounded-lg font-bold text-sm transition-colors border border-zinc-200"><WhatsAppIcon size={14}/> WhatsApp</a>
                  </div>
                </div>
                {/* Orhan Hızlı İletişim */}
                <div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">{contacts[1].name}</span>
                  <div className="flex gap-2">
                    <a href={contacts[1].call} className="flex-1 flex justify-center items-center gap-2 bg-zinc-50 hover:bg-zinc-200 text-zinc-800 py-2.5 rounded-lg font-bold text-sm transition-colors border border-zinc-200"><Phone size={14}/> Ara</a>
                    <a href={contacts[1].wa} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 bg-zinc-50 hover:bg-green-50 text-zinc-800 hover:text-green-700 py-2.5 rounded-lg font-bold text-sm transition-colors border border-zinc-200"><WhatsAppIcon size={14}/> WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dev CTA (Call to Action) Alanı */}
      <section className="bg-red-600 py-24 relative overflow-hidden">
        {/* Arka plan deseni */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center relative z-10">
          <AlertTriangle size={64} className="text-white opacity-90 mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Yolda Mı Kaldınız?</h2>
          <p className="text-xl md:text-2xl text-red-100 mb-12 font-medium">
            Panik yapmayın. Hemen arayın veya konumunuzu WhatsApp'tan gönderin. Ekibimiz anında yola çıksın.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl mx-auto">
            
            {/* Hakan CTA Kartı */}
            <div className="w-full md:w-1/2 bg-white p-6 md:p-8 rounded-3xl flex flex-col items-center shadow-2xl hover:scale-105 transition-transform">
              <h3 className="text-2xl font-black text-zinc-900 mb-6">{contacts[0].name}</h3>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <a href={contacts[0].call} className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-xl font-bold transition-colors">
                  <Phone size={20} className="animate-pulse" /> Ara
                </a>
                <a href={contacts[0].wa} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white py-3.5 rounded-xl font-bold transition-colors">
                  <WhatsAppIcon size={20} /> WhatsApp
                </a>
              </div>
            </div>
            
            {/* Orhan CTA Kartı */}
            <div className="w-full md:w-1/2 bg-zinc-900 p-6 md:p-8 rounded-3xl flex flex-col items-center shadow-2xl hover:scale-105 transition-transform border-2 border-zinc-800">
              <h3 className="text-2xl font-black text-white mb-6">{contacts[1].name}</h3>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <a href={contacts[1].call} className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white py-3.5 rounded-xl font-bold transition-colors border border-zinc-700">
                  <Phone size={20} className="animate-pulse" /> Ara
                </a>
                <a href={contacts[1].wa} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white py-3.5 rounded-xl font-bold transition-colors">
                  <WhatsAppIcon size={20} /> WhatsApp
                </a>
              </div>
            </div>

          </div>
          
          <p className="mt-8 text-red-200 font-medium">Size en hızlı şekilde ulaşabilmemiz için iletişim kanallarımızdan birini seçin.</p>
        </div>
      </section>

      {/* Footer (Alt Bilgi) */}
      <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            
            {/* Marka */}
            <div>
              <div className="flex flex-col mb-6 cursor-pointer" onClick={() => scrollTo('top')}>
                <span className="text-3xl font-black tracking-tight text-white leading-none">MARTI</span>
                <span className="text-sm font-bold tracking-widest text-red-600 uppercase leading-none mt-1">Oto Kurtarma</span>
              </div>
              <p className="text-zinc-500 max-w-sm mb-6 leading-relaxed">
                Bursa ve çevresinde 7 gün 24 saat kesintisiz, güvenilir ve hızlı oto çekici & yol yardım hizmetleri.
              </p>
              <div className="flex items-center gap-2 text-zinc-300">
                <MapPin size={20} className="text-red-600" />
                <span>Bursa, Türkiye</span>
              </div>
            </div>

            {/* İletişim 1 */}
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50 flex flex-col justify-center">
              <span className="font-bold text-zinc-300 text-lg mb-2">{contacts[0].name}</span>
              <div className="flex gap-4">
                <a href={contacts[0].call} className="flex items-center gap-2 text-xl font-black text-white hover:text-red-500 transition-colors">
                  <Phone size={20} className="text-red-600" /> {contacts[0].phone}
                </a>
                <a href={contacts[0].wa} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-white bg-[#25D366]/20 px-3 py-1 rounded-lg hover:bg-[#25D366]/40 transition-colors">
                  <WhatsAppIcon size={16} className="text-[#25D366]" /> Yaz
                </a>
              </div>
            </div>

            {/* İletişim 2 */}
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50 flex flex-col justify-center">
              <span className="font-bold text-zinc-300 text-lg mb-2">{contacts[1].name}</span>
              <div className="flex gap-4">
                <a href={contacts[1].call} className="flex items-center gap-2 text-xl font-black text-white hover:text-red-500 transition-colors">
                  <Phone size={20} className="text-zinc-500" /> {contacts[1].phone}
                </a>
                <a href={contacts[1].wa} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-white bg-[#25D366]/20 px-3 py-1 rounded-lg hover:bg-[#25D366]/40 transition-colors">
                  <WhatsAppIcon size={16} className="text-[#25D366]" /> Yaz
                </a>
              </div>
            </div>

          </div>

          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
            <p>&copy; {new Date().getFullYear()} Martı Oto Kurtarma. Tüm Hakları Saklıdır.</p>
            <p className="text-zinc-600">Bursa En Yakın Çekici Hizmeti</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;