import React from "react";
import styled from "styled-components";

const Triangle = () => {
  const Triangle = styled.div`
    width: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        width: 330px;
    }
  `;
  
  return (
    <Triangle>
      <img src="./img/bg-triangle.svg" alt="triangle" />
    </Triangle>
  );
};

export default Triangle;
