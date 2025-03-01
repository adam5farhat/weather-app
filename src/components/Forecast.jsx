import React from 'react';
import { format } from 'date-fns';

const Forecast = ({ items }) => {
  return (
    <div className="forecast-container">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {items.map((item) => (
          <div key={item.dt} className="forecast-card">
            <p className="forecast-date">
              {format(new Date(item.dt * 1000), 'EEE')}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
            />
            <div className="temp-range">
              <span className="max-temp">{Math.round(item.main.temp_max)}°</span>
              <span className="min-temp">{Math.round(item.main.temp_min)}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;