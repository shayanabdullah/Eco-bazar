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
    <div className='pb-15 px-3 lg:px-0 '>
        <Container>   
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 p-6 md:p-10 rounded-md shadow-xl shadow-[#002603]/8">
            {
                featuredData.map((item)=>(
                    <div className="card flex items-center gap-x-4" key={item.id}>
                <item.icon className='text-heading-04 text-primary'/>
                <div className="flex flex-col gap-y-1">
                    <h2 className='font-poppins font-semibold text-base text-gray-9'>{item.title}</h2>
                    <p className='font-poppins font-normal text-sm text-gray-4'>{item.description}</p>
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