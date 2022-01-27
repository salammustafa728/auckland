import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SectionOne.css";
import DiscoveList from "./DiscoveList";
import Card from "react-bootstrap/Card";
import heart from '../../images/addheart.png'
export class SectionOne extends Component {
  render() {
    return (
      <div>
        <div className="headerimage">
          <img
            src="https://mediacdn.grabone.co.nz/asset/ocjYrPupqi"
            alt="valentain"
            width="90%"
          />
        </div>
        <Container className="containerOne">
          <Row className="">
            <Col>
              {/* list */}
              <DiscoveList />
            </Col>
            <Col md="auto" className="cardCol">
              {/* card 1 */}
              <Card className="cardsStyle">
                <figcaption className="card-desc">
                  <p>HelloFresh Special Offer - Up to $50 OFF Your First Box, $80 OFF Your First Two Boxes, or $100 OFF Your First Four Boxes - Your Choice of Meat & Veggie, Veggie or Family-Friendly Recipes Available</p>
                </figcaption>
              <img className="like" src={heart} alt="add to fav" width='20px'/>
                <Card.Img
                  variant="top"
                  src="//main-cdn.grabone.co.nz/goimage/495x343/80cc4d54b52dcc5b3f416fc5a7b7af9c1bb0e65b.jpg"
                />
                <Card.Body>
                  <Card.Title>Clean & Service for Heat Pump</Card.Title>
                  <Card.Text>
                  <p className="discription"> First Class Airconditioning Auckland </p> 
                   <p className="subTitle"> 102 bought </p>
                    <p className="cost"> from </p>
                    <p className="costStyle">$55 </p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="cardsStyle">
              <figcaption className="card-desc">
                  <p>50-Pack Disposable Face Masks </p>
                </figcaption>
              <img className="like" src={heart} alt="add to fav" width='20px'/>
                <Card.Img
                  variant="top"
                  src="//main-cdn.grabone.co.nz/goimage/495x343/38ffd726dce59db01205a72844f2e307caf398cb.jpg"
                />
                
                <Card.Body>
                  <Card.Title> Hair Package at Hairdotcom</Card.Title>
                  <Card.Text>
                   <p className="discription">Hairdotcom Mount Wellington</p>  
                   <p className="subTitle"> 6 bought </p>
                   <p className="cost"> from  </p>
                   <p className="costStyle">$129</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="auto">
              {/* card 2 */}
             
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SectionOne;
