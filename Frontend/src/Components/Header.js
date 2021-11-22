import React from 'react';
import { Nav, Navbar, NavItem , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import Badge from "@material-ui/core/Badge";

const Header = (props) => (
  <div>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Vocabulary</Navbar.Brand>
      <Nav className="me-auto">
      </Nav>
    </Navbar>
  </div>
);

export default Header;

