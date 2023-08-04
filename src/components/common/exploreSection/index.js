import React from "react";
import "./exploreSection.css";
// import { restaurants } from '../../../data/restaurants';
import ExploreCard from "./exploreCard";
// import "./exploreCard.css";

const ExploreSection = ({ list, collectionName }) => {
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">


        {list.map((item) => {
          const coverImg = item?.info?.image?.url;
          const name = item?.info?.name ?? "";
          const deliveryTime = item?.order?.deliveryTime;
          const rating = item?.info?.rating?.rating_text;
          const approxPrice = item?.info?.cfo?.text;
          const offers = item?.bulkOffers ?? [];
          const cuisine = item?.info?.cuisine
            ?.map((item) => item.name)
            .slice(0, 3);
          const bottomContainers = item?.bottomContainers;
          const goldOff = item?.gold?.text;
          const proOff = offers.length > 1 ? offers[0].text : null;
          const discount =
            offers.length > 1
              ? offers[1].text
              : offers.length === 1
              ? offers[0].text
              : null;

          //   console.log(proOff);
          //   console.log(goldOff);

          // return <ExploreCard restaurant={restaurant} />;
          //    return console.log(restaurant?.info?.name ?? "")
          // return <ExploreCard restaurant={item} />;
          return (
            <div className="explore-card cur-po">
              <div className="explore-card-cover">
                <img src={coverImg} alt={name} className="explore-card-image" />
                <div className="delivery-time">{deliveryTime}</div>
                {proOff && <div className="pro-off">{proOff}</div>}
                {goldOff && (
                  <div className="gold-off absolute-center">{goldOff}</div>
                )}
                {discount && (
                  <div className="discount absolute-center">{discount}</div>
                )}
              </div>
              <div className="res-row">
                <div className="res-name">{name}</div>
                {rating && (
                  <div className="res-rating absolute-center">
                    {rating}{" "}
                    <i className="fa-solid fa-star absolute-center"></i>
                  </div>
                )}
              </div>

              <div className="res-row">
                {cuisine.length && (
                  <div className="res-cuisine">
                    {cuisine.map((item, i) => {
                      return (
                        <span className="res-cuisine-tag">
                          {item}
                          {i !== cuisine.length - 1 && ","}
                        </span>
                      );
                    })}
                  </div>
                )}
                {approxPrice && <div className="res-price">{approxPrice}</div>}
              </div>
              {bottomContainers.length > 0 && (
                <div>
                  <div className="card-separator"></div>
                  <div className="explore-bottom">
                    <img
                      src={bottomContainers[0]?.image?.url}
                      style={{ height: "18px" }}
                      alt={bottomContainers[0]?.text}
                    />
                    <div className="res-bottom-text">
                      {bottomContainers[0]?.text}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        ;
     
     
     
     
     
      </div>
    </div>
  );
};

export default ExploreSection;
