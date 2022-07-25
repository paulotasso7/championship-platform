"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
const Navbar_styles_1 = require("./Navbar.styles");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Navbar = () => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    return (React.createElement(Navbar_styles_1.Nav, null, React.createElement(Navbar_styles_1.Logo, null, React.createElement(react_router_dom_1.Link, { to: "/" }, "champs", React.createElement("span", null, "platform"))), React.createElement(Navbar_styles_1.DropMenu, { onClick: () => setIsOpen(!isOpen) }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null)), React.createElement(Navbar_styles_1.Menu, { isOpen: isOpen }, React.createElement(Navbar_styles_1.MenuLink, { href: "" }, "Our Work"), React.createElement(Navbar_styles_1.MenuLink, { href: "" }, "News"), React.createElement(Navbar_styles_1.MenuLink, { href: "" }, "Champs"), React.createElement(Navbar_styles_1.MenuLink, { href: "" }, React.createElement(react_router_dom_1.Link, { to: "/login" }, "Sign In")))));
};
exports.Navbar = Navbar;
