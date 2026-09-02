import React from "react";
import ProductGallery from "../product/ProductGallery";
import ProductInfo from "../product/ProductInfo";
import { productDetails } from "../../data/productDetaIls";
import { IoCloseOutline } from "react-icons/io5";
import { useQuickView } from "../../context/QuickViewContext";

const QuickView = () => {
  const {isOpen, slug, closeQuickView} = useQuickView();
  if (!isOpen) return null;

  const product = Object.values(productDetails).find(
    (item) => item.slug === slug
  );

  if (!product) return null;

  const handleClose = () => {
    closeQuickView();
  };

  const handleAddToCart = (quantity) => {
    console.log(`Add ${quantity} × ${product.name} to cart`);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[99] bg-black/50"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed z-100 top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2  max-w-7xl w-[80%] bg-white rounded-md ">
        <button
          className="absolute -top-15 right-0 text-white text-3xl cursor-pointer z-100"
          onClick={handleClose}
        >
          <IoCloseOutline />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 p-6">
          <ProductGallery
            images={product.images}
            productName={product.name}
          />

          <ProductInfo
            product={product}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </>
  );
};

export default QuickView;