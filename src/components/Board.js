import React from "react";
import "./List";

import "../style/Board.css";
import List from "./List";

class Board extends React.Component {
  render() {
    return (
      <div className="board">
        <List />
      </div>
    );
  }
}

export default Board;
