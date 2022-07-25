"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Navbar_styles_1 = require("./Navbar.styles");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Navbar = () => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)(Navbar_styles_1.Nav, { children: [(0, jsx_runtime_1.jsx)(Navbar_styles_1.Logo, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, Object.assign({ to: "/" }, { children: ["champs", (0, jsx_runtime_1.jsx)("span", { children: "platform" })] })) }), (0, jsx_runtime_1.jsxs)(Navbar_styles_1.DropMenu, Object.assign({ onClick: () => setIsOpen(!isOpen) }, { children: [(0, jsx_runtime_1.jsx)("span", {}), (0, jsx_runtime_1.jsx)("span", {}), (0, jsx_runtime_1.jsx)("span", {})] })), (0, jsx_runtime_1.jsxs)(Navbar_styles_1.Menu, Object.assign({ isOpen: isOpen }, { children: [(0, jsx_runtime_1.jsx)(Navbar_styles_1.MenuLink, Object.assign({ href: "" }, { children: "Our Work" })), (0, jsx_runtime_1.jsx)(Navbar_styles_1.MenuLink, Object.assign({ href: "" }, { children: "News" })), (0, jsx_runtime_1.jsx)(Navbar_styles_1.MenuLink, Object.assign({ href: "" }, { children: "Champs" })), (0, jsx_runtime_1.jsx)(Navbar_styles_1.MenuLink, Object.assign({ href: "" }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/login" }, { children: "Sign In" })) }))] }))] }));
};
exports.Navbar = Navbar;
