import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, updateText] = useState("Enter text here");
  // Here updateText is used to update the value of text

  const handleUpperCase = () => {
    updateText(text.toUpperCase());
  };

  const handleLowerCase = () => {
    updateText(text.toLowerCase());
  };

  const changeTextFun = (event) => {
    updateText(event.target.value);
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          {props.heading}
        </label>
        <textarea
          className="form-control"
          onChange={changeTextFun}
          value={text}
          id="myBox"
          rows="5"
        ></textarea>
      </div>
      <button className="btn btn-primary m-3" onClick={handleUpperCase}>
        UPPERCASE
      </button>

      <button className="btn btn-primary m-3" onClick={handleLowerCase}>
        lowercase
      </button>
    </div>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
