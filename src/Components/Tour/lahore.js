import React from 'react';
import './lahore.css'; // Import CSS file for styling

import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
const lahore = () => {
  return (
    <>
    <header className="header4">
        <div className="header-background4">
          <img src="badshahiMosque.jpg" alt="Pakistan Landscape" />
        </div>
        <nav className="navbar">
        <div className="logo">
          <img src="logo12.webp" alt="Trip Planner Logo" />
        </div>
          <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="/Tours">Tours</a></li>
          <li><a href="/Contact">Contact</a></li>
          <li><a href="/login">SingnIn</a></li>

          </ul>
        </nav>
      </header>
    <div className="image-content-container pb-5 pt-5">
      <div className="image-side ">
        <img 
          src="mm.jpg" // Replace with your image URL
          alt="Sample"
          className="image"
        />
      </div>
      <div className="content-side">
        <h2>Masjid Wazir Khan</h2>
        <p>Masjid Wazir Khan is 17th Century masjid located in the city of Lahore. It was commissioned during the reign of the Mughal emperor Shah Jahan as part of an ensemble of buildings that also included the nearby Shahi Hammam. Construction of Wazir Khan Mosque began in 1634 CE, and was completed in 1641. Considered to be the most ornately decorated Mughal era mosque, Masjid Wazir Khan is renowned for its intricate faience tile work known as kashi-kari, as well as its interior surfaces that are almost entirely embellished with elaborate Mughal era frescoes. It has been under extensive restoration since 2009 under the direction of the Aga Khan Trust for Culture and Government of the Punjab, with contributions from the governments of Germany, Norway, and the United States..</p>
      </div>
    </div>

    <div className="image-content-container pb-5 pt-5">
      
      <div className="content-side">
        <h2>Highlights</h2>
        <p>The Worthy Deputy Commissioner RAFIA HAIDER has visited different Places in Lahore along with Concerned AC to monitor the preparation of District</p>
      <p>Crack Down On Illegal LPG Gas Shops & Petrol Pumps in Lahore
119 LPG Gas Cylinders Seized
10 Shops Shut Down</p>
      </div>
      <div className="div1 ">
      <img 
          src="l1.png" // Replace with your image URL
          alt="Sample"
          className="image1"
        />
        <img 
          src="l2.png" // Replace with your image URL
          alt="Sample"
          className="image1"
        />
        <img 
          src="l3.png" // Replace with your image URL
          alt="Sample"
          className="image1"
        />
      </div>
    </div>
    <div className="image-content-container pb-5 pt-5">
      <div className="image-side ">
        <img 
          src="mm1.jpg" // Replace with your image URL
          alt="Sample"
          className="image"
        />
      </div>
      <div className="content-side">
        <h2>Masjid Wazir Khan</h2>
        <p>Masjid Wazir Khan is 17th Century masjid located in the city of Lahore. It was commissioned during the reign of the Mughal emperor Shah Jahan as part of an ensemble of buildings that also included the nearby Shahi Hammam. Construction of Wazir Khan Mosque began in 1634 CE, and was completed in 1641. Considered to be the most ornately decorated Mughal era mosque, Masjid Wazir Khan is renowned for its intricate faience tile work known as kashi-kari, as well as its interior surfaces that are almost entirely embellished with elaborate Mughal era frescoes. It has been under extensive restoration since 2009 under the direction of the Aga Khan Trust for Culture and Government of the Punjab, with contributions from the governments of Germany, Norway, and the United States..</p>
      </div>
    </div>
    <div className="image-content-container pb-5 pt-5">
      
      <div className="content-side">
        <h2>Highlights</h2>
        <p>The Worthy Deputy Commissioner RAFIA HAIDER has visited different Places in Lahore along with Concerned AC to monitor the preparation of District</p>
      <p>Crack Down On Illegal LPG Gas Shops & Petrol Pumps in Lahore
119 LPG Gas Cylinders Seized
10 Shops Shut Down</p>
      </div>
      <div className="div1 ">
      <img 
          src="lahore.jpg" // Replace with your image URL
          alt="Sample"
          className="image1"
        />
       
      </div>
      
    </div>
    <Link to="/Cars">
                <button className="book-button">See Cars Booking</button>
              </Link>
    <Footer/>
    </>
  );
};

export default lahore;
