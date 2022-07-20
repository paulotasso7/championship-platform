"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { useEffect } from "react";
const react_router_dom_1 = require("react-router-dom");
// import de pages
const Home_1 = __importDefault(require("./pages/home/Home"));
const LoginPage_1 = require("./pages/login/LoginPage");
// import de styles
require("./App.css");
//import de componentes
const Navbar_1 = require("./components/navbar/Navbar");
const Footer_1 = require("./components/footer/Footer");
const react_1 = __importStar(require("react"));
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
    (0, react_1.useEffect)(() => {
        fetch("../src/data/users.json")
            .then((res) => res.json())
            .then((r) => console.log(r));
    });
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Navbar_1.Navbar, null),
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Home_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/login", element: react_1.default.createElement(LoginPage_1.LoginPage, null) })),
        react_1.default.createElement(Footer_1.Footer, null)));
}
exports.default = App;
