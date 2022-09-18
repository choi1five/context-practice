import React from "react";
import calsses from "./Card.module.css";

const Card = ({ children }) => {
  return <div className={calsses.card}>{children}</div>;
};

export default Card;
