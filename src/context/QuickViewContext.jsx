
import { createContext, useContext, useState } from "react";

const QuickViewContext = createContext();

export const QuickViewProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [slug, setSlug] = useState(null);

  const openQuickView = (productSlug) => {
    setSlug(productSlug);
    setIsOpen(true);
    console.log(slug, isOpen);
  };

  const closeQuickView = () => {
    setIsOpen(false);
    setSlug(null);
  };

  return (
    <QuickViewContext.Provider
      value={{
        isOpen,
        slug,
        openQuickView,
        closeQuickView,
      }}
    >
      {children}
    </QuickViewContext.Provider>
  );
};

export const useQuickView = () => {
  return useContext(QuickViewContext);
};

