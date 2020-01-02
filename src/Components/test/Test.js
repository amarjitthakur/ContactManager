import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
    //completed: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
          //    completed: data.completed
        })
      );
    console.log("Comp did mount...in Test.js");
  }
  /*
  componentWillMount() {
    console.log("Component Will Mount...");
  }
  
  componentDidMount() {
    console.log("Component Did Mount...");
  }
  
  UNSAFE_componentDidUpdate() {
    console.log("Component Did Update");
  }
  /*

  componentWillUpdate() {
    console.log("Component Will Update");
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    console.log("Componenet wil receive...");
  }

  static getDerivedStateFromPages(nextProps, nextState) {
    console.log("Component wll get Derived state from pages... ");
  }
*/
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1> {title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
//<p>{completed}</p>
export default Test;
