import React from "react";
import { NavLink } from "react-router-dom";

function AddPlayerButton() {
  return (
    <div className="addbutton">
      <NavLink to={"/AddPlayer"}>
        <button>Add new player to index</button>
      </NavLink>
    </div>
  );
}

export default AddPlayerButton;
