import { ChevronDown, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/20543564/pexels-photo-20543564.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920"
          alt="Pâtisserie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-chocolate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/60 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gold-400/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-rose-400/10 blur-3xl animate-float delay-300" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h1 className="animate-fadeInUp delay-100 font-poppins text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.2] mb-6">
            Goûtez{" "}
            <span className="text-gold-300 whitespace-nowrap">
              L'Excellence
            </span>{" "}
            Béninoise
          </h1>

          {/* Description */}
          <p className="animate-fadeInUp delay-200 text-base sm:text-lg md:text-xl text-cream-100 leading-relaxed max-w-xl mx-auto mb-10 px-4 font-light">
            Des créations artisanales raffinées, préparées avec passion et des
            ingrédients soigneusement sélectionnés pour une expérience gourmande
            unique.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fadeInUp delay-300 flex flex-wrap items-center justify-center gap-4 px-4">
            <a
              href="#creations"
              className="group relative inline-flex items-center justify-center gap-2 bg-gold-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/30 hover:scale-105 min-w-[200px] sm:min-w-[240px]"
            >
              <span className="relative z-10">Découvrir nos créations</span>
              <div className="absolute inset-0 bg-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 min-w-[160px] sm:min-w-[180px]"
            >
              Commander
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#creations"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce hover:text-white/80 transition-colors"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
