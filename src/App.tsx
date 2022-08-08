// import de utilitys
import { Routes, Route, Outlet } from "react-router-dom";

// import de pages
import { Home } from "./pages/home/Home";
import { LoginPage } from "./pages/login/LoginPage";
import { UserPage } from "./pages/userpage/UserPage";
import { Register } from "./pages/register/Register";
import { routes } from "./utils/routes";

// import de styles
import "./App.css";

//import de componentes
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";

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
          <Route path={routes[0].path} element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="userpage" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
