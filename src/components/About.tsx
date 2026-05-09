import { Award, Heart, Leaf, Clock } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "Chaque détail compte — de la texture à la présentation, rien n'est laissé au hasard.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "La pâtisserie est un langage. Nous le parlons avec sincérité et générosité.",
  },
  {
    icon: Leaf,
    title: "Ingrédients choisis",
    description:
      "Beurre de qualité supérieure, fruits de saison, chocolat de grand cru — uniquement le meilleur.",
  },
  {
    icon: Clock,
    title: "Fraîcheur absolue",
    description:
      "Nos créations sont façonnées au quotidien pour vous offrir une expérience toujours nouvelle.",
  },
];

export default function About() {
  return (
    <section id="apropos" className="py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/15023805/pexels-photo-15023805.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600"
                alt="Notre pâtisserie"
                className="w-full max-w-md rounded-3xl shadow-2xl shadow-chocolate-900/40 object-cover h-[240px] xs:h-[300px] sm:h-[380px] lg:h-[500px]"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 xs:-right-4 lg:right-8 z-20">
              <img
                src="https://images.pexels.com/photos/30700726/pexels-photo-30700726.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=300"
                alt="Nos éclairs"
                className="w-24 h-24 xs:w-32 xs:h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-2xl shadow-xl shadow-chocolate-900/40 object-cover border-4 border-white"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold-200/50 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 right-24 w-24 h-24 bg-rose-200/50 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="mt-8 lg:mt-0">
            <span className="text-gold-500 font-medium tracking-[0.3em] uppercase text-xs sm:text-sm">
              Notre Vision
            </span>
            <h2 className="font-poppins text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-chocolate-900 mt-3 mb-5 sm:mb-6 leading-tight">
              L'art du <span className="text-gold-500">goût</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl hover:bg-cream-50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gold-100 rounded-xl flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-chocolate-900 mb-1 text-sm sm:text-base">
                      {feature.title}
                    </h4>
                    <p className="text-chocolate-500 text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
