import React from "react";
import styles from "./style.module.css";

function Modal({ visible, setVisible, content }) {
  const rootclasses = [styles.myModal];

  if (visible === true) {
    rootclasses.push(styles.active);
  }

  return (
    <div className={rootclasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={styles.myModalContent}>
        {content.list &&
          content.list.map((item, id) => (
            <div key={id} className={styles.containerInfo}>
              <p>{item.dt_txt}</p>
              <p>{content.city && content.city.name}</p>
              <p>{Math.trunc(item.main.temp - 273)}</p>
              <p>{item.weather[0].main}</p>
              <img
                src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                alt=""
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Modal;
