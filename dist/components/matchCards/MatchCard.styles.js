"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scorer = exports.CardSection = exports.CardContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.CardContainer = styled_components_1.default.div `
  height: 90px;
  width: 400px;
  background: #0f0f0f;
  color: #ff4f0e;
  border-radius: 15px;
  display: flex;
  @media (max-width: 768px) {
    margin: 10px;
    width: 400px;
    font-size: 1rem;
  }
`;
exports.CardSection = styled_components_1.default.div `
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
exports.Scorer = styled_components_1.default.div `
  background: black;
  height: 150px;
  width: 30%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 4rem;
  }
  @media (max-width: 768px) {
    margin: 10px;
    width: 100%;
    p {
      font-size: 3rem;
    }
    h6 {
      font-size: 1rem;
      align-self: center;
      margin: 15px;
    }
  }
`;
