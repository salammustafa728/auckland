import React, { Component } from 'react';
import './Home.css';
import Fitness from './Section10/Fitness';
import Automotive from './Section11/Automotive';
import Collection from './Section4/Collection';
import Activities from './Section5/Activities';
import Store from './Section6/Store';
import Resturant from './Section7/Resturant';
import Spa from './Section8/Spa';
import House from './section9/House';
import SectionOne from './SectionOne/SectionOne';
import Featured from './SectionThree/Featured';
import SectionTwo from './sectionTwo/SectionTwo';


export class home extends Component {
  render() {
    return <div className='mainDiv'>
          <SectionOne/>
          <SectionTwo/>
          <Featured/>
          <Collection/>
          <Activities/>
          <Store/>
          <Resturant/>
          <Spa/>
          <House/>
          <Fitness/>
          <Automotive/>
    </div>;
  }
}

export default home;
