import React from 'react'
import ProductCard from '../common/ProductCard';
import CommonSection from '../common/CommonSection';
import { popularProducts } from '../../utils/data';

const FeatureProducts = () => {
    
      const maxtoShow = popularProducts.slice(12, 17);
  return (   
     <section className=" py-15 lg:px-0">
        <CommonSection title={"Featured Products"} >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {maxtoShow.map((item) => (
             <ProductCard item={item}/>
            ))}
          </div>
        </CommonSection>
      </section>
  )
}

export default FeatureProducts