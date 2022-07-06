import { useState } from "react";
import Navbar from "../../components/Navbar.js/Navbar";
import {
  ContainerNav,
  BannerContainer,
  CurrentMatches,
  MatchLink,
  HomeFlex,
  ButtonContainer,
} from "./Home.styles";

function Home() {
  const [matchRoute, setMatchRoute] = useState("");

  const handleOnClick = (state) => {
    if (matchRoute === "next") {
      return (document.getElementById("next-match").style.background = "red");
    }

    if (matchRoute === "results") {
      return (document.getElementById("results").style.background = "red");
    }
    if (matchRoute === "current") {
      return (document.getElementById("current-match").style.background =
        "red");
    }
  };

  return (
    <HomeFlex>
      <ContainerNav>
        <Navbar />
      </ContainerNav>
      <BannerContainer id="container-test">
        <img
          src="https://cdn.wallpapersafari.com/82/51/csEFDb.jpg"
          alt="home-banner"
        ></img>
        <p>
          CHAMPS
          <span />
          platform
        </p>
      </BannerContainer>
      <CurrentMatches id="matches-box">
        <ButtonContainer>
          <MatchLink>
            <button
              id="current-match"
              onClick={() => {
                setMatchRoute("current");
                handleOnClick();
              }}
            >
              CURRENT MATCHES
            </button>
          </MatchLink>
          <MatchLink>
            <button
              id="next-match"
              onClick={() => {
                setMatchRoute("next");
                handleOnClick();
              }}
            >
              NEXT MATCHES
            </button>
          </MatchLink>
          <MatchLink>
            <button
              id="results"
              onClick={() => {
                setMatchRoute("results");
                handleOnClick();
              }}
            >
              RESULTS
            </button>
          </MatchLink>
        </ButtonContainer>
      </CurrentMatches>
    </HomeFlex>
  );
}

export default Home;
