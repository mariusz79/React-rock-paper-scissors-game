import React, { useState, useEffect } from "react";
import Info from "./Info/Info";
import Step1 from "../components/Play/Step1";
import Step2 from "../components/Play/Step2";
import Step3 from "../components/Play/Step3";
import Step4 from "../components/Play/Step4";

const Game = () => {
  const [step, setStep] = useState("1");
  const [choice, setChoice] = useState("");
  const [cpuChoice, setCpuChoice] = useState("");
  const [txt, setTxt] = useState("");
  const [score, setScore] = useState(0);

  const computerChoice = () => {
    var choiceCpu = Math.floor(Math.random() * 3);
    switch (choiceCpu) {
      case 0:
        setCpuChoice("paper");
        break;
      case 1:
        setCpuChoice("rock");
        break;
      case 2:
        setCpuChoice("scissors");
        break;
    }
  };
  const check = () => {
    if (
      (choice === "rock" && cpuChoice === "scissors") ||
      (choice === "paper" && cpuChoice === "rock") ||
      (choice === "scissors" && cpuChoice === "paper")
    ) {
      setTxt("YOU WIN");
      setScore(score + 1);
    } else if (
      (choice === "rock" && cpuChoice === "paper") ||
      (choice === "paper" && cpuChoice === "scissors") ||
      (choice === "scissors" && cpuChoice === "rock")
    ) {
      setTxt("YOU LOSE");
        if (score > 0) { setScore(score - 1); }
    } else if (choice === cpuChoice) {
      setTxt("DRAW");
    }
  };

  const paperChoice = () => {
    setStep("2");
    setChoice("paper");
    computerChoice();
    
  };
  const scissorsChoice = () => {
    setStep("2");
    setChoice("scissors");
    computerChoice();
      
  };
  const rockChoice = () => {
    setStep("2");
    setChoice("rock");
    computerChoice();
      
  };

  const playAgain = () => {
    setStep("1");
    setChoice("");
    setCpuChoice("");
  };

  return (
    <>
      <Info score={score} />
      {step === "1" ? (
        <Step1
          paperChoice={paperChoice}
          scissorsChoice={scissorsChoice}
          rockChoice={rockChoice}
        />
      ) : step === "2" ? (
        (setTimeout(() => {
          setStep("3"); 
        }, 1000), 
        (<Step2 choice={choice} />))
      ) : step === "3" ? (
        (setTimeout(() => {
          setStep("4"); check();
        }, 1000),
        (<Step3 choice={choice} cpuChoice={cpuChoice} />))
      ) : step === "4" ? (
        <Step4
          choice={choice}
          cpuChoice={cpuChoice}
          playAgain={playAgain}
          txt={txt}
        />
      ) : null}
      <button>Modal</button>
    </>
  );
};

export default Game;
