import React from 'react';
import { WiThermometer, WiHumidity, WiStrongWind } from 'react-icons/wi';

const WeatherDisplay = ({ data }) => {
  if (!data) return null;

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{data.name}, {data.sys.country}</h2>
        <div className="temperature">
          {Math.round(data.main.temp)}°C
        </div>
        <p className="condition">{data.weather[0].description}</p>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <WiThermometer className="icon" />
          <div>
            <span>Feels like</span>
            <p>{Math.round(data.main.feels_like)}°C</p>
          </div>
        </div>

        <div className="detail-item">
          <WiHumidity className="icon" />
          <div>
            <span>Humidity</span>
            <p>{data.main.humidity}%</p>
          </div>
        </div>

        <div className="detail-item">
          <WiStrongWind className="icon" />
          <div>
            <span>Wind</span>
            <p>{data.wind.speed} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;