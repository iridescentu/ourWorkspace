import styled from "styled-components";
import { UniverseWindow } from "./UniverseWindow";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  background-color: darkred;
`;

export function Register() {
  return (
    <>
      <Container>
        <UniverseWindow />
      </Container>
    </>
  );
}
