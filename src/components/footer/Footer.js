import { FooterContainer } from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <div
        style={{
          background: "rgb(52 52 52)",
          width: "100%",
          justifyContent: "center",
          display: "flex",
          height: "80px",
        }}
      >
        <ul>
          <li>facebook</li>
          <li>twitter</li>
          <li>twitch</li>
          <li>youtube</li>
          <li>instagram</li>
          <li>github</li>
        </ul>
      </div>
      <div
        style={{
          background: "rgb(28 28 28)",
          width: "100%",
          justifyContent: "center",
          display: "flex",
          height: "50px",
        }}
      >
        <p>© 2022 Copyright: Championships Platform</p>
      </div>
    </FooterContainer>
  );
};
