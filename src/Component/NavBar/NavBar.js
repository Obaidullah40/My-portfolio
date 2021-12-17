import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import headerImg from "../../images/logos.png";
import './NavBar.css'


const NavBar = () => {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            sticky="top"
        >
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={headerImg}
                        alt=""
                        className="footer__img pointer"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse
                    id="responsive-navbar-nav"
                    style={{ justifyContent: "right" }}
                >
                    <Nav className="texts">
                        <Nav.Link as={HashLink} to="#Home">
                            Home
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="#About">
                            About
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="#Service">
                            Service
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="#Projects">
                            Projects
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="#Skill">
                            Skill
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="#Blog">
                            Blog
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="#Contact">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;