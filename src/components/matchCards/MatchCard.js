import team from "/home/paulotasso/Projetos/championships-platform/src/data/teams.json";
import { CardContainer, Scorer } from "./MatchCard.styles";

export const MatchCard = ({ name, score, img }) => {
  return (
    <>
      <CardContainer>
        <div
          id="qlq"
          style={{
            width: "0",
            position: "sticky",
            borderColor: "black",
          }}
        >
          <img
            src={img}
            style={{ transform: "translate(-5vw,-18%)" }}
            alt="wlw"
          />
        </div>
        <div
          style={{
            width: "100%",
            height: "5vw",
            minWidth: "300px",
          }}
        >
          <p
            style={{
              border: "4px solid",
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
            {name}
          </p>

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
              <li key={1} style={{ padding: "5px" }}>
                {/* <FontAwesomeIcon icon={faBrain} /> */}
              </li>
              <li key={2} style={{ padding: "5px" }}>
                tt
              </li>
              <li key={3} style={{ padding: "5px" }}>
                ig
              </li>
              <li key={4} style={{ padding: "5px" }}>
                WATCH
              </li>
            </ul>
          </div>
        </div>
      </CardContainer>
      <Scorer>
        <p
          style={{
            color: "white",
            // fontSize: "4rem",
            margin: "0px 0px -8px 0px",
            letterSpacing: "-1.5px",
          }}
        >
          {score}:{11}
        </p>
        <h6
          style={{
            color: "#ff4f0e",
          }}
        >
          24/5/2021
        </h6>
      </Scorer>
      <CardContainer>
        <div
          id="qlq"
          style={{ width: "0px", position: "absolute", borderColor: "black" }}
        >
          <img
            src="/assets/images/team1.png"
            style={{ transform: "translate(20vw,-18%)" }}
            alt="wlw"
          />
        </div>
        <div
          style={{
            width: "100%",
            height: "5vw",
          }}
        >
          <p
            style={{
              border: "4px solid",
              borderRadius: "15px",
              fontSize: "32px",
              padding: "25px 55px 25px 5px",
              margin: "0",
              justifyContent: "flex-start",
              whiteSpace: "nowrap",
              display: "flex",
              textSizeAdjust: "100%",
            }}
          >
            {team[1].name}
          </p>

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
              <li key={5} style={{ padding: "5px" }}>
                {/* <FontAwesomeIcon icon={faBrain} /> */}
              </li>
              <li key={6} style={{ padding: "5px" }}>
                tt
              </li>
              <li key={7} style={{ padding: "5px" }}>
                ig
              </li>
              <li key={8} style={{ padding: "5px" }}>
                WATCH
              </li>
            </ul>
          </div>
        </div>
      </CardContainer>
    </>
  );
};
