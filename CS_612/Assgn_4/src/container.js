import React, { Component } from "react";
import r_logo from "./media/logo.svg"
import a_logo from "./media/angular.svg"
import n_logo from "./media/node.png"


import {NavLink} from "react-router-dom";

class Container extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <h1><NavLink to="/react">React Js</NavLink></h1>
                    <img src={r_logo} className="react-logo" alt="react_logo" />
                    <p>React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded.</p>
                    <div>Date: 11/15/2019</div>
                </div>
                <div className="card">
                    <h1><NavLink to="/angular">Angular Js</NavLink></h1>
                    <img src={a_logo} className="react-logo" alt="react_logo" />

                    <p>Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.</p>
                    <div>Date: 11/15/2019</div>
                </div>
                <div className="card">
                    <h1><NavLink to="/node">Node Js</NavLink></h1>
                    <img src={n_logo} className="react-logo" alt="react_logo" />
                    <p>Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts.</p>
                    <div>Date: 11/15/2019</div>
                </div>
            </div>
        );
    }
}

export default Container;