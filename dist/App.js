"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// import de utilitys
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
// import de pages
const Home_1 = __importDefault(require("./pages/home/Home"));
const LoginPage_1 = require("./pages/login/LoginPage");
const UserPage_1 = require("./pages/userPage/UserPage");
// import de styles
require("./App.css");
//import de componentes
const Navbar_1 = require("./components/navbar/Navbar");
const Footer_1 = require("./components/footer/Footer");
const users_json_1 = __importDefault(require("./data/users.json"));
function App() {
    (0, react_1.useEffect)(() => {
        console.log(users_json_1.default);
    });
    return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.Navbar, {}), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/login", element: (0, jsx_runtime_1.jsx)(LoginPage_1.LoginPage, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/userpage", element: (0, jsx_runtime_1.jsx)(UserPage_1.UserPage, {}) })] }), (0, jsx_runtime_1.jsx)(Footer_1.Footer, {})] }));
}
exports.default = App;
