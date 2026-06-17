import React from "react";
import Container from "../layouts/Container";
import CommonSection from "../common/CommonSection";
import { testimonials } from "../../utils/data";
import { RiSingleQuotesR } from "react-icons/ri";
import { VscQuote } from "react-icons/vsc";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

const Testimonials = () => {
  return (
    <section className="py-15 px-4 lg:px-0 bg-[#F2F2F2]">
      <Container>
        <div className="relative">
          <div className="pb-8 flex justify-between">
            <h2
              className={`font-poppins font-semibold text-xl md:text-heading-05 text-gray-9 `}
            >
              Client Testimonials
            </h2>
          </div>
          <div className="">
            <Swiper
              spaceBetween={24}
              slidesPerView={3}
              navigation={{
                prevEl: ".testimonial-prev",
                nextEl: ".testimonial-next",
              }}
              autoplay={{
                delay: 3500,
              }}
              loop={true}
              draggable={true}
              pagination={false}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              modules={[Navigation, Pagination, Autoplay]}
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="p-6 rounded-lg bg-white min-h-[250px] flex flex-col justify-between">
                    <div className="flex items-center mb-4">
                      <VscQuote className="text-[30px] -rotate-180 text-primary/30" />
                    </div>
                    <div className="text pb-4">
                      <p className="font-poppins font-normal text-sm text-gray-7 max-w-[95%] leading-[130%]">
                        {item.review}
                      </p>
                    </div>
                    {/* avater */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-x-3">
                        {/* avater */}
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img src={item.avatar} alt="avater" />
                        </div>
                        {/* name */}
                        <div className="font-poppins font-medium text-base">
                          <h3 className=" text-gray-9">{item.name}</h3>
                          <p className="text-gray-4">{item.role}</p>
                        </div>
                      </div>
                      {/* ratung */}
                      <div className="flex items-center gap-x-1">
                        {[...Array(item.rating)].map((_, index) => (
                          <FaStar className="text-warning" />
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex items-center gap-x-2 absolute top-0 right-0">
              <button className="w-12 h-12 rounded-full flex items-center justify-center bg-primary cursor-pointer text-white text-2xl testimonial-prev">
                <HiArrowLeft />
              </button>
              <button className="w-12 h-12 rounded-full flex items-center justify-center bg-primary cursor-pointer text-white text-2xl testimonial-next">
                <HiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
