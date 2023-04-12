import React from "react";
import { Routes, Route } from "react-router-dom";

import MyLocationWeatherPage from "./pages/MyLocationWeatherPage/myLocationWeatherPage";
import Layout from "./pages/Layout";
import PageWeather from "./pages/PageWeather/pageWeather";
import PageLastWeather from "./pages/PageInfoLastWeather/pageInfoLastWeather";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MyLocationWeatherPage />}></Route>
        <Route path="Weather" element={<PageWeather />}></Route>
        <Route path="PageLastWeather" element={<PageLastWeather />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
