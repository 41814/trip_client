import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import Link from react-router-dom
import './HotelCards.css';
import hotelData from '../hotals.json';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

const HotelCards = () => {
    const { id } = useParams();
    console.log('id: ', id);

    const [hotals, setHotals] = useState([]); // Make sure to use setHotals for updating the state

    useEffect(() => {
        const cityHotals = hotelData.filter((hotal) => hotal.city_id === id);
        console.log('cityHotals: ', cityHotals);
        
        fetch(`http://localhost:5000/api/city/${id}/hotals`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(hotals => {
                setHotals(hotals); // Corrected to use setHotals here
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
        
        // setHotals(cityHotals); // This will update the state with the filtered hotals
    }, [id]);

    return (
        <>
            <Nav />

            <div className="hotel-card-container pb-5">
                {hotals.map((hotal) => (
                    <div key={hotal.id} className="hotel-card">
                        <div className="hotel-info pb-3">
                            <h2>{hotal.name}</h2>
                            <p>Location: {hotal?.location}</p>
                            <p>Description: {hotal.description}</p>
                            <p>Rating: {hotal.ratings}</p>
                            <Link to={`/hotal/${hotal._id}/rooms`}>
                                <button className="book-now-button">Book Now</button>
                            </Link>
                        </div>
                        <div className="hotel-image">
                            <img src={hotal.image} alt="Hotel" />
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default HotelCards;
