import React from "react";
import "./delivery.css";
import { restaurants } from "../../data/restaurants";
import Filters from "../common/filters";
import "@fortawesome/fontawesome-free/css/all.css";
import DeliveryCollection from "./deliveryCollections";
import TopBrands from "./topBrands";
import ExploreSection from "../common/exploreSection";

const deliveryFilters = [
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

const restaurantList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryCollection />
      <TopBrands />
      <ExploreSection
        list={restaurantList}
        collectionName="Delivery Restaurants in Pune"
      />
      {/* {restaurants.map((item)=>{
        return console.log(item?.info?.name ?? "")
      })}; */}
    </div>
  );
};

export default Delivery;
