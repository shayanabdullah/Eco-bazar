import React from 'react'
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { FaChevronUp } from 'react-icons/fa6';

const ScrollToTopBtn = () => {
    const { scrollToTop, isVisible } = useScrollToTop(500);
  return (
    
       
            <button
                type="button"
                onClick={scrollToTop}
                className={`fixed bottom-12  bg-primary p-4 rounded-full shadow-md transition-all duration-300 hover:bg-primary/80 ${isVisible ? 'opacity-100 right-30' : 'opacity-0 -right-1/2'}`}
            >
               <FaChevronUp className="text-white text-3xl" />
            </button>
     
    
  )
}

export default ScrollToTopBtn