"use client";

import "./WeatherResults.css";

interface WeatherData {
  weather: {
    weather: {
      description: string;
    }[];
    main: {
      temp: number;
      temp_max: number;
      temp_min: number;
    };
  };
}
const WeatherResults: React.FC<WeatherData> = ({ weather }) => {
  let imageSrc = null;

  if (weather.weather[0].description.includes("cloud")) {
    imageSrc = `https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png`;
  } else if (weather.weather[0].description.includes("snow")) {
    imageSrc = `https://cdn.icon-icons.com/icons2/2050/PNG/512/snow_icon_124403.png`;
  } else if (weather.weather[0].description.includes("sunny")) {
    imageSrc = `https://cdn.icon-icons.com/icons2/1370/PNG/512/if-weather-3-2682848_90785.png`;
  }
  return (
    <div>
      <div className="weathercontainer">
        <h1 className="capitalize">{weather.weather[0].description}</h1>
        {imageSrc && <img src={imageSrc} alt="currentweather" />}
        <h2 className="temperature">{weather.main.temp}°C</h2>
        <div className="minmax">
          <h2 className="h2min">Min: {weather.main.temp_min}°C</h2>
          <span></span>
          <h2 className="h2max">Max: {weather.main.temp_max}°C</h2>
        </div>
      </div>
    </div>
  );
};

export default WeatherResults;
