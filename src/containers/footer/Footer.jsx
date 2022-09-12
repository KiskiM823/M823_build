import React from 'react';
import logo from '../../assets/M823Green.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <img src={logo} alt="gpt3_logo" />

      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Kiski Group</p>
        <p>123-456-7899</p>
        <p>kiski@kiski.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 M823. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
