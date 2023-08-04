import React from "react";
import "./exploreCard.css";

const ExploreCard = ({ restuarant }) => {

    
  const name = restuarant?.info?.name ?? "";
  const coverImg = restuarant?.info?.image?.url;
  const deliveryTime = restuarant?.order?.deliveryTime;
  const rating = restuarant?.info?.rating?.rating_text;
  const approxPrice = restuarant?.info?.cfo?.text;
  const offers = restuarant?.bulkOffers ?? [];
  const cuisine = restuarant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);
  const bottomContainers = restuarant?.bottomContainers;
  const goldOff = restuarant?.gold?.text;
  const proOff = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null;

    //   console.log(coverImg);
    //   console.log(deliveryTime);



  return <div className="explore-card cur-po">
    <div className="explore-card-cover" >{restuarant?.info?.name ?? ""}hello
        <img src={coverImg} alt={name} className="explore-card-image" />
    </div>
  </div>
};

export default ExploreCard;
