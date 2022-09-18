import React from "react";
import calsses from "./Input.module.css";

const Input = ({ label, input }) => {
  return (
    <div className={calsses.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
