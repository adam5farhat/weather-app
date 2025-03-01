import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherData = async (location, isCoords = false) => {
  try {
    const params = isCoords 
      ? `lat=${location.lat}&lon=${location.lon}`
      : `q=${encodeURIComponent(location)}`;

    const [current, forecast] = await Promise.all([
      axios.get(`${BASE_URL}/weather?${params}&appid=${API_KEY}&units=metric`),
      axios.get(`${BASE_URL}/forecast?${params}&appid=${API_KEY}&units=metric`)
    ]);

    return {
      current: current.data,
      forecast: forecast.data.list.filter((_, idx) => idx % 8 === 0).slice(0, 5)
    };
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Location not found');
  }
};