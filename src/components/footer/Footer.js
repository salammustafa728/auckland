import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./Footer.css";
import { FaMobile,FaEnvelope } from "react-icons/fa";

export class footer extends Component {
  render() {
    return (
      <div>
        <Card className="text-center">
          {/* <Card.Header>Featured</Card.Header> */}
          <Card.Body>
            <div class="footer-clean">
              <footer>
                <div class="container">
                  <div class="row justify-content-left">
                  <div class="col-lg-3 item social">
                    <p className="main-footer__heading">Follow us on</p>
                      <a href="#">
                        <i class="icon ion-social-facebook"></i>
                      </a>
                      <a href="#">
                        <i class="icon ion-social-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="icon ion-social-snapchat"></i>
                      </a>
                      <a href="#">
                        <i class="icon ion-social-instagram"></i>
                      </a>
                      <p class="main-footer__heading">Get app exclusive deals</p>
                      <button className="footerbtn"><FaMobile/> Download our App</button>
                    </div>
                    <div class="col-sm-5 col-md-2 item">
                      <h3>GrabOne</h3>
                      <ul>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Terms & Returns</a>
                        </li>
                        <li>
                          <a href="#">Blog</a>
                        </li>
                        <li>
                          <a href="#">Gift Cards</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-sm-5 col-md-2 item">
                      <h3>My Account</h3>
                      <ul>
                        <li>
                          <a href="#">My Account</a>
                        </li>
                        <li>
                          <a href="#">My Coupons</a>
                        </li>
                        <li>
                          <a href="#">FAQ</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-sm-5 col-md-2 item">
                      <h3>Merchants</h3>
                      <ul>
                        <li>
                          <a href="#">Run a Deal</a>
                        </li>
                        <li>
                          <a href="#">Merchant Centre</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-sm-5 col-md-2 item">
                      <h3>Newsletter Signup</h3>
                      <ul>
                        <li>
                         <p>Sign up for our daily emails and we'll send you all the best deals, tailored for you.</p>
                        </li>
                        <li>
                        <div className="divSearch2">
                        <FaEnvelope className="emailIcon" />
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Email address"
                      />
                      <button className="btnSubscribe2">Subscribe</button>
                      </div>
                        </li>
                        
                      </ul>
                    </div>

                  </div>
                </div>
              </footer>
            </div>
          </Card.Body>
          <Card.Footer className="text-muted">
            Privacy Policy © 2022 GrabOne Limited{" "}
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default footer;
