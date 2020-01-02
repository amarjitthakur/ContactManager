import Contact from "./Contact";
import React, { Component } from "react";
import { Consumer } from "../../Context";

/// CONTEXT REDUCERS AND ACTIONS

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contacts List</span>
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;

/*
class Contacts extends Component {
  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: newContacts });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
*/

// previous return staement deleted
/*
    return (
      <div>
        <React.Fragment>
          {contacts.map(contact => (
            <Contact
              key={contact.id}
              contact={contact}
              deleteClickHandler={this.deleteContact.bind(this, contact.id)}
              // deleteClickHandler={this.deleteContact}
              // name={contact.name}
              //email={contact.email}
              //phone={contact.phone}
            />
          ))}
        </React.Fragment>
      </div>
    );
  }
}
export default Contacts;
*/
/*
class Contacts extends Component {
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
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id.email}
            contact={contact}

            // name={contact.name}
            //email={contact.email}
            //phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}
export default Contacts;
*/
/*
class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      Contacts: [
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
      ]
    };
  }
  render() {
    const { Contacts } = this.state;
    return (
      <div>
        {Contacts.map(Contact => (
          <Contact
            key={Contact.id}
            name={Contact.name}
            email={Contact.email}
            phone={Contact.phone}
          />
        ))}
      </div>
    );
  }
}
export default Contacts;
*/
/*
class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      Contacts: [
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
      ]
    };
  }
  render() {
    const { Contacts } = this.state;
    return (
      <div>
        {Contacts.map(Contact => (
          <h1>{Contact.name}</h1>
        ))}
      </div>
    );
  }
}
export default Contacts;
*/
