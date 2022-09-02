import React from "react";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-primaryDark">
      <Header />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
