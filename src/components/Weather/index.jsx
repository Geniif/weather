import React, { useState, useEffect } from "react";
import { WeatherCall, WeatherCallByCity } from "../../utils/service";
import styles from "./style.module.css";

function Weather() {
  const [weathers, setWeathers] = useState({});
  const [text, setText] = useState("");
  const [myStorage, setMyStorage] = useState([]);

  //обращение к API погоды(defaulf city)
  const getWeather = async () => {
    setWeathers(await WeatherCall());
  };

  //Запрос на сервер с конкретным городом
  const handleClick = async () => {
    setWeathers(await WeatherCallByCity(text));
    // SaveInformation();
  };

  // загружаю при рендере данные из localStorage либо показываю что данных нет??
  function LoadStorage() {
    if (localStorage.getItem("Weather") == null) {
      console.log("введите данные ");
    } else {
      let info = JSON.parse(localStorage.getItem("Weather"));
      setMyStorage(info);
    }
  }

  // проверяю массив myStorage
  // const Storage = () => {
  //   console.log(myStorage);
  // };

  // обновляем myStorage
  const SaveMyStorage = () => {
    setMyStorage(myStorage);
  };

  //записываем в конец массива обьект, вызываем метод обновления myStorage, записываем myStorage в localStorage
  const SaveInformation = async () => {
    myStorage.push(weathers);
    SaveMyStorage();

    localStorage.setItem("Weather", JSON.stringify(myStorage));
  };

  // useEffect(() => {
  //   getWeather();
  // }, []);

  useEffect(() => {
    // console.log(text);
  }, [text]);

  useEffect(() => {
    LoadStorage();
  }, []);

  useEffect(() => {
    //загружаю информацио о городе из localStorage, если пусто то дефолтный город
    function LoadlastWeather() {
      if (localStorage.getItem("Weather") === null) {
        getWeather();
      } else {
        let info = JSON.parse(localStorage.getItem("Weather"));
        setWeathers(info[info.length - 1]);
      }
    }
    LoadlastWeather();
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <input
          className={styles.inputLine}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={styles.buttonSend} onClick={handleClick}>
          Send
        </button>
        <button className={styles.buttonSend} onClick={SaveInformation}>
          Save
        </button>
        {/* <button className={styles.buttonSend} onClick={Storage}>
          Storage
        </button> */}

        <p className={styles.nameCity}>{weathers && weathers.name}</p>
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

      <div></div>
    </div>
  );
}

export default Weather;
