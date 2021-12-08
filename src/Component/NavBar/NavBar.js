import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './NavBar.css'


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
            <Navbar.Brand href="#home"><span className="fs-2 fw-bold">Naz<span className="text-danger fs-3 fw-bold d-inline">mul.</span></span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent: 'right'}}>
                <Nav className="texts">
                <Nav.Link as={HashLink} to="#Home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="#About">About</Nav.Link>
                    <Nav.Link as={HashLink} to="#Service">Service</Nav.Link>
                    <Nav.Link as={HashLink} to="#Projects">Projects</Nav.Link>
                    <Nav.Link as={HashLink} to="#Skill">Skill</Nav.Link>
                    <Nav.Link as={HashLink} to="#Blog">Blog</Nav.Link>
                    <Nav.Link as={HashLink} to="#Contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default NavBar;