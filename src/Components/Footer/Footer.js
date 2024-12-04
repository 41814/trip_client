import React from 'react';
import './Footer.css'; // Import the separate CSS file

const Footer = () => {
  return (
    <footer class="footer">
    <div class="footerContent">
      <div class="contactSection">
        <h3 class="footerHeader">CONTACT NOW</h3>
        <div class="contactInfo">
          <div>
            <h4>Rawalpindi Office</h4>
            <p>3rd Floor, Burj Noor Trade Center, Main Murree Rd, Shamsabad, Rawalpindi, Punjab</p>
            <p><strong>Phone:</strong> +92 (51) 6153523</p>
          </div>
          <div>
            <h4>Karachi Office</h4>
            <p>Office No.502 5th Floor Kashif Centre Shahr-e-Faisal, Karachi</p>
            <p><strong>Phone:</strong> +92 (51) 6152222</p>
          </div>
        </div>
      </div>
  
      <div class="companySection">
        <h3 class="footerHeader">Trippannerpk</h3>
        <ul class="footerLinks">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About Company</a></li>
          <li><a href="/terms">Terms & Conditions</a></li>
          <li><a href="/faqs">FAQ's</a></li>
          <li><a href="/complaints">Complaints</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>
  
      <div class="newsletterSection">
        <h3 class="footerHeader">SUBSCRIBE NEWSLETTER</h3>
        <form class="newsletterForm">
          <input type="text" class="input" placeholder="Enter Your Name" />
          <input type="email" class="input" placeholder="Enter Your Email" />
          <button class="button">Subscribe</button>
        </form>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
