// src/components/CityCard.js
import React, { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const CityCard = () => {
  
const [cityData,setCityData]=useState([]);
useEffect(() => {

  console.log('Fetching cities...');
  fetch('http://localhost:5000/api/cities')
    .then(response => {
      console.log(response,'response...')
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(cities => {
      setCityData(cities);
    })

    .catch(error => {
      console.error('Fetch error:', error);
    });
}, []); 


  return (
    <div className="container pt-5">
      <div className="row">
        {cityData.map((city, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card" style={{ width: "18rem"}}>
              <img src={city.image} className="card-img-top" alt={city.name} />
              <div className="card-body">
                <h5 className="card-title">{city.name}</h5>
                <p className="card-text">{city.description}</p>
                <Link to={`/city/${city._id}/hotels`} className="btn btn-primary">Go somewhere</Link>
                {/* <a href={city.link} className="btn btn-primary">Go somewhere</a> */}
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityCard;
