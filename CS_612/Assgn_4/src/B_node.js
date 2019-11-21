import React, { Component } from "react";
import r_logo from "./media/logo.svg"

class B_node extends Component {
  render() {
    return (
      <div className="card">
        <h1>Node Js</h1>
        <img src={r_logo} className="react-logo" alt="react_logo" />

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fuga, velit nobis explicabo ratione quia. Dolorum, exercitationem soluta? Quod fugit maxime eveniet suscipit iure, repellendus nobis ab quidem quasi non?</p>
        <div>Date: 11/15/2019</div>
      </div>
    );
  }
}

export default B_node;