import React from "react";
import Button from "../UI/Button";

const Nav = (props) => {
  return (
    <header
      className={
        props.className +
        " fixed flex flex-col items-center justify-center gap-3"
      }
    >
      <Button>HOME</Button>
      <Button>ABOUT</Button>
      <Button>SKILL</Button>
      <Button>PORTFOLIO</Button>
      <Button>CONTACT</Button>
    </header>
  );
};

export default Nav;
