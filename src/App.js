import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import NavBar from "./components/NavBar";
import Footer from "./components/FooterPage";
import "antd/dist/antd.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/characters" element={<Characters />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
