import React, { useState } from 'react';
import './SignIn.css';
import Footer from '../Footer/Footer';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSignIn = () => {
    // Implement your sign-in logic here
    if (email && password) {
      console.log('Sign In Success');
    } else {
      console.log('Please fill in both fields');
    }
  };

  return (
    <div className="bodyies">
      <header className="header">
        <div className="header-background">
          {/* <img src="oo.jpeg" alt="Background" /> */}
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
            <li><a href="/login">SignIn</a></li>
          </ul>
        </nav>

        <div className="sign-in-container">
          <h2>Sign In</h2>
          <div>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleInputChange}
            />
            <button onClick={handleSignIn}>Sign In</button>
          </div>
        </div>
        <Footer />
      </header>
    </div>
  );
};

export default SignIn;
