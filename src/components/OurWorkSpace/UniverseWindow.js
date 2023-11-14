import { Route } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  background-color: green;
`;
const Topbar = styled.div`
  background-color: white;
  width: 100%;
  height: 30px;
`;

export function UniverseWindow() {
  return (
    <>
      <Container>
        <Topbar>
          <Tabs></Tabs>
        </Topbar>
      </Container>
    </>
  );
}
