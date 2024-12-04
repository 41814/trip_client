import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Hotel.css'; // For same folder
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const Hotels = () => {
    return (
        <>
        
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
                

                <div className="hotel-details">
      <div className="hotel-header">
        <h1 className="hotel-title">Islamabad Hotels</h1>
        <p className="hotel-location">
          {/* <span role="img" aria-label="location">
            📍
          </span> */}
          The most Beautifual City
        </p>
        <a href="#location" className="hotel-distance">
          Excellent location – 700m from center
        </a>
        <p className="hotel-offer">
          Book a stay over <strong>$150</strong> at this property and get a free
          airport taxi
        </p>
        <Link to="/HotelCruds">
                <button className="book-button">Reserve or Booking</button>
              </Link>
      </div>

      <div className="hotel-images">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/270x200/497538247.jpg?k=22acd5719fab572744e62da447feeff319ed049b0c81af1d3801b3757495d4aa&o="
          alt="Room 1"
          className="hotel-image"
        />
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/270x200/309058970.jpg?k=7919d3c4661869d7172d6d331190ee80346888fec111ce7aa81f7f1aea7f10d6&o="
          alt="Room 2"
          className="hotel-image"
        />
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/270x200/321508463.jpg?k=b4d405dada3968a746c8988364236c165cf0d8985ede33aa304abf06f793ab6a&o="
          alt="Room 3"
          className="hotel-image"
        />
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/270x200/476712221.jpg?k=8a36e68b4a4514a8bbef61a740cfe6527249f7189ef73828a48fcad7a8af9d50&o="
          alt="Room 4"
          className="hotel-image"
        />
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/270x200/532986963.webp?k=8aab1c55473aaab25ee3566316d69d49fa512906af8b967e84067e58a2844f9d&o="
          alt="Room 5"
          className="hotel-image"
        />
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/270x200/263823251.webp?k=33d4e521257884585d729cba1165f21e1d0e0c66e993eea58b46b9edd2059c1a&o="
          alt="Room 6"
          className="hotel-image"
        />
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/270x200/580707283.webp?k=9567d36e1816317efab96a64934820ec6adf1bea0a68348c5cb66aecdac6c53d&o="
          alt="Room 6"
          className="hotel-image"
        />
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/270x200/585194449.webp?k=5ede003ac4cf1c71d01853c7c47bfb375a9ac96f9c9fcd8365b0a8505ba61334&o="
          alt="Room 6"
          className="hotel-image"
        />
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/270x200/291436465.webp?k=7d37589f6ed17f9468681489b4a48590750f17244b655f3d0a4b48647daf83bb&o="
          alt="Room 6"
          className="hotel-image"
        />
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/270x200/181729466.jpg?k=1327cae98f623df0c5d99efb5f373d5a923caf78fd4ffde44fe97749f9e0f80a&o="
          alt="Room 6"
          className="hotel-image"
        />
         <div className="hotel-info-container">
      <div className="description">
        <h2>Experience World-class Service</h2>
        <p>
          Located just off Royal Victoria Square and with the Excel Center a few
          hundred yards away, this penthouse apartment is equipped to ensure
          guests' comfort during their stay in London. Parking is possible for a
          fee, and free WiFi can be accessed in the apartment. Additionally, a
          complimentary travel card is offered to guests and a free airport
          pick-up from London Airports, subject to specific terms. Each
          apartment features a living room with floor-to-ceiling windows and a
          TV with satellite channels. The bathroom has both a bath and shower as
          well as complimentary toiletries. Guests have access to the property's
          community sauna.
        </p>
      </div>

      <div className="booking-card">
        <h3>Perfect for a 3-night stay!</h3>
        <p>
          Located in the real heart of London, this property has an excellent
          location score of 8.9!
        </p>
        <div className="price">
          <strong>$450</strong> <span>(3 nights)</span>
        </div>
        <Link to="/Hotels">
                <button className="book-button">Reserve or Booking</button>
              </Link>
      </div>
    </div>
      </div>
    </div>



            </header>
            <Footer/>
        </>
    );
};

export default Hotels;
