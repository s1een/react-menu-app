import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DrinkPage from "./pages/DrinkPage";
import Error from "./pages/Error";
import MenuPage from "./pages/MenuPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/drinks/:id" element={<DrinkPage />} />
        <Route path="/ingredient/:name" element={<MenuPage />} />
        <Route path="*" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
