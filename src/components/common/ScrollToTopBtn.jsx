import React from 'react'
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { FaChevronUp } from 'react-icons/fa6';

const ScrollToTopBtn = () => {
    const { scrollToTop, isVisible } = useScrollToTop(500);
  return (
    
       
            <button
                type="button"
                onClick={scrollToTop}
                className={`fixed bottom-20 md:bottom-12  bg-primary p-3 md:p-4 rounded-full shadow-md transition-all duration-300 hover:bg-primary/80 ${isVisible ? 'opacity-100 right-3 md:right-30' : 'opacity-0 -right-1/2'}  animate-bounce `}
            >
               <FaChevronUp className="text-white md:text-3xl" />
            </button>
     
    
  )
}

export default ScrollToTopBtn