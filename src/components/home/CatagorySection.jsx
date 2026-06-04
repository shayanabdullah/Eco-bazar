import React from 'react'
import CommonSection from '../common/CommonSection'
import { categories } from '../../utils/catagoryData'

const CatagorySection = () => {
    const catagoryToShow = categories.slice(0, 12);
  return (
    <>  
 <section className='pb-15'>
       <CommonSection title={'Popular Categories'} link={'/all-catagories'}>
        {/* All catagories */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-5">
        {
            catagoryToShow.map((item)=> (
                <div className="border border-gray-1 rounded-md px-4 py-4 transition-all duration-300 hover:border-hard-primary group cursor-pointer" key={item.id}>
                    {/* img */}
                    <div className='max-h-[130px] h-full overflow-hidden pb-4 flex items-center justify-center'>
                        <img src={item.image} alt={item.name} className='h-full transition-all duration-300 group-hover:scale-[1.03]' loading='lazy' />
                    </div>
                    {/* text content */}
                    <div className="flex justify-center">
                        <p className='font-poppins font-medium text-body-md md:text-lg transition-all duration-300 group-hover:text-hard-primary'>{item.name}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </CommonSection>
 </section>
    </>
  )
}

export default CatagorySection