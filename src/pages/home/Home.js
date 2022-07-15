//components import
import { Navbar } from "../../components/navbar/Navbar";
import { MatchCard } from "../../components/matchCards/MatchCard";
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
import { TeamCard } from "../../components/teamCards/TeamCard";

//carousel imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

//data import
import teams from "/home/paulotasso/Projetos/championships-platform/src/data/teams.json";

function Home() {
  return (
    <HomeFlex>
      <ContainerNav>
        <Navbar />
      </ContainerNav>
      <BannerContainer id="container-test">
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
      <CurrentMatches id="matches-box">
        <ButtonContainer>
          <MatchLink key={1}>
            <Button>CURRENT MATCHES</Button>
          </MatchLink>
          <MatchLink key={2}>
            <Button style={{ display: "flex", justifySelf: "center" }}>
              NEXT MATCHES
            </Button>
          </MatchLink>
          <MatchLink key={3}>
            <Button>RESULTS</Button>
          </MatchLink>
        </ButtonContainer>

        {teams.map((team, i) => {
          const name = teams[i]?.name;
          const score = team?.matches[i]?.score;
          const img = teams[i].imgs;
          return (
            <CardSection>
              <MatchCard name={name} score={score} img={img}></MatchCard>
            </CardSection>
          );
        })}
      </CurrentMatches>
      <Swiper
        className="swiper"
        spaceBetween={4}
        slidesPerView={3}
        loop={false}
        centerInsufficientSlides={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        autoplay={true}
        speed={1000}
        pagination={true}
        modules={[Autoplay]}
        style={{
          width: "50%",
          margin: "0",
          display: "flex",
          flexDirection: "row",
          height: "35vh",
          marginRight: "auto",
          marginLeft: "auto",
          transform: "none",
        }}
      >
        {teams.map((team, i) => {
          const name = teams[i].name;
          const img = teams[i].imgs;

          return (
            <SwiperSlide>
              <TeamCard
                teamName={name}
                teamImg={img}
                style={{ backgroundColor: "green", color: "black" }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </HomeFlex>
  );
}

export default Home;
