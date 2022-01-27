import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import heart from "../images/heart.png";
import location from "../images/location.png";
import cart from "../images/shopping-cart.png";
import user from "../images/user.png";
import mail from "../images/mail.png";
import "./nav.css";
const Navbarr = () => {
  return (
    <div className="navContainer">
       <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className="logo" href="#home">
            GrabOne
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavDropdown
                id="collasible-nav-dropdown"
                title={
                  <span>
                    <img src={location} alt="location" width="25px" /> auckland
                  </span>
                }
              >
                <img src={user} alt="user" width="25px" />
                <NavDropdown.Item href="#action/3.1">Auckland</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Aucland Wai Kato
                </NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  Wellington
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Northland
                </NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Manawatu - Wanganui
                </NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Tanranga</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Roto rua-Taupo
                </NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Hawkes Bay
                </NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  christchurch Taranaki
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Nelson-Mar Ibolough
                </NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Queenstown - Wanaka
                </NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  Dunedin- Invercargill
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link className="liRigth2" href="#pricing">
                <img src={heart} alt="like" width="25px" />
              </Nav.Link>
              <Nav.Link  className="liRigth2" href="#pricing">
                <img src={cart} alt="like" width="25px" />
              </Nav.Link>
              <NavDropdown  className="liRigth2"
                id="collasible-nav-dropdown"
                title={
                  <span>
                    <img src={user} alt="user" width="25px" />
                  </span>
                }
              >
                <img src={user} alt="user" width="25px" />
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                My Account
                </NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                Gifts
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                profile
                </NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                My Subscriptions
                </NavDropdown.Item> <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                My purchases
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                Login
                </NavDropdown.Item><NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link  className="liRigth2" href="#deets">
                <img src={mail} alt="user" width="25px" /> Subscribe
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
