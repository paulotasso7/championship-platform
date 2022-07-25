// import de utilitys
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";

// import de pages
import Home from "./pages/home/Home";
import { LoginPage } from "./pages/login/LoginPage";

// import de styles
import "./App.css";

//import de componentes
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";

import userData from "./data/users.json";

function App(): JSX.Element {
  useEffect(() => {
    console.log(userData);
  });

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
