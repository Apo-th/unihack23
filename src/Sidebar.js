import React from 'react';
import {Nav, Navbar, NavItem, Offcanvas, Container} from 'react-bootstrap';

const Navbar = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home">Ca$h Cam</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
            </Container>
                
        </Navbar>
        </>
    );
}
