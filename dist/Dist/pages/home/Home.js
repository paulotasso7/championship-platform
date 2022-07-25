"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//components import
const MatchCard_1 = require("../../components/matchCards/MatchCard");
const TeamCard_1 = require("../../components/teamCards/TeamCard");
//style imports
const Home_styles_1 = require("./Home.styles");
const MatchCard_styles_1 = require("../../components/matchCards/MatchCard.styles");
//carousel imports
const react_1 = require("swiper/react");
const swiper_1 = require("swiper");
require("swiper/css");
//data import
const teams_json_1 = __importDefault(require("/home/paulotasso/Projetos/championships-platform/src/data/teams.json"));
function Home() {
    return (React.createElement(Home_styles_1.HomeFlex, null, React.createElement(Home_styles_1.BannerContainer, { id: "container-test" }, React.createElement("img", { src: "https://cdn.wallpapersafari.com/42/75/d8ptQ3.jpg", alt: "home-banner" }), React.createElement("p", null, "CHAMPS", React.createElement("span", null), "platform")), React.createElement(Home_styles_1.CurrentMatches, { id: "matches-box" }, React.createElement(Home_styles_1.ButtonContainer, null, React.createElement(Home_styles_1.MatchLink, { key: 1 }, React.createElement(Home_styles_1.Button, null, "CURRENT MATCHES")), React.createElement(Home_styles_1.MatchLink, { key: 2 }, React.createElement(Home_styles_1.Button, { style: { display: "flex", justifySelf: "center" } }, "NEXT MATCHES")), React.createElement(Home_styles_1.MatchLink, { key: 3 }, React.createElement(Home_styles_1.Button, null, "RESULTS"))), teams_json_1.default.map((team, i) => {
        var _a, _b, _c, _d, _e;
        const name = (_a = teams_json_1.default[i]) === null || _a === void 0 ? void 0 : _a.name;
        const score = (_b = team === null || team === void 0 ? void 0 : team.matches[i]) === null || _b === void 0 ? void 0 : _b.score;
        const img = teams_json_1.default[i].imgs;
        const name2 = (_c = teams_json_1.default[i + 1]) === null || _c === void 0 ? void 0 : _c.name;
        const img2 = (_d = teams_json_1.default[i + 1]) === null || _d === void 0 ? void 0 : _d.imgs;
        const score2 = (_e = team === null || team === void 0 ? void 0 : team.matches[i + 1]) === null || _e === void 0 ? void 0 : _e.score;
        return (React.createElement(MatchCard_styles_1.CardSection, null, React.createElement(MatchCard_1.MatchCard, { name: name, score: score, img: img, name2: name2, img2: img2, score2: score2 })));
    })), React.createElement(react_1.Swiper, { className: "swiper", spaceBetween: 10, slidesPerView: 4, loop: false, centerInsufficientSlides: false, centeredSlides: true, centeredSlidesBounds: true, autoplay: true, speed: 1000, pagination: true, modules: [swiper_1.Autoplay], style: {
            width: "60%",
            margin: "0",
            display: "flex",
            flexDirection: "row",
            height: "320px",
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: "50px",
            transform: "none",
        } }, teams_json_1.default.map((team, i) => {
        const name = teams_json_1.default[i].name;
        const img = teams_json_1.default[i].imgs;
        return (React.createElement(react_1.SwiperSlide, null, React.createElement(TeamCard_1.TeamCard, { teamName: name, teamImg: img, style: {
                backgroundColor: "green",
                color: "black",
                // margin: "20px",
            } })));
    })), React.createElement(Home_styles_1.PartnersDiv, null, React.createElement("h1", null, "OUR PARTNERS"), React.createElement("ul", null, React.createElement("li", { key: "p1" }, "PARTNER1"), React.createElement("li", { key: "p2" }, "PARTNER2"), React.createElement("li", { key: "p3" }, "PARTNER3")))));
}
exports.default = Home;
