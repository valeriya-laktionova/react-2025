import React from 'react';
import './Company.css';
import companyImage from '../../assets/companyImage.jpg'; 

const Company: React.FC = () => {
  return (
    <div className="company-container">
      <img src={companyImage} alt="Company" className="company-image" />
    </div>
  );
};

export default Company;
