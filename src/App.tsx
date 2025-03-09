import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
