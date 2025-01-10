import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import ProjectsBlog from "./pages/ProjectsBlog";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Benefits />
              <Collaboration />
              <Services />
              <Pricing />
              <Roadmap />
            </>
          }
        />
        <Route path="/projects-blog" element={<ProjectsBlog />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
