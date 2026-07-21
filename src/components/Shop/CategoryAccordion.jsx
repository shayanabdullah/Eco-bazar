import React from 'react'
import Accordion from '../common/Accordion'
import { shopCategories } from '../../utils/data'
import { FaChevronDown } from 'react-icons/fa'

const CategoryAccordion = () => {
  return (
        <Accordion
              title={"All Categories"}
              fontWeight={"medium"}
              fontSize={"text-xl"}
              icon={<FaChevronDown />}
              titleBorder={'border-t border-gray-2'}
            >
              <div className=" flex flex-col gap-y-3">
                {
                  shopCategories.map((item) => (
                    <div className="relative flex gap-x-3 gap-y-2 items-center" key={item.id}>
                      <input type="checkbox" className="peer" id={item.name} hidden  />


                  <span className="w-5 h-5 rounded-full border border-[#CCCCCC] peer-checked:border-primary! relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-3 after:h-3 after:rounded-full  after:-translate-x-1/2 after:-translate-y-1/2  peer-checked:after:bg-primary after:transition-all"></span>


                      <label htmlFor={item.name} className="cursor-pointer text-sm font-poppins font-normal ">{item.name}
                        <span className="pl-1 text-gray-5">({item.products})</span>
                      </label>
                    </div>
                  ))
                }
              </div>


            </Accordion>
  )
}

export default CategoryAccordion