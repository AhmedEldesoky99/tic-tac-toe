import React from "react";

//import style
import "../sass/box.css";

export const Box = ({ val, onClick }) => {
  return (
    <button className={`box ${val === "x" ? "x" : "o"}`} onClick={onClick}>
      {val}
    </button>
  );
};
