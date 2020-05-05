import React from 'react';
import styled from "@emotion/styled";

const Score = ({score}) => {
    const Score = styled.div`
      width: 100px;
      height: 100px;
      background-color: white;
      border-radius: 15px;
      text-align: center;
    `;
    return (
      <Score>
        <h3>SCORE</h3>
        <h2>{score}</h2>
      </Score>
    );
}
 
export default Score;