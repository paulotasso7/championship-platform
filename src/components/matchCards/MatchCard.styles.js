import styled from "styled-components";

export const CardContainer = styled.div`
  height: 90px;
  width: 400px;
  background: #0f0f0f;
  color: #ff4f0e;
  border-radius: 15px;
  display: flex;
  @media (max-width: 768px) {
    margin: 10px;
    width: 400px;
    font-size: 1rem;
  }
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Scorer = styled.div`
  background: black;
  height: 150px;
  width: 30%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 4rem;
  }
  @media (max-width: 768px) {
    margin: 10px;
    width: 100%;
    p {
      font-size: 3rem;
    }
    h6 {
      font-size: 1rem;
      align-self: center;
      margin: 15px;
    }
  }
`;
