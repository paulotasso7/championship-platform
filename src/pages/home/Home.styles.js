import styled from "styled-components";

export const ContainerNav = styled.div`
  height: 20vh;
  position: fixed;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const BannerContainer = styled.div`
  text-align: center;
  color: purple;
  z-index: -1;
  font-size: 5vw;
  img {
    width: 100vw;
    max-width: 100%;
    height: 75vh;
  }
  p {
    transform: translateY(-40vh);
    overflow: hidden;
    z-index: -1;
    margin: 0;
  }
  @media (max-width: 768px) {
    height: 40vw;
    min-height: 200px;
    width: 100vw;
  }
`;

export const CurrentMatches = styled.div`
  background: green;
  height: 60vh;
  position: absolute;
  top: 75vh;
  width: 100%;
  @media (max-width: 768px) {
    height: 40vw;
    width: 100%;
  }
`;

export const MatchLink = styled.a`
  color: orange;
`;

export const HomeFlex = styled.div`
  display: flex;
  flex-direction: column;
`;
