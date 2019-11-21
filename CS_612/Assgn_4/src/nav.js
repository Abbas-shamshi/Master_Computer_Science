import React, { Component } from "react";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=a7208873a9dd4d9aa4372066f2d6da4a&pageSize=10')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }





    render() {
        console.log("fare", this.state.data);
        return (

            <div className="flex-right">
                <ul>
                    <li><a className="nav-link nav-block nav-color nav-align" href="main.js"> Google</a></li>

                </ul>
                <div className="News"><h3>News</h3>

                    <div>
                        {
                            this.state.data != null ?
                                this.state.data.articles.map(d => {
                                    return (
                                        <div className="news_t">
                                            <h4>Title:</h4> <h5>{d.title}</h5>
                                        </div>
                                    )
                                })
                                : null
                        }
                    </div>
                </div>




            </div>
        );
    }
}

export default Nav; 