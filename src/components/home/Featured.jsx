import React from 'react'
import { TbTruckDelivery, TbPackage } from "react-icons/tb";
import {
  RiCustomerService2Line,
  RiSecurePaymentLine,
} from "react-icons/ri";
import Container from '../layouts/Container';

const Featured = () => {

 const featuredData = [
  {
    id: 1,
    icon: TbTruckDelivery,
    title: "Free Shipping",
    description: "Free shipping on all your order",
  },
  {
    id: 2,
    icon: RiCustomerService2Line,
    title: "Customer Support 24/7",
    description: "Instant access to Support",
  },
  {
    id: 3,
    icon: RiSecurePaymentLine,
    title: "100% Secure Payment",
    description: "We ensure your money is save",
  },
  {
    id: 4,
    icon: TbPackage,
    title: "Money-Back Guarantee",
    description: "30 Days Money-Back Guarantee",
  },
];
  return (
    <div className='pb-15 '>
        <Container>   
        <div className="grid grid-cols-2 lg:flex lg:items-center lg:justify-between gap-3 sm:gap-6 lg:gap-0 bg-white rounded-xl lg:rounded-lg shadow-[0px_8px_40px_0px_rgba(0,38,3,0.08)] p-4 sm:p-6 lg:py-10 lg:px-10">
            {
                featuredData.map((item)=>(
                    <div className="card flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-1.5 lg:gap-x-4 p-1 lg:p-0" key={item.id}>
                <item.icon className='text-heading-04 text-primary shrink-0 scale-[0.75] lg:scale-100'/>
                <div className="flex flex-col gap-y-1">
                    <h2 className='font-poppins font-semibold text-[11px] sm:text-[13px] lg:text-base text-logoc leading-[120%] lg:pb-2'>{item.title}</h2>
                    <p className='text-[9px] sm:text-[11px] lg:defaultfs text-grynine mt-0.5 lg:mt-0 leading-[130%] lg:leading-normal'>{item.description}</p>
                </div>
            </div>
                ))
            }
        </div>
        </Container>
    </div>
  )
}

export default Featured