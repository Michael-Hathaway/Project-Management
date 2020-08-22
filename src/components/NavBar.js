import React from "react";

import SignOutButton from "./SignOutButton";

const NavBar = (props) => {
  return (
    <nav className="main-nav">
      <div className="nav-wrapper">
        <div></div>
        <h1>Kanban Board</h1>
        <SignOutButton />
      </div>
    </nav>
  );
};

export default NavBar;
