import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

import slide1 from "../images/carrouselle/523632393_773316935220804_9117719013455600963_n.jpg";
import slide2 from "../images/carrouselle/524797897_1299142132214313_4775841614161126721_n.jpg";
import slide3 from "../images/carrouselle/525205512_1299142202214306_1980358997263809588_n.jpg";
import slide4 from "../images/carrouselle/557176857_1359645079497351_5688179141113497017_n.jpg";
import slide5 from "../images/carrouselle/557281325_1359644856164040_1092833453464881525_n.jpg";
import slide6 from "../images/carrouselle/605132268_898540242698472_5462772389821395498_n.jpg";
import slide7 from "../images/carrouselle/605986787_897937832758713_2174941851753183590_n.jpg";

const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];
const INTERVAL = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-chocolate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/60 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gold-400/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-rose-400/10 blur-3xl animate-float delay-300" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="animate-fadeInUp delay-100 font-poppins text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.2] mb-6">
            Goûtez{" "}
            <span className="text-gold-300 whitespace-nowrap">
              L'Excellence
            </span>{" "}
            Béninoise
          </h1>

          <p className="animate-fadeInUp delay-200 text-sm xs:text-base sm:text-lg md:text-xl text-cream-100 leading-relaxed max-w-xl mx-auto mb-6 sm:mb-10 px-4 font-light">
            Des créations artisanales raffinées, préparées avec passion et des
            ingrédients soigneusement sélectionnés pour une expérience gourmande
            unique.
          </p>

          <div className="animate-fadeInUp delay-300 flex flex-wrap items-center justify-center gap-4 px-4">
            <a
              href="#creations"
              className="group relative inline-flex items-center justify-center gap-2 bg-gold-500 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-full text-sm xs:text-base sm:text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/30 hover:scale-105 min-w-[150px] xs:min-w-[200px] sm:min-w-[240px]"
            >
              <span className="relative z-10">Découvrir nos créations</span>
              <div className="absolute inset-0 bg-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-full text-sm xs:text-base sm:text-lg font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 min-w-[120px] xs:min-w-[160px] sm:min-w-[180px]"
            >
              Commander
            </a>
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-500 ${
              i === current
                ? "w-6 h-2 bg-gold-400"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
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
