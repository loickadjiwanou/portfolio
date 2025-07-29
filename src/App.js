import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import AppStore from "./components/AppStore";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// vercel insights
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <AppStore />
      <Contact />
      <Footer />
      <SpeedInsights />
    </div>
  );
}

export default App;
