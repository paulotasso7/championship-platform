import { Nav, Logo, DropMenu, Menu, MenuLink } from "./Navbar.styles";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo>
        <Link to="/">
          champs<span>platform</span>
        </Link>
      </Logo>
      <DropMenu onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </DropMenu>
      <Menu isOpen={isOpen}>
        <MenuLink href="">Our Work</MenuLink>
        <MenuLink href="">News</MenuLink>
        <MenuLink href="">Champs</MenuLink>
        <MenuLink href="">
          <Link to="/login">Sign In</Link>
        </MenuLink>
      </Menu>
    </Nav>
  );
};
