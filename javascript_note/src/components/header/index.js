import React from 'react'
import {Navbar, Container, Column} from 'rbx'
import logoImage from '../../assets/images/logo.png'
import '../../styles/header.scss'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        <img src={logoImage} />
                    </Link>
                    <Navbar.Burger
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbar-menu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Navbar.Burger>
                </Navbar.Brand>

                <Navbar.Menu id="navbar-menu">
                    <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
                        Item 1 
                    </Navbar.Segment>
                </Navbar.Menu>
            </Container>
        </Navbar>

    )
}

export default Header