import React, { Component } from "react";
import "./Resturant.css";
import Card from "react-bootstrap/Card";
import heart from "../../images/addheart.png";
import arrow from "../../images/back arrow.jpg";
export class Resturant extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="Featured">
            <h1 className="titleSection">Restaurants, Bars, Cafes </h1>
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/13b1a2c551024d0ece3fcd93054106dd00e93598.jpg"
                />
                <Card.Body>
                  <Card.Title>
                    Five-Course Tasting Menu Vineyard Experience{" "}
                  </Card.Title>
                  <Card.Text>
                    <p className="discription">
                      {" "}
                      Plume, the Vineyard Restaurant, Matakana
                    </p>
                    <p className="subTitle"> 218 bought </p>
                    <p className="cost"> from </p>
                    <p className="costStyle">$83</p>
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/bbbff68477ef1a3825a43b18e4cd43d453bdeaf6.jpg"
                />
                <Card.Body>
                  <Card.Title>European High Tea for Two People </Card.Title>
                  <Card.Text>
                    <p className="discription">Monsieur Madame. Mount Eden</p>
                    <p className="subTitle"> 141 bought </p>
                    <p className="cost"> from </p>
                    <p className="costStyle"> $45 </p>
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/b9482ac1bb587459e1ab17030ecd969184d50082.jpg"
                />
                <Card.Body>
                  <Card.Title>
                    Watergarden Entry & 10% off Food & Drinks
                  </Card.Title>
                  <Card.Text>
                    <p className="discription">
                      {" "}
                      Wrights Water Garden &The Frog and Lily Patumahoe
                    </p>
                    <p className="subTitle"> 575 bought </p>
                    <p className="cost3"> from </p>
                    <p className="costStyle"> $8 </p>
                    <p className="discountRes"><s>$16</s></p>
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/95f8cc1aeca348683c7ff8e79600ddf4c083decf.jpg"
                />
                <Card.Body>
                  <Card.Title>Full Day Waiheke Island Wine Tour </Card.Title>
                  <Card.Text>
                    <p className="discription">Enjoi NZ Oneroa </p>
                    <p className="subTitle"> 143 bought </p>
                    <p className="cost"> from </p>
                    <p className="costStyle">$129 </p>
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

export default Resturant;
