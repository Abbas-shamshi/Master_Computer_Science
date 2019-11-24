import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import Nav from "./nav";
import Main_1 from "./main_1";

class Main extends Component {


    render() {
        return (
            <div>
                <Header />
                <div className="flex">
                    <Main_1 />
                    <Nav />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;