// This below example uses Async method
import React, { Component } from "react";
import { Consumer } from "../../Context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    if (name === "") {
      this.setState({ errors: { name: "Name is required " } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required " } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required " } });
      return;
    }
    const newContact = {
      name,
      email,
      phone
    };
    const res = await axios.post(
      "http://jsonplaceholder.typicode.com/users",
      newContact
    );
    dispatch({ type: "ADD_CONTACT", payLoad: res.data });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });
    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact </div>

              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  <input
                    type="Submit"
                    value="Add Contact"
                    className="btn btn-large btn-dark"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;

//This below example uses axios method
/*
import React, { Component } from "react";
import { Consumer } from "../../Context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    if (name === "") {
      this.setState({ errors: { name: "Name is required " } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required " } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required " } });
      return;
    }
    const newContact = {
      name,
      email,
      phone
    };
    axios
      .post("http://jsonplaceholder.typicode.com/users", newContact)
      .then(res => dispatch({ type: "ADD_CONTACT", payLoad: res.data }));

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });
    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact </div>

              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeHolder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    placeHolder="Enter Email..."
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeHolder="Enter Phone..."
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  <input
                    type="Submit"
                    value="Add Contact"
                    className="btn btn-large btn-dark"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
*/
/*
import React, { Component } from "react";
import { Consumer } from "../../Context";
import TextInputGroup from "../layout/TextInputGroup";
import uuid from "uuid";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    if (name === "") {
      this.setState({ errors: { name: "Name is required " } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required " } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required " } });
      return;
    }
    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };

    dispatch({ type: "ADD_CONTACT", payLoad: newContact });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });
    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact </div>

              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeHolder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    placeHolder="Enter Email..."
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeHolder="Enter Phone..."
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  <input
                    type="Submit"
                    value="Add Contact"
                    className="btn btn-large btn-dark"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
*/
/*
import React, { Component } from "react";
import { Consumer } from "../../Context";

import uuid from "uuid";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };

    dispatch({ type: "ADD_CONTACT", payLoad: newContact });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="Card mb-3">
              <div className="Card-header">Add Contact </div>

              <div className="Card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter Name..."
                      onChange={this.onChange}
                      value={name}
                      // style={{ cursor: "Pointer" }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email..."
                      onChange={this.onChange}
                      value={email}
                      //style={{ cursor: "Pointer" }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control form-control-lg"
                      placeholder="Enter Phone... "
                      onChange={this.onChange}
                      value={phone}
                      //style={{ cursor: "Pointer" }}
                    />
                  </div>
                  <input
                    type="Submit"
                    value="Add Contact"
                    className="btn btn-large btn-dark"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
*/
/*

    return (
      <div className="Card mb-3">
        <div className="Card-header">Add Contact </div>

        <div className="Card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form=control-lg"
                placeholder="Enter Name..."
                onChange={this.onChange}
                value={name}
                style={{ cursor: "Pointer" }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form=control-lg"
                placeholder="Enter Email..."
                onChange={this.onChange}
                value={email}
                style={{ cursor: "Pointer" }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form=control-lg"
                placeholder="Enter Phone... "
                onChange={this.onChange}
                value={phone}
                style={{ cursor: "Pointer" }}
              />
            </div>
            <input
              type="Submit"
              value="Add Contact"
              className="btn btn-lg btn-dark"
            />
          </form>
        </div>
      </div>
    );
  }
}
*/

/*
import React, { Component } from "react";
import {Consumer} from '../../Context';


class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  //onEmailChange = e => this.setState({ email: e.target.value });
  //onPhoneChange = e => this.setState({ phone: e.target.value });

  render() {
    const { name, email, phone } = this.state;

    return (
      <div className="Card mb-3">
        <div className="Card-header">Add Contact </div>

        <div className="Card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form=control-lg"
                placeholder="Enter Name..."
                onChange={this.onChange}
                value={name}
                style={{ cursor: "Pointer" }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form=control-lg"
                placeholder="Enter Email..."
                onChange={this.onChange}
                value={email}
                style={{ cursor: "Pointer" }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form=control-lg"
                placeholder="Enter Phone... "
                onChange={this.onChange}
                value={phone}
                style={{ cursor: "Pointer" }}
              />
            </div>
            <input
              type="Submit"
              value="Add Contact"
              className="btn btn-lg btn-dark"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
*/
/*
// CREATING CODE TO MAKE A SUBMIT FORM

import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  //onChange = e => this.setState({ [e.target.name]: e.target.value });

  onNameChange = e => this.setState({ name: e.target.value });
  onEmailChange = e => this.setState({ email: e.target.value });
  
  onPhoneChange = e => this.setState({ phone: e.target.value });

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="Card mb-3">
        <div className="Card-header">Add Contact </div>

        <div className="Card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                onChange={this.onNameChange}
                // onChange={this.onChange}
                value={name}
                style={{ cursor: "Pointer" }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter Email..."
                onChange={this.onEmailChange}
                //onChange={this.onChange}
                value={email}
                style={{ cursor: "Pointer" }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone... "
                onChange={this.onPhoneChange}
                //onChange={this.onChange}
                value={phone}
                style={{ cursor: "Pointer" }}
              />
            </div>
            <input
              type="Submit"
              value="Add Contact"
              className="btn btn-lg btn-dark"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
*/
