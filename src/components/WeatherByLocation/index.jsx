import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import { WeatherCallByLocation } from "../../utils/service";

function WeatherByLocation() {
  const [weathers, setWeathers] = useState({});
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  //запрашиваем локацию
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, []);

  //Запрос на сервер с конкретной локацией
  const getWeather = async () => {
    setWeathers(await WeatherCallByLocation({ lat, lon }));
  };

  useEffect(() => {
    getWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lon]);

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.nameCity}>{weathers && weathers.name} </p>
        <p className={styles.temperature}>
          {weathers.main && Math.trunc(weathers.main.temp - 273)}&deg;
        </p>
        <p className={styles.weather}>
          {weathers.weather && weathers.weather[0].main}
        </p>
      </div>
      <div className={styles.containerInformation}>
        <p className={styles.informationTag}>
          Ветер
          <br />
          {weathers.wind && weathers.wind.speed} м/<sub>С</sub>
        </p>
        <p className={styles.informationTag}>
          Давление
          <br />
          {weathers.main && weathers.main.pressure} гПа
        </p>
        <p className={styles.informationTag}>
          Влажность
          <br />
          {weathers.main && weathers.main.humidity} %
        </p>
      </div>
    </div>
  );
}

export default WeatherByLocation;
