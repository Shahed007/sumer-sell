import Container from "../../../components/Container";
import Title from "../../../components/title/Title";
import { testimonial } from "../../../../util/api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";
import TestimonialCard from "../../../components/card/TestimonialCard";

const Review = () => {
  const [data] = useState(testimonial);

  return (
    <section className="mt-20 relative">
      <div className="flex justify-center mb-14">
        <Title>Testimonial</Title>
      </div>
      <Container data-aos="zoom-in">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
        >
          <div className="mx-10">
            {data?.map((item) => (
              <SwiperSlide key={item.id} className="my-10 ">
                <TestimonialCard {...item}></TestimonialCard>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </Container>
      <button className="swiper-button-prev hidden duration-200 transition-all border-2 border-transparent hover:border-secondary_color hover:bg-transparent active:scale-95 z-50 hover:text-secondary_color cursor-pointer absolute top-1/2 left-5 h-10 w-10 md:flex justify-center items-center text-white bg-secondary_color rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button className="swiper-button-next duration-200 transition-all border-2 border-transparent hover:border-secondary_color hover:bg-transparent active:scale-95 z-50 hover:text-secondary_color cursor-pointer absolute top-1/2 right-5 h-10 w-10 hidden md:flex justify-center items-center  bg-secondary_color rounded-full shadow-sm text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </section>
  );
};

export default Review;
