import React from "react";
import styled, { css } from "styled-components";

const Step2 = ({ choice }) => {
  const Step2 = {
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
    padding: 45px;
    border: 18px solid transparent;
    border-radius: 50%;
    width: 6.5vw;
    height: 6.5vw;
    display: flex;
    justify-content: center;
    align-items: center;

    ${(props) =>
      props.empty &&
      css`
        background: #111b3b;
      `}
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
  const style = {
    boxShadow: `${boxShadow}`,
    background: `${background}`,
  };
  const Icon = {
    width: "50px",
    height: "50px",
  };

  var icon = "";
  switch (choice) {
    case "paper":
      icon = `./img/icon-paper.svg`;
      break;
    case "rock":
      icon = `./img/icon-rock.svg`;
      break;
    case "scissors":
      icon = `./img/icon-scissors.svg`;
      break;
    default:
      icon = "";
  }

  return (
    <div style={Step2}>
      <div style={Column}>
        <Button style={style}>
          <img style={Icon} src={icon} alt={choice} />
        </Button>
        <h3>YOU PICKED</h3>
      </div>
      <div style={Column}>
        <Button empty></Button>
        <h3>THE HOUSE PICKED</h3>
      </div>
    </div>
  );
};

export default Step2;
