import React from 'react'
import Container from '../layouts/Container'
import post1 from '../../assets/images/post-1.webp'
import post2 from '../../assets/images/post-2.webp'
import post3 from '../../assets/images/post-3.webp'
import post4 from '../../assets/images/post-4.webp'
import post5 from '../../assets/images/post-5.webp'
import post6 from '../../assets/images/post-6.webp'
import { FaInstagram } from 'react-icons/fa'

const FollowUs = () => {
    const posts = [post1,post2,post6, post3,post4,post5,]
  return (
    <section className='px-4 lg:px-0 pb-15'>
        <Container>
            <div className="main">
                <div className="heading w-full text-center pb-8">
                    <h3 className='font-poppins font-semibold text-xl md:text-heading-05 text-gray-9 '>Follow us on Instagram</h3>
                </div>
                <div className="grid grid-cols-3  lg:grid-cols-6 gap-6">
                    {
                        posts.map((item, index)=> (
                            <div className="relative group rounded-[10px] overflow-hidden cursor-pointer" key={index}>
                                <div className="absolute -bottom-10 left-0 w-full h-0 group-hover:h-full group-hover:bottom-0 transition-all duration-300 bg-[#2B572E]/80 z-10 flex justify-center items-center">
                                <FaInstagram className='text-white text-3xl'/>
                                </div>
                                <img src={item} alt="post" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </Container>
    </section>
  )
}

export default FollowUs