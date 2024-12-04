import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import roomsData from "../rooms.json";
import "./HotelBook.css";


function HotelBook() {
  
  const { id } = useParams();
  const [rooms, setRooms] = useState([]);

useEffect(() => {
       
        fetch(`http://localhost:5000/api/hotal/${id}/rooms`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(rooms => {
              setRooms(rooms); // Corrected to use setHotals here
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
        
        // setHotals(cityHotals); // This will update the state with the filtered hotals
    }, [id]);
console.log(rooms,"")
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="https://www.tripplannerpk.com/assets/img/tripplanerpk-log.webp" alt="Trip Planner Logo" />
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/#destinations">Destinations</Link></li>
          <li><Link to="/Tours">Tours</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/login">Sign In</Link></li>
        </ul>
      </nav>

      <main className="app-container">
        <div className="hotel-list1">
          {rooms.length > 0 ? (
            rooms.map((room) => (
              <div className="hotel-card1" key={room.id}>
                <img src={`../../${room.images[0]}`} />
                <div className="hotel-info1">
                  <h3>{room?.name}</h3>
                  <p>Dimensions: {room?.size}</p>
                  <p>Beds: {room?.beds}, {room.bath ? 'Bath Available' : 'No Bath'}</p>
                  <p>Free Cancellation Fee: {room?.cancelation_fee}</p>
                  <p><strong>${room?.price}</strong> (Includes taxes and fees)</p>
                  <Link to={`/hotal/${id}/room/${room._id}/book`}>
                    <button className="book-button">See Availability</button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No rooms available for this hotel.</p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default HotelBook;
