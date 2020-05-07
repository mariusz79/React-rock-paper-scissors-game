import React from "react";
import styled from "styled-components";

const Step3 = ({ choice, cpuChoice }) => {
  const Step3 = {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "5vw",
    color: "white",
  };
  const Column = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const Button = styled.div`
    padding: 60px;
    border: 10px solid transparent;
    border-radius: 50%;
    width: 7vw;
    height: 7vw;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Icon = {
    width: "50px",
    height: "50px",
  };

  var background = "";
  var boxShadow = "";
  switch (choice) {
    case "paper":
      background = `linear-gradient(white, #ccc) padding-box,
          
            linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))
            border-box`;
      boxShadow = `inset 0px 7px 2px #cecccc, 0 5px 0 1px #2b45c0`;
      break;
    case "rock":
      background = `linear-gradient(white, #ccc) padding-box,
            linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))
            border-box`;
      boxShadow = `inset 0px 7px 2px #cecccc, 0 5px 0 1px #9f1634`;
      break;
    case "scissors":
      background = `linear-gradient(white, #ccc) padding-box,
              linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))
              border-box`;
      boxShadow = `inset 0px 7px 2px #cecccc, 0 5px 0 1px #c66d1d`;
      break;
    default:
      boxShadow = "";
  }

  var cpuBackground = "";
  var cpuBoxShadow = "";
  switch (cpuChoice) {
    case "paper":
      cpuBackground = `linear-gradient(white, #ccc) padding-box,
         
            linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))
            border-box`;
      cpuBoxShadow = `inset 0px 7px 2px #cecccc, 0 5px 0 1px #2b45c0`;
      break;
    case "rock":
      cpuBackground = `linear-gradient(white, #ccc) padding-box,
            linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))
            border-box`;
      cpuBoxShadow = `inset 0px 7px 2px #cecccc, 0 5px 0 1px #9f1634`;
      break;
    case "scissors":
      cpuBackground = `linear-gradient(white, #ccc) padding-box,
              linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))
              border-box`;
      cpuBoxShadow = `inset 0px 7px 2px #cecccc, 0 5px 0 1px #c66d1d`;
      break;
    default:
      cpuBoxShadow = "";
  }
  const style = {
    boxShadow: `${boxShadow}`,
    background: `${background}`,
  };
  const cpuStyle = {
    boxShadow: `${cpuBoxShadow}`,
    background: `${cpuBackground}`,
  };

  const checkIcon = (p) => {
    switch (p) {
      case "paper":
        return `./img/icon-paper.svg`;
      case "rock":
        return `./img/icon-rock.svg`;
      case "scissors":
        return `./img/icon-scissors.svg`;
      default:
        return "";
    }
  };

  return (
    <div style={Step3}>
      <div style={Column}>
        <h2>YOU PICKED</h2>
        <Button style={style}>
          <img style={Icon} src={checkIcon(choice)} alt={choice} />
        </Button>
      </div>
      <div style={Column}>
        <h2>THE HOUSE PICKED</h2>
        <Button style={cpuStyle}>
          <img style={Icon} src={checkIcon(cpuChoice)} alt={cpuChoice} />
        </Button>
      </div>
    </div>
  );
};

export default Step3;
