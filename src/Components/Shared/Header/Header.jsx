import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/">
                    <span className="abril-font text-green
                    fs-3">
                        Monir
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/work">Work</Nav.Link>
                        <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                        <a className="navbar-nav text-decoration-none" href="https://drive.google.com/file/d/1qqZNHgnwUDfp7Zoq3_LBhA2Q3Uj9oRxf/view" target="_blank" rel="noopener noreferrer">
                            <Button type="submit" variant="outline-success">Resume</Button>
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;