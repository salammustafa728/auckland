import React from "react";
import "./SecoundNav.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaSearch } from "react-icons/fa";
import DropDownList from "./DropDownList";
import { useMediaQuery } from 'react-responsive';
// images
import cart from "../images/shopping-cart2.png";
import home from "../images/home.png";
import user from "../images/user2.png";
const SecoundNav = () => {
  return (
    <div className="maindiv">
      <Nav activeKey="1">
        <DropDownList />
        <Nav.Item>
          <Nav.Link eventKey="1" href="#/home">
            <p className="txt"> What's New </p>
            <div className="icondisplay">
              <img className="imgIcon" src={home} alt="user" width="25px" />
              <p>Home</p>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" title="Item">
            <p className="txt"> Trending</p>
            <div className="icondisplay">
              <img className="imgIcon" src={user} alt="user" width="25px" />
              <p>Account</p>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3">
            <p className="txt">For You</p>
            <div className="icondisplay">
              <img className="imgIcon cart2" src={cart} alt="user" width="25px" />
              <p>Cart</p>
            </div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="searchDiv">
        <div class="container">
          <div class="">
            <div class="col-md-8">
              <div class="search">
                <FaSearch className="fa-search" />
                <p className="SearchTxt">Search</p>{" "}
                <input
                  type="text"
                  class="form-control"
                  placeholder="searh..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecoundNav;
