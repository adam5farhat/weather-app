import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import Forecast from './components/Forecast';
import GeolocationButton from './components/GeolocationButton';
import Loader from './components/Loader';
import { getWeatherData } from './services/weatherService';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (location, isCoords = false) => {
    setLoading(true);
    setError('');
    try {
      const data = await getWeatherData(location, isCoords);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Weather App</h1>
        <div className="search-container">
          <SearchBar onSearch={(city) => handleSearch(city)} />
          <GeolocationButton onGeolocate={(coords) => handleSearch(coords, true)} />
        </div>
        {error && <p className="error">{error}</p>}
      </header>

      <main>
        {loading ? (
          <Loader />
        ) : (
          weatherData && (
            <>
              <WeatherDisplay data={weatherData.current} />
              <Forecast items={weatherData.forecast} />
            </>
          )
        )}
      </main>
    </div>
  );
}

export default App;