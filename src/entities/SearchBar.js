import React, { useState ,useEffect} from "react";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";

const App = () => {
  const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [selectPersonDropdownOpen, setSelectPersonDropdownOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(2); 
 const [hotels,setHotels] = useState([]);
 const [selectedHotel, setSelectedHotel] = useState("");
  const handlePersonSelect = (number) => {
    setSelectedPerson(number);
    setSelectPersonDropdownOpen(false); 
  };
  useEffect(() => {
    if (searchDropdownOpen) {
      fetch("https://www.gocomet.com/api/assignment/hotels-name")
        .then((response) => response.json())
        .then((data) => setHotels(data))
        .catch((error) => console.error("Error fetching hotels:", error));
    }
  }, [searchDropdownOpen]);

  const handleHotelSelect = (hotel) => {
    setSelectedHotel(`${hotel.name}, ${hotel.city}`);
    setSearchDropdownOpen(false); 
  };
  return (
    <div className="container">
      {/* Search Bar */}
      <div className="search-bar">
        <div
          className="search-input"
          onClick={() => setSearchDropdownOpen(!searchDropdownOpen)}
        >
          <FontAwesomeIcon icon={faLocationDot} />

          <input
            type="text"
            placeholder="Type city, place, or hotel name"
            value={selectedHotel}
            readOnly
          />
        </div>
        {searchDropdownOpen && (
          <div className="dropdown">
            {hotels.map((hotel) => (
              <p key={hotel.id} onClick={() => handleHotelSelect(hotel)}>{hotel.name}, {hotel.city}</p>
            ))}
          </div>
        )}
      </div>

      {/* Check-In / Check-Out */}
      <div className="date-picker">
        <div className="date-input">
          <FaCalendarAlt className="icon" />
          <div className="date-range">
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              placeholderText="Check-in"
              dateFormat="MM/dd/yyyy"
              className="date-picker-input"
            />
            <span> | </span>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              placeholderText="Check-out"
              dateFormat="MM/dd/yyyy"
              className="date-picker-input"
            />
          </div>
        </div>
      </div>

      {/* Select Person */}
      <div className="select-person">
        <div
          className="select-input"
          onClick={() => setSelectPersonDropdownOpen(!selectPersonDropdownOpen)}
        >
          <FaUser className="icon" />
          <span>{selectedPerson}</span>
        </div>
        {selectPersonDropdownOpen && (
          <div className="person-dropdown">
            {[1, 2, 3, 4, 5, 6].map((number) => (
              <p key={number} onClick={() => handlePersonSelect(number)}>
                {number} {number === 1 ? "Person" : "People"}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Search Button */}
      <button className="search-button">Search</button>
    </div>
  );
};

export default App;
