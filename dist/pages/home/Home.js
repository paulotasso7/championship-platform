"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
//components import
const MatchCard_1 = require("../../components/matchCards/MatchCard");
const TeamCard_1 = require("../../components/teamCards/TeamCard");
//style imports
const Home_styles_1 = require("./Home.styles");
//carousel imports
const react_1 = require("swiper/react");
const swiper_1 = require("swiper");
require("swiper/css");
//data import
const teams_json_1 = __importDefault(require("/home/paulotasso/Projetos/championships-platform/src/data/teams.json"));
const swiperProps = {
    spaceBetween: 10,
    slidesPerView: 3,
    loop: false,
    centerInsufficientSlides: false,
    centeredSlides: true,
    centeredSlidesBounds: true,
    autoplay: true,
    speed: 1000,
    pagination: true,
    modules: [swiper_1.Autoplay],
    style: {
        width: "60%",
        margin: "0",
        display: "flex",
        flexDirection: "row",
        height: "320px",
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: "50px",
        transform: "none",
    },
};
function Home() {
    const matchCardRender = teams_json_1.default.map((team, i) => {
        var _a, _b, _c, _d, _e;
        const matchData = {
            name: (_a = teams_json_1.default[i]) === null || _a === void 0 ? void 0 : _a.name,
            score: (_b = team === null || team === void 0 ? void 0 : team.matches[i]) === null || _b === void 0 ? void 0 : _b.score,
            img: teams_json_1.default[i].imgs,
            name2: (_c = teams_json_1.default[i + 1]) === null || _c === void 0 ? void 0 : _c.name,
            img2: (_d = teams_json_1.default[i + 1]) === null || _d === void 0 ? void 0 : _d.imgs,
            score2: (_e = team === null || team === void 0 ? void 0 : team.matches[i + 1]) === null || _e === void 0 ? void 0 : _e.score,
        };
        return ((0, jsx_runtime_1.jsx)(Home_styles_1.CardSection, { children: (0, jsx_runtime_1.jsx)(MatchCard_1.MatchCard, { name: matchData.name, score: matchData.score, img: matchData.img, name2: matchData.name2, img2: matchData.img2, score2: matchData.score2 }) }));
    });
    const teamCardRender = teams_json_1.default.map((team, i) => {
        const name = teams_json_1.default[i].name;
        const img = teams_json_1.default[i].imgs;
        return ((0, jsx_runtime_1.jsx)(react_1.SwiperSlide, { children: (0, jsx_runtime_1.jsx)(TeamCard_1.TeamCard, { teamName: name, teamImg: img }) }));
    });
    return ((0, jsx_runtime_1.jsxs)(Home_styles_1.HomeFlex, { children: [(0, jsx_runtime_1.jsxs)(Home_styles_1.BannerContainer, { children: [(0, jsx_runtime_1.jsx)("img", { src: "https://cdn.wallpapersafari.com/42/75/d8ptQ3.jpg", alt: "home-banner" }), (0, jsx_runtime_1.jsxs)("p", { children: ["CHAMPS", (0, jsx_runtime_1.jsx)("span", {}), "platform"] })] }), (0, jsx_runtime_1.jsxs)(Home_styles_1.CurrentMatches, { children: [(0, jsx_runtime_1.jsxs)(Home_styles_1.ButtonContainer, { children: [(0, jsx_runtime_1.jsx)(Home_styles_1.MatchLink, { children: (0, jsx_runtime_1.jsx)(Home_styles_1.Button, { children: "CURRENT MATCHES" }) }, 1), (0, jsx_runtime_1.jsx)(Home_styles_1.MatchLink, { children: (0, jsx_runtime_1.jsx)(Home_styles_1.Button, { children: "NEXT MATCHES" }) }, 2), (0, jsx_runtime_1.jsx)(Home_styles_1.MatchLink, { children: (0, jsx_runtime_1.jsx)(Home_styles_1.Button, { children: "RESULTS" }) }, 3)] }), matchCardRender] }), (0, jsx_runtime_1.jsx)(react_1.Swiper, Object.assign({}, swiperProps, { children: teamCardRender })), (0, jsx_runtime_1.jsxs)(Home_styles_1.PartnersDiv, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "OUR PARTNERS" }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: "PARTNER1" }, "p1"), (0, jsx_runtime_1.jsx)("li", { children: "PARTNER2" }, "p2"), (0, jsx_runtime_1.jsx)("li", { children: "PARTNER3" }, "p3")] })] }), "s"] }));
}
exports.default = Home;
