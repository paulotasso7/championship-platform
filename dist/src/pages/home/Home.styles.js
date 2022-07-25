"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnersDiv = exports.Button = exports.ButtonContainer = exports.HomeFlex = exports.MatchLink = exports.CurrentMatches = exports.BannerContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.BannerContainer = styled_components_1.default.div `
  text-align: center;
  color: #ff4f0e;
  z-index: -1;
  font-size: 5vw;
  height: 75vh;

  img {
    width: 100vw;
    max-width: 100%;
    height: 75vh;
  }
  p {
    transform: translateY(-40vh);
    overflow: hidden;
    z-index: -1;
    margin: 0;
  }
  @media (max-width: 768px) {
    min-height: 200px;
  }
`;
exports.CurrentMatches = styled_components_1.default.section `
  background: black;
  width: 80%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    position: initial;
    width: 80%;
    display: flex;
    flex-direction: column;
    box-sizing: content-box;
  }
  @media (min-width: 1750px) {
    position: initial;
    width: 60%;
    display: flex;
    flex-direction: column;
    box-sizing: content-box;
  }
`;
exports.MatchLink = styled_components_1.default.li `
  color: orange;
  margin: 0px 0px 0px 0px;
  text-decoration: none;
  list-style: none;
  padding: 0px 0px 0px 0px;
  @media (max-width: 768px) {
    margin: 0px 0px 0px 0px;
    flex-wrap: nowrap;
  }
`;
exports.HomeFlex = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
`;
exports.ButtonContainer = styled_components_1.default.ul `
  background-color: #0f0f0f;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  padding: 0px;
  @media (max-width: 768px) {
    top: 15px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: center;
    margin: 0px;
    height: fit-content;
    position: "absolute";
    margin-left: auto;
    margin-right: auto;
    background-color: black;
  }
`;
exports.Button = styled_components_1.default.button `
  background: #0e0e0e;
  font-size: 18px;
  color: #ff4f0e;
  text-decoration: none;
  white-space: nowrap;
  border: none;
  display: flex;
  justify-items: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    min-width: 25 0px;
    max-width: 250px;
    background: black;

    width: 100%;
    display: flex;
    justify-content: center;
    height: 50px;
    align-items: center;
  }

  :focus {
    color: #0f0f0f;
    background-color: #ff4f0e;
    height: 50px;
    padding: 30px;
    display: flex;
    clip-path: polygon(0% 0%, 100% 0, 100% 0, 85% 100%, 0% 100%);
  }
`;
exports.PartnersDiv = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  align-items: center;
  height: 300px;
  border: 2px white dotted;
  margin-left: auto;
  margin-right: auto;

  ul {
    list-style: none;
    padding: 0;
    flex-direction: row;
    display: flex;
  }

  li:nth-child(2) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;
