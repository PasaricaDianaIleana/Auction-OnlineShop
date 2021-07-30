import React from 'react'
import { Nav } from 'react-bootstrap'
import "../../Styles/GlobalStyle.css"
import logo from "../../Images/logo.webp";
import { Link } from "react-router-dom";
const Navbar = () => {

    return (
        <React.Fragment>
            <Nav className="navBar d-inline-flex position-relative align-items-center" style={{ zIndex: 3 }}>
                <Nav.Item >
                    <Nav.Link as={Link} to={`/`} className="text-white ">
                        <img src={logo} alt="logo" />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={`/`} className="text-white">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={`/buyItems`} className="text-white">Buy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={`/ItemSell`} className="text-white">Sell</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-white">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-white">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-white mt-3" style={{ marginLeft: 430 }}>Login/Register</Nav.Link>
                </Nav.Item>
            </Nav>
        </React.Fragment>
    )

}
export default Navbar;