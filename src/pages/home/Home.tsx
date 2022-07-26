//components import
import { MatchCard } from "../../components/matchCards/MatchCard";
import { TeamCard } from "../../components/teamCards/TeamCard";

//style imports
import {
  Button,
  BannerContainer,
  CurrentMatches,
  MatchLink,
  HomeFlex,
  ButtonContainer,
  PartnersDiv,
  CardSection,
} from "./Home.styles";

//carousel imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

//data import
import teams from "/home/paulotasso/Projetos/championships-platform/src/data/teams.json";
import React from "react";

type MatchCardType = {
  name: string;
  score: number;
  img: string;
  name2: string;
  img2: string;
  score2: number;
};

const swiperProps = {
  spaceBetween: 10,
  slidesPerView: 3,
  loop: false,
  centerInsufficientSlides: false,
  centeredSlides: true,
  centeredSlidesBounds: true,
  autoplay: true,
  speed: 1000,
  pagination: true,
  modules: [Autoplay],
  style: {
    width: "60%",
    margin: "0",
    display: "flex",
    flexDirection: "row",
    height: "320px",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: "50px",
    transform: "none",
  } as React.CSSProperties,
};

function Home() {
  const matchCardRender = teams.map((team, i): JSX.Element => {
    const matchData: MatchCardType = {
      name: teams[i]?.name,
      score: team?.matches[i]?.score,
      img: teams[i].imgs,
      name2: teams[i + 1]?.name,
      img2: teams[i + 1]?.imgs,
      score2: team?.matches[i + 1]?.score,
    };

    return (
      <CardSection>
        <MatchCard
          name={matchData.name}
          score={matchData.score}
          img={matchData.img}
          name2={matchData.name2}
          img2={matchData.img2}
          score2={matchData.score2}
        ></MatchCard>
      </CardSection>
    );
  });

  const teamCardRender = teams.map((team, i): JSX.Element => {
    const name: string = teams[i].name;
    const img: string = teams[i].imgs;

    return (
      <SwiperSlide>
        <TeamCard teamName={name} teamImg={img} />
      </SwiperSlide>
    );
  });

  return (
    <HomeFlex>
      <BannerContainer>
        <img
          src="https://cdn.wallpapersafari.com/42/75/d8ptQ3.jpg"
          alt="home-banner"
        ></img>
        <p>
          CHAMPS
          <span />
          platform
        </p>
      </BannerContainer>
      <CurrentMatches>
        <ButtonContainer>
          <MatchLink key={1}>
            <Button>CURRENT MATCHES</Button>
          </MatchLink>
          <MatchLink key={2}>
            <Button>NEXT MATCHES</Button>
          </MatchLink>
          <MatchLink key={3}>
            <Button>RESULTS</Button>
          </MatchLink>
        </ButtonContainer>
        {matchCardRender}
      </CurrentMatches>
      <Swiper {...swiperProps}>{teamCardRender}</Swiper>
      <PartnersDiv>
        <h1>OUR PARTNERS</h1>
        <ul>
          <li key="p1">PARTNER1</li>
          <li key="p2">PARTNER2</li>
          <li key="p3">PARTNER3</li>
        </ul>
      </PartnersDiv>
    </HomeFlex>
  );
}

export default Home;
