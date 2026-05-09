import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marie",
    role: "Cliente fidèle",
    text: "Les croissants de la La boulangerie pâtisserie du LU sont tout simplement les meilleurs de Paris. Le feuilletage est parfait, le beurre fond sur la langue... C'est un pur moment de bonheur chaque matin !",
    rating: 5,
  },
  {
    name: "Pierre",
    role: "Critique gastronomique",
    text: "En tant que critique, j'ai visité des centaines de pâtisseries. La boulangerie pâtisserie du LU se distingue par l'harmonie parfaite entre tradition et innovation. Leurs éclairs sont une révélation.",
    rating: 5,
  },
  {
    name: "Sophie",
    role: "Wedding planner",
    text: "Pour les mariages de mes clients, je ne fais confiance qu'à La boulangerie pâtisserie du LU. Leurs pièces montées sont des œuvres d'art et le goût est toujours à la hauteur de la présentation.",
    rating: 5,
  },
  {
    name: "Thomas",
    role: "Chef étoilé",
    text: "La qualité des ingrédients utilisés par La boulangerie pâtisserie du LU est exceptionnelle. On sent le soin apporté à chaque détail. Les macarons sont d'une finesse rare.",
    rating: 5,
  },
  {
    name: "Isabelle",
    role: "Blogueuse culinaire",
    text: "J'ai découvert La boulangerie pâtisserie du LU il y a 5 ans et depuis, impossible d'aller ailleurs. Leur tarte au citron meringuée est un chef-d'œuvre absolu. Je recommande les yeux fermés !",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section
      id="temoignages"
      className="py-10 sm:py-12 lg:py-16 bg-chocolate-900 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-5 sm:mb-8">
          <span className="text-gold-400 font-medium tracking-[0.3em] uppercase text-xs sm:text-sm">
            Témoignages
          </span>
          <h2 className="font-poppins text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-3 sm:mb-4">
            Ce que disent
            <span className="text-gold-400"> nos clients</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-5 xs:p-6 sm:p-8 text-center">
          <Quote className="mx-auto text-gold-500/30 mb-3 sm:mb-4" size={30} />

          <p className="text-sm xs:text-base sm:text-lg text-cream-200 font-light leading-relaxed mb-5 sm:mb-6 max-w-3xl mx-auto italic font-poppins">
            "{t.text}"
          </p>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-3 sm:mb-4">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={14} className="text-gold-400 fill-gold-400" />
            ))}
          </div>

          {/* Avatar & Name */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center mb-2">
              <span className="text-gold-400 font-poppins font-bold text-base sm:text-lg">
                {t.name.charAt(0)}
              </span>
            </div>
            <h4 className="font-poppins text-base sm:text-lg font-bold text-white">
              {t.name}
            </h4>
            <p className="text-gold-400 text-xs sm:text-sm">{t.role}</p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-5 sm:mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-gold-500"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
