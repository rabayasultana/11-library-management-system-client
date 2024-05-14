// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide1 from "../assets/images/pexels-pixabay-247899.jpg";
import slide2 from "../assets/images/pexels-pixabay-261895.jpg";
import slide3 from "../assets/images/pexels-polina-zimmerman-3747468.jpg";
import slide4 from "../assets/images/pexels-element5-1370298.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

export default function Banner() {
  return (
    <div className="container px-6 pb-12 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide image={slide1} text="Find, borrow, and manage books seamlessly - Your school's digital library solution"></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={slide2}  text="Find, borrow, and manage books seamlessly - Your school's digital library solution"></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={slide3}  text="Find, borrow, and manage books seamlessly - Your school's digital library solution"></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={slide4}  text="Find, borrow, and manage books seamlessly - Your school's digital library solution"></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
