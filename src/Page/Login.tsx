import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import LoginSection from '../components/LoginSection/LoginSection';

export const Login: React.FC = () => {
  return (
    <div>
      <Header />
      <LoginSection />
      <Footer />
    </div>
  );
};
