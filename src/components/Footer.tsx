import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-chocolate-900 text-cream-300">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-gold-500/20 to-rose-500/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Envie d'une douceur ?
              </h3>
              <p className="text-cream-300 text-lg">
                Commandez en ligne et récupérez vos pâtisseries en boutique.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 bg-gold-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold-600 transition-all duration-300 shadow-lg hover:shadow-gold-500/30 hover:scale-105"
            >
              Commander maintenant
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#accueil" className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🥐</span>
              <div>
                <h4 className="font-poppins text-xl font-bold text-white">
                  La boulangerie pâtisserie du LU
                </h4>
                <p className="text-xs tracking-[0.2em] text-gold-400 uppercase">
                  Pâtisserie Artisanale
                </p>
              </div>
            </a>
            <p className="text-cream-400 text-sm leading-relaxed mt-4">
              Une boulangerie pâtisserie artisanale au cœur du Bénin, façonnée avec passion et excellence.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://web.facebook.com/boulangeriepatisseriedulu/?locale=fr_FR&_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Notre page Facebook"
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-cream-300 hover:bg-gold-500 hover:text-white transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@bp_du_lu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Notre TikTok"
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-cream-300 hover:bg-gold-500 hover:text-white transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.79a8.18 8.18 0 0 0 4.76 1.52V6.88a4.84 4.84 0 0 1-1-.19z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-poppins text-lg font-bold text-white mb-6">
              Navigation
            </h5>
            <ul className="space-y-3">
              {[
                { label: 'Accueil', href: '#accueil' },
                { label: 'Nos Créations', href: '#creations' },
                { label: 'À Propos', href: '#apropos' },
                { label: 'Galerie', href: '#galerie' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream-400 hover:text-gold-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Spécialités */}
          <div>
            <h5 className="font-poppins text-lg font-bold text-white mb-6">
              Nos Spécialités
            </h5>
            <ul className="space-y-3">
              {[
                'Gâteaux sur mesure',
                'Viennoiseries',
                'Macarons',
                'Éclairs',
                'Tartes aux fruits',
                'Petits fours',
              ].map((item) => (
                <li key={item}>
                  <span className="text-cream-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="font-poppins text-lg font-bold text-white mb-6">
              Newsletter
            </h5>
            <p className="text-cream-400 text-sm mb-4 leading-relaxed">
              Recevez nos nouveautés et offres exclusives directement dans votre
              boîte mail.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-gold-500 text-white rounded-xl hover:bg-gold-600 transition-all duration-300"
              >
                →
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream-400 text-sm flex items-center gap-1">
            © 2024 La boulangerie pâtisserie du LU. Fait avec{' '}
            <Heart size={14} className="text-rose-400 fill-rose-400" /> à Paris
          </p>
          <div className="flex items-center gap-6 text-sm text-cream-400">
            <a href="#" className="hover:text-gold-400 transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-gold-400 transition-colors">
              CGV
            </a>
            <a href="#" className="hover:text-gold-400 transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <a
        href="#accueil"
        className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gold-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gold-600 hover:scale-110 transition-all duration-300"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
}
