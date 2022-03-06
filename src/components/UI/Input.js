import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <input ref={ref} {...props.input} className={classes.taginput} readOnly />
  );
});

export default Input;
