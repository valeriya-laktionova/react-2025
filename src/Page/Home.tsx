import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import HomeSection from '../components/HomeSection/HomeSection';

export const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <HomeSection />
      <Footer />
    </div>
  );
};
