import { useState } from 'react';
import { ShoppingBag, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Reveal from './Reveal';

// Gâteaux - gateaux/
import gOpera1 from '../images/gateaux/690668422_1003121798906982_5916323587094176197_n.jpg';
import gOpera2 from '../images/gateaux/690700292_1003121805573648_6013243963642603258_n.jpg';

// Gâteaux - gateau4/
import gPrestige1 from '../images/gateau4/602324691_897937879425375_6536462886807464220_n.jpg';
import gPrestige2 from '../images/gateau4/605829163_897937829425380_3416230893150223489_n.jpg';
import gPrestige3 from '../images/gateau4/605986787_897937832758713_2174941851753183590_n.jpg';

// Gâteaux - gateaux2/
import gCol1 from '../images/gateaux2/605132268_898540242698472_5462772389821395498_n.jpg';
import gCol2 from '../images/gateaux2/605378330_898540189365144_7700118513417909164_n.jpg';
import gCol3 from '../images/gateaux2/607197536_898540232698473_7950957663424926453_n.jpg';
import gCol4 from '../images/gateaux2/607654008_898540176031812_2766982843804685887_n.jpg';

// Gâteaux - gateaux8/
import gFestif1 from '../images/gateaux8/528562663_783041097581721_7446834547823919474_n.jpg';
import gFestif2 from '../images/gateaux8/528778016_783041117581719_2962159748748603053_n.jpg';
import gFestif3 from '../images/gateaux8/528862283_783041124248385_5775777209913228536_n.jpg';

// Viennoiseries - pain1/
import vPain1a from '../images/pain1-Viennoiseries/672672241_986806617205167_8678218494853262326_n.jpg';
import vPain1b from '../images/pain1-Viennoiseries/672686478_986806560538506_53670304700893276_n.jpg';
import vPain1c from '../images/pain1-Viennoiseries/675274896_986806737205155_6571547342943908593_n.jpg';

// Viennoiseries - pain2/
import vPain2a from '../images/pain2-Viennoiseries/673846700_18060829373703186_6907006322098634787_n.jpg';
import vPain2b from '../images/pain2-Viennoiseries/682047602_18060829361703186_7608575997338808400_n.jpg';

// Macarons
import mac1 from '../images/macarons/531356661_787577330461431_4100693383838962507_n.jpg';
import mac2 from '../images/macarons/531491942_787577353794762_5388941252543566706_n.jpg';
import mac3 from '../images/macarons/532333140_787577350461429_611128294912418556_n.jpg';

// Tartes - Tarte/
import tarte1 from '../images/Tarte/557176857_1359645079497351_5688179141113497017_n.jpg';
import tarte2 from '../images/Tarte/557281325_1359644856164040_1092833453464881525_n.jpg';
import tarte3 from '../images/Tarte/557950566_1359645036164022_354247793554945517_n.jpg';
import tarte4 from '../images/Tarte/558239495_1359644822830710_889515237434781343_n.jpg';
import tarte5 from '../images/Tarte/560575077_1359645329497326_2894273547974428533_n.jpg';

// Tartes - Tartes-2/
import tarte2a from '../images/Tartes-2/522646765_773316865220811_2368837641467114293_n.jpg';
import tarte2b from '../images/Tartes-2/523349868_773316921887472_1167239575718333177_n.jpg';
import tarte2c from '../images/Tartes-2/523632393_773316935220804_9117719013455600963_n.jpg';

// Autres - akassa-autres/
import akassa1 from '../images/akassa-autres/672673315_1526460236149167_7437019105440808052_n.jpg';
import akassa2 from '../images/akassa-autres/672681415_1526460396149151_355789737983002928_n.jpg';

// Autres - akassa-1autres/
import akassa1a from '../images/akassa-1autres/671811254_1526460442815813_4635378644539891712_n.jpg';
import akassa1b from '../images/akassa-1autres/672672216_1526460259482498_2617678731451287060_n.jpg';

// Autres - sauce-autres/
import sauce1 from '../images/sauce-autres/605605110_1434228685372323_5704565836692222655_n.jpg';
import sauce2 from '../images/sauce-autres/605634479_1434228675372324_447330654598420516_n.jpg';

const categories = ['Tout', 'Gâteaux', 'Viennoiseries', 'Tartes', 'Macarons', 'Éclairs', 'Autres'];

function commanderWhatsApp(product: { name: string; price: string }) {
  const message =
    `Bonjour La boulangerie pâtisserie du LU 🥐,\n` +
    `je souhaite commander :\n\n` +
    `• ${product.name} — ${product.price}\n\n` +
    `Merci !`;
  window.open(
    `https://wa.me/2290152825252?text=${encodeURIComponent(message)}`,
    '_blank',
    'noopener,noreferrer',
  );
}

type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  priceNum: number;
  description: string;
  image: string;
  badge: string | null;
  galleryImages?: string[];
};

