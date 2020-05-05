import React, { useState, useEffect } from "react";
import Info from "./Info/Info";
import Step1 from "../components/Play/Step1";
import Step2 from "../components/Play/Step2";

const Game = () => {
  const [step, setStep] = useState('1');
  const [choice, setChoice] = useState("");

  const paperChoice = () => {
    setStep('2');
    setChoice("paper");
    
  };
  const scissorsChoice = () => {
    setStep('2');
    setChoice("scissors");
    
  };
  const rockChoice = () => {
      setStep('2');
    setChoice("rock")
  };

  return (
    <>
      <Info score={10} />
      {step === '1' ? (
        <Step1
          paperChoice={paperChoice}
          scissorsChoice={scissorsChoice}
          rockChoice={rockChoice}
        />
          ) : step === '2' ? (
        setTimeout(() =>{ setStep('3')}, 3000),
        <Step2 />
      ) : step === '3' ? (
        <h1>juz</h1>
      ) : null}
      <button>Modal</button>
    </>
  );
};

export default Game;
