import React from "react";
import "./Cars.css";
import { Link } from 'react-router-dom';
import Footer from "../Footer/Footer";
function Cars() {
  return (
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
    <div className="app-container11">
      <div className="search-panel1">
        <h3>Search</h3>
        <label>
          Destination
          <input type="text" placeholder="Enter city" />
        </label>
        
        <div className="options">
          <label>
            Min price (Min Price Destination)
            <input type="number" placeholder="Min price" />
          </label>
          <label>
            Max price (Max Price Destination)
            <input type="number" placeholder="Max price" />
          </label>
          <label>
            Adult
            <input type="number" defaultValue={1} min={1} />
          </label>
          <label>
            Children
            <input type="number" defaultValue={0} min={0} />
          </label>
        </div>
        <button className="search-button">Search</button>
      </div>

      <div className="hotel-list11">
        {hotelData.map((hotel, index) => (
          <div className="hotel-card11" key={index}>
            <img src={hotel.image} alt={hotel.name} />
            <div className="hotel-info11">
              <h3>{hotel.name}</h3>
              <p>{hotel.distance}</p>
              <p>{hotel.description}</p>
              <p className="highlight11">Free cancellation</p>
              <p>
                <strong>${hotel.price}</strong> (Includes taxes and fees)
              </p>

              <Link to="/CRUDScar">
                <button className="book-button">See Avability</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    <Footer/>
    </header>
    
  );
}

const hotelData = [
  {
    name: "The South Kensington",
    distance: "500m from center",
    description: "Stay in the heart of London",
    price: 130,
    image: "http://api.tripplannerpk.com/images/transportmodule/hiace/banner/hiace.webp",
  },
  {
    name: "Austin David Hotel",
    distance: "700m from center",
    description: "Experience World-class Service",
    price: 150,
    image: "http://api.tripplannerpk.com/images/transportmodule/hiace/banner/hiace-1.webp",
  },
  {
    name: "Austin David Hotel",
    distance: "700m from center",
    description: "Experience World-class Service",
    price: 150,
    image: "http://api.tripplannerpk.com/images/transportmodule/hiace/banner/hiace-3.webp",
  },
  {
    name: "Austin David Hotel",
    distance: "700m from center",
    description: "Experience World-class Service",
    price: 150,
    image: "http://api.tripplannerpk.com/images/transportmodule/hiace/banner/hiace-5.webp",
  },
  // Add more hotel objects here
];

export default Cars;
