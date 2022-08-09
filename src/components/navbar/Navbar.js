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
        <MenuLink href="" onClick={() => setIsOpen(!isOpen)}>
          Our Work
        </MenuLink>
        <MenuLink href="" onClick={() => setIsOpen(!isOpen)}>
          News
        </MenuLink>
        <MenuLink href="" onClick={() => setIsOpen(!isOpen)}>
          Champs
        </MenuLink>
        <MenuLink href="" onClick={() => setIsOpen(!isOpen)}>
          <Link to="/login">Login</Link>
        </MenuLink>
      </Menu>
    </Nav>
  );
};
