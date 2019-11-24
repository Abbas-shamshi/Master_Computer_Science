import React, { Component } from "react";
import { Route, Switch } from "react-router";
import {HashRouter} from "react-router-dom";
import B_react from "./b_react";
import B_node from "./B_node";
import B_angular from "./B_angular";
import Container from "./container";

class Main_1 extends Component {
    render() {
        return (
            <HashRouter>
                <div className="flex-left">
                    <div className="content">
                        <Switch>
                            <Route exact path="/" component={Container} />
                            <Route path="/react" component={B_react} />
                            <Route path="/node" component={B_node} />
                            <Route path="/angular" component={B_angular} />
                        </Switch>
                    </div>


                </div>
            </HashRouter>
        );
    }
}

export default Main_1;