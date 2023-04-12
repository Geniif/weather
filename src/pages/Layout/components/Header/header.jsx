import React from "react";
import header from "./header.module.css";
import { Link } from "react-router-dom";

// import HomePage from "./pages/HomePage/homePage";

function Header() {
  return (
    <header className={header.container}>
      <li className={header.navigation}>
        <Link className={header.colorText} to="/">
          LocationWeather
        </Link>
      </li>
      <li className={header.navigation}>
        <Link className={header.colorText} to="Weather">
          Weather
        </Link>
      </li>
      <li className={header.navigation}>
        <Link className={header.colorText} to="PageLastWeather">
          PageLastWeather
        </Link>
      </li>
    </header>
  );
}

export default Header;
