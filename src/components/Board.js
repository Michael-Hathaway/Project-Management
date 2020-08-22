import React from "react";
import List from "./List";
import NavBar from "./NavBar";

import "../style/Board.css";

class Board extends React.Component {
  render() {
    return (
      <div className="board">
        <NavBar />
        <div className="list-wrapper">
          <List />
        </div>
      </div>
    );
  }
}

export default Board;
