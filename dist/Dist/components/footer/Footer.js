"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const Footer_styles_1 = require("./Footer.styles");
const Footer = () => {
    return (React.createElement(Footer_styles_1.FooterContainer, null, React.createElement("div", { style: {
            background: "rgb(52 52 52)",
            width: "100%",
            justifyContent: "center",
            display: "flex",
            height: "80px",
        } }, React.createElement("ul", null, React.createElement("li", null, "facebook"), React.createElement("li", null, "twitter"), React.createElement("li", null, "twitch"), React.createElement("li", null, "youtube"), React.createElement("li", null, "instagram"), React.createElement("li", null, "github"))), React.createElement("div", { style: {
            background: "rgb(28 28 28)",
            width: "100%",
            justifyContent: "center",
            display: "flex",
            height: "50px",
        } }, React.createElement("p", null, "\u00A9 2022 Copyright: Championships Platform"))));
};
exports.Footer = Footer;
