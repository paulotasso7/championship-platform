// import de utilitys
import { Routes, Route, Outlet } from "react-router-dom";
import { routes } from "./utils/routes/routes";

// import de pages
import { Home } from "./pages/home/Home";
import { LoginPage } from "./pages/login/LoginPage";
import { UserPage } from "./pages/userpage/UserPage";
import { Register } from "./pages/register/Register";

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
          {routes.map((route) => {
            if (route.path === "/")
              return <Route path={route.path} element={<Home />} />;
            if (route.path === "/login")
              return <Route path={route.path} element={<LoginPage />} />;
            if (route.path === "/register")
              return <Route path={route.path} element={<Register />} />;
          })}
        </Route>
        <Route path="userpage" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
