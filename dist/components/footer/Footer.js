"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Footer_styles_1 = require("./Footer.styles");
const Footer = () => {
    return ((0, jsx_runtime_1.jsxs)(Footer_styles_1.FooterContainer, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ style: {
                    background: "rgb(52 52 52)",
                    width: "100%",
                    justifyContent: "center",
                    display: "flex",
                    height: "80px",
                } }, { children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: "facebook" }), (0, jsx_runtime_1.jsx)("li", { children: "twitter" }), (0, jsx_runtime_1.jsx)("li", { children: "twitch" }), (0, jsx_runtime_1.jsx)("li", { children: "youtube" }), (0, jsx_runtime_1.jsx)("li", { children: "instagram" }), (0, jsx_runtime_1.jsx)("li", { children: "github" })] }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: {
                    background: "rgb(28 28 28)",
                    width: "100%",
                    justifyContent: "center",
                    display: "flex",
                    height: "50px",
                } }, { children: (0, jsx_runtime_1.jsx)("p", { children: "\u00A9 2022 Copyright: Championships Platform" }) }))] }));
};
exports.Footer = Footer;
