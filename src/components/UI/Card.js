import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>
        {props.children}
    </div>
  );
};

export default Card;

// props.children will bet us the code wrapped in between opening and closing Card tags