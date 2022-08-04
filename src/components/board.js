import React from "react";
import { Box } from "./box";

export const Board = ({ board, onClick }) => {
  return (
    <React.Fragment>
      {board.map((val, index) => {
        return (
          <Box
            key={index}
            val={val}
            onClick={() => val === null && onClick(index)}
          />
        );
      })}
    </React.Fragment>
  );
};
