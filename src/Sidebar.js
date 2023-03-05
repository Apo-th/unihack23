import React from 'react';
import {Nav, Navbar,  Offcanvas, Container, CloseButton} from 'react-bootstrap';
import {Camera,House,Chat,BarChartLine, CashCoin} from 'react-bootstrap-icons';


const Sidebar = () => {
    const [show, setShow] = React.useState(false);
    const toggleOffcanvas = () => setShow(!show)
    return (
        <>
        <Navbar bg="dark" variant="dark" expand="false" collapseOnSelect>
            <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={toggleOffcanvas} />
                <Navbar.Brand href="#home" id="offcanvasNavbarLabel"><CashCoin/> Expense Mate</Navbar.Brand>
                <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="start" show={show}>
                    <Offcanvas.Header>
                        <Offcanvas.Title id="offcanvasNavbarLabel"><CashCoin/> Expense Mate</Offcanvas.Title>
                        <CloseButton onClick={toggleOffcanvas} variant="white"/>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-3 pe-3" onSelect={toggleOffcanvas}>
                            <Nav.Link id="navbtn" href="#action1"> <House size="30"/> Home</Nav.Link>
                            <Nav.Link id="navbtn" href="#action2"><Chat size="30"/>           Advisor</Nav.Link>
                            <Nav.Link id="navbtn" href="#action3"><BarChartLine size="30"/>           Analytics</Nav.Link>
                            <Nav.Link id="navbtn" href="#action4"><Camera size="30"/>         Scan</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
                
        </Navbar>
        </>
    );
}
export default Sidebar;