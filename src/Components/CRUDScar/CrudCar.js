import React, { useState } from 'react';
import './CrudCar.css';
import Footer from '../Footer/Footer';

const CrudCar = () => {
  const [car, setCar] = useState({
    Destination: '',
    Price: '',
    TravelDate: '',
    NumberOfPassenger: '',
  });

  const [cars, setCars] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // New state for popup

  // Handle input change
  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  // Add new car
  const handleAddCar = () => {
    setCars([...cars, car]);
    setCar({ Destination: '', Price: '', TravelDate: '', NumberOfPassenger: '' });

    // Show success popup
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
  };

  // Update existing car
  const handleUpdateCar = () => {
    const updatedCars = cars.map((c, index) => (index === currentIndex ? car : c));
    setCars(updatedCars);
    setCar({ Destination: '', Price: '', TravelDate: '', NumberOfPassenger: '' });
    setIsEditing(false);
    setCurrentIndex(null);
  };

  // Edit selected car
  const handleEditCar = (index) => {
    setCar(cars[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  // Delete car
  const handleDeleteCar = (index) => {
    const updatedCars = cars.filter((_, i) => i !== index);
    setCars(updatedCars);
  };

  return (
    <div className="bodyies">
      <header className="header">
        <div className="header-background"></div>
        <nav className="navbar">
          <div className="logo">
            <img src="logo12.webp" alt="Trip Planner Logo" />
          </div>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="/Tours">Tours</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/login">SignIn</a></li>
          </ul>
        </nav>

        <div className="car-booking-container">
          <h2>{isEditing ? 'Update Car Booking' : 'Add Car Booking'}</h2>
          <input
            type="text"
            name="Destination"
            placeholder="Destination to Go!"
            value={car.Destination}
            onChange={handleChange}
          />
          <input
            type="number"
            name="Price"
            placeholder="Price to Go!"
            value={car.Price}
            onChange={handleChange}
          />
          <input
            type="date"
            name="TravelDate"
            value={car.TravelDate}
            onChange={handleChange}
          />
          <input
            type="number"
            name="NumberOfPassenger"
            placeholder="Number of passengers"
            value={car.NumberOfPassenger}
            onChange={handleChange}
          />
          <button onClick={isEditing ? handleUpdateCar : handleAddCar}>
            {isEditing ? 'Update Booking' : 'Add Booking'}
          </button>

          {showPopup && <div className="popup">Car added successfully!</div>} {/* Popup message */}

          <h3>Car Booking List</h3>
          <ul>
            {cars.map((car, index) => (
              <li key={index} className="car-item">
                <div>
                  <strong>{car.Destination}</strong> - {car.TravelDate} (${car.Price})
                </div>
                <button onClick={() => handleEditCar(index)}>Edit</button>
                <button onClick={() => handleDeleteCar(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <Footer />
      </header>
    </div>
  );
};

export default CrudCar;
