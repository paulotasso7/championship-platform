// import de utilitys
import { Routes, Route, Outlet } from "react-router-dom";

// import de pages
import Home from "./pages/home/Home";
import { LoginPage } from "./pages/login/LoginPage";
import { UserPage } from "./pages/userPage/UserPage";
import { Register } from "./pages/register/Register";

// import de styles
import "./App.css";

//import de componentes
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";

// import userData from "./data/users.json";

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route
          element={
            <>
              <Navbar />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="userpage" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
