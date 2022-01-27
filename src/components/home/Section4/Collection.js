import React, { Component } from "react";
import "./Collection.css";
import Card from "react-bootstrap/Card";
import heart from "../../images/addheart.png";
import arrow from "../../images/back arrow.jpg";

export class Collection extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="Featured">
            <h1 className="titleSection">Collections </h1>
            <button className="btnView viwposition">
              View More <i class="fa fa-arrow-right"></i>
            </button>
          </div>
          <div>
            <div className="CardDiv1">
              <Card className="cardsStyle1">
              <figcaption className="card-desc">
                  <p>Free Shipping </p>
                </figcaption>
                <img
                  className="like"
                  src={heart}
                  alt="add to fav"
                  width="20px"
                />
                <Card.Img
                  variant="top"
                  src="https://mediacdn.grabone.co.nz/asset/0sgXNkite4"
                />
                <Card.Body>
                  <Card.Title className="decs">Free Shipping</Card.Title>
                  <Card.Text>
                    <p className="discription decs"> Multiple deals</p>
                    <button className="collectionBtn">View Collection</button>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="cardsStyle1">
              <figcaption className="card-desc">
                  <p>Back to school savings </p>
                </figcaption>
                <img
                  className="like"
                  src={heart}
                  alt="add to fav"
                  width="20px"
                />
                <Card.Img
                  variant="top"
                  src="https://mediacdn.grabone.co.nz/asset/9xE2t95LHj"
                />
                <Card.Body>
                  <Card.Title className="decs">
                    VR Formula 1 Racing Simulation Live Wire
                  </Card.Title>
                  <Card.Text>
                    <p className="discription decs">Auckland City </p>
                    <button className="collectionBtn">View Collection</button>
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
                  src="https://mediacdn.grabone.co.nz/asset/8NQfr4MKkS"
                />
                <Card.Body>
                  <Card.Title className="decs">
                    We've Got You Covered
                  </Card.Title>
                  <Card.Text>
                    <p className="discription decs"> Multiple deals</p>
                    <button className="collectionBtn">View Collection</button>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="cardsStyle1">
              <figcaption className="card-desc">
                  <p>Explore New Zealand </p>
                </figcaption>
                <img
                  className="like"
                  src={heart}
                  alt="add to fav"
                  width="20px"
                />
                <Card.Img
                  variant="top"
                  src="https://mediacdn.grabone.co.nz/asset/0H7amGtnwI"
                />
                <Card.Body>
                  <Card.Title className="decs">Explore New Zealand</Card.Title>
                  <Card.Text>
                    <p className="discription decs">Multiple deals </p>
                    <button className="collectionBtn">View Collection</button>
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

export default Collection;
