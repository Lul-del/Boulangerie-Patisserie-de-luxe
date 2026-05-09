import Reveal from './Reveal';

import g1  from '../images/gallerie/523355465_1294877352640791_8338589317692148734_n.jpg';
import g2  from '../images/gallerie/524329632_1294877382640788_9166810527128915870_n.jpg';
import g3  from '../images/gallerie/525205512_1299142202214306_1980358997263809588_n.jpg';
import g4  from '../images/gallerie/526173335_1299142315547628_7335232082681806411_n.jpg';
import g5  from '../images/gallerie/526609413_1299142415547618_2743970104506052862_n.jpg';
import g6  from '../images/gallerie/528562663_783041097581721_7446834547823919474_n.jpg';
import g7  from '../images/gallerie/531491942_787577353794762_5388941252543566706_n.jpg';
import g8  from '../images/gallerie/542109586_804626755423155_7392487061546827913_n.jpg';
import g9  from '../images/gallerie/557950566_1359645036164022_354247793554945517_n.jpg';
import g10 from '../images/gallerie/605378330_898540189365144_7700118513417909164_n.jpg';
import g11 from '../images/gallerie/605605110_1434228685372323_5704565836692222655_n.jpg';
import g12 from '../images/gallerie/605691329_899878332564663_948153530862519869_n.jpg';
import g13 from '../images/gallerie/605986787_897937832758713_2174941851753183590_n.jpg';
import g14 from '../images/gallerie/606689221_8998783152224897998_2699297032311075814_n.jpg';
import g15 from '../images/gallerie/671811254_1526460442815813_4635378644539891712_n.jpg';
import g16 from '../images/gallerie/672672241_986806617205167_8678218494853262326_n.jpg';
import g17 from '../images/gallerie/672681415_1526460396149151_355789737983002928_n.jpg';
import g18 from '../images/gallerie/673846700_18060829373703186_6907006322098634787_n.jpg';

const images = [
  g1, g2, g3, g4, g5, g6, g7, g8, g9,
  g10, g11, g12, g13, g14, g15, g16, g17, g18,
];

export default function Gallery() {
  return (
    <section id="galerie" className="py-12 sm:py-16 lg:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-gold-500 font-medium tracking-[0.3em] uppercase text-xs sm:text-sm">
            Galerie
          </span>
          <h2 className="font-poppins text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-chocolate-900 mt-3 mb-4 sm:mb-6">
            Un Festin Visuel
          </h2>
          <p className="text-chocolate-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Laissez-vous séduire par la beauté de nos créations artisanales.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-3">
          {images.map((src, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
                <img
                  src={src}
                  alt={`Création ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-chocolate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                  <span className="text-white font-poppins text-xs sm:text-sm font-semibold tracking-wide">
                    Nos créations
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
