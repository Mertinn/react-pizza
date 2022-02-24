import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
