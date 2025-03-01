import React from 'react';
import { ImSpinner8 } from 'react-icons/im';

const Loader = () => {
  return (
    <div className="loader">
      <ImSpinner8 className="spinner" />
      <p>Loading weather data...</p>
    </div>
  );
};

export default Loader;