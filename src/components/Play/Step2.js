import React from "react";
import styled, { css } from "styled-components";

const Step2 = (props) => {
  const Step2 = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5vw;
    color: white;
  `;
  const Player = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Cpu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    
    ${(props) =>
      props.blue &&
      css`
        background: linear-gradient(white, #ccc) padding-box,
          /*this is background*/
            linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))
            border-box;
      `}

    ${(props) =>
      props.red &&
      css`
        background: linear-gradient(white, #ccc) padding-box,
          /*this is background*/
            linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))
            border-box;
      `}
      ${(props) =>
        props.yellow &&
        css`
          background: linear-gradient(white, #ccc) padding-box,
            /*this is background*/
              linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))
              border-box;
        `}
        ${(props) =>
          props.empty &&
          css`
            background: darkgray;
          `}
  `;

  const Icon = styled.img`
    width: 50px;
    height: 50px;
  `;

  return (
    <>
      <Step2>
        <Player>
          <h2>YOU PICKED</h2>
          <Button blue>
            <Icon src="./img/icon-paper.svg" alt="paper" />
          </Button>
        </Player>
        <Cpu>
          <h2>THE HOUSE PICKED</h2>
          <Button empty>
          </Button>
        </Cpu>
      </Step2>
    </>
  );
};

export default Step2;
