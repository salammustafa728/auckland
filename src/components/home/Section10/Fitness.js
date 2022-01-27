import React, { Component } from 'react';
import './Fitness.css';
import Card from "react-bootstrap/Card";
import heart from "../../images/addheart.png";
import arrow from "../../images/back arrow.jpg";
export class Fitness extends Component {
  render() {
    return <div>
        <div>
          <div className="Featured">
            <h1 className="titleSection">Fitness & Sports </h1>
            <button className="btnView">
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/620b36b3f4dc85a34f93d111b80dea90893325b3.jpg"
                />
                <Card.Body>
                  <Card.Title>Mini Exercise Trampoline </Card.Title>
                  <Card.Text>
                    <p className="cost"> from </p>
                    <p className="costStyle">$65</p>
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/a8cbbfbc091b9361ae56056553b8960471513fca.jpg"
                />
                <Card.Body>
                  <Card.Title>
                  Rowing Machine
                  </Card.Title>
                  <Card.Text>
                    <p className="discription">
                    TSB Living
                    </p>
                    <p className="cost"> from </p>
                    <p className="costStyle"> $162 </p>
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/583db4ff46366a1ddb94319242e520659264f7e1.jpg"
                />
                <Card.Body>
                  <Card.Title>Fitness Suspension Belt Set</Card.Title>
                  <Card.Text>
                    <p className="subTitle"> 2 bought </p>
                    <p className="cost"> from </p>
                    <p className="costStyle">$30 </p>
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/65ec4b36582fd30b5657d6cbabf9cef62612a168.jpg"
                />
                <Card.Body>
                  <Card.Title>Breathing Resistance Workout Mask</Card.Title>
                  <Card.Text>
                    <p className="subTitle"> 1 bought </p>
                    <p className="cost"> from </p>
                    <p className="costStyle">$49 </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
    </div>;
  }
}

export default Fitness;
