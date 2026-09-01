import { useState } from "react";
import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductTabs from "../components/product/ProductTabs";
import DescriptionTab from "../components/product/DescriptionTab";
import AdditionalInfoTab from "../components/product/AdditionalInfoTab";
import CustomerFeedbackTab from "../components/product/CustomerFeedbackTab";
import RelatedProducts from "../components/product/RelatedProducts";
import { reviews } from "../data/reviews";
import { popularProducts } from "../utils/data";
import { productDetails } from "../data/productDetaIls";
import { useParams } from "react-router";
import Container from "../components/layouts/Container";

export default function ProductDetails() {
 const { slug } = useParams();

const product = Object.values(productDetails).find(
  (item) => item.slug === slug
);

  if (!product) {
    return <div>Product not found</div>;
  }


  const relatedProducts = popularProducts.filter((item) => item.category === product.category).slice(0, 4);
  
  const [activeTab, setActiveTab] = useState("description");

  const handleAddToCart = (quantity) => {
    console.log(`Add ${quantity} × ${product.name} to cart`);
  };
 

  return (
    <div className="bg-white min-h-screen">
     <Container>
       <div className=" px-4 md:px-6 py-8 md:py-12">
        {/* Gallery + Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          <ProductGallery images={product.images} productName={product.name} />
          <ProductInfo product={product} onAddToCart={handleAddToCart} />
        </div>

        {/* Tabs */}
        <div className="mt-12 md:mt-16 ">
          <ProductTabs activeTab={activeTab} onChange={setActiveTab} />

          <div className="pt-8">
            {activeTab === "description" && <DescriptionTab product={product} />}
            {activeTab === "additional" && <AdditionalInfoTab product={product} />}
            {activeTab === "feedback" && <CustomerFeedbackTab reviews={reviews} />}
          </div>
        </div>

        {/* Related products */}
        <RelatedProducts products={relatedProducts} />
      </div>
     </Container>
    </div>
  );
}
