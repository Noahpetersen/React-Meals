import React from "react";

import classes from "./Input.module.css";



const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id} >{props.label}</label>
      <input ref={ref} id={props.id} type={props.type} defaultvalue = {+props.defaultvalue}></input>
    </div>
  );
});

export default Input;
