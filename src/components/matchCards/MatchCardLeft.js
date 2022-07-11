import team from "/home/paulotasso/Projetos/championships-platform/src/utils/teams.json";
import { CardContainer } from "./MatchCard.styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBrain } from "@fortawesome/free-solid-svg-icons";

export const MatchCardLeft = () => {
  const team1 = team[0];
  return (
    <CardContainer>
      <div
        id="qlq"
        style={{ width: "0", position: "absolute", borderColor: "black" }}
      >
        <img
          src={require(`${team1.imgs}`)}
          alt="team-logo"
          style={{ transform: "translate(-25%,-15%)" }}
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "5vw",
        }}
      >
        <h3
          style={{
            border: "8px solid",
            borderRadius: "15px",
            fontSize: "32px",
            padding: "25px 5px 25px 55px",
            margin: "0",
            justifyContent: "flex-end",
            whiteSpace: "nowrap",
            display: "flex",
            textSizeAdjust: "100%",
          }}
        >
          {team[0].name}
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "5px",
          }}
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              listStyle: "none",
              margin: "0",
              width: "16em",
            }}
          >
            <li style={{ padding: "5px" }}>
              <FontAwesomeIcon icon={faBrain} />
            </li>
            <li style={{ padding: "5px" }}>tt </li>
            <li style={{ padding: "5px" }}>ig </li>
            <li style={{ padding: "5px" }}>WATCH</li>
          </ul>
        </div>
      </div>
    </CardContainer>
  );
};
