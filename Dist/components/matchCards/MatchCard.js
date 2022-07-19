"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchCard = void 0;
const MatchCard_styles_1 = require("./MatchCard.styles");
const MatchCard = ({ name, score, img, name2, img2, score2 }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(MatchCard_styles_1.CardContainer, null,
            React.createElement("div", { id: "qlq", style: {
                    width: "0",
                    position: "sticky",
                    borderColor: "black",
                } },
                React.createElement("img", { src: img, style: { transform: "translate(-5vw,-18%)" }, alt: "wlw" })),
            React.createElement("div", { style: {
                    width: "100%",
                    height: "5vw",
                    minWidth: "200px",
                } },
                React.createElement("p", { style: {
                        border: "4px solid",
                        borderRadius: "15px",
                        fontSize: "32px",
                        padding: "25px 5px 25px 55px",
                        margin: "0",
                        justifyContent: "flex-end",
                        whiteSpace: "nowrap",
                        display: "flex",
                        textSizeAdjust: "100%",
                    } }, name),
                React.createElement("div", { style: {
                        display: "flex",
                        justifyContent: "flex-end",
                        marginRight: "5px",
                    } },
                    React.createElement("ul", { style: {
                            display: "flex",
                            flexDirection: "row",
                            listStyle: "none",
                            margin: "0",
                            width: "16em",
                        } },
                        React.createElement("li", { key: 1, style: { padding: "5px" } }),
                        React.createElement("li", { key: 2, style: { padding: "5px" } }, "tt"),
                        React.createElement("li", { key: 3, style: { padding: "5px" } }, "ig"),
                        React.createElement("li", { key: 4, style: { padding: "5px" } }, "WATCH"))))),
        React.createElement(MatchCard_styles_1.Scorer, null,
            React.createElement("p", { style: {
                    color: "white",
                    // fontSize: "4rem",
                    margin: "0px 0px -8px 0px",
                    letterSpacing: "-1.5px",
                } },
                score,
                ":",
                score2),
            React.createElement("h6", { style: {
                    color: "#ff4f0e",
                } }, "24/5/2021")),
        React.createElement(MatchCard_styles_1.CardContainer, null,
            React.createElement("div", { id: "qlq", style: { width: "0px", borderColor: "black" } },
                React.createElement("img", { src: img2, style: { transform: "translate(15vw,-18%)", position: "sticky" }, alt: "wlw" })),
            React.createElement("div", { style: {
                    width: "100%",
                    height: "5vw",
                } },
                React.createElement("p", { style: {
                        border: "4px solid",
                        borderRadius: "15px",
                        fontSize: "32px",
                        padding: "25px 55px 25px 5px",
                        margin: "0",
                        justifyContent: "flex-start",
                        whiteSpace: "nowrap",
                        display: "flex",
                        textSizeAdjust: "100%",
                    } }, name2),
                React.createElement("div", { style: {
                        display: "flex",
                        justifyContent: "flex-end",
                        marginRight: "5px",
                    } },
                    React.createElement("ul", { style: {
                            display: "flex",
                            flexDirection: "row",
                            listStyle: "none",
                            margin: "0",
                            width: "16em",
                        } },
                        React.createElement("li", { key: 5, style: { padding: "5px" } }),
                        React.createElement("li", { key: 6, style: { padding: "5px" } }, "tt"),
                        React.createElement("li", { key: 7, style: { padding: "5px" } }, "ig"),
                        React.createElement("li", { key: 8, style: { padding: "5px" } }, "WATCH")))))));
};
exports.MatchCard = MatchCard;
