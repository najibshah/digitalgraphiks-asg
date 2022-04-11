import React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Autoplay, Navigation } from "swiper";

import { recommendationSliderImages } from "../assets/recommendationSliderImages/recommendations";
import expressBadge from "../assets/expressBadge.svg";

export function RecommendationSlider() {
  return (
    <Box sx={{ p: 2 }}>
      <h2>Recommended for you</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 25,
            // grid: { rows: 1 },
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 25,
            // grid: { rows: 1 },
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {recommendationSliderImages.map((sliderData, index) => {
          return (
            <Link href={sliderData.link} key={index}>
              <SwiperSlide>
                <Box sx={{ textAlign: "left" }}>
                  <img
                    src={sliderData.image}
                    alt=""
                    style={{
                      width: "100%",
                    }}
                  />
                  <br />
                  <p
                    style={{
                      fontSize: "13px",
                      marginBottom: -10,
                    }}
                  >
                    KIKO MILANO Unlimited
                  </p>
                  <p style={{ fontSize: "13px", marginBottom: -5 }}>
                    Double Touch Lipstick
                  </p>
                  <p style={{ fontSize: "18px", marginBottom: -5 }}>
                    AED <b> 55.00</b>
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      marginBottom: -5,
                    }}
                  >
                    <span
                      style={{
                        textDecoration: "line-through",
                      }}
                    >
                      {" "}
                      AED <b> 75.00</b>
                    </span>
                    <span
                      style={{
                        color: "green",
                        marginLeft: 2,
                      }}
                    >
                      <b> 33% off</b>
                    </span>
                  </p>
                  <p style={{ fontSize: "11px" }}>
                    Arrives <b> Wed, Apr 13</b>{" "}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <img src={expressBadge} alt="" style={{ width: "80%" }} />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <StarIcon
                        style={{ fontSize: "18px", color: "#F5A522" }}
                      />
                      <p
                        style={{
                          fontSize: "13px",
                          margin: 0,
                          color: "#F5A522",
                        }}
                      >
                        4.7
                      </p>
                      <p style={{ fontSize: "13px", margin: 0, color: "gray" }}>
                        (707)
                      </p>
                    </div>
                  </div>
                </Box>
              </SwiperSlide>
            </Link>
          );
        })}
      </Swiper>
    </Box>
  );
}

// Unlimited Double Touch Lipstick 103 Natural Rose
// KIKO MILANO Unlimited
// Double Touch Lipstick 1…
// AED 55.00
// Arrives Wed, Apr 13
// noon-express
// 4.8
// 178
