import React from 'react';
import CityCard from '../CityCard/CityCard';
import Services from '../Services/Sercices';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import Footer from '../Footer/Footer';
import Header from './Header';

const Home = () => {
  const cities = [
    { name: 'Karachi', image: 'img2.jpg' },
    { name: 'Lahore', image: 'image1.jpg' },
    { name: 'Islamabad', image: 'lahore.jpg' },
    { name: 'Peshawar', image: 'peshawar.jpg' },
    { name: 'Karachi', image: 'img2.jpg' },
    { name: 'Lahore', image: 'image1.jpg' },
    { name: 'Islamabad', image: 'lahore.jpg' },
    { name: 'Peshawar', image: 'peshawar.jpg' },
  ];

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Header />
      
      <section className="promo">
        <div className="promo-content">
          <h2>Fly High, Pay Less</h2>
          <p>As a premier international travel agency in Islamabad, Tripplannerpk is renowned for offering exclusive deals and discounted rates, ensuring you receive the best travel and tours services that meet your requirements. The wide range of selection options filters your search and generates the latest results that match your preferences.</p>
          <p>Our team of travel and visa consultants in Islamabad ensures that you are provided with the best travel and tours services. Whether you are looking for flash sales, cheap flights, or any travel consultants, Tripplannerpk is a great place to start. If you hope for luxurious but budgetary traveling to hajj and umrah packages, then it’s a cue for you to commence your journey with our travels and tour agents and reach your dream destination with ease and affordability.</p>
          <button onClick={() => window.location.href = '#all-deals'}>View All Deals</button>
        </div>
        <div className="promo-image">
          <img src="traveldeals.webp" alt="Travel" />
        </div>
      </section>

      <div className="city-cards">
        <CityCard />
       
      </div>

      <section className="home">
        <Slider {...settings}>
          <div>
            <img src="badshahiMosque.jpg" alt="Lahore" className="home-image img-fluid d-block mx-auto" />
          </div>
          <div>
            <img src="fasal.jpg" alt="Destination 2" className="home-image img-fluid d-block mx-auto" />
          </div>
          <div>
            <img src="quaide.jpg" alt="Destination 3" className="home-image img-fluid d-block mx-auto" />
          </div>
          <div>
            <img src="mosque1.jpg" alt="Destination 4" className="home-image img-fluid d-block mx-auto" />
          </div>
          <div>
            <img src="mosque3.jpg" alt="Destination 5" className="home-image img-fluid d-block mx-auto" />
          </div>
        </Slider>

        <h1>Welcome to Tripplannerpk</h1>
        <p>Your journey to amazing destinations begins here. Whether you're looking for affordable flights, exclusive deals, or comprehensive travel packages, we've got you covered. Start exploring and planning your dream trip today!</p>
        <button onClick={() => window.location.href = '#all-deals'}>View All Deals</button>
      </section>

      <Services />  
      <Footer />

    </div>
  );
};

export default Home;
