import styled from "styled-components";

export const CardContainer = styled.div`
  height: 111px;
  width: 35vw;
  background: #353535;
  color: #ff7600;
  border-radius: 15px;
  display: flex;

  @media (max-width: 768px) {
    margin: 10px;
    width: 80vw;
    font-size: 1rem;
  }
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
