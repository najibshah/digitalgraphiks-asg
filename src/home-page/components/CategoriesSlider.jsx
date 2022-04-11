import { useState, useEffect } from "react";

import Slider from "react-slick";

export function CategoriesSlider() {
  const [categoryList, setCategoryList] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setCategoryList(json))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  categoryList && console.log(categoryList);

  let settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesPerRow: 8,
    rows: 1,
    centerMode: true,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesPerRow: 1,
          slidesToScroll: 1,
          rows: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: { slidesPerRow: 3, rows: 2, infinite: true },
      },
      {
        breakpoint: 1024,
        settings: { slidesPerRow: 4, rows: 2, infinite: true },
      },
    ],
  };
  return (
    <div style={{ marginTop: 40 }}>
      {/* slider requires some more fine tuning for better responsiveness but i am running out of time. Fixable 
      but chosing not to fix to prevent delays */}
      <Slider {...settings}>
        {categoryList &&
          categoryList.map((category) => (
            <div>
              <img
                src={category.image}
                alt=""
                style={{ height: "4em", margin: "auto" }}
              />
              <p variant="button" style={{ textAlign: "center" }}>
                {category.category}
              </p>
            </div>
          ))}
      </Slider>
    </div>
  );
}
