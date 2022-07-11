import { useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { MatchCardRight } from "../../components/matchCards/MatchCardRight";
import { MatchCardLeft } from "../../components/matchCards/MatchCardLeft";
import {
  Button,
  ContainerNav,
  BannerContainer,
  CurrentMatches,
  MatchLink,
  HomeFlex,
  ButtonContainer,
} from "./Home.styles";
import { CardSection } from "../../components/matchCards/MatchCard.styles";
import { TeamContainer } from "../../components/teamCards/TeamCard.styles";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import teams from "/home/paulotasso/Projetos/championships-platform/src/utils/teams.json";

function Home() {
  return (
    <HomeFlex>
      <ContainerNav>
        <Navbar />
      </ContainerNav>
      <BannerContainer id="container-test">
        <img
          src="https://wallpapercave.com/wp/wp9221335.jpg"
          alt="home-banner"
        ></img>
        <p>
          CHAMPS
          <span />
          platform
        </p>
      </BannerContainer>
      <CurrentMatches
        id="matches-box"
        style={{
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <ButtonContainer>
          <MatchLink>
            <Button>CURRENT MATCHES</Button>
          </MatchLink>
          <MatchLink>
            <Button>NEXT MATCHES</Button>
          </MatchLink>
          <MatchLink>
            <Button>RESULTS</Button>
          </MatchLink>
        </ButtonContainer>
        <CardSection>
          <MatchCardLeft></MatchCardLeft>
          <div
            style={{
              background: "green",
              height: "150px",
              width: "30%",
            }}
          ></div>
          <MatchCardRight></MatchCardRight>
        </CardSection>
        <CardSection>
          <MatchCardLeft></MatchCardLeft>
          <div
            style={{
              background: "green",
              height: "150px",
              width: "30%",
            }}
          ></div>
          <MatchCardRight></MatchCardRight>
        </CardSection>
        <CardSection>
          <MatchCardLeft></MatchCardLeft>
          <div
            style={{
              background: "green",
              height: "150px",
              width: "30%",
            }}
          ></div>
          <MatchCardRight></MatchCardRight>
        </CardSection>
      </CurrentMatches>

      <Swiper
        spaceBetween={40}
        slidesPerView={4}
        loop={true}
        centerInsufficientSlides={true}
        centeredSlides={false}
        centeredSlidesBounds={true}
        autoplay={true}
        speed={300}
        modules={[Autoplay]}
      >
        <TeamContainer></TeamContainer>
        <TeamContainer style={{ background: "red" }}></TeamContainer>
        <TeamContainer style={{ background: "green" }}></TeamContainer>
      </Swiper>
    </HomeFlex>
  );
}

export default Home;
