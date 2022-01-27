import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar'
import Footer from '../src/components/footer/Footer';
import Home from './components/home/Home';
import SecoundNav from './components/navbar/SecoundNav'
export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <SecoundNav/>
        <Home/>
       <Footer/>
      </div>
    );
  }
}

export default App;
