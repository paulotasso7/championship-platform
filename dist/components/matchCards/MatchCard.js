"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchCard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const MatchCard_styles_1 = require("./MatchCard.styles");
const MatchCard = ({ name, score, img, name2, img2, score2 }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(MatchCard_styles_1.CardContainer, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ id: "qlq", style: {
                            width: "0",
                            position: "sticky",
                            borderColor: "black",
                        } }, { children: (0, jsx_runtime_1.jsx)("img", { src: img, style: { transform: "translate(-5vw,-18%)" }, alt: "wlw" }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: {
                            width: "100%",
                            height: "5vw",
                            minWidth: "200px",
                        } }, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ style: {
                                    border: "4px solid",
                                    borderRadius: "15px",
                                    fontSize: "32px",
                                    padding: "25px 5px 25px 55px",
                                    margin: "0",
                                    justifyContent: "flex-end",
                                    whiteSpace: "nowrap",
                                    display: "flex",
                                    textSizeAdjust: "100%",
                                } }, { children: name })), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: {
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    marginRight: "5px",
                                } }, { children: (0, jsx_runtime_1.jsxs)("ul", Object.assign({ style: {
                                        display: "flex",
                                        flexDirection: "row",
                                        listStyle: "none",
                                        margin: "0",
                                        width: "16em",
                                    } }, { children: [(0, jsx_runtime_1.jsx)("li", { style: { padding: "5px" } }, 1), (0, jsx_runtime_1.jsx)("li", Object.assign({ style: { padding: "5px" } }, { children: "tt" }), 2), (0, jsx_runtime_1.jsx)("li", Object.assign({ style: { padding: "5px" } }, { children: "ig" }), 3), (0, jsx_runtime_1.jsx)("li", Object.assign({ style: { padding: "5px" } }, { children: "WATCH" }), 4)] })) }))] }))] }), (0, jsx_runtime_1.jsxs)(MatchCard_styles_1.Scorer, { children: [(0, jsx_runtime_1.jsxs)("p", Object.assign({ style: {
                            color: "white",
                            // fontSize: "4rem",
                            margin: "0px 0px -8px 0px",
                            letterSpacing: "-1.5px",
                        } }, { children: [score, ":", score2] })), (0, jsx_runtime_1.jsx)("h6", Object.assign({ style: {
                            color: "#ff4f0e",
                        } }, { children: "24/5/2021" }))] }), (0, jsx_runtime_1.jsxs)(MatchCard_styles_1.CardContainer, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ id: "qlq", style: { width: "0px", borderColor: "black" } }, { children: (0, jsx_runtime_1.jsx)("img", { src: img2, style: { transform: "translate(15vw,-18%)", position: "sticky" }, alt: "wlw" }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: {
                            width: "100%",
                            height: "5vw",
                        } }, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ style: {
                                    border: "4px solid",
                                    borderRadius: "15px",
                                    fontSize: "32px",
                                    padding: "25px 55px 25px 5px",
                                    margin: "0",
                                    justifyContent: "flex-start",
                                    whiteSpace: "nowrap",
                                    display: "flex",
                                    textSizeAdjust: "100%",
                                } }, { children: name2 })), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: {
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    marginRight: "5px",
                                } }, { children: (0, jsx_runtime_1.jsxs)("ul", Object.assign({ style: {
                                        display: "flex",
                                        flexDirection: "row",
                                        listStyle: "none",
                                        margin: "0",
                                        width: "16em",
                                    } }, { children: [(0, jsx_runtime_1.jsx)("li", { style: { padding: "5px" } }, 5), (0, jsx_runtime_1.jsx)("li", Object.assign({ style: { padding: "5px" } }, { children: "tt" }), 6), (0, jsx_runtime_1.jsx)("li", Object.assign({ style: { padding: "5px" } }, { children: "ig" }), 7), (0, jsx_runtime_1.jsx)("li", Object.assign({ style: { padding: "5px" } }, { children: "WATCH" }), 8)] })) }))] }))] })] }));
};
exports.MatchCard = MatchCard;
