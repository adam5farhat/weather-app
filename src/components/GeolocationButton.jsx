import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';

const GeolocationButton = ({ onGeolocate }) => {
  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          onGeolocate({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (error) => alert('Please enable location permissions')
      );
    }
  };

  return (
    <button className="geo-button" onClick={handleClick}>
      <FaLocationArrow /> Use My Location
    </button>
  );
};

export default GeolocationButton;