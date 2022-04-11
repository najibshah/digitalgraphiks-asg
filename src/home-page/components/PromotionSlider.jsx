import Slider from "react-slick";

import Link from "@mui/material/Link";
import sliderBanner1 from "../assets/sliderBanner1.png";
import sliderBanner2 from "../assets/sliderBanner2.png";
import sliderBanner3 from "../assets/sliderBanner3.jpeg";
import sliderBanner4 from "../assets/sliderBanner4.png";
import sliderBanner5 from "../assets/sliderBanner5.png";

const sliderImages = [
  { image: sliderBanner1, link: "/" },
  { image: sliderBanner2, link: "/" },
  { image: sliderBanner3, link: "/" },
  { image: sliderBanner4, link: "/" },
  { image: sliderBanner5, link: "/" },
];

export function PromotionSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {sliderImages.map((sliderData, index) => {
          return (
            <Link href={sliderData.link} key={index}>
              <div>
                <img src={sliderData.image} alt="" style={{ width: "100%" }} />
              </div>{" "}
            </Link>
          );
        })}
      </Slider>
    </div>
  );
}
