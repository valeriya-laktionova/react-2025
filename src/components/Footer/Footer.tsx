import React from 'react';
import './Footer.css';
import { logo, instagramIcon, twitterIcon, youtubeIcon } from '../../assets';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="logo-col">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-description">
            Takeaway & Delivery template{' '}
            <span className="footer-description-span">
              for small - medium businesses.
            </span>
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
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
              <li><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Style Guide</a></li>
              <li><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Changelog</a></li>
              <li><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Licence</a></li>
              <li><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Webflow University</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="column-header">Flowbase</h4>
            <ul>
              <li><a href="#">More Cloneables</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>
          Built by <a href="#">Flowbase</a> · Powered by <a href="#">Webflow</a>
        </p>
        <div className="footer-socials">
          <a href="#" aria-label="Instagram">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="#" aria-label="YouTube">
            <img src={youtubeIcon} alt="YouTube" />
          </a>
        </div>
      </div>
    </footer>
  );
};
