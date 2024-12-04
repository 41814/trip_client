import React, { useState, useEffect } from 'react';
import './HotelCruds.css';
import Footer from '../Footer/Footer';
import { Link, useParams, useNavigate } from 'react-router-dom';

const HotelCruds = () => {

  const navigate = useNavigate();
    const { hotal_id, room_id } = useParams();

    const [room, setRoom] = useState({});
    const [data, setData] = useState({});

    useEffect(() => {
      fetch(`http://localhost:5000/api/room/${room_id}`)
      .then(resp => resp.json())
      .then(room => setRoom(room));
  
    }, room_id);
   
    useEffect(() => {
      console.log('room?.price: ', room?.price);
      setData((prevData) => ({
        ...prevData,
        name: '',
        phone: '',
        cnic: '',
        payment: room?.price || 0,
        startDate: new Date(),
        checkoutTime: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
        hotal: hotal_id,
        room: room_id
      }));
      console.log('data: ', data);
    }, data);

    const handleInputChange = (e) => {
      console.log('handleInputChange: ', e.target);

      setData((prevData) => ({...prevData, [e.target.name]: e.target.value}));
    }

    const handleSubmitForm = (e) => {
      console.log('eventData: ', data);

      e.preventDefault();
      fetch('http://localhost:5000/api/booking', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data),
      })
      .then(resp => resp.json())
      .then(booking => {
        navigate('/bookings');
      })
    }

  return (
<div className='bodyies'>
    <header className="header " >
    <div className="header-background">
        {/* <img src="oo.jpeg" alt="Pakistan Landscape" /> */}
    </div>
    <nav className="navbar">
        <div className="logo">
            <img src="logo12.webp" alt="Trip Planner Logo" />
        </div>
        <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="/Tours">Tours</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/login">SingnIn</a></li>

        </ul>
    </nav>
    <div className="hotel-booking-container">
      <h2>Hotel Room Booking</h2>
      <div>
        <input
          type="text"
          name="name"
          value={data.name}
          placeholder="Your name please"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          value={data.phone}
          placeholder="your phone number please"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="cnic"
          value={data.cnic}
          placeholder="your CNIC please"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="selectedRoom"
          value={`${room?.name} (Price - ${room?.price})`}
          placeholder="Your selected room"
          disabled
        />
        <input
          type="text"
          name="startTime"
          value={data.startDate}
          placeholder="Start date"
          disabled
        />
        <input
          type="date"
          name="checkoutTime"
          value={data.checkoutTime}
          placeholder="your CNIC please"
          onChange={handleInputChange}
        />
        
        <button onClick={handleSubmitForm}>Book Room</button>
      </div>
    </div>
    <Footer/>
    </header>
    </div>
  );
};

export default HotelCruds;
