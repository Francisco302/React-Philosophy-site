import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return(
    <Navbar className='nav-bar'  bg="light"  expand="lg" variant='light'>
      <Container>
        <Navbar.Brand href="#home">La cueva de Platon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='m-auto px-5'>
            <Nav.Link  href="#home">Historia</Nav.Link>
            <Nav.Link href="#link">Foro</Nav.Link>
            <Nav.Link href="#link">Libros</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
