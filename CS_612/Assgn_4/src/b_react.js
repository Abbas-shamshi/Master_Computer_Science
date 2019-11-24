import React, { Component } from "react";
import r_logo from "./media/logo.svg"


class B_react extends Component {
  render() {
    return (
      <div className="card">
        <h1>React Js</h1>
        <img src={r_logo} className="react-logo" alt="react_logo" />

        <p>React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.

        React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded. However, fetching data is only the beginning of what happens on a web page, which is why complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API: Redux, React Router and axios are examples of such libraries.</p>
        <p>Components
        React code is made of entities called components. Components can be rendered to a particular element in the DOM using the React DOM library. When rendering a component, one can pass in values that are known as "props".</p>
        <div>Date: 11/15/2019</div>
      </div>
    );
  }
}

export default B_react;