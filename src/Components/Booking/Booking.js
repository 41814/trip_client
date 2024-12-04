import React, { useEffect, useState } from 'react';
import './Booking.css';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);

    // Fetch bookings on component mount
    useEffect(() => {
        fetch('http://localhost:5000/api/bookings')
            .then((response) => response.json())
            .then((data) => setBookings(data))
            .catch((error) => console.error('Error fetching bookings:', error));
    }, []);

    // Redirect function
    const handleRedirect = () => {
        navigate('/destination');
    };

    // Delete function
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/booking/${id}`, {
                method: 'DELETE',
            });
            console.log('response: ', response);

            if (response.ok) {
                console.log('Booking deleted successfully');
                setBookings((prevBookings) => prevBookings.filter((booking) => String(booking._id) !== String(id)));
            } else {
                console.error('Failed to delete booking');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

 
    
    const handleUpdate = async (id) => {
        navigate(`/booking/${id}`);
    };
    return (
        <div className="booking-list-container">
            <h1>Your Bookings</h1>
            <div className="booking-list">
                {bookings.length === 0 ? (
                    <p>No bookings found.</p>
                ) : (
                    bookings.map((booking) => (
                        <div className="booking-card" key={booking._id}>
                            <p><strong>Custumer Name:</strong> {booking.phone}</p>
                            <p><strong>Custumer Phone:</strong> {booking.phone}</p>
                            <p><strong>Custumer CNIC:</strong> {booking.cnic}</p>
                            <p><strong>Room #:</strong> {booking.room?.name}</p>
                            <p><strong>Charges:</strong> {booking.payment}</p>
                            <p><strong>Check-in:</strong> {new Date(booking.startDate).toLocaleDateString()}</p>
                            <p><strong>Check-out:</strong> {new Date(booking.checkoutTime).toLocaleDateString()}</p>
                            <div className="booking-actions">
                                <button onClick={() => handleUpdate(booking._id)} className="update-btn">Update Booking</button>
                                <button onClick={() => handleDelete(booking._id)} className="delete-btn">Delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Booking;
