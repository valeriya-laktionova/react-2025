import React from 'react';
import './HomeSection.css';
import home_img from '../../assets/home_img.svg';

const HomeSection: React.FC = () => {
  return (
    <div className="section-container">
      <section className="inner-layout">
        <div className="content-area">
          <h1 className="main-heading">
            Beautiful food & takeaway, <span>delivered</span> to your door.
          </h1>
          <p className="sub-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
          </p>
          <button className="primary-button">Place an Order</button>
          <div className="feedback-info">
            <strong>★ Trustpilot</strong>
            <br />
            <span>4.8 out of 5</span> based on 2000+ reviews
          </div>
        </div>

        <div className="image-block">
          <img src={home_img} alt="Delicious food" />
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
