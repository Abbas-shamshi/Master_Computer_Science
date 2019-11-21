import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import Nav from "./nav";
import Main_1 from "./main_1";

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import B_react from "./b_react";
import B_node from "./B_node";
import B_angular from "./B_angular";

class Main extends Component {


    render() {
        return (
            <div>
                <Header />
                <div className="flex">
                    <Main_1></Main_1>
                    <Nav></Nav>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Main;