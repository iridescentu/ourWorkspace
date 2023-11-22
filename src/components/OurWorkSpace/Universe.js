import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  /* NavBar 50px UniverseWindow 23px */
  height: calc(100vh - 73px);
  background-color: black;
  & h1 {
    color: white;
  }
`;

export function Universe() {
  return (
    <>
      <Container>
        <h1>Universe Contents</h1>
      </Container>
    </>
  );
}
