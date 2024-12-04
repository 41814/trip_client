// src/components/Services.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Transport",
      price: "PKR 25,994",
      description: "Budget Friendly Transport.",
      imageUrl: "airline4.jpg", 
    },
    {
      title: "Best Flight Rates",
      price: "PKR 25,994",
      description: "Travel Your Dream Destination.",
      imageUrl: "airline2.jpg", 
    },
    {
      title: "Affordable Umrah",
      price: "PKR 25,499",
      description: "Umrah Service For Everyone.",
      imageUrl: "airlinee.jpg", 
    },
    {
      title: "Luxury Transport",
      price: "PKR 30,000",
      description: "Experience Comfort and Style.",
      imageUrl: "visa.webp", 
    },
    {
      title: "Cheap Flights",
      price: "PKR 22,500",
      description: "Get the Best Deals.",
      imageUrl: "img4.webp", 
    },
    {
      title: "Umrah Packages",
      price: "PKR 40,000",
      description: "Hassle-Free Umrah Experience.",
      imageUrl: "traveldeals.webp", 
    },
  ];

  
  const chunkedServices = [];
  for (let i = 0; i < services.length; i += 3) {
    chunkedServices.push(services.slice(i, i + 3));
  }

  return (
    <div className="app p-3 pt-4 pb-4">
      <h1>Discover The World In A Bargain Style</h1>
      <div id="servicesCarousel" className="carousel slide pt-2" data-bs-ride="carousel">
        <div className="carousel-inner">
          {chunkedServices.map((chunk, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="row">
                {chunk.map((service, serviceIndex) => (
                  <div className="col-md-4" key={serviceIndex}>
                    <div className="card" style={{ width: "100%" }}>
                      <img src={service.imageUrl} className="card-img-top" alt={service.title} />
                      <div className="card-body">
                        <h5 className="card-title">{service.title}</h5>
                        <p className="card-text">{service.description}</p>
                        <p className="card-text"><strong>{service.price}</strong></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#servicesCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#servicesCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
         
        </button>
      </div>
    </div>
  );
};

export default Services;
