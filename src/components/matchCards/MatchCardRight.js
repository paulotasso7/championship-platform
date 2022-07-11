import team from "/home/paulotasso/Projetos/championships-platform/src/utils/teams.json";
import { CardContainer } from "./MatchCard.styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MatchCardRight = () => {
  return (
    <CardContainer>
      <div
        id="qlq"
        style={{ width: "0", position: "absolute", justifySelf: "flex-end" }}
      >
        <img
          src={require("/home/paulotasso/Projetos/championships-platform/src/assets/images/team2.png")}
          alt="team-logo"
          style={{ transform: "translate(0,-10%)" }}
        />
      </div>
      <div
        style={{
          width: "100%",
        }}
      >
        <h3
          style={{
            border: "8px solid",
            borderRadius: "15px",
            fontSize: "2.5rem",
            padding: "25px 0px 25px 55px",
            margin: "0",
            justifyContent: "flex-end",
            whiteSpace: "nowrap",
            display: "flex",
            textSizeAdjust: "100%",
          }}
        >
          {team[0].name}
        </h3>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            listStyle: "none",
            border: "2px solid",
            margin: "0",
          }}
        >
          <li style={{ padding: "5px" }}>
            <FontAwesomeIcon icon="fa-brands fa-youtube" />
          </li>
          <li style={{ padding: "5px" }}>tt </li>
          <li style={{ padding: "5px" }}>ig </li>
          <li style={{ padding: "5px" }}>WATCH</li>
        </ul>
      </div>
    </CardContainer>
  );
};
