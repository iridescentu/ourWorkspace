import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 73px);
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
