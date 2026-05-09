import { useState } from 'react';
import { ShoppingBag, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import img1 from '../images/images-type-1/690668422_1003121798906982_5916323587094176197_n.jpg';
import img2 from '../images/images-type-1/690700292_1003121805573648_6013243963642603258_n.jpg';

const categories = ['Tout', 'Gâteaux', 'Viennoiseries', 'Tartes', 'Macarons', 'Éclairs'];

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
    image: img1,
    badge: 'Signature',
    galleryImages: [img1, img2],
  },
  {
    id: 2,
    name: 'Croissant Pur Beurre',
    category: 'Viennoiseries',
    price: '1 800 FCFA',
    priceNum: 1800,
    description: 'Feuilletage traditionnel, beurre AOP Charentes-Poitou',
    image: 'https://images.pexels.com/photos/30853716/pexels-photo-30853716.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    badge: 'Populaire',
  },
  {
    id: 3,
    name: 'Tarte aux Fruits',
    category: 'Tartes',
    price: '21 000 FCFA',
    priceNum: 21000,
    description: 'Pâte sablée, crème pâtissière vanille, fruits de saison',
    image: 'https://images.pexels.com/photos/17650199/pexels-photo-17650199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    badge: null,
  },
  {
    id: 4,
    name: 'Macarons Assortis',
    category: 'Macarons',
    price: '15 500 FCFA',
    priceNum: 15500,
    description: 'Coffret de 12 macarons aux saveurs variées',
    image: 'https://images.pexels.com/photos/36455120/pexels-photo-36455120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    badge: 'Nouveau',
  },
  {
    id: 5,
    name: 'Éclair au Chocolat',
    category: 'Éclairs',
    price: '3 600 FCFA',
    priceNum: 3600,
    description: 'Pâte à choux, crème pâtissière chocolat noir 70%',
    image: 'https://images.pexels.com/photos/30461317/pexels-photo-30461317.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    badge: null,
  },
  {
    id: 6,
    name: 'Gâteau Framboise',
    category: 'Gâteaux',
    price: '27 500 FCFA',
    priceNum: 27500,
    description: 'Mousse framboise, biscuit amande, glaçage miroir',
    image: 'https://images.pexels.com/photos/31064587/pexels-photo-31064587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    badge: 'Best-seller',
  },
  {
    id: 7,
    name: 'Pain au Chocolat',
    category: 'Viennoiseries',
    price: '1 900 FCFA',
    priceNum: 1900,
    description: 'Pâte feuilletée, barres de chocolat noir artisanal',
    image: 'https://images.pexels.com/photos/3850433/pexels-photo-3850433.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    badge: null,
  },
  {
    id: 8,
    name: 'Tarte Amandine',
    category: 'Tartes',
    price: '18 500 FCFA',
    priceNum: 18500,
    description: "Crème d'amande, pâte feuilletée, amandes effilées",
    image: 'https://images.pexels.com/photos/35225556/pexels-photo-35225556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    badge: null,
  },
  {
    id: 9,
    name: 'Éclair Rubis',
    category: 'Éclairs',
    price: '4 300 FCFA',
    priceNum: 4300,
    description: 'Pâte à choux, crème fraise-litchi, glaçage rubis',
    image: 'https://images.pexels.com/photos/30700723/pexels-photo-30700723.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    badge: 'Nouveau',
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-chocolate-900/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          aria-label="Fermer"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-chocolate-900/10 hover:bg-chocolate-900/20 rounded-full flex items-center justify-center transition-colors"
        >
          <X size={18} />
        </button>

        {/* Images */}
        <div className="lg:w-1/2 p-6 flex flex-col gap-4">
          <div className="relative rounded-2xl overflow-hidden h-72 lg:h-80 bg-cream-100">
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Image suivante"
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-3">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
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
        <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
          <div>
            {product.badge && (
              <span className="inline-block bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                {product.badge}
              </span>
            )}
            <p className="text-xs text-gold-500 uppercase tracking-widest font-semibold mb-1">
              {product.category}
            </p>
            <h2 className="font-poppins text-2xl font-bold text-chocolate-900 mb-3">
              {product.name}
            </h2>
            <p className="text-chocolate-500 leading-relaxed mb-6">
              {product.description}
            </p>
            <div className="h-px bg-cream-200 mb-6" />
            <p className="text-chocolate-400 text-sm leading-relaxed">
              Préparé chaque matin avec des ingrédients soigneusement sélectionnés
              pour vous offrir une expérience gustative incomparable. Disponible en
              boutique ou sur commande.
            </p>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-chocolate-500 text-sm">Prix</span>
              <span className="font-poppins text-xl font-bold text-gold-500">
                {product.price}
              </span>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, priceNum: product.priceNum, image: product.image })}
                className="flex-1 py-4 bg-gold-500 text-white rounded-2xl font-semibold text-base hover:bg-gold-600 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] shadow-lg hover:shadow-gold-500/30"
              >
                <ShoppingBag size={18} />
                Panier
              </button>
              <button
                type="button"
                onClick={() => { commanderWhatsApp(product); onClose(); }}
                className="flex-1 py-4 bg-chocolate-900 text-white rounded-2xl font-semibold text-base hover:bg-gold-500 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] shadow-lg"
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
  const [hoveredId, setHoveredId] = useState<number | null>(null);
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
    <section id="creations" className="py-24 bg-cream-50">
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-chocolate-900/70 backdrop-blur-sm">
          <div className="relative w-20 h-20 mb-5">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-4 border-white/10" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-gold-500 animate-spin" />
            {/* Inner ring */}
            <div className="absolute inset-3 rounded-full border-4 border-white/10" />
            <div className="absolute inset-3 rounded-full border-4 border-transparent border-b-gold-300 animate-spin [animation-duration:0.6s]" />
            {/* Center dot */}
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
        <div className="text-center mb-16">
          <span className="text-gold-500 font-medium tracking-[0.3em] uppercase text-sm">
            Nos Spécialités
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-chocolate-900 mt-3 mb-6">
            Nos Créations
          </h2>
          <p className="text-chocolate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Découvrez notre sélection de pâtisseries artisanales, préparées chaque
            jour avec les meilleurs ingrédients.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-chocolate-900/40 flex items-center justify-center gap-3 transition-opacity duration-300 ${
                    hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <button
                    type="button"
                    aria-label="Voir les détails"
                    onClick={() => openModal(product)}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-chocolate-900 hover:bg-gold-500 hover:text-white transition-all duration-300 shadow-lg transform hover:scale-110"
                  >
                    <Eye size={20} />
                  </button>
                </div>
                {product.badge && (
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
                      badgeColors[product.badge] || 'bg-gold-500 text-white'
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-xs text-gold-500 uppercase tracking-wider font-semibold mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-poppins text-xl font-bold text-chocolate-900 group-hover:text-gold-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                  </div>
                  <span className="font-poppins text-sm font-bold text-gold-500 whitespace-nowrap">
                    {product.price}
                  </span>
                </div>
                <p className="text-chocolate-500 text-sm mt-3 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-5 flex gap-3">
                  <button
                    type="button"
                    onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, priceNum: product.priceNum, image: product.image })}
                    className="flex-1 py-3 bg-cream-100 text-chocolate-800 rounded-xl font-semibold text-sm hover:bg-gold-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={16} />
                    Panier
                  </button>
                  <button
                    type="button"
                    onClick={() => commanderWhatsApp(product)}
                    className="flex-1 py-3 bg-chocolate-900 text-white rounded-xl font-semibold text-sm hover:bg-gold-500 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Commander
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
