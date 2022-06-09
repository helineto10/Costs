import React from "react";
import "./Input.css";

function input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div className="form_control">
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
}

export default input;
