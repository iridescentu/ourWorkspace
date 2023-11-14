import styled from "styled-components";
import AboutUsIcon from "./IconImage/AboutUs.png";
import OurProjectIcon from "./IconImage/OurProject.png";
import UniverseIcon from "./IconImage/Universe.png";
import MusicIcon from "./IconImage/Music.png";
import DiscordIcon from "./IconImage/Discord.png";
import SettingIcon from "./IconImage/Setting.png";
import { useState } from "react";
import { AboutUs } from "./AboutUs";
import { OurProject } from "./OurProject";
import { Universe } from "./Universe";
import { Music } from "./Music";
import { Setting } from "./Setting";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  background-color: blue;
  /* width + gap / height + 2gap */
  width: 220px;
  height: 340px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  /* margin: 70px; */
`;
const Icon = styled.div`
  background-color: green;
  border: 1px solid black;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  & figure {
    width: 60px;
    height: 60px;
  }
  &:hover {
    background-color: gold;
  }
`;
const IconImg = styled.img`
  width: 100%;
  /* object-fit: cover; */
`;
const IconTitle = styled.p`
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 5px;
`;
export function Main() {
  // isPopupVisible 상태 변수를 선언하고 초기값 false로 설정
  //  setIsPopupVisible은 isPopupVisible 상태 변수를 업데이트하는 함수
  const [isAboutUsVisible, setIsAboutUsVisible] = useState(false);
  const [isOurProjectVisible, setIsOurProjectVisible] = useState(false);
  const popupClick = () => {
    if (!isAboutUsVisible) {
      setIsAboutUsVisible(true);
    } else if (!isOurProjectVisible) {
      setIsOurProjectVisible(true);
    }
    // 처음 한번만 띄우기
    // setIsPopup(true);
    // toggle로 사용하기
    // setIsPopupVisible(!isPopupVisible);
    // setIsPopup((prev) => !prev);
  };

  return (
    <>
      <Container>
        <Icon onClick={popupClick}>
          <figure>
            <IconImg src={AboutUsIcon} />
          </figure>
          <IconTitle>AboutUs</IconTitle>
        </Icon>
        <Icon onClick={popupClick}>
          <figure>
            <IconImg src={OurProjectIcon} />
          </figure>
          <IconTitle>OurProject</IconTitle>
        </Icon>
        <NavLink to="/universe">
          <Icon>
            <figure>
              <IconImg src={UniverseIcon} />
            </figure>
            <IconTitle>Universe</IconTitle>
          </Icon>
        </NavLink>
        <Icon>
          <figure>
            <IconImg src={MusicIcon} />
          </figure>
          <IconTitle>Music</IconTitle>
        </Icon>
        <Icon>
          <figure>
            <IconImg src={DiscordIcon} />
          </figure>
          <IconTitle>Discord</IconTitle>
        </Icon>
        <Icon>
          <figure>
            <IconImg src={SettingIcon} />
          </figure>
          <IconTitle>Setting</IconTitle>
        </Icon>
      </Container>
      {isAboutUsVisible && (
        <AboutUs onAboutUsHide={() => setIsAboutUsVisible(false)} />
      )}
      {isOurProjectVisible && (
        <OurProject onOurProjectHide={() => setIsOurProjectVisible(false)} />
      )}
    </>
  );
}
