import React, { useState, useEffect } from "react";
import Info from "./Info/Info";
import Step1 from "../components/Play/Step1";
import Step2 from "../components/Play/Step2";
import Step3 from "../components/Play/Step3";
import Step4 from "../components/Play/Step4";

const Game = () => {
  const [step, setStep] = useState('1');
    const [choice, setChoice] = useState('');
    const [cpuChoice, setCpuChoice] = useState('');

    const computerChoice = () => {
        var choices = ['paper', 'rock', 'scissors'];
        var choiceCpu = Math.floor(Math.random() * 3);
        switch (choiceCpu) {
       case 1:
         setCpuChoice('paper');
         break;
       case 2:
         icon = `./img/icon-rock.svg`;
         break;
       case 3:
         icon = `./img/icon-scissors.svg`;
         break;
    };
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

    const playAgain = () => {
        setStep('1');
        setChoice('')
    };
        
  return (
    <>
      <Info score={10} />
      {step === "1" ? (
        <Step1
          paperChoice={paperChoice}
          scissorsChoice={scissorsChoice}
          rockChoice={rockChoice}
        />
      ) : step === "2" ? (
        (setTimeout(() => {
          setStep("3");
        }, 3000),
        (<Step2 choice={choice} />))
      ) : step === "3" ? (
        (setTimeout(() => {
          setStep("4");
        }, 3000),
        (<Step3 choice={choice} />))
      ) : step === "4" ? (
        <Step4 choice={choice} playAgain={playAgain} />
      ) : null}
      <button>Modal</button>
    </>
  );
};

export default Game;
