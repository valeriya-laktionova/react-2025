import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import Company from '../components/CompanyPage/CompanyPage';

const CompanyPage: React.FC = () => {
  return (
    <>
      <Header />
      <Company />
      <Footer />
    </>
  );
};

export default CompanyPage;
