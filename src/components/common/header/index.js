import React from "react";
import "./header.css";
import { ReactComponent as Caret } from './../../../icons/uicons-regular-straight/svg/fi-rs-caret-down.svg';
import '@fortawesome/fontawesome-free/css/all.css';




const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomatologo"
        className="header-logo"
      />

      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
            <i className="fa-sharp fa-solid fa-location-dot location-icon absolute-center"></i>
            <div>Pune</div>
              </div>
              <Caret className= "location-icon absolute-center" />
          </div>
          <div className= "location-search-seperator"></div>
          <div className="header-searchBar">
            <i className="fa-solid fa-magnifying-glass location-icon absolute-center search-icon"></i>
            <input type="text" placeholder="Search for resturant, cuisine or a dish"
            className="search-input" />
          </div>
        </div>
        <div className="profile-wrapper">
          <img src="https://b.zmtcdn.com/data/user_profile_pictures/71d/a12d15427ac311c91648b1709542371d.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" 
          alt="profileimg" className="header-profile-imgage" />
          <span className="header-username">Neeta</span>
            <i class="fa-solid fa-angle-down  absolute-center profile-option-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
