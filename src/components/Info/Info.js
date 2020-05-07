import React from "react";
import Logo from "./Logo";
import Score from "./Score";
import styled from "@emotion/styled";

const Info = ({score}) => {
    const Info = styled.div`
      width: 50vw;
      height: 100px;
      border: 2px solid hsl(217, 16%, 45%);
      border-radius: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 5px;
      margin: 3rem 0;
    `;

  return (
    <Info>
      <Logo />
      <Score score={score}/>
    </Info>
  );
};

export default Info;
