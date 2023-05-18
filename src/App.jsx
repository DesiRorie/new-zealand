import { useState } from "react";
import About from "./pages/About";

import "./App.css";
import BrandImage from "./components/BrandImage";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import MenuNav from "./components/MenuNav";

function App() {
  return (
    <>
      <BrandImage />
      <MenuNav />
      <Routes>
        <Route path="/*" element={<Home />}>
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
