"use client";

import axios from "axios";
import { useState } from "react";
import WeatherResults from "./WeatherResults";
import "./Weather.css";

const Weather = () => {
  const [location, setlocation] = useState("");
  const [weather, setWeather] = useState();
  const [error, setError] = useState(false);

  const getWeather = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setError(false);
    axios
      .get(`/api/GetWeather/${location}`)
      .then((res) => setWeather(res.data.data))
      .catch((err) => {
        setError(true);
      });
  };

  console.log(weather);
  return (
    <div className="flexcontainerweather">
      <div>
        <form
          onSubmit={(e) => {
            getWeather(e);
          }}
          className="formcontainer"
        >
          <div className="inputBtn">
            <div className="inputWrapper">
              <input
                placeholder="Weather"
                onChange={(e) => {
                  setlocation(e.target.value);
                }}
                className="input"
              ></input>
              <button type="submit" className="submitbutton">
                Get Weather
              </button>
            </div>
          </div>
        </form>
        {error && <div>Please put in proper location</div>}
      </div>
      {weather && <WeatherResults weather={weather} />}
    </div>
  );
};

export default Weather;
