import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { UniverseWindow } from "./UniverseWindow";

const Container = styled.div`
  width: 100vw;
  /* NavBar height 50px */
  height: calc(100vh - 50px);
  background-color: black;
  & h2 {
    color: white;
  }
`;

export function Universe() {
  return (
    <>
      <Container>
        <UniverseWindow />
        {/* <h2>universe</h2>
        <NavLink to="/universe/login">
          <button>Login</button>
        </NavLink>
        <NavLink to="/universe/register">
          <button>Register</button>
        </NavLink> */}
      </Container>
    </>
  );
}
