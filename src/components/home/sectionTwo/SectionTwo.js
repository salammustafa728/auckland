import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaEnvelope } from "react-icons/fa";
import './Sectiontwo.css'
export class SectionTwo extends Component {
  render() {
    return (
      <div>
        <Container className="containerTwo">
          <Row>
            <Col md="auto">
             <p className="ptext"> Get the best deals delivered direct to your inbox each day</p>
            </Col>
            <Col xs lg="2">
              <div class="container2">
                <div class="">
                  <div class="col-md-8">
                    <div class="">
                      <FaEnvelope className="fa-search searchIcon" />
                     
                      <div className="divSearch">
                      <input
                        type="text"
                        class="email-subscription__input"
                        placeholder="Enter Email address"
                      />
                      <button className="btnSubscribe">Subscribe</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SectionTwo;
