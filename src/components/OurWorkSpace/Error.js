import { NavLink } from "react-router-dom";
import { styled, keyframes } from "styled-components";

const StyledNavLinkAnimation = keyframes`
   0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;
const FilterOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://i.gifer.com/WBVk.gif");
  background-size: auto;
  filter: grayscale(100%);
  z-index: -10;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;

  color: white;
  & h1 {
    margin-bottom: 30px;
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  border: 1px solid white;
  padding: 10px 20px;
  margin-bottom: 10px;
  font-weight: 900;
  &:hover {
    animation: ${StyledNavLinkAnimation} 1s infinite ease-in-out;
    color: black;
    background-color: white;
  }
`;
export function Error() {
  return (
    <>
      <FilterOverlay />
      <Container>
        <h1>
          You entered an incorrect address. <br />
          Please double-check and try again.
        </h1>
        <StyledNavLink to="/">Back to Home</StyledNavLink>
        <StyledNavLink to="/universe">Back to Universe</StyledNavLink>
      </Container>
    </>
  );
}
