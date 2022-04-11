// // import { useState, useEffect } from "react";

// // import Slider from "react-slick";

// // export function CategoriesSlider() {
// //   const [categoryList, setCategoryList] = useState();
// //   useEffect(() => {
// //     fetch("https://fakestoreapi.com/products")
// //       .then((res) => res.json())
// //       .then((json) => setCategoryList(json))
// //       .catch((err) => console.log(err));
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, []);
// //   categoryList && console.log(categoryList);

// //   let settings = {
// //     infinite: true,
// //     speed: 500,
// //     slidesToScroll: 1,
// //     slidesPerRow: 7,
// //     rows: 1,
// //     centerMode: true,
// //     dots: true,
// //     arrows: true,
// //     responsive: [
// //       {
// //         breakpoint: 320,
// //         settings: {
// //           slidesPerRow: 2,
// //           slidesToScroll: 1,
// //           rows: 2,
// //           infinite: true,
// //         },
// //       },
// //       {
// //         breakpoint: 768,
// //         settings: { slidesPerRow: 2, rows: 2, infinite: true },
// //       },
// //       {
// //         breakpoint: 1024,
// //         settings: { slidesPerRow: 4, rows: 2, infinite: true },
// //       },
// //     ],
// //   };
// //   return (
// //     <div style={{ marginTop: 40, marginBottom: 100 }}>
// //       <Slider {...settings}>
// //         {categoryList &&
// //           categoryList.map((category) => (
// //             <div>
// //               <img
// //                 src={category.image}
// //                 alt=""
// //                 style={{ height: "4em", margin: "auto" }}
// //               />
// //               <p variant="button" style={{ textAlign: "center" }}>
// //                 {category.category}
// //               </p>
// //             </div>
// //           ))}
// //       </Slider>
// //     </div>
// //   );
// // }

// import Link from "@mui/material/Link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { sliderImages } from "../assets/categories";
// import { Grid, Pagination } from "swiper";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/grid";

// export function CategoriesSlider() {
//   return (
//     <Swiper
//       spaceBetween={20}
//       slidesPerView={5}
//       grid={{
//         rows: 2,
//       }}
//       onSlideChange={() => console.log("slide change")}
//       onSwiper={(swiper) => console.log(swiper)}
//       breakpoints={{
//         640: {
//           slidesPerView: 5,
//           spaceBetween: 25,
//         },
//         768: {
//           slidesPerView: 8,
//           spaceBetween: 25,
//           // grid: { rows: 1 },
//         },
//         1024: {
//           slidesPerView: 12,
//           spaceBetween: 25,
//           // grid: { rows: 1 },
//         },
//       }}
//       modules={[Grid]}
//     >
//       {sliderImages.map((sliderData, index) => {
//         return (
//           <Link href={sliderData.link} key={index}>
//             <SwiperSlide>
//               <img src={sliderData.image} alt="" style={{ width: "100%" }} />
//             </SwiperSlide>
//           </Link>
//         );
//       })}
//       {/* <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ... */}
//     </Swiper>
//   );
// }

import React, { useRef, useState } from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Autoplay, Grid, Navigation } from "swiper";

import { categoriesSliderImages } from "../assets/categorySliderImages/categories";

export function CategoriesSlider() {
  return (
    <Box sx={{ backgroundColor: "#FEFEDE", p: 2 }}>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 8,
            spaceBetween: 25,
            // grid: { rows: 1 },
          },
          1024: {
            slidesPerView: 12,
            spaceBetween: 25,
            // grid: { rows: 1 },
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {categoriesSliderImages.map((sliderData, index) => {
          return (
            <Link href={sliderData.link} key={index}>
              <SwiperSlide>
                <img
                  src={sliderData.image}
                  alt=""
                  style={{
                    width: "100%",
                    backgroundColor: "#FEFEDE",
                  }}
                />
              </SwiperSlide>
            </Link>
          );
        })}
      </Swiper>
    </Box>
  );
}
