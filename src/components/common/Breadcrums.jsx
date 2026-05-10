import React from 'react'
import bredcrum from '../../assets/images/breadcrum-bg.webp'
import Container from '../layouts/Container'
import { GoChevronRight, GoHome } from 'react-icons/go'
import { Link, useLocation } from 'react-router'
import { FaChevronRight } from 'react-icons/fa'
const Breadcrums = () => {
  const pathName = useLocation().pathname
  const pathArr = pathName.split('/')
 
  return (
    <div>
        <div className="bg size-full py-5 px-3 lg:px-0 lg:py-12"
        style={{background : `url(${bredcrum}) no-repeat center center/cover`}}
        >
         <Container>
             <div className="flex items-center gap-x-3">
                   <Link to="/">
                    <GoHome className=' text-xl md:text-2xl text-gray-5 '/>
                    </Link>
                    {
                      pathArr.map((path, index)=> (
                       <>
                       {
                        path === '' ? null : <span key={index +5} className={`capitalize font-poppins font-medium text-sm md:text-base ${ index === pathArr.length - 1 ? 'text-primary' : 'text-gray-5'}`}>{path}</span>
                       }
                        { index < pathArr.length - 1 && <span key={index + 10} className="text-gray-5 text-xl"><GoChevronRight /></span>}
                       </>
                      ))
                    } 
          </div>
         </Container>
        </div>
    </div>
  )
}

export default Breadcrums