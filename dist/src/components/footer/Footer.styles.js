"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.FooterContainer = styled_components_1.default.div `
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  position: relative;
  bottom: 0;
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
  }
  li {
    padding: 10px;
  }
`;
