import React from "react";
import styled from "styled-components";

const ModalButton = ({ openModal }) => {
  const ModalButton = styled.div`
    color: white;
    border: 1px solid hsl(217, 16%, 45%);
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 1.5rem;
    color: hsl(217, 16%, 45%);
    margin: auto 0 1rem 0;
    &:hover {
      padding: 7px 12px;
      transition: 0.2s ease-in-out;
    }
  `;

  return <ModalButton onClick={openModal}>RULES</ModalButton>;
};

export default ModalButton;
