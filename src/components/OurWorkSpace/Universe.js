import styled from "styled-components";
import { UniverseWindow } from "./UniverseWindow";

const Container = styled.div`
  width: 100vw;
  /* NavBar height 50px */
  height: calc(100vh - 50px);
  background-color: black;
  & h1 {
    color: white;
  }
`;

export function Universe() {
  return (
    <>
      <Container>
        <UniverseWindow />
        <h1>Universe Contents</h1>
      </Container>
    </>
  );
}
