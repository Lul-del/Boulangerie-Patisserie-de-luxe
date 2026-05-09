import { Cake, Croissant, Cookie, Coffee } from 'lucide-react';

const specialties = [
  {
    icon: Cake,
    title: 'Gâteaux Sur Mesure',
    description:
      'Anniversaires, mariages, événements... Nous créons le gâteau de vos rêves, personnalisé selon vos envies.',
    color: 'from-rose-400 to-rose-600',
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-500',
  },
  {
    icon: Croissant,
    title: 'Viennoiseries',
    description:
      'Croissants, pains au chocolat, brioches... Nos viennoiseries sont préparées dès l\'aube avec du beurre AOP.',
    color: 'from-gold-400 to-gold-600',
    bgColor: 'bg-gold-50',
    iconColor: 'text-gold-500',
  },
  {
    icon: Cookie,
    title: 'Petits Fours',
    description:
      'Macarons, financiers, madeleines... Nos petits fours sont parfaits pour vos réceptions et moments de gourmandise.',
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
  {
    icon: Coffee,
    title: 'Salon de Thé',
    description:
      'Dégustez nos créations sur place avec un café ou un thé d\'exception dans notre salon chaleureux.',
    color: 'from-chocolate-400 to-chocolate-600',
    bgColor: 'bg-chocolate-50',
    iconColor: 'text-chocolate-500',
  },
];

export default function Specialties() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 font-medium tracking-[0.3em] uppercase text-sm">
            Services
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-chocolate-900 mt-3 mb-6">
            Nos Spécialités
          </h2>
          <p className="text-chocolate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Du petit-déjeuner aux grandes occasions, nous accompagnons tous vos
            moments de gourmandise.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-cream-50 rounded-3xl p-8 text-center hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-transparent hover:border-gold-100"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 ${s.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <s.icon size={28} className={s.iconColor} />
              </div>

              <h3 className="font-poppins text-xl font-bold text-chocolate-900 mb-3">
                {s.title}
              </h3>
              <p className="text-chocolate-500 text-sm leading-relaxed">
                {s.description}
              </p>

              {/* Decorative line */}
              <div className={`mt-6 h-1 w-12 mx-auto rounded-full bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-100 group-hover:w-20 transition-all duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
