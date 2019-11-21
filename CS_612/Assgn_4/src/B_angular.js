import React, { Component } from "react";
import r_logo from "./media/logo.svg"
import Header from "./header";
import Footer from "./footer";
import Nav from "./nav";

class B_angular extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Nav/>
        <h1>Angular Js</h1>
        <img src={r_logo} className="react-logo" alt="react_logo" />

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fuga, velit nobis explicabo ratione quia. Dolorum, exercitationem soluta? Quod fugit maxime eveniet suscipit iure, repellendus nobis ab quidem quasi non?</p>
        <div>Date: 11/15/2019</div>
        <Footer/>
      </div>
    );
  }
}

export default B_angular; 