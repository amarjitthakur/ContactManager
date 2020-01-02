// Below mentioned example uses the Async method
import React, { Component } from "react";
//import Contact from "./Components/Contacts/Contact";
import axios from "axios";
//import Contacts from "./Components/Contacts/Contacts";
const Context = React.createContext();

//CREATING DELETE_CONTACT;

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payLoad
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payLoad, ...state.contacts]
      };

    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payLoad.id
            ? (contact = action.payLoad)
            : contact
        )
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({ contacts: res.data });
    console.log("Comp did mount...in context.js");
  }

  componentDidUpdate() {
    console.log("Component Did Update in context.js");
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

// Below mentioned examples uses the AXIOS method

/*
import React, { Component } from "react";
//import Contact from "./Components/Contacts/Contact";
import axios from "axios";
const Context = React.createContext();

//CREATING DELETE_CONTACT;

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payLoad
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payLoad, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => this.setState({ contacts: res.data }));
    console.log("Comp did mount...in context.js");
  }

  componentDidUpdate() {
    console.log("Component Did Update in context.js");
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
*/
/*
import React, { Component } from "react";
//import Contact from "./Components/Contacts/Contact";
const Context = React.createContext();

//CREATING DELETE_CONTACT;

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payLoad
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payLoad, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-444-555"
      },
      {
        id: 2,
        name: "Karen Smith",
        email: "ksmith@gmail.com",
        phone: "444-333-555"
      },
      {
        id: 3,
        name: "Amarjit Thakur",
        email: "athakur@gmail.com",
        phone: "222-333-444"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
*/
