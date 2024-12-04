import React, { useState } from 'react';
// import './login.css'; 

const CityDetails = () => {
  const [city, setCity] = useState('');
  const [cityInfo, setCityInfo] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch(`https://api.teleport.org/api/urban_areas/slug:${city.toLowerCase().replace(/ /g, '-')}/`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setCityInfo(data);
    } catch (err) {
      setError(err.message);
      setCityInfo(null);
    }
  };

  return (
    <div className='bodyies'>
      <div className="container">
        <div className="row">
          <div className="col-md-offset-5 col-md-4 text-center">
            <h1 className='text-white'>City Information</h1>
            <div className="form-city-info">
              <h4>Enter City Name</h4>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="city"
                  className="form-control input-sm chat-input"
                  placeholder="City Name"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <br /><br />
                <div className="wrapper">
                  <span className="group-btn">
                    <button type="submit" className="btn btn-danger btn-md">
                      Get Info <i className="fa fa-search"></i>
                    </button>
                  </span>
                </div>
              </form>
              {error && <p className="text-danger">{error}</p>}
              {cityInfo && (
                <div className="city-info">
                  <h3>{cityInfo.name}</h3>
                  <p><strong>Population:</strong> {cityInfo.population}</p>
                  <p><strong>Region:</strong> {cityInfo.region}</p>
                  
                </div>
              )}
            </div>
          </div>
        </div>
        <br /><br /><br />
        {/* Footer */}
        <div className="footer text-white text-center">
          <p>© 2020 City Information Form. All rights reserved | Design by <a href="https://freecss.tech">Free Css</a></p>
        </div>
        {/* //Footer */}
      </div>
    </div>
  );
};

export default CityDetails;
