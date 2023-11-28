import { styled, keyframes } from "styled-components";
import Earth from "./IconImage/Earth.png";
import Sun from "./IconImage/Sun.png";
import Mercury from "./IconImage/Mercury.png";
import Venus from "./IconImage/Venus.png";
import Mars from "./IconImage/Mars.png";
import Jupiter from "./IconImage/Jupiter.png";
import Saturn from "./IconImage/Saturn.png";
import Uranus from "./IconImage/Uranus.png";
import Rocket from "./IconImage/Rocket.png";
import Alien1 from "./IconImage/Alien1.png";
import Alien2 from "./IconImage/Alien2.png";
import Alien3 from "./IconImage/Alien3.png";
import Alien4 from "./IconImage/Alien4.png";
import Meteor from "./IconImage/Meteor.png";
import Explosion from "./IconImage/Explosion.png";
import BlackHole from "./IconImage/BlackHole.png";
import { useState } from "react";

const SignalBtnAnimation = keyframes`
  0%{
    border: 2px solid red;
  }
  50%{
    border: 2px solid green;
  }
  100%{
    border: 2px solid blue;
  }
`;
const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 90px);
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding-top: 3rem;
  font-family: "Silkscreen";
  & h1 {
    font-size: 2.5rem;
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
const PlanetContainer = styled.div`
  width: 55%;
  display: grid;
  grid-template-columns: repeat(8, 1fr); // 가로로 다섯 칸
  grid-template-rows: repeat(2, 1fr); // 세로로 세 칸
  gap: 2rem;
  background-color: transparent;
`;

const Planets = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border-radius: 5%;
    animation: ${SignalBtnAnimation} 1s linear infinite alternate;
    cursor: pointer;
  }
`;
const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;
const SignalForm = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  position: relative;
`;
const SignalIcon = styled.div`
  width: 100px;
  height: 100px;
  border: 2px dotted gray;
  position: absolute;
  left: 2.5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SignalTextarea = styled.textarea`
  /* SignalForm width - gap - BtnWidth */
  width: 100%;
  height: 20vh;
  box-sizing: border-box; /* 내용이 박스 안쪽에 위치하도록 설정 */
  resize: none; /* 사용자 크기 조절 비활성화 */
  padding: 20px 30px 20px 170px;
  font-size: 16px; /* 글꼴 크기 설정 */
  vertical-align: top; /* 텍스트를 상단으로 정렬합니다. */
  background-color: #ddd;
`;

const SignalBtn = styled.button`
  font-family: "Silkscreen";
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  color: white;
  animation: ${SignalBtnAnimation} 3s linear infinite alternate;
`;

export function Signal() {
  const [selectIcon, setSelectIcon] = useState(
    "https://cdn.discordapp.com/attachments/1171639133572190338/1178963847206412309/question.png?ex=65780ea5&is=656599a5&hm=665a676f04a3d1ffa6437036e05800f2e85b5fa8c72d77a648ac668ec5ab156b&"
  );
  const handleIconClick = (src) => {
    setSelectIcon(src);
  };
  return (
    <>
      <Container>
        <FilterOverlay />
        <h1>Choose your Planets</h1>
        <PlanetContainer>
          <Planets>
            <Img
              onClick={() => handleIconClick(Earth)}
              src={Earth}
              alt="EarthIcon"
            />
          </Planets>
          <Planets>
            <Img onClick={() => handleIconClick(Sun)} src={Sun} alt="SunIcon" />
          </Planets>
          <Planets>
            <Img
              onClick={() => handleIconClick(Mercury)}
              src={Mercury}
              alt="MercuryIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() => handleIconClick(Venus)}
              src={Venus}
              alt="VenusIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() => handleIconClick(Mars)}
              src={Mars}
              alt="MarsIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() => handleIconClick(Jupiter)}
              src={Jupiter}
              alt="JupiterIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() => handleIconClick(Saturn)}
              src={Saturn}
              alt="SaturnIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() => handleIconClick(Uranus)}
              src={Uranus}
              alt="UranusIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() => handleIconClick(Rocket)}
              src={Rocket}
              alt="RocketIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() => handleIconClick(Alien1)}
              src={Alien1}
              alt="BlueAlienIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() => handleIconClick(Alien2)}
              src={Alien2}
              alt="YellowAlienIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() => handleIconClick(Alien3)}
              src={Alien3}
              alt="GreenAlienIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() => handleIconClick(Alien4)}
              src={Alien4}
              alt="RedAlienIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() => handleIconClick(Meteor)}
              src={Meteor}
              alt="MeteorIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() => handleIconClick(Explosion)}
              src={Explosion}
              alt="ExplosionIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() => handleIconClick(BlackHole)}
              src={BlackHole}
              alt="BlackHoleIcon"
            />
          </Planets>
        </PlanetContainer>
        <h1>Send a signal</h1>
        <SignalForm>
          <SignalIcon>
            <Img src={selectIcon} />
          </SignalIcon>
          <SignalTextarea
            type="text"
            name="signal"
            placeholder="Type some signal.."
          />
        </SignalForm>
        <SignalBtn>Send A Signal!</SignalBtn>
      </Container>
    </>
  );
}
