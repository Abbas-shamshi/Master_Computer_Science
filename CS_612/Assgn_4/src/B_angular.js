import React, { Component } from "react";
import a_logo from "./media/angular.svg"

class B_angular extends Component {
  render() {
    return (
      <div className="card">
        
        <h1>Angular Js</h1>
        <img src={a_logo} className="react-logo" alt="react_logo" />

        <p>Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.</p>
        <p>Originally, the rewrite of AngularJS was called "Angular 2" by the team, but this led to confusion among developers. To clarify, the team announced that separate terms should be used for each framework with "AngularJS" referring to the 1.X versions and "Angular" without the "JS" referring to versions 2 and up.</p>
        <p>Angular 8 was released on May 28, 2019. Featuring Differential loading for all application code, Dynamic imports for lazy routes, Web workers, TypeScript 3.4 support, and Angular Ivy as an opt-in preview. </p>
        <div>Date: 11/15/2019</div>
      </div>
    );
  }
}

export default B_angular; 