import React from 'react'
import Container from '../layouts/Container'
import CommonSection from '../common/CommonSection'
import { popularProducts } from '../../utils/data'
import ProductCard from './../common/ProductCard';

const HotDeals = () => {
  const maxProdToShow =popularProducts.slice(0, 13)
  return (
    <section className='bg-[#F7F7F7] py-15 '>
        <Container>
            <CommonSection title={'Hot Deals'} className={'text-2xl! md:text-heading-05!'}/>
            <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 lg:grid-cols-5 px-4 lg:px-0">
              {
                maxProdToShow.map((item, index)=> (
                <>
                  {index === 0 && (
                   
              <div className="right col-span-2 row-span-2 size-full bg-white">
                <img src={maxProdToShow[2].image} alt="img" className='w-full' />
              </div>
                  )}
                {
                  index !== 2 && index !== 0 && (
                      <ProductCard item={item}/>
                  ) 
                }
                
                </>
                ))
              }
            </div>
        </Container>
    </section>
  )
}

export default HotDeals