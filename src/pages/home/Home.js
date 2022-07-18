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
  PartnersDiv,
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
          const name2 = teams[i + 1]?.name;
          const img2 = teams[i + 1]?.imgs;
          const score2 = team?.matches[i + 1]?.score;

          return (
            <CardSection>
              <MatchCard
                name={name}
                score={score}
                img={img}
                name2={name2}
                img2={img2}
                score2={score2}
              ></MatchCard>
            </CardSection>
          );
        })}
      </CurrentMatches>
      <Swiper
        className="swiper"
        spaceBetween={20}
        slidesPerView={3}
        loop={false}
        centerInsufficientSlides={false}
        centeredSlides={true}
        centeredSlidesBounds={true}
        autoplay={true}
        speed={1000}
        pagination={true}
        modules={[Autoplay]}
        style={{
          width: "65%",
          margin: "0",
          display: "flex",
          flexDirection: "row",
          height: "45vh",
          marginRight: "auto",
          marginLeft: "auto",
          marginBottom: "50px",
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
                style={{
                  backgroundColor: "green",
                  color: "black",
                  margin: "20px",
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <PartnersDiv>
        <h1 color="white">OUR PARTNERS</h1>
        <ul
          style={{
            listStyle: "none",
            padding: "0",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <li>PARTNER1</li>
          <li
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            PARTNER2
          </li>
          <li>PARTNER3</li>
        </ul>
      </PartnersDiv>
    </HomeFlex>
  );
}

export default Home;
