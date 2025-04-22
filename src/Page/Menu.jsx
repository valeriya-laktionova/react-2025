import React from "react";
import "./menu.css";
import Header from "../components/Header";
import MenuSection from "../components/MenuSection";
import { Footer } from "../components/Footer";

export const Menu = () => {
  return (
    <div className="App">
      <Header />
      <MenuSection />
      <Footer />
      
    </div>
  );
};