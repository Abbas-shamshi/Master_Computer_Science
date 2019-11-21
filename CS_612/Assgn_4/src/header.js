import React, { Component } from "react";
import header_img from "./media/img.jpg"


class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <img src={header_img} className="App-logo" alt="logo" />
                </header>
            </div>
        );
    }
}

export default Header;