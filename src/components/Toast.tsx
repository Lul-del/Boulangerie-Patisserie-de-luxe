import { ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Toast() {
  const { toast, openCart } = useCart();

  return (
    <div
      className={`fixed top-20 right-4 z-[60] flex items-center gap-3 bg-white rounded-2xl shadow-2xl px-4 py-3 border-l-4 border-gold-500 max-w-xs w-full transition-all duration-500 ${
        toast ? 'translate-x-0 opacity-100' : 'translate-x-[120%] opacity-0'
      }`}
    >
      {/* Thumbnail */}
      {toast?.image && (
        <img
          src={toast.image}
          alt=""
          className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
        />
      )}

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-0.5">
          <Check size={14} className="text-gold-500 flex-shrink-0" />
          <span className="text-xs font-bold text-gold-600 uppercase tracking-wide">
            Ajouté au panier
          </span>
        </div>
        <p className="text-sm font-semibold text-chocolate-900 truncate">
          {toast?.name}
        </p>
      </div>

      {/* Open cart */}
      <button
        type="button"
        onClick={openCart}
        aria-label="Voir le panier"
        className="flex-shrink-0 w-9 h-9 bg-gold-500 text-white rounded-xl flex items-center justify-center hover:bg-gold-600 transition-colors"
      >
        <ShoppingBag size={16} />
      </button>
    </div>
  );
}
