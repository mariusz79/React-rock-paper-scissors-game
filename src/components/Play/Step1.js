import React from "react";
import styled, { css } from "styled-components";

const Step1 = ({ paperChoice, scissorsChoice, rockChoice }) => {
  const Button = styled.div`
    padding: 30px;
    border: 10px solid transparent;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      padding: 100px;}
    &:hover {
      transform: translate(0%, 1%);
      transition: 0.2s ease-in-out;
        }
 
    ${(props) =>
      props.blue &&
      css`
        position: absolute;
        top: -1rem;
        background: linear-gradient(white, #ccc) padding-box,
          /*this is background*/
            linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))
            border-box;
        box-shadow: inset 0px 7px 2px #cecccc, 0 5px 0 1px #2b45c0;
        &:hover {
          box-shadow: none;
        }
      `}

    ${(props) =>
      props.red &&
      css`
        position: absolute;
        bottom: 0;
        left: 35%;
        background: linear-gradient(white, #ccc) padding-box,
          /*this is background*/
            linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))
            border-box;
        box-shadow: inset 0px 7px 2px #cecccc, 0 5px 0 1px #9f1634;
        &:hover {
          box-shadow: none;
        }
      `}
      ${(props) =>
        props.yellow &&
        css`
          position: absolute;
          top: -1rem;
          right: 0;
          background: linear-gradient(white, #ccc) padding-box,
            /*this is background*/
              linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))
              border-box;
          box-shadow: inset 0px 7px 2px #cecccc, 0 5px 0 1px #c66d1d;
          &:hover {
            box-shadow: none;
          }
        `}
        
  `;
  const Icon = {
    width: "30px",
    height: "30px",
  };
  const Step1 = {
    position: "relative",
  };
  return (
    <div style={Step1}>
      <img src="./img/bg-triangle.svg" alt="triangle" />
      <Button blue onClick={paperChoice}>
        <img style={Icon} src="./img/icon-paper.svg" alt="paper" />
      </Button>
      <Button yellow onClick={scissorsChoice}>
        <img style={Icon} src="./img/icon-scissors.svg" alt="scissors" />
      </Button>
      <Button red onClick={rockChoice}>
        <img style={Icon} src="./img/icon-rock.svg" alt="rock" />
      </Button>
    </div>
  );
};

export default Step1;
