import React, { Component } from 'react';
import './House.css';
import Card from "react-bootstrap/Card";
import heart from "../../images/addheart.png";
import arrow from "../../images/back arrow.jpg";
export class House extends Component {
  render() {
    return <div>
         <div>
          <div className="Featured">
            <h1 className="titleSection">House & Garden  </h1>
            <button className="btnView">
              View More <i class="fa fa-arrow-right"></i>
            </button>
          </div>
          <div>
            <div className="CardDiv1">
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/76810a897bfdcaad5e48066b22c8bdd092ee7396.jpg"
                />
                <Card.Body>
                  <Card.Title>Bentwood Office Chair  </Card.Title>
                  <Card.Text>
                    <p className="discription">
                      {" "}
                      TSB Living
                    </p>
                    <p className="cost"> from </p>
                    <p className="costStyle">$160</p>
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/7169aa692401d6a34de24eb6410c4740eb3a6459.jpg"
                />
                <Card.Body>
                  <Card.Title>
                  Urban Bedside Table
                  </Card.Title>
                  <Card.Text>
                    <p className="discription">
                    Sue-e Furniture
                    </p>
                    <p className="cost"> from </p>
                    <p className="costStyle"> $79 </p>
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/65bbae20f97acc4c5a1a2600f6f370091fec317e.jpg"
                />
                <Card.Body>
                  <Card.Title>Escot Furniture Range </Card.Title>
                  <Card.Text>
                    <p className="discription">
                      Skin Kia Ora<p className="subtitle1">TSB Living</p>
                    </p>
                    <p className="cost"> from </p>
                    <p className="costStyle">$175 </p>
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/083c6d134451f1139de45eab6b68588401162026.jpg"
                />
                <Card.Body>
                  <Card.Title>Vasagle Round Coffee Table </Card.Title>
                  <Card.Text>
                    <p className="cost"> from </p>
                    <p className="costStyle">$159 </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
    </div>;
  }
}

export default House;
