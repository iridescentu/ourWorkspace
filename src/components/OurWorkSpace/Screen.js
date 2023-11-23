import styled from "styled-components";
import { Main } from "./Main";
import { useTheme } from "./ThemeContext";

const Container = styled.div`
  width: 100vw;
  /* NavBar height 60px */
  height: calc(100vh - 60px);
  padding: 70px;
  background-image: url("https://cdn.discordapp.com/attachments/1172066053451423844/1172067976401403914/dfpwt5g-e7ed244c-8c4e-429c-96ee-1c0f67fcc7d5.gif?ex=655ef85d&is=654c835d&hm=897b92f21cd47aa87e4d4a59f0a3753d475f890fdf85bf8459a046b7a44f9bd9&");
  background-size: cover;
  background-position: center;
`;

export function Screen() {
  // Theme
  const { screenBackgroundImage } = useTheme();

  return (
    <>
      <Container style={{ backgroundImage: screenBackgroundImage }}>
        <Main />
      </Container>
    </>
  );
}
