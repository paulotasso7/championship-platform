"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropMenu = exports.Menu = exports.Logo = exports.Nav = exports.MenuLink = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.MenuLink = styled_components_1.default.div `
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #ff4f0e;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #7b7fda;
  }
`;
exports.Nav = styled_components_1.default.div `
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  top: 0;
  left: 0;
  right: 0;
  height: 20vh;
  z-index: 999;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
`;
exports.Logo = styled_components_1.default.div `
  padding: 1rem 0;
  color: #ff4f0e;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;
exports.Menu = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;
exports.DropMenu = styled_components_1.default.div `
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #ff7600;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
