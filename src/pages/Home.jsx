import React from 'react'
import { useSelector } from 'react-redux'
import Container from './../components/layouts/Container';
import PopUp from '../components/PopUp';
import { BiArrowFromRight } from 'react-icons/bi';
import { FaArrowUp } from 'react-icons/fa';

const Home = () => {
  return (
    <div className='py-20 '>
      <Container>
        <div className="md:flex flex-col gap-y-12 hidden ">
            <div className="mega">
          <h2 className='capitalize font-poppins font-medium text-2xl flex items-center gap-x-2'><FaArrowUp/> Hover over the <span className='text-badge-blue mx-2 font-bold '>All Categories</span> button to open the mega menu !</h2>
         </div>
         <div className=" flex items-center gap-x-5 mt-10">
           <button className='py-2 px-4 bg-badge-blue text-white font-poppins font-semibold text-xl  rounded-md cursor-pointer relative tooltip'>Show Tooltip</button>
           <p className='capitalize font-poppins font-semibold text-xl flex items-center gap-x-1'> <BiArrowFromRight /> Hover over the button to see the tooltip</p>
         </div>
        </div>
      <PopUp/>
      </Container>
    </div>
  )
}

export default Home