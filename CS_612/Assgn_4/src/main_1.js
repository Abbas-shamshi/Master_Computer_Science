import React, { Component } from "react";
import r_logo from "./media/logo.svg"

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import B_react from "./b_react";
import B_node from "./B_node";
import B_angular from "./B_angular";

class Main_1 extends Component {
    render() {
        return (
            <HashRouter>
                <div className="flex-left">
                <div className="content">
                        <Route exact path="/react" component={B_react} />
                        <Route path="/node" component={B_node} />
                        <Route path="/angular" component={B_angular} />

                    </div>
                    <div className="card">
                        <h1><NavLink to="/react">React Js</NavLink></h1>
                        <img src={r_logo} className="react-logo" alt="react_logo" />

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fuga, velit nobis explicabo ratione quia. Dolorum, exercitationem soluta? Quod fugit maxime eveniet suscipit iure, repellendus nobis ab quidem quasi non?</p>
                        <div>Date: 11/15/2019</div>
                    </div>
                    <div className="card">
                        <h1><NavLink to="/angular">Angular Js</NavLink></h1>
                        <img src={r_logo} className="react-logo" alt="react_logo" />

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fuga, velit nobis explicabo ratione quia. Dolorum, exercitationem soluta? Quod fugit maxime eveniet suscipit iure, repellendus nobis ab quidem quasi non?</p>
                        <div>Date: 11/15/2019</div>
                    </div>
                    <div className="card">
                        <h1><NavLink to="/node">Node Js</NavLink></h1>
                        <img src={r_logo} className="react-logo" alt="react_logo" />

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fuga, velit nobis explicabo ratione quia. Dolorum, exercitationem soluta? Quod fugit maxime eveniet suscipit iure, repellendus nobis ab quidem quasi non?</p>
                        <div>Date: 11/15/2019</div>
                    </div>
                    
                </div>
            </HashRouter>
        );
    }
}

export default Main_1;