import styled from "styled-components";
import { UniverseWindow } from "./UniverseWindow";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  background-color: gray;
`;

export function Bin() {
  return (
    <>
      <Container>
        <UniverseWindow />
        <h1>Bin Contents</h1>
      </Container>
    </>
  );
}
