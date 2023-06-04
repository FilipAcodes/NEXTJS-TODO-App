require("dotenv").config();
const axios = require("axios");

const { OPEN_WEATHER_API } = process.env;

const getWeather = async (req, res) => {
  const { coordinateId } = req.query;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${coordinateId}&appid=${OPEN_WEATHER_API}&units=metric`
    );

    res.status(200).json({ data: response.data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch weather data" });
  }
};

module.exports = getWeather;
