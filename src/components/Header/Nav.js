import React from "react";

const Nav = (props) => {
  const handleHomeClick = () => {
    document.getElementById("main").scrollIntoView({ behavior: "smooth" });
  };

  const handleAboutClick = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  const handleSkillClick = () => {
    document.getElementById("skill").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={
        props.className +
        " fixed flex flex-col items-center justify-center gap-3"
      }
    >
      {/* <Button handleClick={handleClick}>HOME</Button> */}
      <button
        onClick={handleHomeClick}
        className={"block h-10 font-medium text-zinc-800"}
      >
        HOME
      </button>
      <button
        onClick={handleAboutClick}
        className={"block h-10 font-medium text-zinc-800"}
      >
        ABOUT
      </button>
      {/* <Button>ABOUT</Button> */}

      <button
        onClick={handleSkillClick}
        className={"block h-10 font-medium text-zinc-800"}
      >
        SKILL
      </button>
    </header>
  );
};

export default Nav;
