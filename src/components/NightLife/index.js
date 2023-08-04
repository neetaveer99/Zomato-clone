import React from "react";
import "./nightLife.css";
import Collection from "../common/collection";
import Filters from "../common/filters";
import { nightLife } from "../../data/nightLife";
import ExploreSection from "../common/exploreSection";

const collectionList = [
  {
    id: 1,
    title: "11 Best Insta-worthy Places",
    cover:
      "https://b.zmtcdn.com/data/collections/072ec5cf5c95503ab503edcc099f6add_1675252825.jpg",
    places: "11 Places",
  },
  {
    id: 2,
    title: "16 Best Bars & Pubs",
    cover:
      "	https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674839786.jpg",
    places: "16 Places",
  },
  {
    id: 3,
    title: "13 Serene Rooftop Places",
    cover:
      "	https://b.zmtcdn.com/data/collections/66bee1c025922a59b8b1ab69a3a6b187_1675082109.jpg",
    places: "11 Places",
  },
  {
    id: 4,
    title: "7 Pure Veg Places",
    cover:
      "	https://b.zmtcdn.com/data/collections/8ea321c04135aacaac89eddb10ef64bd_1688552904.jpg",
    places: "7 Places",
  },
  {
    id: 5,
    title: "18 Blissful Breakfast Places",
    cover:
      "	https://b.zmtcdn.com/data/collections/43d0572e2bcdcefbc2cc9f6a86be05a8_1683054253.jpg",
    places: "22 Places",
  },
  {
    id: 6,
    title: "8 Great Buffets",
    cover:
      "https://b.zmtcdn.com/data/collections/5fee3cb5e97bbf2cfae4caced1d25686_1674839495.jpg",
    places: "9 Places",
  },
  {
    id: 7,
    title: "Winners of Zomato Restaurant Awards",
    cover:
      "https://b.zmtcdn.com/data/collections/77c1b9704985885cbe2cb094e9983eab_1682080540.jpg",
    places: "11 Places",
  },
  {
    id: 8,
    title: "12 Places for Chai Lovers",
    cover:
      "https://b.zmtcdn.com/data/collections/ff8a739dbb06a879e54e7e4797dc8033_1684638549.png",
    places: "11 Places",
  },
];

const nightFilters = [
  {
    id: 1,
    icon: <i className="fa-solid fa-arrow-down-wide-short absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0",
  },
  {
    id: 3,
    title: "Safe And Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    icon: <i className="fa-solid fa-arrow-down-1-9 absolute-center"></i>,
    title: "Delivery Time",
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const nightList= nightLife;

const NightLife = () => {
  return <div>
    <Collection list={collectionList} />
    <div className="max-width">
      <Filters filterList={nightFilters} />
    </div>
    <ExploreSection list={nightList} collectionName='Nightlife Restaurants in Pune' />
  </div>;
};

export default NightLife;
