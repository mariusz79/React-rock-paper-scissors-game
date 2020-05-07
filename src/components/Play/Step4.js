import React from "react";
import styled, { css } from "styled-components";

const Step4 = ({ choice, playAgain, cpuChoice, txt }) => {
  const Step4 = {
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
    const Div = styled.div`
      border-radius: 50%;
      ${(props) =>
        props.winner &&
        css`
          box-shadow: 0 0 0 20px #8080800f,0 0 0 40px #5459791a, 0 0 0 60px #2c486f4d;

}
        `}
    `;
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

  var background = "";
  var boxShadow = "";
  switch (choice) {
    case "paper":
      background = `linear-gradient(white, #ccc) padding-box,
          /*this is background*/
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
          /*this is background*/
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
    background: `${background}`,
    boxShadow: `${boxShadow}`,
  };
  const cpuStyle = {
    background: `${cpuBackground}`,
    boxShadow: `${cpuBoxShadow}`,
  };
  const Icon = {
    width: "50px",
    height: "50px",
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
    <div style={Step4}>
      <h1>{txt}</h1>
      <button onClick={playAgain}>PLAY AGAIN</button>
      {txt === "YOU WIN" ? (
        <>
          <div style={Column}>
            <h2>YOU PICKED</h2>
            <Div winner>
              <Button style={style}>
                <img style={Icon} src={checkIcon(choice)} alt={choice} />
              </Button>
            </Div>
          </div>
          <div style={Column}>
            <h2>THE HOUSE PICKED</h2>
            <Div>
              <Button style={cpuStyle}>
                <img style={Icon} src={checkIcon(cpuChoice)} alt={cpuChoice} />
              </Button>
            </Div>
          </div>
        </>
      ) : txt === "YOU LOSE" ? (
        <>
          <div style={Column}>
            <h2>YOU PICKED</h2>
            <Div>
              <Button style={style}>
                <img style={Icon} src={checkIcon(choice)} alt={choice} />
              </Button>
            </Div>
          </div>
          <div style={Column}>
            <h2>THE HOUSE PICKED</h2>
            <Div winner>
              <Button style={cpuStyle}>
                <img style={Icon} src={checkIcon(cpuChoice)} alt={cpuChoice} />
              </Button>
            </Div>
          </div>
        </>
      ) : (
        <>
          <div style={Column}>
            <h2>YOU PICKED</h2>
            <Div>
              <Button style={style}>
                <img style={Icon} src={checkIcon(choice)} alt={choice} />
              </Button>
            </Div>
          </div>
          <div style={Column}>
            <h2>THE HOUSE PICKED</h2>
            <Div>
              <Button style={cpuStyle}>
                <img style={Icon} src={checkIcon(cpuChoice)} alt={cpuChoice} />
              </Button>
            </Div>
          </div>
        </>
      )}
    </div>
  );
};

export default Step4;
