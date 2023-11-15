import styled from "styled-components";
import { UniverseWindow } from "./UniverseWindow";

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  background-color: skyblue;
`;
export function Archive() {
  return (
    <>
      <Container>
        <UniverseWindow />
        <h1>Archive Contents</h1>
      </Container>
    </>
  );
}
