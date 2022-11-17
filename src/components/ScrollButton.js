import React from "react";

function ScrollButton() {
  <button
    className="scroll"
    onClick={() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }}
  >
    hi
  </button>;
}

export default ScrollButton;
