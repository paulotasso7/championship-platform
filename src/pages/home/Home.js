import Navbar from "../../components/Navbar.js/Navbar";
import {
  ContainerNav,
  BannerContainer,
  CurrentMatches,
  MatchLink,
  HomeFlex,
} from "./Home.styles";

function Home() {
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
      <CurrentMatches>
        <div>
          <MatchLink>CURRENT MATCHES</MatchLink>
          <MatchLink>NEXT MATCHES</MatchLink>
          <MatchLink>RESULTS</MatchLink>
        </div>
      </CurrentMatches>
    </HomeFlex>
  );
}

export default Home;
