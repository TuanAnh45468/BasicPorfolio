import React from "react";

const Button = (props) => {
  return (
    <button
      className={props.className + " block h-10 font-medium text-zinc-800"}
    >
      {props.children}
    </button>
  );
};

export default Button;
