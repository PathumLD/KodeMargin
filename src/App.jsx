import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'
import AboutUsPage from "./pages/AboutUsPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactUsPage from "./pages/ContactUsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactUsPage/>} />
      </Routes>
    </Router>
  );
};

export default App;