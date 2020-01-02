import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-soft bg-danger mb-3 py--0">
      <div>
        <div className="container">
          <a href="\" className="navbar-brand">
            {branding}
          </a>

          <ul className="navbar-nav  mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                HOME
              </Link>
              <Link to="/Contact/add" className="nav-link">
                <i className="fas fa-plus" />
                Add
              </Link>

              <Link to="/about" className="nav-link">
                <i className="fas fa-question" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
Header.defaultProps = { branding: "My App" };
Header.propTypes = { branding: "My App" };
Header.propTypes = { branding: propTypes.string.isRequired };

//const headStyle = { color: "Red", fontSize: "50px" };

export default Header;

/*
import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-soft bg-danger mb-3 py--0">
      <div>
        <div className="container">
          <a href="\" className="navbar-brand">
            {branding}
          </a>

          <ul className="navbar-nav  mr-auto">
            <li className="Nav-item">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
Header.defaultProps = { branding: "My App" };
Header.propTypes = { branding: "My App" };
Header.propTypes = { branding: propTypes.string.isRequired };

//const headStyle = { color: "Red", fontSize: "50px" };

export default Header;
*/
/*

const Header = props => {
  const { branding } = props;
  return (
    <div>
      <h1 style={headStyle}>{branding}</h1>
    </div>
  );
};
Header.defaultProps = { branding: "My App" };
Header.propTypes = { branding: "My App" };
Header.propTypes = { branding: propTypes.string.isRequired };

const headStyle = { color: "Red", fontSize: "50px" };

export default Header;
*/
/*
const Header = props => {
  const { branding } = props;
  return (
    <div>
      <h1 style={{ color: "red", fontSize: "50px" }}>{branding}</h1>
    </div>
  );
};
Header.defaultProps = { branding: "My App" };
Header.propTypes = { branding: "My App" };
Header.propTypes = { branding: propTypes.string.isRequired };

export default Header;
*/
/*
const Header = props => {
  const { branding } = props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
};
Header.defaultProps = { branding: "My App" };
Header.propTypes = { branding: "My App" };
Header.propTypes = { branding: propTypes.string.isRequired };

export default Header;
*/
/*
const Header = props => {
  const { branding } = props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
};
Header.defaultProps = { branding: "My App" };
export default Header;
*/
// eg 1

/*
const Header = props => {
  return (
    <div>
      <h1>{props.branding}</h1>
    </div>
  );
};

export default Header;
*/
//export default () => {
/*    
const Header = () => {
  return (
    <div>
      <h1>{Contact Manager</h1>
    </div>
  );
};

export default Header;
*/
/*
function Header(){
    return(
        <div>
        <h1> Contact Manager</h1>
        </div>
    );
} */
