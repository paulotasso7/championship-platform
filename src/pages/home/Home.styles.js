import styled from "styled-components";

export const ContainerNav = styled.div`
  height: 20vh;
  position: fixed;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const BannerContainer = styled.div`
  text-align: center;
  color: #ff4f0e;
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
    min-height: 200px;
  }
`;

export const CurrentMatches = styled.section`
  background: black;
  width: 80%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    position: initial;
    width: 80%;
    display: flex;
    flex-direction: column;
    box-sizing: content-box;
  }
  @media (min-width: 1750px) {
    position: initial;
    width: 60%;
    display: flex;
    flex-direction: column;
    box-sizing: content-box;
  }
`;

export const MatchLink = styled.li`
  color: orange;
  margin: 0px 0px 0px 0px;
  text-decoration: none;
  list-style: none;
  padding: 0px 0px 0px 0px;
  @media (max-width: 768px) {
    margin: 0px 0px 0px 0px;
    flex-wrap: nowrap;
  }
`;

export const HomeFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.ul`
  background-color: #0f0f0f;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  padding: 0px;
  @media (max-width: 768px) {
    top: 15px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: center;
    margin: 0px;
    height: fit-content;
    position: "absolute";
    margin-left: auto;
    margin-right: auto;
    background-color: black;
  }
`;

export const Button = styled.button`
  background: #0e0e0e;
  font-size: 18px;
  color: #ff4f0e;
  text-decoration: none;
  white-space: nowrap;
  border: none;
  display: flex;
  justify-items: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    min-width: 25 0px;
    max-width: 250px;
    background: black;

    width: 100%;
    display: flex;
    justify-content: center;
    height: 50px;
    align-items: center;
  }

  :focus {
    color: #0f0f0f;
    background-color: #ff4f0e;
    height: 50px;
    padding: 30px;
    display: flex;
    clip-path: polygon(0% 0%, 100% 0, 100% 0, 85% 100%, 0% 100%);
  }
`;
