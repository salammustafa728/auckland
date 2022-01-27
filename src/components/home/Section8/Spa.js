import React, { Component } from "react";
import "./Spa.css";
import Card from "react-bootstrap/Card";
import heart from "../../images/addheart.png";
import arrow from "../../images/back arrow.jpg";
export class Spa extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="Featured">
            <h1 className="titleSection">Beauty, Massage & Spa </h1>
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/dc51a4a2be7bc49c33ecbf505cfbcc20422d9d47.jpg"
                />
                <Card.Body>
                  <Card.Title>Korean Beauty Spa Package </Card.Title>
                  <Card.Text>
                    <p className="discription">
                      {" "}
                      Latoja Beauty Spa<p className="subtitle1">Rosedale</p>
                    </p>
                    <p className="subTitle"> </p>
                    <p className="cost"> from </p>
                    <p className="costStyle">$69</p>
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/75170d768e1488fecfc4a03957932c7739c0d572.jpg"
                />
                <Card.Body>
                  <Card.Title>
                    Waxing Package - Seven Options Available
                  </Card.Title>
                  <Card.Text>
                    <p className="discription">
                      Asra Hair and Beauty
                      <p className="subtitle1">Auckland City</p>
                    </p>
                    <p className="cost"> from </p>
                    <p className="costStyle"> $15 </p>
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/f2cf51acd544eb7d85580ebb99090876d5f4dcd0.jpg"
                />
                <Card.Body>
                  <Card.Title>Premium Pamper Package</Card.Title>
                  <Card.Text>
                    <p className="discription">
                      Skin Kia Ora<p className="subtitle1">Takapuna</p>
                    </p>
                    <p className="subTitle"> 63 bought </p>
                    <p className="cost"> from </p>
                    <p className="costStyle">$149 </p>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="cardsStyle1">
                <img
                  className="like"
                  src={heart}
                  alt="add to fav"
                  width="20px"
                />
                <Card.Img
                  variant="top"
                  src="//main-cdn.grabone.co.nz/goimage/325x225/a4c3bb8da7e7f1035cd7a1e6d4d1a93769a9228d.jpg"
                />
                <Card.Body>
                  <Card.Title>Wireless Auto-Rotating Hair Curler </Card.Title>
                  <Card.Text>
                    <p className="subTitle"> 197 bought </p>
                    <p className="cost"> from </p>
                    <p className="costStyle">$65 </p>
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

export default Spa;
