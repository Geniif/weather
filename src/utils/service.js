import { apiKey } from "./constants";

export const WeatherCall = async () => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((result) => result);
  return res;
};

export const WeatherCallByCity = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((result) => result);
  return res;
};

export const WeatherCallByLocation = async ({ lat, lon }) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((result) => result);
  return res;
};

export const WeatherCallBySevenDay = async (town) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${town}&cnt=7&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((result) => result);
  return res;
};
