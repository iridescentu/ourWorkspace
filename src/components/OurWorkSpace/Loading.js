import { RingLoader } from "react-spinners";
import styled, { css, keyframes } from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
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
const LoadingBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const StyledRingLoader = styled(RingLoader)``;
const LoadingText = styled.h1`
  color: white;
  font-family: "Silkscreen";
  display: inline-block;
`;
const BouncingLetter = styled.span`
  display: inline-block;
  ${({ index }) => css`
    animation: ${bounceAnimation} 1s ease-in-out infinite ${index * 0.1}s;
  `}
`;

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

export function Loading() {
  const loadingText = "Loading...";
  return (
    <>
      <Container>
        <FilterOverlay />
        <LoadingBox>
          <StyledRingLoader color="#fff" size={60} speedMultiplier={1} />
          <LoadingText>
            {loadingText.split("").map((letter, index) => (
              <BouncingLetter key={index} index={index}>
                {letter}
              </BouncingLetter>
            ))}
          </LoadingText>
        </LoadingBox>
      </Container>
    </>
  );
}
