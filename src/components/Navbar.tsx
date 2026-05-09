import { useState, useEffect } from "react";
import { Menu, X, Phone, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = [
      "accueil",
      "creations",
      "apropos",
      "galerie",
      "temoignages",
      "contact",
    ];
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const links = [
    { label: "Accueil", href: "#accueil" },
    { label: "Nos Créations", href: "#creations" },
    { label: "À Propos", href: "#apropos" },
    { label: "Galerie", href: "#galerie" },
    { label: "Témoignages", href: "#temoignages" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-chocolate-900/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-2 group">
            <span className="text-3xl">🥐</span>
            <div>
              <h1
                className={`font-playfair text-sm sm:text-2xl font-bold transition-colors duration-300 ${
                  scrolled ? "text-chocolate-900" : "text-white"
                }`}
              >
                La boulangerie pâtisserie du LU
              </h1>
              <p
                className={`text-xs tracking-[0.3em] uppercase transition-colors duration-300 ${
                  scrolled ? "text-gold-600" : "text-gold-200"
                }`}
              >
                Pâtisserie Artisanale
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden navbar:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-gold-500 after:transition-all after:duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "text-gold-500 after:w-full"
                    : scrolled
                      ? "text-chocolate-800 after:w-0 hover:text-gold-500 hover:after:w-full"
                      : "text-white after:w-0 hover:text-gold-500 hover:after:w-full"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+2290152825252"
              className="flex items-center gap-2 bg-gold-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-600 transition-all duration-300 shadow-lg hover:shadow-gold-500/30 hover:scale-105"
            >
              <Phone size={14} />
              Réserver
            </a>

            {/* Cart button desktop */}
            <button
              type="button"
              aria-label="Ouvrir le panier"
              onClick={openCart}
              className={`relative p-2 rounded-full transition-colors ${scrolled ? "text-chocolate-900 hover:text-gold-500" : "text-white hover:text-gold-300"}`}
            >
              <ShoppingBag size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3 navbar:hidden">
            {/* Cart button mobile */}
            <button
              type="button"
              aria-label="Ouvrir le panier"
              onClick={openCart}
              className={`relative p-2 rounded-full transition-colors ${scrolled ? "text-chocolate-900" : "text-white"}`}
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? "text-chocolate-900" : "text-white"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`navbar:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-chocolate-800 font-medium hover:bg-gold-50 hover:text-gold-600 rounded-xl transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+2290152825252"
              className="flex items-center justify-center gap-2 mt-4 bg-gold-500 text-white px-5 py-3 rounded-full font-semibold hover:bg-gold-600 transition-all"
            >
              <Phone size={14} />
              01 23 45 67 89
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
