import styled from "styled-components";

export const ContainerNav = styled.div`
  height: 20vh;
  position: fixed;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const BannerContainer = styled.div`
  text-align: center;
  color: purple;
  z-index: -1;
  font-size: 5vw;
  height: 75vh;
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
    display: flex;
    flex-direction: column;
  }
`;

export const MatchLink = styled.li`
  color: orange;
  /* border: dotted; */
  margin: 25px 0px 25px 15px;
  padding: 12px 45px 6px 30px;
  text-decoration: none;
  list-style: none;
  font-size: 18px;
  width: 150px;
  button {
    text-decoration: none;
    white-space: nowrap;
    &:hover {
      color: white;
      transition: 0.15s ease-in-out;
    }
  }
  @media (max-width: 768px) {
    margin: 0px 0px 0px 0px;
    width: 100%;
    flex-wrap: nowrap;
  }
`;

export const HomeFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.ul`
  background-color: black;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: content-box;
  padding: 5px;
  position: relative;
  right: 40px;
  left: 40px;
  width: 90%;
  @media (max-width: 768px) {
    top: 15px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0px;
    height: fit-content;
  }
`;
