import React from "react";
import Container from "../layouts/Container";
import bannerOne from "../../assets/images/banner-one.webp";
import bannerTwo from "../../assets/images/banner-two.webp";
import bannerThree from "../../assets/images/banner-three.webp";
import rightBannerOne from "../../assets/images/right-banner-one.webp";
import rightBannerTwo from "../../assets/images/right-banner-two.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const allImages = [bannerOne, bannerTwo, bannerThree];

const Hero = () => {
  return (
    <>
      <section className="py-6 px-3 lg:px-0">
        <Container>
          <div className="main grid grid-cols-1 lg:grid-cols-3 gap-6 ">
            <div className="right lg:col-span-2">
             {
              allImages.length > 0 ? ( <Swiper
                pagination={{
                  clickable: true,
                }}
                modules={[EffectFade, Autoplay, Pagination]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1500}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
              >
                {allImages?.map(
                  (img, index) =>
                    img && (
                      <SwiperSlide key={index}>
                        <div className="size-full rounded-md overflow-hidden  max-h-150 cursor-pointer">
                          <img
                            src={img}
                            alt=""
                            width={"100%"}
                            className="w-full min-h-[262px] "
                            fetchPriority="high"
                            loading="eager"
                          />
                        </div>
                      </SwiperSlide>
                    ),
                )}
              </Swiper>) : (<div className="size-full rounded-md overflow-hidden  max-h-150 cursor-pointer">
                          <img
                            src={allImages[0]}
                            alt=""
                            width={"100%"}
                            className="w-full min-h-[262px] "
                            fetchPriority="high"
                            loading="eager"
                          />
                        </div>)
             }
            </div>
            <div className="left lg:col-span-1 flex md:flex-row lg:flex-col md:gap-6 gap-x-2 items-center w-full">
              <div className="size-full cursor-pointer overflow-hidden group rounded-md">
                <img
                  src={rightBannerOne}
                  alt="banner"
                  fetchPriority="high"
                  loading="eager"
                  className="group-hover:scale-[1.02] transition-all duration-300"
                />
              </div>
              <div className="size-full cursor-pointer overflow-hidden group rounded-md">
                <img
                  src={rightBannerTwo}
                  alt="banner"
                  fetchPriority="high"
                  loading="eager"
                  className="group-hover:scale-[1.02] transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
