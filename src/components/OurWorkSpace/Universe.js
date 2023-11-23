import styled from "styled-components";
import test from "./IconImage/test.png";
import test1 from "./IconImage/AboutUs.png";
import test2 from "./IconImage/Discord.png";
import test3 from "./IconImage/FullScreen.png";
import test4 from "./IconImage/Music.png";
const Container = styled.div`
  width: 100vw;
  /* NavBar 60px UniverseWindow 30px */
  height: calc(100vh - 90px);
  background-image: url("https://i.gifer.com/WBVk.gif");
  background-size: auto;
  background-position: center;
  filter: grayscale(100%);
  color: white;
  position: relative;
`;
const Signal = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Silkscreen";
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
  & .number {
    font-size: 3rem;
    font-weight: 600;
  }
`;
const MyUniverse = styled.div`
  width: 100%;
  height: 100%;
`;
const MyUniverseSection = styled.div`
  width: 100%;
  height: calc(100% / 3);
  border: 1px solid white;
  &.section1,
  &.section3 {
    display: flex;
    & div {
      width: 100%;
      border: 1px solid white;
      & img {
        width: 120px;
      }
    }
  }
  &.section2 {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    & div {
      border: 1px solid white;
    }
  }
`;
const imageList = [test, test1, test2, test3, test4];
function getRandomImage() {
  // 무작위 이미지 선택
  const randomIndex = Math.floor(Math.random() * imageList.length);
  return imageList[randomIndex];
}

export function Universe() {
  return (
    <>
      <Container>
        <Signal>
          <span className="number">15</span> New Signals have been detected !
        </Signal>
        <MyUniverse>
          <MyUniverseSection className="section1">
            <div>
              <img src={getRandomImage()} alt="RandomImage" />
            </div>
            <div>
              <img src={getRandomImage()} alt="RandomImage" />
            </div>
            <div>
              <img src={getRandomImage()} alt="RandomImage" />
            </div>
            <div>
              <img src={getRandomImage()} alt="RandomImage" />
            </div>
            <div>
              <img src={getRandomImage()} alt="RandomImage" />
            </div>
          </MyUniverseSection>
          <MyUniverseSection className="section2">
            <div></div>
            <div></div>
            <div></div>
          </MyUniverseSection>
          <MyUniverseSection className="section3">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </MyUniverseSection>
        </MyUniverse>
      </Container>
    </>
  );
}
