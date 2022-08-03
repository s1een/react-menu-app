import { BrowserRouter, Routes, Route } from "react-router-dom";
import DrinkPage from "../src/pages/DrinkPage";
import Error from "../src/pages/Error";
import MenuPage from "../src/pages/MenuPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MenuPage />} />
        <Route path="/drinks/:id" element={<DrinkPage />} />
        <Route path="/ingredient/:name" element={<MenuPage />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
