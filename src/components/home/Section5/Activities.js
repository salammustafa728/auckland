import React, { Component } from "react";
import "./Activities.css";
import Card from "react-bootstrap/Card";
import heart from "../../images/addheart.png";
import arrow from "../../images/back arrow.jpg";

export class Activities extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="Featured">
            <h1 className="titleSection">Activities, Events & Outdoors </h1>
            <button className="btnView btnActivites">
              View More <i class="fa fa-arrow-right"></i>
            </button>
          </div>
          <div>
            <div className="CardDiv1">
              <Card className="cardsStyle1">
              <figcaption className="card-desc">
                  <p>we've got you Covered </p>
                </figcaption>
                <img
                  className="like"
                  src={heart}
                  alt="add to fav"
                  width="20px"
                />
                <Card.Img
                  variant="top"
                  src="//main-cdn.grabone.co.nz/goimage/325x225/00aada84348fb8ae6fbaaee47d4f5e8b4baf1f2e.jpg"
                />
                <Card.Body>
                  <Card.Title>Portable Family Beach Canopy </Card.Title>
                  <Card.Text>
                    <p className="discription"> </p>
                    <p className="subTitle"> 105 bought </p>
                    <p className="cost"> from </p>
                    <p className="costStyle">$139 </p>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="cardsStyle1">
              <figcaption className="card-desc">
                  <p>we've got you Covered </p>
                </figcaption>
                <img
                  className="like"
                  src={heart}
                  alt="add to fav"
                  width="20px"
                />
                <Card.Img
                  variant="top"
                  src="//main-cdn.grabone.co.nz/goimage/325x225/ec1e844b718e1edcb2f4d3f6f116d7f5a229ab73.jpg"
                />
                <Card.Body>
                  <Card.Title>Amuri Jet Boat Ride</Card.Title>
                  <Card.Text>
                    <p className="discription">
                      Amuri Jet Adventures Hanmer Springs Hanmer Springs{" "}
                    </p>
                    <p className="subTitle"> 211 bought </p>
                    <p className="cost112"> from </p>
                    <p className="costStyle"> $40 </p>
                    <p className="discount"><s>$130</s></p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="cardsStyle1">
              <figcaption className="card-desc">
                  <p>we've got you Covered </p>
                </figcaption>
                <img
                  className="like"
                  src={heart}
                  alt="add to fav"
                  width="20px"
                />
                <Card.Img
                  variant="top"
                  src="//main-cdn.grabone.co.nz/goimage/325x225/98f31ac1bbc3ea4db56e91e038e8688643c2a3b0.jpg"
                />
                <Card.Body>
                  <Card.Title>
                    Amuri Jet Boat Ride with Meal Voucher Amuri Jet Adventures
                    Hanmer Springs
                  </Card.Title>
                  <Card.Text>
                    <p className="discription"> Hanmer Springs </p>
                    <p className="subTitle"> 50 bought </p>
                    <p className="cost112"> from </p>
                    <p className="costStyle"> $60 </p>
                    <p className="discount"><s>$160</s></p>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="cardsStyle1">
              <figcaption className="card-desc">
                  <p>we've got you Covered </p>
                </figcaption>
                <img
                  className="like"
                  src={heart}
                  alt="add to fav"
                  width="20px"
                />
                <Card.Img
                  variant="top"
                  src="//main-cdn.grabone.co.nz/goimage/325x225/fa47314cb1900dbe0e5e8fef8d2215617b7e6915.jpg"
                />
                <Card.Body>
                  <Card.Title>Inflatable SUP Paddleboard</Card.Title>
                  <Card.Text>
                    <p className="discription"> </p>
                    <p className="subTitle"> 24 bought </p>
                    <p className="cost"> from </p>
                    <p className="costStyle">$479 </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Activities;
