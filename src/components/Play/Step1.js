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

    ${(props) =>
      props.blue &&
      css`
        position: absolute;
        top: -1rem;
        background: linear-gradient(white, #ccc) padding-box,
          /*this is background*/
            linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))
            border-box;
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
        `}
  `;
    const Icon = {
        width: '30px',
        height: '30px',
    };
const Step1 = {
  position: 'relative',
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
