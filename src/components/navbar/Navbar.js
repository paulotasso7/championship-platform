import { Nav, Logo, DropMenu, Menu, MenuLink } from "./Navbar.styles";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo href="">
        champs<span>platform</span>
      </Logo>
      <DropMenu onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </DropMenu>
      <Menu isOpen={isOpen}>
        <MenuLink href="">Our Work</MenuLink>
        <MenuLink href="">News</MenuLink>
        <MenuLink href="">Sign Up</MenuLink>
        <MenuLink href="">Login</MenuLink>
      </Menu>
    </Nav>
  );
};
