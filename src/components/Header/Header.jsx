import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import adidas_logo from '../../assets/msg689684673-74665.jpg'
import cart_logo from '../../assets/msg689684673-74670.jpg'

function Header() {
    return (
        <>

        <div className="header-container">
        <Navbar bg="white" expand="lg">
            <Container>
                <Navbar.Brand  href="/"><img id='logo_img' src={adidas_logo} alt="adidas-logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='/' className='item'>Home</Nav.Link>
                        <Nav.Link href='#man' className='item'>Man</Nav.Link>
                        <Nav.Link href='#women' className='item'>Women</Nav.Link>
                        <Nav.Link href='#kids' className='item'>Kids</Nav.Link>
                        <Nav.Link href='#cart' ><img id='cart_lg' src={cart_logo} alt="" /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>

        <div className="header-spacer"></div>

        </>
    );
}

export default Header;