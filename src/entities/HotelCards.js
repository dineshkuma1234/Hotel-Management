import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./HotelList.css";
import Filter from "./Filter";

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 6; // Number of hotels per page

  // Fetch hotels data
  const fetchHotels = async (page) => {
    setLoading(true);
    try {
      // Sending 'page' and 'size' as params to the backend API
      const response = await axios.get(
        `https://www.gocomet.com/api/assignment/hotels`,
        {
          params: { page: page + 1, size: pageSize }, // API expects 1-based index
        }
      );
      if (response.data.success) {
        setHotels(response.data.hotels); // Set hotels for the current page
        setTotalPages(Math.ceil(response.data.totalHotels / pageSize)); // Calculate total pages based on totalHotels from response
      }
    } catch (error) {
      console.error("Error fetching hotels:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle page click
  const handlePageClick = (data) => {
    const selectedPage = data.selected; // Get the selected page index (0-based)
    setCurrentPage(selectedPage); // Update the current page state
    fetchHotels(selectedPage); // Fetch data for the selected page
  };

  // Initial data fetch on first render and page change
  useEffect(() => {
    fetchHotels(currentPage); // Fetch hotels for the current page on mount and whenever page changes
  }, [currentPage]);

  return (
    <div className="hotel-list-container">
        <Filter />
      {loading ? (
        <p>Loading hotels...</p>
      ) : (
        <div className="hotel-grid">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="hotel-card">
              <img
                src={hotel.image_url}
                alt={hotel.name}
                className="hotel-image"
              />
              <div className="hotel-info">
                <h3>{hotel.name}</h3>
                <p>City: {hotel.city}</p>
                <p>⭐ Rating: {hotel.rating}</p>
                {/* <h4>Rooms:</h4> */}
                {/* <ul>
                  {hotel.rooms.map((room) => (
                    <li key={room.id}>
                      {room.name}: ₹{room.price}
                    </li>
                  ))}
                </ul> */}
              </div>
              <button className="view-button">View ➡</button>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <ReactPaginate
        pageCount={totalPages} // Total pages to display
        onPageChange={handlePageClick} // Handle page change
        containerClassName="pagination"
        activeClassName="active"
        previousLabel={""}
        nextLabel={""}
        pageRangeDisplayed={3} // Show 3 page numbers
        marginPagesDisplayed={1} // Show 1 page on the edges
      />
    </div>
  );
};

export default HotelList;
