import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { NavLink, HashRouter } from "react-router-dom";

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
        // Insert YOUR API KEY HERE 
        this.apikey = ''
    }
    async componentDidMount() {
        this.timer = setInterval(() => this.apicall(), 5000)


    }
    async apicall() {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + this.apikey + '&pageSize=10')
            .then(response => response.json())
            .then(data => this.setState({ data }), 5000);

    }

    render() {
        console.log("api call", this.state.data);
        return (

            <div className="flex-right">
                <ul>
                    <li><HashRouter><NavLink to="/" className="nav-link nav-block nav-color nav-align"><FontAwesomeIcon icon={faHome} /> Home</NavLink></HashRouter></li>
                </ul>
                <div className="News"><h3><FontAwesomeIcon icon={faNewspaper} /> News</h3>

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