import { useState } from "react";

import "./App.css";
import BrandImage from "./components/BrandImage";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrandImage />
      <Routes>
        <Route path="/*" element={<Home />}>
          <Route path="spotlight" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
