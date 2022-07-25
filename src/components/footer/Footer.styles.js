import styled from "styled-components";

export const FooterContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  position: relative;
  bottom: 0;
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
  }
  li {
    padding: 10px;
  }
`;
