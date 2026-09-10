import { useEffect, useRef } from "react";
import { AnimatePresence, motion as Motion } from "motion/react";
import { ArrowLeft, ShoppingBag, X } from "lucide-react";
import { Link } from "react-router";
import useScrollLock from "../../hooks/useScrollLock";
import { useCart } from "../../context/useCart.js";

const CartSidebar = () => {
  const { isCartOpen, closeCart } = useCart();
  const closeCartRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  useScrollLock(isCartOpen);

  useEffect(() => {
    if (!isCartOpen) return undefined;

    previouslyFocusedRef.current = document.activeElement;
    closeCartRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeCart();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedRef.current?.focus?.();
    };
  }, [closeCart, isCartOpen]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <Motion.button
            type="button"
            aria-label="Close shopping cart"
            onClick={closeCart}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-gray-9/70"
          />

          <Motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-sidebar-title"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 32 }}
            className="fixed inset-y-0 right-0 z-[105] w-[calc(100%-1rem)] overflow-hidden bg-white shadow-2xl sm:right-0 sm:w-[400px]"
          >
            <div className="flex h-dvh flex-col">
              <header className="flex shrink-0 items-center justify-between border-b border-gray-100 px-5 py-4">
                <h2
                  id="cart-sidebar-title"
                  className="font-poppins text-lg font-semibold text-gray-9"
                >
                  Shopping Cart
                </h2>
                <button
                  ref={closeCartRef}
                  type="button"
                  aria-label="Close shopping cart"
                  onClick={closeCart}
                  className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-9"
                >
                  <X size={22} />
                </button>
              </header>

              <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                <div className="mb-5 flex size-20 items-center justify-center rounded-full bg-green-gray-0 text-hard-primary">
                  <ShoppingBag size={34} />
                </div>
                <h3 className="font-poppins text-lg font-semibold text-gray-9">
                  Your cart is empty
                </h3>
                <p className="mt-2 max-w-xs font-poppins text-sm leading-6 text-gray-500">
                  Looks like you haven&apos;t added anything to your cart yet.
                </p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 font-poppins text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  <ArrowLeft size={17} />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </Motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
