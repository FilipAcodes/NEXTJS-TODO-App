"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Weather = () => {
  const [location, setlocation] = useState("");
  const [weather, setWeather] = useState();

  // useEffect(() => {
  //   axios
  //     .get(`/api/GetWeather/${location}`)
  //     .then((res) => setWeather(res.data.data));
  // }, []);
  console.log(weather);
  const getWeather = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    axios
      .get(`/api/GetWeather/${location}`)
      .then((res) => setWeather(res.data.data));
  };
  return (
    <form
      onSubmit={(e) => {
        getWeather(e);
      }}
    >
      <input
        placeholder="Weather"
        onChange={(e) => {
          setlocation(e.target.value);
        }}
      ></input>
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Weather;
