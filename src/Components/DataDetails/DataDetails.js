import React, { useState, useEffect } from 'react';
import './DataDetails.css';
import HotelCard from '../HotelCards/HotelCards';
import Footer from '../Footer/Footer';
import roomData from '../rooms.json';
import { useParams } from 'react-router-dom'; // Import Link from react-router-dom


const DataDetails = () => {
  const { id } = useParams();
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const hotalRooms = roomData.filter((room) => room.hotal_id === id);
    setRooms(hotalRooms);
  }, [id]);

  // const [selectedHotel, setSelectedHotel] = useState(hotelData[0]);
  // const [selectedImage, setSelectedImage] = useState(selectedHotel.images[0]);

  return (
    <>
      <header className="header3">
     
        <nav className="navbar">
          <div className="logo">
            <img src="logo12.webp" alt="Trip Planner Logo" />
          </div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="/Tours">Tours</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/login">SignIn</a></li>
          </ul>
        </nav>
        
      <div className="trip-planner-text">
        <h1><span>Top Hotels</span></h1>
        <p>Welcome Here!</p>
      </div>

      </header>

      {/* <div className="hotel-selector">
        {hotelData.map((hotel) => (
          <button
            key={hotel.id}
            className={`hotel-btn ${hotel.id === selectedHotel.id ? 'active' : ''}`}
            onClick={() => {
              setSelectedHotel(hotel);
              setSelectedImage(hotel.images[0]);
            }}
          >
            {hotel.name}
          </button>
        ))}
      </div> */}

      <div className="data-details">
        <HotelCard />
      </div>

      <Footer />
    </>
  );
};

export default DataDetails;
