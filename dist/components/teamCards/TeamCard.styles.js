"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.TeamContainer = styled_components_1.default.div `
  height: 420px;
  width: 229px;
  background: #0f0f0f;
  display: flex;
  justify-content: center;
  color: #ff4f0e;
  ul {
    list-style: none;
  }
  p {
    display: flex;
    justify-content: center;
  }
`;
