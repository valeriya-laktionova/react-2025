import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import Company from '../components/CompanyPage/CompanyPage';

const CompanyPage: React.FC = () => {
  return (
    <>
      <Header cartCount={0} />
      <Company />
      <Footer />
    </>
  );
};

export default CompanyPage;
