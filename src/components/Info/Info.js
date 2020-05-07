import React from "react";
import Logo from "./Logo";
import Score from "./Score";

const Info = ({score}) => {
    const Info = styled.div`
      height: 90px;
      width: 90%;
      border: 2px solid hsl(217, 16%, 45%);
      border-radius: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 5px;
      margin: 2rem 0 5rem 0;
      @media (min-width: 600px) {
        width: 65vw;
      }
      @media (min-width: 768px) {
        width: 55vw;
      }
    `;

  return (
    <Info>
      <Logo />
      <Score score={score}/>
    </Info>
  );
};

export default Info;
