import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  const pointStyle = {
    height: "30px",
    width: "30px",
    cursor: "pointer",
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.theme.mode} bg-${props.theme.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.aboutText}
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <div
              className="bg-primary rounded mx-2"
              onClick={() => {
                props.changeTheme("primary");
              }}
              style={pointStyle}
            ></div>
            <div
              className="bg-success rounded mx-2"
              onClick={() => {
                props.changeTheme("success");
              }}
              style={pointStyle}
            ></div>
            <div
              className="bg-danger rounded mx-2"
              onClick={() => {
                props.changeTheme("danger");
              }}
              style={pointStyle}
            ></div>
            <div
              className="bg-warning rounded mx-2"
              onClick={() => {
                props.changeTheme("warning");
              }}
              style={pointStyle}
            ></div>
            <div
              className="bg-dark rounded mx-2"
              onClick={() => {
                props.changeTheme("dark");
              }}
              style={pointStyle}
            ></div>
            <div
              className="bg-light rounded mx-2"
              onClick={() => {
                props.changeTheme("light");
              }}
              style={pointStyle}
            ></div>
          </div>
          <div
            className="form-check form-switch"
            style={{
              color: props.theme.text,
            }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onClick={props.changeMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
              Toggle Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Prop Types
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  mode: PropTypes.string,
};
