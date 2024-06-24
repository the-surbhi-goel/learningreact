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

  const handleCamelCase = () => {
    const arr = text.trim().split(" ");
    const arr2 = arr.map((element) => {
      return (
        element.charAt(0).toUpperCase() + element.substring(1, element.length)
      );
    });
    updateText(arr2.join(" "));
  };

  const changeTextFun = (event) => {
    updateText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            {props.heading}
          </label>
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            className="form-control"
            onChange={changeTextFun}
            value={text}
            id="myBox"
            rows="5"
          ></textarea>
        </div>
        <div className="my-3">
        <button className="btn btn-primary" onClick={handleUpperCase}>
          UPPERCASE
        </button>

        <button className="btn btn-primary mx-3" onClick={handleLowerCase}>
          lowercase
        </button>

        <button className="btn btn-primary mx-3" onClick={handleCamelCase}>
          Camelcase
        </button>
        </div>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2> Text Summary </h2>
        <p>
          {text.trim().split(" ").length} words and {text.length} characters{" "}
        </p>
        <p>{0.008 * text.trim().split(" ").length} Minutes to read</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};
