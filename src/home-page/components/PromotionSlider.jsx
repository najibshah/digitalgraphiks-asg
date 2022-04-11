// // import Slider from "react-slick";
// import Link from "@mui/material/Link";

// // import sliderBanner1 from "../assets/sliderBanner1.png";
// // import sliderBanner2 from "../assets/sliderBanner2.png";
// // import sliderBanner3 from "../assets/sliderBanner3.jpeg";
// // import sliderBanner4 from "../assets/sliderBanner4.png";
// // import sliderBanner5 from "../assets/sliderBanner5.png";

// // const sliderImages = [
// //   { image: sliderBanner1, link: "/" },
// //   { image: sliderBanner2, link: "/" },
// //   { image: sliderBanner3, link: "/" },
// //   { image: sliderBanner4, link: "/" },
// //   { image: sliderBanner5, link: "/" },
// // ];

// // export function PromotionSlider() {
// //   var settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     arrows: false,
// //   };
// //   return (
// //     <div>
// //       <Slider {...settings}>
// //         {sliderImages.map((sliderData, index) => {
// //           return (
// //             <Link href={sliderData.link} key={index}>
// //               <div>
// //                 <img src={sliderData.image} alt="" style={{ width: "100%" }} />
// //               </div>{" "}
// //             </Link>
// //           );
// //         })}
// //       </Slider>
// //     </div>
// //   );
// // }

// // import { Swiper, SwiperSlide } from "swiper/react";

// // // Import Swiper styles
// // import "swiper/css";

// // import sliderBanner1 from "../assets/sliderBanner1.png";
// // import sliderBanner2 from "../assets/sliderBanner2.png";
// // import sliderBanner3 from "../assets/sliderBanner3.jpeg";
// // import sliderBanner4 from "../assets/sliderBanner4.png";
// // import sliderBanner5 from "../assets/sliderBanner5.png";

// // const sliderImages = [
// //   { image: sliderBanner1, link: "/" },
// //   { image: sliderBanner2, link: "/" },
// //   { image: sliderBanner3, link: "/" },
// //   { image: sliderBanner4, link: "/" },
// //   { image: sliderBanner5, link: "/" },
// // ];

// // export function PromotionSlider() {
// //   return (
// //     <Swiper
// //       spaceBetween={50}
// //       slidesPerView={1}
// //       onSlideChange={() => console.log("slide change")}
// //       onSwiper={(swiper) => console.log(swiper)}
// //     >
// //       {sliderImages.map((sliderData, index) => {
// //         return (
// //           <Link href={sliderData.link} key={index}>
// //             <SwiperSlide>
// //               <img src={sliderData.image} alt="" style={{ width: "100%" }} />
// //             </SwiperSlide>
// //           </Link>
// //         );
// //       })}
// //       {/* <SwiperSlide>Slide 1</SwiperSlide>
// //       <SwiperSlide>Slide 2</SwiperSlide>
// //       <SwiperSlide>Slide 3</SwiperSlide>
// //       <SwiperSlide>Slide 4</SwiperSlide>
// //       ... */}
// //     </Swiper>
// //   );
// // }

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { promotionSliderImages } from "../assets/promotionSliderImages/promotions";

export function PromotionSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {promotionSliderImages.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
