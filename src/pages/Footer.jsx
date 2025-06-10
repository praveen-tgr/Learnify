import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Learnify</h3>
        <p>Your journey to smarter learning continues here.</p>
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Learnify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;