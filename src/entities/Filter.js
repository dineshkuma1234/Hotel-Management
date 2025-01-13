import React from 'react';
import './index.css';

const Filter = () => {
  const handleClearAll = () => {
    console.log('Clear all filters');
  };

  return (
    <div className="filter-section">
      <div className="filter-header">
        <h4>Filters</h4>
        <button className="clear-button" onClick={handleClearAll}>
          CLEAR ALL
        </button>
      </div>
      <div className="filter-group">
        <h5>PRICE RANGE</h5>
        <div>
          <label>
            <input type="checkbox" /> Up to ₹1000
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> ₹1001 to ₹2000
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> ₹2001 to ₹5000
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Above ₹5000
          </label>
        </div>
      </div>
      <div className="filter-group">
        <h5>RATING</h5>
        <div>
          <label>
            <input type="checkbox" /> 0 - 1 Star
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> 1 - 2 Star
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> 2 - 3 Star
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> 3 - 4 Star
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> 4 - 5 Star
          </label>
        </div>
      </div>
      <div className="filter-group">
        <h5>CITY</h5>
        <div>
          <label>
            <input type="checkbox" /> Mumbai
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Kolkata
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Bangalore
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Jaipur
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
