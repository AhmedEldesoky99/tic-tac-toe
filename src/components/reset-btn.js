import React from "react";

//style
import "../sass/btn.css";
export const ResetBtn = ({ onClick }) => {
  return (
    <button className="btn-reset" onClick={onClick}>
      Reset
    </button>
  );
};
