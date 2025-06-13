import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import HomeSection from '../components/HomeSection/HomeSection';

type HomePageProps = {
  totalItemCount: number;
};

export const HomePage: React.FC<HomePageProps> = ({ totalItemCount }) => {
  return (
    <div>
      <Header cartCount={totalItemCount} />
      <HomeSection />
      <Footer />
    </div>
  );
};
