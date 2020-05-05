import React from "react";
import Info from "./Info/Info";
import Play from "../components/Play/Play";

const Game = () => {
  return (
    <>
      <Info score={10} />
      <Play />
    </>
  );
};

export default Game;
