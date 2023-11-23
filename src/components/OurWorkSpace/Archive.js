import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  /* NavBar 60px UniverseWindow 30px */
  height: calc(100vh - 90px);
  background-color: skyblue;
`;
export function Archive() {
  return (
    <>
      <Container>
        <h1>Archive Contents</h1>
      </Container>
    </>
  );
}
