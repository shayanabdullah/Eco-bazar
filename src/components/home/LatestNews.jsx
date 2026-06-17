import React from 'react'
import Container from '../layouts/Container'
import CommonSection from '../common/CommonSection'
import { latestNews } from '../../utils/data'
import { GoTag } from 'react-icons/go'
import { FaUserLarge } from "react-icons/fa6";
import { FaArrowRight, FaRegCommentAlt } from 'react-icons/fa'

const LatestNews = () => {
  return (
    <section className='py-15'>
        <Container>
            <CommonSection title={"Latest News"} className={'text-center! w-full'}>
                <div className="main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        latestNews.map((news) => (
                            <div className="overflow-hidden group border border-gray-1 rounded-lg hover:drop-shadow-2xl transition-all duration-300 " key={news.id}>
                                {/* img */}
                                <div className="img relative">
                                    <img src={news.image} alt="img" className='transition-all duration-300 group-hover:scale-[1.02]' />
                                    <div className="absolute left-6 bottom-6 px-3.5 py-2 bg-white z-10 font-poppins rounded-md">
                                        <p className='font-medium text-lg md:text-xl text-gray-9'>{news.day}</p>
                                        <p className='font-medium text-xs  text-gray-5'>{news.month}</p>
                                    </div>
                                </div>
                                {/* textbox */}
                                <div className="p-6 bg-white ">
                                    {/* tags */}
                                    <div className="flex items-center gap-x-4 pb-2.5">
                                        {
                                            news.tags.map((tag) => (
                                               <>
                                                <div className="flex items-center gap-x-1">
                                                    <GoTag className='text-gray-3'/>
                                                    <p className='font-poppins font-normal text-sm text-gray-7'>{tag.category}</p>
                                                </div>
                                                <div className="flex items-center gap-x-1">
                                                    <FaUserLarge className='text-gray-3'/>
                                                    <p className='font-poppins font-normal text-sm text-gray-7'>By {tag.author}</p>
                                                </div>
                                                <div className="flex items-center gap-x-1">
                                                    <FaRegCommentAlt className='text-gray-3'/>
                                                    <p className='font-poppins font-normal text-sm text-gray-7'>{tag.comments} Comments</p>
                                                </div>
                                               </>
                                            ))
                                        }
                                    </div>
                                    {/* Titles */}
                                    <div className="">
                                        <h3 className='font-poppins font-medium text-lg group-hover:text-hard-primary transition-all duration-300 text-gray-9 leading-[150%]'>{news.title.slice(0, 60)}...</h3>
                                    </div>
                                    {/* button */}
                                    <button className='bg-transparent flex items-center gap-x-3 font-poppins font-semibold text-base text-primary cursor-pointer'>Read More <FaArrowRight />
                                </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </CommonSection>
        </Container>
    </section>
  )
}

export default LatestNews