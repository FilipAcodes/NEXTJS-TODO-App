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
    imageSrc = `https://cdn-icons-png.flaticon.com/512/252/252035.png`;
  } else if (weather.weather[0].description.includes("snow")) {
    imageSrc = `https://cdn.icon-icons.com/icons2/2050/PNG/512/snow_icon_124403.png`;
  } else if (weather.weather[0].description.includes("sunny")) {
    imageSrc = `https://cdn.icon-icons.com/icons2/1370/PNG/512/if-weather-3-2682848_90785.png`;
  } else if (weather.weather[0].description.includes("thunder")) {
    imageSrc = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Oq1tfXv6vSEOPmCi5Et1R8BABDbOsu_0SPxUdWg&s`;
  } else if (weather.weather[0].description.includes("rain")) {
    imageSrc = `https://t4.ftcdn.net/jpg/03/38/74/43/360_F_338744374_c8v4RyKnToRWqPA4SalFf8ktaMQA48QW.jpg`;
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
