import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Islamabad from './Components/Tour/Islamabad';
import CityDetails from './Components/CityDetails/CityDetails';
import HotelCards from './Components/HotelCards/HotelCards';
import DataDetails from './Components/DataDetails/DataDetails';
import HotelBooking from './Components/HotelBook/HotelBook';
import Tours from './Components/Tour/Tour';
import Hotels from './Components/Hotels/Hotels';
import Cars from './Components/CarsBook/Cars';
import Nav from './Components/Nav/Nav';
import CrudCar from './Components/CRUDScar/CrudCar';
import HotelCruds from './Components/HotelCruds/HotelCruds';
import SignIn from './Components/SignIn/SignIn';
import CityCard from './Components/CityCard/CityCard';
import Booking from './Components/Booking/Booking';
import BookingUpdate from './Components/Booking/BookingUpdate';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tours" element={<Tours />} />
          <Route path="/Nav" element={<Nav />} />


          <Route path="/Islamabad" element={<Islamabad />} />


          <Route path="/city" element={<CityCard />} />
          <Route path="/city-details" element={<CityDetails />} />
          <Route path="/hotels/:id" element={<Hotels />} />
          <Route path="/city/:id/hotels" element={<HotelCards />} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/CRUDScar" element={<CrudCar />} />
          <Route path="/DataDetails" element={<DataDetails />} />
          <Route path="/hotal/:id/rooms" element={<HotelBooking />} />
          <Route path="/hotal/:hotal_id/room/:room_id/book" element={<HotelCruds />} />
          <Route path="/bookings" element={<Booking />} />
          <Route path="/booking/:id" element={<BookingUpdate />} />
          
          {/* <Route path="/ContactUs" element={<ContactUs />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
