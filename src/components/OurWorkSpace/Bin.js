import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  /* NavBar 50px UniverseWindow 23px */
  height: calc(100vh - 73px);
  background-color: gray;
`;

export function Bin() {
  return (
    <>
      <Container>
        <h1>Bin Contents</h1>
      </Container>
    </>
  );
}
