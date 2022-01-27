import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import heart from "../../images/addheart.png";
import arrow from "../../images/back arrow.jpg";
import './Automotive.css'
export class Automotive extends Component {
  render() {
    return <div>
         <div>
          <div className="Featured">
            <h1 className="titleSection">Automotive</h1>
            <button className="btnView viwposition">
              View More <i class="fa fa-arrow-right"></i>
            </button>
          </div>
          <div>
            <div className="CardDiv1">
              <Card className="cardsStyle1">
              <figcaption className="card-desc">
                  <p>Facial - Options for Bubble Instrument Treatment, Full Body Massage, or Facial & Massage Combo, & Options for Two People</p>
                </figcaption>
                <img
                  className="like"
                  src={heart}
                  alt="add to fav"
                  width="20px"
                />
                <Card.Img
                  variant="top"
                  src="//main-cdn.grabone.co.nz/goimage/325x225/7f8519fadf8f5ca137f882316191d15d5c70e178.jpg"
                />
                <Card.Body>
                  <Card.Title>Bluetooth FM Transmitter  </Card.Title>
                  <Card.Text>
                  <p className="discription">
                  Urban Global Ltd
                    </p>
                    <p className="cost"> from </p>
                    <p className="costStyle"> $20</p>
                    <p className="discount"><s>$35</s></p>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="cardsStyle1">
              <figcaption className="card-desc">
                  <p>Facial - Options for Bubble Instrument Treatment, Full Body Massage, or Facial & Massage Combo, & Options for Two People</p>
                </figcaption>
                <img
                  className="like"
                  src={heart}
                  alt="add to fav"
                  width="20px"
                />
                <Card.Img
                  variant="top"
                  src="//main-cdn.grabone.co.nz/goimage/325x225/157c5337d933f885c87a3fa099744b9e05a1a8ac.jpg"
                />
                <Card.Body>
                  <Card.Title>
                  Comprehensive Service for Japanese Car 
                  </Card.Title>
                  <Card.Text>
                    <p className="discription">
                    Mairangi Automotive<p className="subtitle1">Rosedale</p>
                    </p>
                    <p className="cost"> from </p>
                    <p className="costStyle"> $99 </p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="cardsStyle1">
              <figcaption className="card-desc">
                  <p>Facial - Options for Bubble Instrument Treatment, Full Body Massage, or Facial & Massage Combo, & Options for Two People</p>
                </figcaption>
                <img
                  className="like"
                  src={heart}
                  alt="add to fav"
                  width="20px"
                />
                <Card.Img
                  variant="top"
                  src="//main-cdn.grabone.co.nz/goimage/325x225/69c582abf85c9585a773d836a8c7115633091099.jpg"
                />
                <Card.Body>
                  <Card.Title>Comprehensive Mobile Car Service</Card.Title>
                  <Card.Text>
                  <p className="discription">
                  Carologist Limited
                    </p>
                    <p className="subTitle"> 80 bought </p>
                    <p className="cost"> from </p>
                    <p className="costStyle">$99 </p>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="cardsStyle1">
              <figcaption className="card-desc">
                  <p>Facial - Options for Bubble Instrument Treatment, Full Body Massage, or Facial & Massage Combo, & Options for Two People</p>
                </figcaption>
                <img
                  className="like"
                  src={heart}
                  alt="add to fav"
                  width="20px"
                />
                <Card.Img
                  variant="top"
                  src="//main-cdn.grabone.co.nz/goimage/325x225/0c815e37107ce382feca65fa7f19f01993d3c7f9.jpg"
                />
                <Card.Body>
                  <Card.Title>Car Vacuum Cleaner</Card.Title>
                  <Card.Text>
                    <p className="subTitle"> 58 bought </p>
                    <p className="cost"> from </p>
                    <p className="costStyle">$15 </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
    </div>;
  }
}

export default Automotive;
