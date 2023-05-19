import { useState } from "react";
import About from "./pages/About";

import "./App.css";
import BrandImage from "./components/BrandImage";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import MenuNav from "./components/MenuNav";
import Spotlight from "./pages/Spotlight";

function App() {
  return (
    <>
      <div className="App">
        <BrandImage />
        <MenuNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="spotlight" element={<Spotlight />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
