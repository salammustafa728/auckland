import React, { Component } from 'react';
import './Store.css';
import Card from "react-bootstrap/Card";
import heart from "../../images/addheart.png";
import arrow from "../../images/back arrow.jpg";
export class Store extends Component {
  render() {
    return <div>
           <div>
          <div className="Featured">
            <h1 className="titleSection">Store </h1>
            <button className="btnView viwposition">
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/e0ddea64e05abd1ebb0d98877fa9f579d4ce6f26.jpg"
                />
                <Card.Body>
                  <Card.Title>Three-Pack Greend Polyurethene Reusable Masks </Card.Title>
                  <Card.Text>
                    <p className="cost"> from </p>
                    <p className="costStyle">$9.99 </p>
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/1ab96a33e12ecbe7f00505634a3bd1cc1a649314.jpg"
                />
                <Card.Body>
                  <Card.Title>Summer Encore Mandarins </Card.Title>
                  <Card.Text>
                    <p className="discription">
                    Oakridge Fresh{" "}
                    </p>
                    <p className="cost"> from </p>
                    <p className="costStyle"> $21 </p>
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/1070215a8d99e58362988c373a5376d8002e4a5f.jpg"
                />
                <Card.Body>
                  <Card.Title>
                  Dual Tone Bar Stool
                  </Card.Title>
                  <Card.Text>
                    <p className="discription"> TSB Living</p>
                    <p className="cost"> from </p>
                    <p className="costStyle"> $130 </p>
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/a7e4c9ad5b147cca2ff135ef54c18b9e4e9e01ea.jpg"
                />
                <Card.Body>
                  <Card.Title>Hampshire Double Bed Frame </Card.Title>
                  <Card.Text>
                    <p className="discription">TSB Living </p>
                    <p className="cost"> from </p>
                    <p className="costStyle">$187 </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
    </div>;
  }
}

export default Store;
