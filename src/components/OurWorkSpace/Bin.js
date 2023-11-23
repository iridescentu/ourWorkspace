import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  /* NavBar 60px UniverseWindow 30px */
  height: calc(100vh - 90px);
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
