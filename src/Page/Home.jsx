import React, { useMemo } from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import  HomeSection  from '../components/HomeSection/HomeSection'; 

export const HomePage = ({ totalItemCount }) => {
  return (
    <div>
      <Header cartCount={totalItemCount} />
      <HomeSection />
      <Footer />
    </div>
  );
};

