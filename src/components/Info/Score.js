import React from "react";
import styled from "styled-components";

const Score = ({ score }) => {
  const Score = styled.div`
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 15px;
    text-align: center;
    color: hsl(229, 64%, 46%);
  `;
  const title = {
    margin: "0",
  };

  const points = {
    margin: "0",
    fontSize: "3.5rem",
    color: "hsl(229, 25%, 31%)",
  };
  return (
    <Score>
      <h4 style={title}>SCORE</h4>
      <h1 style={points}>{score}</h1>
    </Score>
  );
};

export default Score;
