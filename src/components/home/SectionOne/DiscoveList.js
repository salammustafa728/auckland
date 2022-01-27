import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import './DicoverList.css';

export class DiscoveList extends Component {
  render() {
    return (
      <div className="listt">
        <ListGroup as="ol" >
            <ListGroup.Item as="li" className="listTitle">  <h1>Discover</h1></ListGroup.Item>
          <ListGroup.Item as="li" className="listItem">  Featured Auckland deals </ListGroup.Item>
          <ListGroup.Item as="li" className="listItem">Collections <p className="pNum">48</p></ListGroup.Item>
          <ListGroup.Item as="li" className="listItem">Activities, Events & Outdoors  <p className="pNum">240</p></ListGroup.Item>
          <ListGroup.Item as="li" className="listItem">Picked for You </ListGroup.Item>
          <ListGroup.Item as="li" className="listItem">Store<p className="pNum">2574</p></ListGroup.Item>
          <ListGroup.Item as="li" className="listItem">Restaurants, Bars, Cafes  <p className="pNum">19</p></ListGroup.Item>
          <ListGroup.Item as="li" className="listItem">Beauty, Massage & Spa  <p className="pNum">240</p></ListGroup.Item>
          <ListGroup.Item as="li" className="listItem">House & Garden  <p className="pNum">1309</p></ListGroup.Item>
          <ListGroup.Item as="li" className="listItem">Fitness & Sports  <p className="pNum">151</p></ListGroup.Item>
          <ListGroup.Item as="li" className="listItem"> Automotive  <p className="pNum">86</p></ListGroup.Item>
          
        </ListGroup>
      </div>
    );
  }
}

export default DiscoveList;
