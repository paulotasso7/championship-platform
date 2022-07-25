"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// import de styles
require("./App.css");
//import de componentes
const Navbar_1 = require("./components/navbar/Navbar");
const Footer_1 = require("./components/footer/Footer");
const userData = require("./data/users.json");
function App() {
    (0, react_1.useEffect)(() => {
        const fetchData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield fetch(userData)
                    .then((res) => {
                    if (!res.ok) {
                        throw new Error("HTTP error " + res.status);
                    }
                    return res;
                })
                    .then((r) => console.log("r", r));
            }
            catch (e) {
                console.log(`err`, e);
            }
        });
        fetchData();
    });
    return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.Navbar, {}), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/login", element: (0, jsx_runtime_1.jsx)(LoginPage_1.LoginPage, {}) })] }), (0, jsx_runtime_1.jsx)(Footer_1.Footer, {})] }));
}
exports.default = App;
