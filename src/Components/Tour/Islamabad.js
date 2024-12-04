import React, { useState } from 'react';
import './Islamabad.css';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
const Islamabad = () => {
  const images = [
    { src: 'centorus.jpg', alt: 'Lahore - Badshahi Mosque' },
    { src: 'lake2.jpg', alt: 'Destination 2' },
    { src: 'pi1.jpg', alt: 'Destination 3' },
    { src: 'isl.jpg', alt: 'Destination 4' },
    { src: 'fasal.jpg', alt: 'Destination 5' },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  <div className="header-background">
    <img src="hotelPakistan.jpg" alt="Pakistan Landscape" />
  </div>
  return (
    <>
      <header className="header3">
        <div className="header-background3">
          <img src="fasilMosque.jpg" alt="Pakistan Landscape" />
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

      <div className="trip-planner-text">
        <h1><span>Outing Places</span></h1>
        <h1><span>Islamabad</span></h1>
      </div>

      <div className="data-details">
        {/* Main image display */}
        <div className="main-image">
          <img src={selectedImage.src} alt={selectedImage.alt} className="large-img" />
        </div>

        {/* Thumbnail images below */}
        <div className="thumbnail-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`thumbnail ${image.src === selectedImage.src ? 'active' : ''}`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>

        {/* Trip Planner description */}
        <p className="trip-description">
          <b>Location: </b> Situated in the northern part of the country, Islamabad lies at the foot of the Margalla Hills, which are part of the Himalayan mountain range.
          <b>Climate:</b> Islamabad experiences a continental climate, with hot summers, cool winters, and a monsoon season.
        </p>
        <Link to="/Cars">
                <button className="book-button">See Cars Booking</button>
              </Link>

      </div>
      <Footer />
    </>
  );
};

export default Islamabad;
