// PATH = my-app/src/components/Carousel.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y, // Correct import
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css";

export default function Carousel() {
  return (
    <div className="max-h-[220px] h-[300px] pt-2 bg-black">
      <Swiper
        className="max-h-[100%] justify-center items-center "
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay, A11y]} // Correct A11y
        autoplay={{
          delay: 5000,
        }}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        a11y={{
          enabled: true,
          prevSlideMessage: "Go to the previous slide",
          nextSlideMessage: "Go to the next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
        }}
      >
        <SwiperSlide className="max-h-[100px] bg-black justify-center items-center">
          <video controls  autoPlay loop muted="mutes" className="h-[200px] w-[800px] m-auto" >
            <source src={"../images/carousel_vid.mp4"} type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide className="bg-black justify-center items-center">
          <img src={"../images/carousel_1.jpg"} alt="Img" className="h-[380px] w-[1000px]"  />
        </SwiperSlide>
        <SwiperSlide className="h-[100px] w-[200px] bg-black">
          <img src={"../images/carousel_2.jpg"} alt="Img" className="h-[350px] w-[1000px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_3.jpg"} alt="Img" className="h-[350px] w-[1000px]"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_4.jpg"} alt="Img" className="h-[350px] w-[1000px]" />
        </SwiperSlide>
      </Swiper>

      <div className="h-400px bg-orange-500"></div>
    </div>
  );
}
