import Reveal from './Reveal';

import g1  from '../images/gallerie/490733931_1460987601984676_263702127772178637_n.jpg';
import g2  from '../images/gallerie/491322875_1461119228638180_4882644445773635814_n.jpg';
import g3  from '../images/gallerie/492023590_1460981635318606_4659192669061750382_n.jpg';
import g4  from '../images/gallerie/493171015_1467908254625944_2554091685490160415_n.jpg';
import g5  from '../images/gallerie/578965523_1643021800447921_2202012727786553279_n.jpg';
import g6  from '../images/gallerie/593326610_1663063848443716_7813916959815193805_n.jpg';
import g7  from '../images/gallerie/610818203_1689272472489520_4623592270722784412_n.jpg';
import g8  from '../images/gallerie/615468530_1696821191734648_3696472630164586946_n.jpg';
import g9  from '../images/gallerie/629140678_1720592006024233_848481515280729849_n.jpg';
import g10 from '../images/gallerie/648841411_1747507079999392_2472447864786726978_n.jpg';
import g11 from '../images/gallerie/649527179_1747506853332748_5893004896566770082_n.jpg';
import g12 from '../images/gallerie/659102232_1768005377949562_4263708155362125997_n.jpg';
import g13 from '../images/gallerie/660510378_1768005047949595_8918746758987022592_n.jpg';
import g14 from '../images/gallerie/661381273_1768005327949567_4987992222351092110_n.jpg';
import g15 from '../images/gallerie/669120240_1776102637139836_6243135805376735660_n.jpg';
import g16 from '../images/gallerie/671457322_1778450173571749_4813318867851037317_n.jpg';
import g17 from '../images/gallerie/682691618_1793112692105497_6296006777370995820_n.jpg';
import g18 from '../images/gallerie/684604107_1793119948771438_169733047906650558_n.jpg';

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
