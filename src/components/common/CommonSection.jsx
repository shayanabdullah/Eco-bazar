import React from 'react'
import Container from '../layouts/Container'
import { Link } from 'react-router';
import { LuArrowRight } from 'react-icons/lu';

const CommonSection = ({title,link, children, className}) => {
  return (
    <section className='px-4 lg:px-0'>
        <Container>
            <div className="main">
                {/* Heading */}
                <div className="heading flex items-center justify-between pb-8">
                    <h2 className={`font-poppins font-semibold text-xl md:text-heading-05 text-gray-9 ${className}`}>{title}</h2>
                        {/* View Btn */}
                     {
                        link &&    <Link to={link}>
                        <button className='font-poppins font-medium text-sm md:text-body-md text-primary flex items-center gap-x-2 transition-all duration-300 hover:underline cursor-pointer capitalize'>
                       view all
                        <LuArrowRight />
                    </button>
                        </Link>
                     }
                </div>
                {/* Contents*/}
                <div className="">
                    {children}
                </div>
            </div>
        </Container>
    </section>
  )
}

export default CommonSection