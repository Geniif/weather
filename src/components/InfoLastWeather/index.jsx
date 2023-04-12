import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Modal from "../Modal";
import { WeatherCallBySevenDay } from "../../utils/service";

function InfoLastWeater() {
  const [city, setCity] = useState([]);
  const [modal, setModal] = useState(false);
  const [town, setTown] = useState("");

  const getWeather = async (town) => {
    setTown(await WeatherCallBySevenDay(town));
  };

  // получаем данные из localStorage и записываем их в city(так же проверяем наличие данных в localStorage)
  const Load = () => {
    // Получаем:
    if (localStorage.getItem("Weather") == null) {
      console.log("данных нет ");
    } else {
      let info = JSON.parse(localStorage.getItem("Weather"));

      info.forEach((obj) => {
        city.push(obj);
      });
      setCity([...city]);
    }
  };

  useEffect(() => {
    Load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //вывод через map и создание карточек погоды
  let cardWeather = city
    .map((item) => {
      return (
        <div key={item.id}>
          <div
            className={styles.containerWeather}
            onClick={() => {
              getWeather(item.name);
              setModal(true);
            }}
          >
            <p className={styles.informationCity}>{item.name}</p>
            <p className={styles.informationTemperature}>
              {Math.trunc(item.main.temp - 273)}&deg;
            </p>
            <p className={styles.informationWeather}>{item.weather[0].main}</p>
            <br />

            <img
              className={styles.img}
              src={`http://openweathermap.org/img/w/${
                item.weather && item.weather[0].icon
              }.png`}
              alt=""
            ></img>
          </div>
        </div>
      );
    })
    .reverse();

  function DataOutput() {
    if (localStorage.getItem("Weather") !== null) {
      return cardWeather;
    } else {
      return (
        <div>
          <h1>Данных нет!!!</h1>
        </div>
      );
    }
  }

  return (
    <div className={styles.container}>
      {DataOutput()}
      <Modal visible={modal} setVisible={setModal} content={town} />
    </div>
  );
}

export default InfoLastWeater;
