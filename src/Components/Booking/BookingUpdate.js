import React, { useState, useEffect } from 'react';
import './BookingUpdate.css';
import Footer from '../Footer/Footer';
import { Link, useParams, useNavigate } from 'react-router-dom';

const BookingUpdate = () => {

  const navigate = useNavigate();
    const { id } = useParams();

    const [data, setData] = useState({});
    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState({});

    useEffect(() => {
      fetch(`http://localhost:5000/api/booking/${id}`)
      .then(resp => resp.json())
      .then(booking => {
        console.log('booking by id: ', booking);
        setData(booking);
        
        fetch(`http://localhost:5000/api/hotal/${booking.hotal}/rooms`)
        .then(resp => resp.json())
        .then(rooms => {
            console.log('rooms: ', rooms);
            setRooms(rooms);
            const room = rooms.find((room) => String(room._id) === String(booking.room));
            console.log('room: ', room);
            setSelectedRoom(room);
        });
      });
  
    }, id);

    const handleInputChange = (e) => {
      console.log('handleInputChange: ', e.target);

      setData((prevData) => ({...prevData, [e.target.name]: e.target.value}));
    }

    const handleDropdownChange = (e) => {
      console.log('handleDropdownChange: ', e.target.value);

      setData((prevData) => ({...prevData, room: e.target.value}));
      const room = rooms.find((room) => String(room._id) === String(e.target.value));
      console.log('room: ', room);
      setSelectedRoom(room);
    };

    
    const handleUpdate = (e) => {
      console.log('eventData: ', data);

      fetch(`http://localhost:5000/api/booking/${id}`, {
        method: 'PATCH',
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
            <select
                id="dropdown"
                name="room"
                onChange={handleDropdownChange}
                value={selectedRoom._id} // Setting the selected value directly
            >
                <option value="">Select...</option>
                {rooms.length > 0 ? (
                    rooms.map((room) => (
                        <option key={room._id} value={room._id}>
                            {room.name}
                        </option>
                    ))
                ) : (
                    <option disabled>No rooms available</option>
                )}
            </select>
            <input
            type="text"
            name="startTime"
            value={data.startDate}
            placeholder="Start date"
            onChange={handleInputChange}
            />
            <input
            type="text"
            name="checkoutTime"
            value={data.checkoutTime}
            placeholder="your checkout time"
            onChange={handleInputChange}
            />
            
            <button onClick={() => handleUpdate(data._id)} className="update-btn">Update Booking</button>
        </div>
        </div>
        <Footer/>
        </header>
    </div>
  );
};

export default BookingUpdate;
