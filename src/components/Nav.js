import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div>
      <header>
        <button onClick={() => props.onHomeButtonClick()}>
          <i className="fas fa-video"></i>
        </button>
        <form onSubmit={(event) => props.onSearchSubmit(event)}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={props.value}
            onChange={(event) => props.onInputChange(event)}
          />
        </form>
      </header>
    </div>
  );
}

export default Nav;
