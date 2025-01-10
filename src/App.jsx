import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import ProjectsBlog from "./components/ProjectsBlog";

const App = () => {
  return (
    <Router basename="/">
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Benefits />
                <Services />
                <Collaboration />
                <Pricing />
                <Roadmap />
              </>
            }
          />
          <Route path="/projects-blog" element={<ProjectsBlog />} />
        </Routes>
        <Footer />
        <ButtonGradient />
      </div>
    </Router>
  );
};

export default App;
