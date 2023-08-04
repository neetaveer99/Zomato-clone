import React from "react";
import "./topBrands.css";
import NextArrow from "../../common/corousel/nextArrow";
import PrevArrow from "../../common/corousel/prevArrow";
import Slider from "react-slick";

const topBrandsList = [
  {
    id: 1,
    time: "33 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/775f928725d1a9dd80422632de22c224_1611377090.png?output-format=webp",
  },
  {
    id: 1,
    time: "25 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252811.png?output-format=webp",
  },
  {
    id: 1,
    time: "47 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188299.png?output-format=webp",
  },
  {
    id: 1,
    time: "27 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/9da52e2b69f19bb603227a750e788d33_1613215152.png?output-format=webp",
  },
  {
    id: 1,
    time: "32 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/7c048d2ec413aaca136a33c3e9628c0e_1629952759.png?output-format=webp",
  },
  {
    id: 1,
    time: "32 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/82b5b6321860545a160e790d99ec6da3_1629438503.png?output-format=webp",
  },
  {
    id: 1,
    time: "33 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp",
  },
  {
    id: 1,
    time: "40 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/5a27a3f43344ecdb49c575d0284ebc40_1629438578.png?output-format=webp",
  },
  {
    id: 1,
    time: "34 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471832.png?output-format=webp",
  },
  {
    id: 1,
    time: "35 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/11f0a050068db77b5b959dd97cc11965_1644900886.png?output-format=webp",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top Brands for you</div>
      <Slider {...settings}>
      {topBrandsList.map((brand) => {
        return (
          <div className="top-brands-cover">
            <img
              src={brand.cover}
              alt={brand.time}
              className="top-brands-image"
            />
          </div>
        );
      })}
      </Slider>
    </div>
  );
};

export default TopBrands;
