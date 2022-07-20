// import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import de pages
import Home from "./pages/home/Home";
import { LoginPage } from "./pages/login/LoginPage";

// import de styles
import "./App.css";

//import de componentes
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";

import React, { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   fetch(" https://mtgmelee.com", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application / json",
  //     },
  //   })
  //     .then((r) => r.json())
  //     .then((r) => console.log(r))
  //     .catch((e) => console.log("eeeeeeeeerr ~>", e));
  // });

  useEffect(() => {
    fetch("../src/data/users.json")
      .then((res) => res.json())
      .then((r) => console.log(r));
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
