// This below examples uses the Async method
import React, { Component } from "react";
import PropTypes from "prop-types";
//import "./Contact.css"; removed
import { Consumer } from "../../Context";
import axios from "axios";
import { Link } from "react-router-dom";
class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  state = { showContactInfo: true };

  //onDeleteClick = () => {console.log("clicked");
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payLoad: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payLoad: id });
    }
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h1>
                {name}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: "Pointer" }}
                />

                <i
                  className="fas fa-times"
                  style={{ cursor: "Pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "Pointer",
                      float: "right",
                      color: "black",
                      marginright: "1rem"
                    }}
                  ></i>
                </Link>
              </h1>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email:{email}</li>
                  <li className="list-group-item">Phone:{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Contact;

//This example is with axios method

/*
import React, { Component } from "react";
import PropTypes from "prop-types";
//import "./Contact.css"; removed
import { Consumer } from "../../Context";
import axios from "axios";

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  state = { showContactInfo: true };

  //onDeleteClick = () => {console.log("clicked");
  onDeleteClick = (id, dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => dispatch({ type: "DELETE_CONTACT", payLoad: id }));
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h1>
                {name}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: "Pointer" }}
                />

                <i
                  className="fas fa-times"
                  style={{ cursor: "Pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h1>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email:{email}</li>
                  <li className="list-group-item">Phone:{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Contact;
*/
/// CONTEXT REDUCERS AND ACTIONS

/*
class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
  };

  state = { showContactInfo: true };

  //onDeleteClick = () => {console.log("clicked");
  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h1>
          {name}
          <i
            onClick={() =>
              this.setState({ showContactInfo: !this.state.showContactInfo })
            }
            className="fas fa-sort-down"
            style={{ cursor: "Pointer" }}
          />

          <i
            className="fas fa-times"
            style={{ cursor: "Pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick}
          />
        </h1>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email:{email}</li>
            <li className="list-group-item">Phone:{phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}
export default Contact;
*/
// TO TOGGLE EMAIL AND PHONE
/*
class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  state = { showContactInfo: true };

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h1>
          {name}
          <i
            onClick={() =>
              this.setState({ showContactInfo: !this.state.showContactInfo })
            }
            className="fa fa-sort-down"
          />
        </h1>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email:{email}</li>
            <li className="list-group-item">Phone:{phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}
export default Contact;
*/
/*
// CHANGING THE STATE OF EVENTS IN REACT-TOGGLE
class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  state = { showContactInfo: true };

  render() {
    const { contact } = this.props;
    return (
      <div className="card card-body mb-3">
        <h1>
          {contact.name}
          <i
            onClick={() =>
              this.setState({ showContactInfo: !this.state.showContactInfo })
            }
            className="fa fa-sort-down"
          />
        </h1>

        <ul className="list-group">
          <li className="list-group-item">Email:{contact.email}</li>
          <li className="list-group-item">Phone:{contact.phone}</li>
        </ul>
      </div>
    );
  }
}
export default Contact;
*/
/*
// CHANGING THE STATE OF EVENTS IN REACT
class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  state = { showContactInfo: true };

  onShowClick = e => {
    // this.setState({ showContactInfo: false });
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  render() {
    const { name, email, phone } = this.props.contact;
    //const{name,email,phone}=this.props;
    //const { contact } = this.props;
    return (
      <div className="card card-body mb-3">
        <h1>
          {name}
          <i
            onClick={this.onShowClick.bind(this)}
            className="fa fa-sort-down"
          />
        </h1>

        <ul className="list-group">
          <li className="list-group-item">Email:{email}</li>
          <li className="list-group-item">Phone:{phone}</li>
        </ul>
      </div>
    );
  }
}
export default Contact;
*/
/*
class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  state = {};
  onShowClick = (name, phone, e) => {
    console.log(name, phone);
  };

  render() {
    const { name, email, phone } = this.props.contact;
    //const{name,email,phone}=this.props;
    //const { contact } = this.props;
    return (
      <div className="card card-body mb-3">
        <h1>
          {name}
          <i
            onClick={this.onShowClick.bind(this, name, phone)}
            className="fa fa-sort-down"
          />
        </h1>

        <ul className="list-group">
          <li className="list-group-item">Email:{email}</li>
          <li className="list-group-item">Phone:{phone}</li>
        </ul>
      </div>
    );
  }
}
export default Contact;
*/
/*
// this code below has a fault
class Contact extends Component {
  static propTypes = {
    contact: PropTypes.string.isRequired
  };
  constructor() {
    super();
    this.state = {};
    this.onShowClick = this.onShowClick(this);
  }

  render() {
    const { name, email, phone } = this.props.contact;
    //const{name,email,phone}=this.props;
    //const { contact } = this.props;
    return (
      <div className="card card-body mb-3">
        <h1>
          {name}
          <i
            onClick={this.onShowClick(this)}
            className="fa fa-sort-down"
          />
        </h1>

        <ul className="list-group">
          <li className="list-group-item">Email:{email}</li>
          <li className="list-group-item">Phone:{phone}</li>
        </ul>
      </div>
    );
  }
}
export default Contact;
*/
/*
class Contact extends Component {
  static propTypes = {
    contact: PropTypes.string.isRequired
  };
  state = {};
  onShowClick() {
    console.log(this.state);
  }

  render() {
    const { name, email, phone } = this.props.contact;
    //const{name,email,phone}=this.props;
    //const { contact } = this.props;
    return (
      <div className="card card-body mb-3">
        <h1>
          {name}
          <i
            onClick={this.onShowClick.bind(this)}
            className="fa fa-sort-down"
          />
        </h1>

        <ul className="list-group">
          <li className="list-group-item">Email:{email}</li>
          <li className="list-group-item">Phone:{phone}</li>
        </ul>
      </div>
    );
  }
}
export default Contact;
*/
/*
class Contact extends Component {
  static propTypes = {
    contact: PropTypes.string.isRequired
  };
  render() {
    const { name, email, phone } = this.props.contact;
    //const{name,email,phone}=this.props;
    //const { contact } = this.props;
    return (
      <div className="card card-body mb-3">
        <h1>
          {name}
          <i
            onClick={() => console.log("Hello!")}
            className="fa fa-sort-down"
          />
        </h1>

        <ul className="list-group">
          <li className="list-group-item">Email:{email}</li>
          <li className="list-group-item">Phone:{phone}</li>
        </ul>
      </div>
    );
  }
}
export default Contact;
*/
/*
class Contact extends Component {
  static propTypes = {
    contact: PropTypes.string.isRequired
  };
  render() {
    const { name, email, phone } = this.props.contact;
    //const{name,email,phone}=this.props;
    //const { contact } = this.props;
    return (
      <div className="card card-body mb-3">
        <h1>
          {name}
          <i className="fa fa-sort-down" />
        </h1>

        <ul className="list-group">
          <li className="list-group-item">Email:{email}</li>
          <li className="list-group-item">Phone:{phone}</li>
        </ul>
      </div>
    );
  }
}
export default Contact;
*/
/*
class Contact extends Component {
  static propTypes = {
    contact: PropTypes.string.isRequired
  };
  render() {
    const { name, email, phone } = this.props.contact;
    //const{name,email,phone}=this.props;
    //const { contact } = this.props;
    return (
      <div className="card card-body mb-3">
        <h1>{name}</h1>
        <ul className="list-group">
          <li className="list-group-item">Email:{email}</li>
          <li className="list-group-item">Phone:{phone}</li>
        </ul>
      </div>
    );
  }
}
export default Contact;
*/
/*
class Contact extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  };

  render() {
    const { name, email, phone } = this.props.contact;
    //const{name,email,phone}=this.props;
    //const { contact } = this.props;
    return (
      <div className="card card-body mb-3">
        <h1>{name}</h1>
        <ul className="list-group">
          <li className="list-group-item">Email:{email}</li>
          <li className="list-group-item">Phone:{phone}</li>
        </ul>
      </div>
    );
  }
}
export default Contact;
*/
/*
class Contact extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  };

  render() {
    //const{name,email,phone}=this.props;
    const { contact } = this.props;
    return (
      <div className="card card-body mb-3">
        <h1>{contact.name}</h1>
        <ul className="list-group">
          <li className="list-group-item">Email:{contact.email}</li>
          <li className="list-group-item">Phone:{contact.phone}</li>
        </ul>
      </div>
    );
  }
}
export default Contact;
*/
//eg 3

/*
class Contact extends Component {
  static propTypes = {
    name: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
    phone: propTypes.string.isRequired
  };
  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>Email:{email}</li>
          <li>Phone:{phone}}</li>
        </ul>
      </div>
    );
  }
}
export default Contact;
  */

/*  
class Contact extends Component {
  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>Email:{email}</li>
          <li>Phone:{phone}}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  name: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  phone: propTypes.string.isRequired
};
export default Contact;
*/
//eg 2
/*
class Contact extends Component {
  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>Email:{email}</li>
          <li>Phone:{phone}}</li>
        </ul>
      </div>
    );
  }
}
export default Contact;
*/

//eg 1
/*
class Contact extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <ul>
          <li>Email:{this.props.email}</li>
          <li>Phone:{this.props.phone}}</li>
        </ul>
      </div>
    );
  }
}
export default Contact;
*/