const products: Product[] = [
  {
    id: 1,
    name: 'Opéra Classique',
    category: 'Gâteaux',
    price: '25 000 FCFA',
    priceNum: 25000,
    description: 'Biscuit joconde, ganache chocolat, crème au beurre café',
    image: gOpera1,
    badge: 'Signature',
    galleryImages: [gOpera1, gOpera2],
  },
  {
    id: 2,
    name: 'Gâteau Prestige',
    category: 'Gâteaux',
    price: '32 000 FCFA',
    priceNum: 32000,
    description: 'Gâteau sur mesure, décoration raffinée, saveurs intenses',
    image: gPrestige1,
    badge: 'Best-seller',
    galleryImages: [gPrestige1, gPrestige2, gPrestige3],
  },
  {
    id: 3,
    name: 'Collection Gâteaux',
    category: 'Gâteaux',
    price: '28 000 FCFA',
    priceNum: 28000,
    description: 'Assortiment de gâteaux artisanaux aux saveurs variées',
    image: gCol1,
    badge: 'Nouveau',
    galleryImages: [gCol1, gCol2, gCol3, gCol4],
  },
  {
    id: 4,
    name: 'Gâteau Festif',
    category: 'Gâteaux',
    price: '22 000 FCFA',
    priceNum: 22000,
    description: 'Gâteau de célébration, moelleux et élégamment décoré',
    image: gFestif1,
    badge: null,
    galleryImages: [gFestif1, gFestif2, gFestif3],
  },
  {
    id: 5,
    name: 'Pains Artisanaux',
    category: 'Viennoiseries',
    price: '1 500 FCFA',
    priceNum: 1500,
    description: 'Pains cuits au four chaque matin, croustillants et dorés',
    image: vPain1a,
    badge: null,
    galleryImages: [vPain1a, vPain1b, vPain1c],
  },
  {
    id: 6,
    name: 'Pain Spécial',
    category: 'Viennoiseries',
    price: '2 000 FCFA',
    priceNum: 2000,
    description: 'Pain de spécialité maison, recette exclusive du LU',
    image: vPain2a,
    badge: 'Populaire',
    galleryImages: [vPain2a, vPain2b],
  },
  {
    id: 7,
    name: 'Macarons Assortis',
    category: 'Macarons',
    price: '15 500 FCFA',
    priceNum: 15500,
    description: 'Coffret de macarons aux saveurs variées, coque légère et craquante',
    image: mac1,
    badge: null,
    galleryImages: [mac1, mac2, mac3],
  },
  {
    id: 8,
    name: 'Tarte aux Fruits',
    category: 'Tartes',
    price: '21 000 FCFA',
    priceNum: 21000,
    description: 'Pâte sablée, crème pâtissière vanille, fruits de saison',
    image: tarte1,
    badge: null,
    galleryImages: [tarte1, tarte2, tarte3, tarte4, tarte5],
  },
  {
    id: 9,
    name: 'Tarte Amandine',
    category: 'Tartes',
    price: '18 500 FCFA',
    priceNum: 18500,
    description: "Crème d'amande, pâte feuilletée, amandes effilées torréfiées",
    image: tarte2a,
    badge: 'Best-seller',
    galleryImages: [tarte2a, tarte2b, tarte2c],
  },
  {
    id: 10,
    name: 'Éclair au Chocolat',
    category: 'Éclairs',
    price: '3 600 FCFA',
    priceNum: 3600,
    description: 'Pâte à choux, crème pâtissière chocolat noir 70%',
    image: 'https://images.pexels.com/photos/30461317/pexels-photo-30461317.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    badge: null,
  },
  {
    id: 11,
    name: 'Éclair Rubis',
    category: 'Éclairs',
    price: '4 300 FCFA',
    priceNum: 4300,
    description: 'Pâte à choux, crème fraise-litchi, glaçage rubis',
    image: 'https://images.pexels.com/photos/30700723/pexels-photo-30700723.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    badge: 'Nouveau',
  },
  {
    id: 12,
    name: 'Akassa Traditionnel',
    category: 'Autres',
    price: '3 000 FCFA',
    priceNum: 3000,
    description: 'Préparation traditionnelle béninoise, à base de maïs fermenté',
    image: akassa1,
    badge: 'Signature',
    galleryImages: [akassa1, akassa2],
  },
  {
    id: 13,
    name: 'Spécialités du LU',
    category: 'Autres',
    price: '4 500 FCFA',
    priceNum: 4500,
    description: 'Créations exclusives inspirées des saveurs locales du Bénin',
    image: akassa1a,
    badge: null,
    galleryImages: [akassa1a, akassa1b],
  },
  {
    id: 14,
    name: 'Sauces Artisanales',
    category: 'Autres',
    price: '2 500 FCFA',
    priceNum: 2500,
    description: 'Sauces maison préparées avec des épices et ingrédients locaux',
    image: sauce1,
    badge: null,
    galleryImages: [sauce1, sauce2],
  },
];

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const images = product.galleryImages ?? [product.image];
  const [activeImg, setActiveImg] = useState(0);
  const { addToCart } = useCart();

  const prev = () => setActiveImg((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActiveImg((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 xs:p-4 bg-chocolate-900/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-4xl max-h-[95vh] overflow-y-auto flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          aria-label="Fermer"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 sm:w-9 sm:h-9 bg-chocolate-900/10 hover:bg-chocolate-900/20 rounded-full flex items-center justify-center transition-colors"
        >
          <X size={16} />
        </button>

        {/* Images */}
        <div className="lg:w-1/2 p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-52 xs:h-64 sm:h-72 lg:h-80 bg-cream-100">
            <img
              src={images[activeImg]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Image précédente"
                  onClick={prev}
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  aria-label="Image suivante"
                  onClick={next}
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow"
                >
                  <ChevronRight size={16} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-2 sm:gap-3 flex-wrap">
              {images.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Image ${i + 1}`}
                  onClick={() => setActiveImg(i)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all ${
                    i === activeImg ? 'border-gold-500 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
          <div>
            {product.badge && (
              <span className="inline-block bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 sm:mb-4">
                {product.badge}
              </span>
            )}
            <p className="text-xs text-gold-500 uppercase tracking-widest font-semibold mb-1">
              {product.category}
            </p>
            <h2 className="font-poppins text-xl sm:text-2xl font-bold text-chocolate-900 mb-2 sm:mb-3">
              {product.name}
            </h2>
            <p className="text-chocolate-500 text-sm leading-relaxed mb-4 sm:mb-6">
              {product.description}
            </p>
            <div className="h-px bg-cream-200 mb-4 sm:mb-6" />
            <p className="text-chocolate-400 text-xs sm:text-sm leading-relaxed">
              Préparé chaque matin avec des ingrédients soigneusement sélectionnés
              pour vous offrir une expérience gustative incomparable. Disponible en
              boutique ou sur commande.
            </p>
          </div>

          <div className="mt-6 sm:mt-8">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <span className="text-chocolate-500 text-sm">Prix</span>
              <span className="font-poppins text-lg sm:text-xl font-bold text-gold-500">
                {product.price}
              </span>
            </div>
            <div className="flex gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, priceNum: product.priceNum, image: product.image })}
                className="flex-1 py-3 sm:py-4 bg-gold-500 text-white rounded-xl sm:rounded-2xl font-semibold text-sm hover:bg-gold-600 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] shadow-lg hover:shadow-gold-500/30"
              >
                <ShoppingBag size={16} />
                Panier
              </button>
              <button
                type="button"
                onClick={() => { commanderWhatsApp(product); onClose(); }}
                className="flex-1 py-3 sm:py-4 bg-chocolate-900 text-white rounded-xl sm:rounded-2xl font-semibold text-sm hover:bg-gold-500 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] shadow-lg"
              >
                Commander
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Creations() {
  const [activeCategory, setActiveCategory] = useState('Tout');
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const { addToCart } = useCart();

  const openModal = (product: Product) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModalProduct(product);
    }, 1200);
  };

  const filtered =
    activeCategory === 'Tout'
      ? products
      : products.filter((p) => p.category === activeCategory);

  const badgeColors: Record<string, string> = {
    Signature: 'bg-gold-500 text-white',
    Populaire: 'bg-rose-500 text-white',
    Nouveau: 'bg-emerald-500 text-white',
    'Best-seller': 'bg-purple-500 text-white',
  };

  return (
    <section id="creations" className="py-12 sm:py-16 lg:py-24 bg-cream-50">
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-chocolate-900/70 backdrop-blur-sm">
          <div className="relative w-20 h-20 mb-5">
            <div className="absolute inset-0 rounded-full border-4 border-white/10" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-gold-500 animate-spin" />
            <div className="absolute inset-3 rounded-full border-4 border-white/10" />
            <div className="absolute inset-3 rounded-full border-4 border-transparent border-b-gold-300 animate-spin [animation-duration:0.6s]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
            </div>
          </div>
          <p className="text-white font-poppins text-sm tracking-widest uppercase opacity-70">
            Chargement…
          </p>
        </div>
      )}

      {modalProduct && (
        <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-gold-500 font-medium tracking-[0.3em] uppercase text-xs sm:text-sm">
            Nos Spécialités
          </span>
          <h2 className="font-poppins text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-chocolate-900 mt-3 mb-4 sm:mb-6">
            Nos Créations
          </h2>
          <p className="text-chocolate-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Découvrez notre sélection de pâtisseries artisanales, préparées chaque
            jour avec les meilleurs ingrédients.
          </p>
        </Reveal>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-label={`Filtrer par ${cat}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-chocolate-900 text-white shadow-lg shadow-chocolate-900/30'
                  : 'bg-white text-chocolate-700 hover:bg-gold-100 border border-gold-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filtered.map((product, i) => (
            <Reveal key={product.id} delay={i * 80}>
            <div
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full"
            >
              {/* Image */}
              <div className="relative h-44 xs:h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-chocolate-900/40 flex items-center justify-center gap-3 transition-opacity duration-300 opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
                  <button
                    type="button"
                    aria-label="Voir les détails"
                    onClick={() => openModal(product)}
                    className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-chocolate-900 hover:bg-gold-500 hover:text-white transition-all duration-300 shadow-lg transform hover:scale-110"
                  >
                    <Eye size={18} />
                  </button>
                </div>
                {product.badge && (
                  <span
                    className={`absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
                      badgeColors[product.badge] || 'bg-gold-500 text-white'
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-2">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gold-500 uppercase tracking-wider font-semibold mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-poppins text-base sm:text-xl font-bold text-chocolate-900 group-hover:text-gold-600 transition-colors duration-300 truncate">
                      {product.name}
                    </h3>
                  </div>
                  <span className="font-poppins text-xs sm:text-sm font-bold text-gold-500 whitespace-nowrap ml-2">
                    {product.price}
                  </span>
                </div>
                <p className="text-chocolate-500 text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-3 sm:mt-5 flex gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, priceNum: product.priceNum, image: product.image })}
                    className="flex-1 py-2.5 sm:py-3 bg-cream-100 text-chocolate-800 rounded-xl font-semibold text-xs sm:text-sm hover:bg-gold-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2"
                  >
                    <ShoppingBag size={14} />
                    Panier
                  </button>
                  <button
                    type="button"
                    onClick={() => commanderWhatsApp(product)}
                    className="flex-1 py-2.5 sm:py-3 bg-chocolate-900 text-white rounded-xl font-semibold text-xs sm:text-sm hover:bg-gold-500 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2"
                  >
                    Commander
                  </button>
                </div>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
