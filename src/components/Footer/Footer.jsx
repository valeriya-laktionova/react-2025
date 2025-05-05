import React, { Component } from "react";
import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="footer-container">
          <div className="logo-col">
            <img src="src/assets/logo.svg" alt="Logo" className="footer-logo" />
            <p className="footer-description">
              Takeaway & Delivery template <span className="footer-description-span">for small - medium businesses.</span>
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4 className="column-header">Company</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Order</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="column-header">Template</h4>
              <ul>
                <li><a href="https://www.google.com/">Style Guide</a></li>
                <li><a href="https://www.google.com/">Changelog</a></li>
                <li><a href="https://www.google.com/">Licence</a></li>
                <li><a href="https://www.google.com/">Webflow University</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="column-header">Flowbase</h4>
              <ul>
                <li><a href="#">More Cloneables</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Built by <a href="#">Flowbase</a> · Powered by <a href="#">Webflow</a></p>
          <div className="footer-socials">
            <a href="#"><img src="src/assets/instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="src/assets/twitter.png" alt="Twitter" /></a>
            <a href="#"><img src="src/assets/youtube.png" alt="YouTube" /></a>
          </div>
        </div>
      </footer>
    );
  }
}