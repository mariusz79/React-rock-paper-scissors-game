import React from "react";
import Info from "./Info/Info";
import Step1 from "../components/Play/Step1";

const Game = () => {
  return (
    <>
      <Info score={10} />
          <Step1 />
          <button>Modal</button>
    </>
  );
};

export default Game;
