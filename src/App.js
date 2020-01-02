import React from "react";
//import logo from './logo.svg';
import "./App.css";
//import "./index.css";
import Contacts from "./Components/Contacts/Contacts";
import Header from "./Components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./Context";
//import AddContact from "./Components/Contacts/AddContactRef";
import AddContact from "./Components/Contacts/AddContact";
import EditContact from "./Components/Contacts/EditContact";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/Pages/About";
import NotFound from "./Components/Pages/NotFound";
import Test from "./Components/test/Test";
class App extends React.Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="Container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/Contact/add" component={AddContact} />
                <Route exact path="/test" component={Test} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
//<Route exact path="/test" component={Test} />
//<Route component={NotFound} />
export default App;

/*
import React from "react";
//import logo from './logo.svg';
import "./App.css";
//import "./index.css";
import Contacts from "./Components/Contacts/Contacts";
import Header from "./Components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./Context";
//import AddContact from "./Components/Contacts/AddContactRef";
import AddContact from "./Components/Contacts/AddContact";
class App extends React.Component {
  render() {
    return (
      <Provider>
        
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="Container">
            <AddContact />
            <Contacts />
          </div>
        </div>
        
      </Provider>
    );
  }
}

export default App;
*/
/*
//eg 1,2
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="John Doe" email="jdoe@gmail.com" phone="555-444-555" />
        <Contact
          name="Karen Smith"
          email="ksmith@gmail.com"
          phone="333-444-222"
        />
      </div>
    );
  }
}

export default App;
//branding="Contact Hd Manager" */
/*
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>The App Component</h1>
        <Contact />
        <Contact />
        <Contact />
      </div>
*/
/*
class App extends React.Component {
  render() {
    const showMath = true;
    const num1 = 40;
    const num2 = 30;
    let math;
    if (showMath) {
      math = (
        <h4>
          {num1}+{num2}={num1 + num2}
        </h4>
      );
    } else {
      math = null;
    }
    return (
      <div className="App">
        <h1>The App Component</h1>
        {math}
      </div>
*/
/*
    const show 
    Math = true;
    let math;

    if (showMath) {
      math = <h4> 4+1={4 + 1}</h4>;
    } else {
      math = null;
    }
    return (
      <div className="App">
        <h1> The App Component</h1>
        {math}
      </div>
*/
/*
    const name = "Amarjit";
    const showHello = true;
    return (
      <div className="App">
        {showHello ? <h1> Hello{name.toUpperCase()}</h1> : null}
      </div>
*/
/*
      <div className="App">
        <h4> 1+1={1 + 1}</h4>
      </div>
      
      <div>
        <div className="App">
          <h1>Hello How are you?{name.toUpperCase()}</h1>
        </div>

        <div className="App-header">
          <h1>This is a Header{name}</h1>
          <body>amamamam</body>
        </div>

        <div className="body">
          <h1>This is in the body,{name}</h1>
          <body>some text.... amamamam</body>
        </div>
      </div>
*/
/*
      <div className="App">
       <h1>Hello Hi How are you?{name}</h1>
      </div>
*/
/*
<div>
          <div className="App">
          <h1>The App Component</h1>
        </div>
        <div> Hello ,how are you?</div>
  </div>*/
/*
return React.createElement(
  'div',
  {className='App'},
  React.createElement('h1',null,'The App Componet')
);
  
*/
