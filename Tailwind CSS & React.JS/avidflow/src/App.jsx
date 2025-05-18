import React from "react";

import "./App.css"; //reset


// The Components
import Header from "./components/homePage/Header";
import SmartDesign from "./components/homePage/SmartDesign";
import Possiblities from "./components/homePage/Possiblities";
import Ai_Potential from "./components/homePage/Ai_Potential";
import CorporateAutomation from "./components/homePage/CorporateAutomation";
import User_opinion from "./components/homePage/User_opinion";
import Footer from "./components/homePage/Footer";

// Export
export default function App() {
  return (
    <div> 
      <Header  />
      <SmartDesign />
      <Possiblities />
      <Ai_Potential />
      <CorporateAutomation />
      <User_opinion />
      <Footer />
    </div>
  );
}
