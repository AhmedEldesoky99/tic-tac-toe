import React from "react";

export const Box = ({ val, onClick }) => {
  return (
    <button className={`box ${val === "x" ? "x" : "o"}`} onClick={onClick}>
      {val}
    </button>
  );
};
