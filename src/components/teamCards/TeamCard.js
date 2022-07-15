import { TeamContainer } from "./TeamCard.styles";

export const TeamCard = ({ teamName, teamImg }) => {
  return (
    <TeamContainer>
      <div>
        <img
          src={teamImg}
          alt=""
          style={{
            height: "9vw",
            width: "9vw",
            minHeight: "7vw",
            minWidth: "7vw",
          }}
        ></img>
        <p>{teamName}</p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </TeamContainer>
  );
};
