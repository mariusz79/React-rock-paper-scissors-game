import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const Step2 = ({ paperChoice, scissorsChoice, rockChoice }) => {
  const Step1 = styled.div`
    position: relative;
  `;
  const BlueButton = styled.div`
    position: absolute;
    top: -1rem;
    background: linear-gradient(white, #ccc) padding-box,
      /*this is background*/
        linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))
        border-box;
    color: #313149;
    padding: 30px;
    border: 10px solid transparent;
    border-radius: 50%;
  `;
  const Icon = styled.img`
    width: 30px;
  `;
  const YellowButton = styled.div`
    position: absolute;
    top: -1rem;
    right: 0;
    background: linear-gradient(white, #ccc) padding-box,
      /*this is background*/
        linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))
        border-box;
    color: #313149;
    padding: 30px;
    border: 10px solid transparent;
    border-radius: 50%;
  `;
  const RedButton = styled.div`
    position: absolute;
    bottom: 0;
    left: 35%;
    background: linear-gradient(white, #ccc) padding-box,
      /*this is background*/
        linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))
        border-box;
    color: #313149;
    padding: 30px;
    border: 10px solid transparent;
    border-radius: 50%;
  `;

  return (
    <>
      <Step2>
        
      </Step2>
    </>
  );
};

export default Step2;
