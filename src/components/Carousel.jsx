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
    <div className="h-[400px] pt-2 bg-black">
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
        <SwiperSlide className="max-h-[200px] bg-black">
          <video controls  autoPlay loop muted="mutes" className="h-[350px]" >
            <source src={"../images/carousel_vid.mp4"} type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide className="max-h-[200px] bg-black">
          <img src={"../images/carousel_1.jpg"} alt="Img" />
        </SwiperSlide>
        <SwiperSlide className="max-h-[200px] bg-black">
          <img src={"../images/carousel_2.jpg"} alt="Img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_3.jpg"} alt="Img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_4.jpg"} alt="Img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
