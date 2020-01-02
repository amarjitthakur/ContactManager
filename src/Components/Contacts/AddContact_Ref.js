import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };
  /*
    onSubmit = e => {
    e.preventDefault();
  //console.log(this.state);
  };
*/
  //onChange = e => this.setState({ [e.target.name]: e.target.value });
  //onEmailChange = e => this.setState({ email: e.target.value });
  //onPhoneChange = e => this.setState({ phone: e.target.value });

  static defaultProps = {
    name: "Raman Singh",
    email: "raman@gmail.com",
    phone: "777-333-444"
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="Card mb-3">
        <div className="Card-header">
          <h2>Add Contact</h2>
        </div>

        <div className="Card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                //onChange={this.onChange}
                ref={this.nameInput}
                defaultValue={name}
                style={{ cursor: "Pointer" }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter Email..."
                //onChange={this.onChange}
                ref={this.emailInput}
                defaultValue={email}
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
                //onChange={this.onChange}
                ref={this.phoneInput}
                defaultValue={phone}
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
