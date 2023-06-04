"use client";

import axios from "axios";
import { useState } from "react";
import WeatherResults from "./WeatherResults";
import "./Weather.css";

interface WeatherData {
  weather: {
    description: string;
  }[];
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
}

const Weather = () => {
  const [location, setlocation] = useState("");
  const [weather, setWeather] = useState<WeatherData | undefined>();
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
    <>
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
    </>
  );
};

export default Weather;
