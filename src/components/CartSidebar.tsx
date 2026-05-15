import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartSidebar() {
  const {
    items,
    isOpen,
    closeCart,
    openCart,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
  } = useCart();

  const formatPrice = (num: number) => num.toLocaleString("fr-FR") + " FCFA";

  const handleCommander = () => {
    const lignes = items
      .map(
        (item) =>
          `• ${item.name} x${item.quantity} — ${formatPrice(item.priceNum * item.quantity)}`,
      )
      .join("\n");

    const message =
      `Bonjour Wɛ̀li - Pâtisserie sans gluten afro-healthy 🥐,\n` +
      `je souhaite passer la commande suivante :\n\n` +
      `${lignes}\n\n` +
      `Total : ${formatPrice(totalPrice)}\n\n` +
      `Merci !`;

    const url = `https://wa.me/2290151928187?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    closeCart();
  };

  return (
    <>
      {/* Floating cart button */}
      {!isOpen && (
        <button
          type="button"
          aria-label="Ouvrir le panier"
          onClick={openCart}
          className="fixed bottom-24 right-8 z-40 w-14 h-14 bg-gold-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gold-600 hover:scale-110 transition-all duration-300"
        >
          <ShoppingBag size={22} />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-chocolate-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-chocolate-900/50 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] z-50 bg-white shadow-2xl flex flex-col transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-200">
          <div className="flex items-center gap-3">
            <ShoppingBag size={22} className="text-gold-500" />
            <h2 className="font-poppins text-xl font-bold text-chocolate-900">
              Mon Panier
            </h2>
            {totalItems > 0 && (
              <span className="bg-gold-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
          <button
            type="button"
            aria-label="Fermer le panier"
            onClick={closeCart}
            className="w-9 h-9 rounded-full bg-cream-100 hover:bg-cream-200 flex items-center justify-center transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-16">
              <div className="w-20 h-20 bg-cream-100 rounded-full flex items-center justify-center">
                <ShoppingBag size={32} className="text-cream-400" />
              </div>
              <p className="font-poppins font-semibold text-chocolate-700">
                Votre panier est vide
              </p>
              <p className="text-chocolate-400 text-sm">
                Ajoutez des créations pour commencer
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 px-6 py-2.5 bg-gold-500 text-white rounded-full text-sm font-semibold hover:bg-gold-600 transition-colors"
              >
                Voir les créations
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 bg-cream-50 rounded-2xl"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-poppins font-semibold text-chocolate-900 text-sm truncate">
                    {item.name}
                  </h4>
                  <p className="text-gold-500 font-bold text-sm mt-0.5">
                    {formatPrice(item.priceNum)}
                  </p>

                  <div className="flex items-center justify-between mt-3">
                    {/* Quantity */}
                    <div className="flex items-center gap-2 bg-white rounded-xl border border-cream-200 px-2 py-1">
                      <button
                        type="button"
                        aria-label="Diminuer"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-6 h-6 flex items-center justify-center text-chocolate-500 hover:text-gold-500 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-poppins font-bold text-sm w-5 text-center text-chocolate-900">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label="Augmenter"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-6 h-6 flex items-center justify-center text-chocolate-500 hover:text-gold-500 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      type="button"
                      aria-label="Supprimer"
                      onClick={() => removeFromCart(item.id)}
                      className="w-8 h-8 flex items-center justify-center text-chocolate-300 hover:text-gold-500 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-cream-200 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-chocolate-500 text-sm">
                {totalItems} article{totalItems > 1 ? "s" : ""}
              </span>
              <span className="font-poppins font-bold text-xl text-chocolate-900">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCommander}
              className="w-full py-4 bg-gold-500 text-white rounded-2xl font-poppins font-semibold text-center hover:bg-gold-600 transition-all duration-300 shadow-lg hover:shadow-gold-500/30 hover:scale-[1.02]"
            >
              Commander via WhatsApp ({totalItems})
            </button>
          </div>
        )}
      </div>
    </>
  );
}
