import React, { Component } from "react";
import n_logo from "./media/node.png"


class B_node extends Component {
  render() {
    return (
      <div className="card">
        <h1>Node Js</h1>
        <img src={n_logo} className="react-logo" alt="react_logo" />

        <p>Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts.</p>
        <p>Though .js is the standard filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations, as well as for real-time Web applications.</p>
        <div>Date: 11/15/2019</div>
      </div>
    );
  }
}

export default B_node;