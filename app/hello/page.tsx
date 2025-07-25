"use client";

// src/app/page.tsx
// Importy pro Next.js a Framer Motion
import { motion } from 'framer-motion'; // Import Framer Motion pro animace
import { useState, useEffect } from 'react';


// Komponenta pro navigaci
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      
      // Nastavení sticky pozice
      setIsScrolled(scrollTop > 50);
      
      // Plynulé zobrazování/skrývání podle směru scrollu
      if (scrollTop > lastScrollY && scrollTop > 100) {
        // Scrollujeme dolů a jsme pod 100px - skryjeme navigaci
        setIsVisible(false);
      } else {
        // Scrollujeme nahoru nebo jsme nahoře - zobrazíme navigaci
        setIsVisible(true);
      }
      
      setLastScrollY(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`w-full z-50 backdrop-blur-md bg-slate-900/95 border-b border-yellow-400/30 py-4 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? `fixed top-0 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}` 
        : 'relative translate-y-0 opacity-100'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo obrázek + text */}
        <a href="#" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
          <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
            Elektroinstalace Trunec
          </span>
        </a>
        {/* Navigace + telefon */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex space-x-8">
            <li><a href="#sluzby" className="relative group text-gray-200 hover:text-yellow-400 transition duration-300 font-medium">
              Služby
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </a></li>      
            <li><a href="/galerie" className="relative group text-gray-200 hover:text-yellow-400 transition duration-300 font-medium">
              Galerie
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </a></li>
            <li><a href="#o-mne" className="relative group text-gray-200 hover:text-yellow-400 transition duration-300 font-medium">
              O mně
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </a></li>
            <li><a href="#reference" className="relative group text-gray-200 hover:text-yellow-400 transition duration-300 font-medium">
              Reference
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </a></li>
            <li><a href="#kontakt" className="relative group text-gray-200 hover:text-yellow-400 transition duration-300 font-medium">
              Kontakt
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </a></li>
          </ul>
          {/* Moderní telefonní číslo vpravo */}
          <a
            href="tel:+420704280499"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-300 text-slate-900 font-bold shadow-lg ring-1 ring-yellow-300/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-yellow-500 hover:to-yellow-400 hover:text-white group"
            style={{ boxShadow: '0 2px 16px 0 rgba(255, 193, 7, 0.12)' }}
          >
            <svg
              className="w-5 h-5 text-slate-900 transition-colors duration-300 group-hover:text-white group-hover:drop-shadow-lg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.37 1.6.7 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.88 6.88l1.27-1.27a2 2 0 0 1 2.11-.45c.74.33 1.53.57 2.34.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="transition-colors duration-300 group-hover:text-white group-hover:drop-shadow-lg">+420 704 280 499</span>
          </a>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors text-yellow-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

// Hlavní komponenta stránky
export default function Home() {
  return (
    <div className="font-sans antialiased text-slate-800">
      <Navbar />
      {/* Hero sekce ve žluté a tmavě modré */}
      <section id="hero" className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animované pozadí ve žluté */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-10 left-40 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Elektroinstalace Trunec
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto mb-6 rounded-full"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl font-light mb-4 text-yellow-100 leading-relaxed"
          >
            elektroinstalace • kompletace domovních rozvaděčů • zakázkový 3D tisk
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed"
          >
            Jsem mladý elektrikář, který se zaměřuje na elektroinstalace, výrobu a montáž domovních rozvaděčů, instalaci osvětlení, 3D tisk na míru a mnohé další.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="#kontakt"
              className="group relative px-8 py-4 bg-yellow-400 text-slate-900 font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Kontaktovat</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#galerie"
              className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-2xl hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 backdrop-blur-sm"
            >
              Zobrazit práce
            </motion.a>
          </motion.div>
          {/* Scroll indicator ve žluté */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-yellow-400 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Sekce Služby */}
      <section id="sluzby" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-slate-800 to-slate-900 bg-clip-text text-transparent"
          >
            Služby
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Služba 1: Elektroinstalace */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-yellow-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-yellow-400">⚡</span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-slate-900 transition-colors">Elektroinstalace</h4>
                <p className="text-slate-600 leading-relaxed">Kompletní instalace, modernizace a opravy rozvodů v domech i firmách.</p>
              </div>
            </motion.div>
            {/* Služba 2: Rozvaděče */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-yellow-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-yellow-400">🛠️</span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-slate-900 transition-colors">Chytré rozvaděče</h4>
                <p className="text-slate-600 leading-relaxed">Návrh a sestavení rozvaděčů.</p>
              </div>
            </motion.div>
            {/* Služba 3: Osvětlení */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-yellow-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-yellow-400">💡</span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-slate-900 transition-colors">Osvětlení</h4>
                <p className="text-slate-600 leading-relaxed">Instalace a modernizace osvětlení v interiéru i exteriéru.</p>
              </div>
            </motion.div>
            {/* Služba 4: 3D tisk */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-yellow-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-yellow-400">🧊</span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-slate-900 transition-colors">3D tisk na míru</h4>
                <p className="text-slate-600 leading-relaxed">Výroba plastových komponentů a specifických dílů pomocí 3D tisku na zakázku.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



         {/* Sekce Galerie - Fotky realizovaných prací */}
      <section id="galerie" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-slate-800 to-slate-900 bg-clip-text text-transparent"
          >
            Galerie realizovaných prací
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Fotka 1 - Rozvaděč */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-2">⚡</div>
                  <p className="text-sm">Sestavení rozvaděče</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-slate-800 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-yellow-300 text-center px-4">Kompletní sestavení a zapojení rozvaděče pro rodinný dům</p>
              </div>
            </motion.div>

            {/* Fotka 2 - Elektroinstalace */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-2">🔌</div>
                  <p className="text-sm">Elektroinstalace</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-slate-800 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-yellow-300 text-center px-4">Nová elektroinstalace v bytě včetně zásuvek a osvětlení</p>
              </div>
            </motion.div>

            {/* Fotka 3 - Osvětlení */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-2">💡</div>
                  <p className="text-sm">Instalace osvětlení</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-slate-800 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-yellow-300 text-center px-4">Osvětlení s inteligentním ovládáním</p>
              </div>
            </motion.div>

            {/* Fotka 4 - 3D tisk */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-2">🖨️</div>
                  <p className="text-sm">3D tisk</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-slate-700 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-yellow-300 text-center px-4">Výroba plastových krytů a komponentů na zakázku</p>
              </div>
            </motion.div>

            {/* Fotka 5 - Oprava spotřebiče */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-2">🔧</div>
                  <p className="text-sm">Oprava spotřebičů</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-slate-700 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-yellow-300 text-center px-4">Diagnostika a oprava elektrospotřebičů</p>
              </div>
            </motion.div>

            {/* Fotka 6 - Zásuvky */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-2">🔌</div>
                  <p className="text-sm">Instalace zásuvek</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-slate-700 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-yellow-300 text-center px-4">Přidání nových zásuvek a vypínačů</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-center mt-10"
          >
            <p className="text-gray-600 text-lg">
              Chcete vidět více realizovaných prací? <a href="tel:+420704280499" className="text-yellow-500 hover:text-yellow-400 hover:underline font-semibold">Kontaktujte mě</a> pro podrobnosti.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sekce O mně - stejné pozadí jako hero */}
      <section id="o-mne" className="py-20 relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animované žluté pozadí jako v hero sekci */}
        <div className="absolute inset-0 opacity-15 pointer-events-none select-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-10 left-40 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        <div className="relative z-10 w-full max-w-3xl mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent"
          >
            O mně
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-yellow-100 leading-relaxed space-y-6 text-center md:text-left"
          >
            <p>
              Jsem mladý elektrikář s vášní pro techniku a praxí přes 4 roky. Vystudoval jsem elektrotechniku v Pardubicích, kde jsem získal výuční list i maturitu. Už během studia jsem realizoval zakázky na vlastní pěst, což mě posunulo.
              </p>
            <p>
              Vedle elektrotechniky se věnuji 3D tisku, reprezentoval jsem školu na odborných soutěžích a pomáhám jako dobrovolný hasič. Spolehlivost, samostatnost a chuť posouvat se dál jsou základem mé práce.
            </p>           
          </motion.div>
        </div>
      </section>

    
      {/* Sekce Reference - S animacemi pro každou referenci */}
      <section id="reference" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent"
          >
            Co o mně říkají zákazníci
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Reference 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-gray-100 p-6 rounded-lg shadow"
            >
              <p className="italic text-gray-700">"Rychlá a kvalitní práce, vše bez problémů. Doporučuji Dominika každému!"</p>
              <span className="block mt-4 font-semibold text-yellow-500">— Jan Dvořák</span>
            </motion.div>
            {/* Reference 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-gray-100 p-6 rounded-lg shadow"
            >
              <p className="italic text-gray-700">"Pomohl mi se vším co jsem po něm chtěla ٩(⊙‿⊙)۶  "</p>
              <span className="block mt-4 font-semibold text-yellow-500">— Petra Horáková</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sekce Kontakt - S animací formuláře a boxem s informacemi */}
      <section id="kontakt" className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent"
          >
            Kontaktujte mě
          </motion.h3>
          <div className="flex flex-col md:flex-row gap-8">
           
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex-1 min-w-[320px] bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center gap-4"
            >
              <h4 className="text-xl font-bold mb-4 text-slate-800">Informace o mně</h4>
              <div className="flex items-center gap-3 text-lg text-yellow-600">
                <span className=""><svg width="24" height="24" fill="none" stroke="url(#yellowGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><defs><linearGradient id="yellowGradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#facc15"/><stop offset="100%" stopColor="#f59e42"/></linearGradient></defs><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.37 1.6.7 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.88 6.88l1.27-1.27a2 2 0 0 1 2.11-.45c.74.33 1.53.57 2.34.7A2 2 0 0 1 22 16.92z"/></svg></span>
                <span>Telefon: <a href="tel:+420704280499" className="text-yellow-500 hover:text-yellow-400 hover:underline font-semibold">+420 704 280 499</a></span>
              </div>
              <div className="flex items-center gap-3 text-lg text-yellow-600">
                <span className=""><svg width="24" height="24" fill="none" stroke="url(#yellowGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><defs><linearGradient id="yellowGradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#facc15"/><stop offset="100%" stopColor="#f59e42"/></linearGradient></defs><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 11h8M8 15h8"/></svg></span>
                <span>E-mail: <a href="mailto:elektroinstalace_trunec@seznam.cz" className="text-yellow-500 hover:text-yellow-400 hover:underline font-semibold">elektroinstalace_trunec@seznam.cz</a></span>
              </div>
              <div className="flex items-center gap-3 text-lg text-yellow-600">
                <span className=""><svg width="24" height="24" fill="url(#yellowGradient)" viewBox="0 0 24 24"><defs><linearGradient id="yellowGradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#facc15"/><stop offset="100%" stopColor="#f59e42"/></linearGradient></defs><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></span>
                <span>Instagram: <a href="https://instagram.com/trunec_elektroinstalace" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 hover:underline font-semibold">@trunec_elektroinstalace</a></span>
              </div>
              <div className="flex items-center gap-3 text-lg text-yellow-600">
                <span className=""><svg width="24" height="24" fill="url(#yellowGradient)" viewBox="0 0 24 24"><defs><linearGradient id="yellowGradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#facc15"/><stop offset="100%" stopColor="#f59e42"/></linearGradient></defs><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"/></svg></span>
                <span>Facebook: <a href="https://facebook.com/trunec_elektroinstalace" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 hover:underline font-semibold">facebook.com/trunec_elektroinstalace</a></span>
              </div>
              <div className="flex items-center gap-3 text-lg text-yellow-600">
                <span className=""><svg width="24" height="24" fill="url(#yellowGradient)" viewBox="0 0 24 24"><defs><linearGradient id="yellowGradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#facc15"/><stop offset="100%" stopColor="#f59e42"/></linearGradient></defs><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.076 4.377.711.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.075-.124-.272-.198-.57-.347z"/><circle cx="12" cy="12" r="11.5"/></svg></span>
                <span>WhatsApp: <a href="https://wa.me/420704280499" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 hover:underline font-semibold">+420 704 280 499</a></span>
              </div>
              <div className="flex items-center gap-3 text-lg text-gray-700">
                <span className="text-yellow-400"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 11h8M8 15h8"/></svg></span>
                <span>IČO: <span className="text-yellow-500 font-semibold">23403195</span></span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer ve žluté a tmavě modré */}
      <footer className="bg-slate-900 border-t border-yellow-400/20 py-8 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-4">
            <div className="flex gap-2 justify-center">
              {/* Instagram */}
              <a 
                href="https://instagram.com/trunec_elektroinstalace" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a 
                href="https://facebook.com/trunec_elektroinstalace" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a 
                href="https://wa.me/420704280499" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.076 4.377.711.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.075-.124-.272-.198-.57-.347z"/><circle cx="12" cy="12" r="11.5"/>
                </svg>
              </a>
              {/* Email */}
              <a 
                href="mailto:elektroinstalace_trunec@seznam.cz" 
                className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16v16H4z"/>
                  <path d="M22 6l-10 7L2 6"/>
                </svg>
              </a>
              {/* Telefon */}
              <a 
                href="tel:+420704280499" 
                className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 hover:scale-110"
                aria-label="Telefon"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.37 1.6.7 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.88 6.88l1.27-1.27a2 2 0 0 1 2.11-.45c.74.33 1.53.57 2.34.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>
            </div>
          </div>
          <p className="text-gray-300 text-lg">
            &copy; {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">Dominik Trunec</span>. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>
    </div>
  );
}
