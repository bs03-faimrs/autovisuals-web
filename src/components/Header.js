import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Form } from 'react-bootstrap'

const Header = () => {

    return(
        <header>
            <Navbar bg="light" expand="lg">
                <LinkContainer to='/'>
                    <Navbar.Brand className='font-weight-bold'>Autovisuals</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <LinkContainer to ='/'>
                            <Navbar.Brand className='font-weight-bold' >Developer Console</Navbar.Brand>
                        </LinkContainer>
                    </Nav>
                    <Nav>
                        <LinkContainer to='/guide'>
                            <Nav.Link>Guide</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/documentation'>
                            <Nav.Link>Documentation</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/price'>
                            <Nav.Link>Pricing</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Navbar bg="light" expand="lg">
                <Nav className="ml-auto">
                    <Form inline>
                        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                </Nav>
            </Navbar>
        </header>
    )
}

export default Header