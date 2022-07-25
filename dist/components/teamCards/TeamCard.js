"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const TeamCard_styles_1 = require("./TeamCard.styles");
const TeamCard = ({ teamName, teamImg }) => {
    return ((0, jsx_runtime_1.jsx)(TeamCard_styles_1.TeamContainer, { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("img", { src: teamImg, alt: "team-logo", style: {
                        height: "80px",
                        width: "80px",
                        minHeight: "80px",
                        minWidth: "80px",
                        margin: "20px",
                    } }), (0, jsx_runtime_1.jsx)("p", { children: teamName }), (0, jsx_runtime_1.jsxs)("ul", Object.assign({ style: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        padding: "0",
                        marginTop: "25px",
                        color: "orange",
                    } }, { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("svg", Object.assign({ style: { color: "white", height: "20px" }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" }) })) }), (0, jsx_runtime_1.jsx)("li", Object.assign({ style: { padding: "0px 8px 0px 8px" } }, { children: (0, jsx_runtime_1.jsx)("svg", Object.assign({ style: { color: "white", height: "20px" }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z" }) })) })), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("svg", Object.assign({ style: { color: "white", height: "20px" }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" }) })) })] }))] }) }));
};
exports.TeamCard = TeamCard;