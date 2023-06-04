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
  return (
    <div>
      <div className="weathercontainer">
        <h1 className="capitalize">{weather.weather[0].description}</h1>
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
