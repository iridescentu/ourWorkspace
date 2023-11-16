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
  // const [isAboutUsVisible, setIsAboutUsVisible] = useState(false);
  // const [isOurProjectVisible, setIsOurProjectVisible] = useState(false);
  // const popupClick = () => {
  //   if (!isAboutUsVisible) {
  //     setIsAboutUsVisible(true);
  //   } else if (!isOurProjectVisible) {
  //     setIsOurProjectVisible(true);
  //   }
  // 처음 한번만 띄우기
  // setIsPopup(true);
  // toggle로 사용하기
  // setIsPopupVisible(!isPopupVisible);
  // setIsPopup((prev) => !prev);
  // };

  // 팝업과 클릭 시 위로 뜨게 하는 것까지 한번에 구현
  const [modalStack, setModalStack] = useState([]);
  const [zIndexMap, setZIndexMap] = useState({});
  const openModal = (type) => {
    if (!modalStack.includes(type)) {
      // 팝업 열 때 최상단으로 열기
      const newZIndexMap = { ...zIndexMap };
      newZIndexMap[type] = Object.keys(zIndexMap).length + 1;
      setZIndexMap(newZIndexMap);

      setModalStack((prev) => [
        ...prev.filter((item) => item.type !== type),
        { type, id: Date.now() },
      ]);
    } else {
      // 열려 있는 팝업을 클릭하면 zIndex 조정하여 최상위로 올리기
      const newZIndexMap = { ...zIndexMap };
      newZIndexMap[type] = Object.keys(zIndexMap).length;
      setZIndexMap(newZIndexMap);

      setModalStack((prev) => [
        ...prev.filter((item) => item.type !== type),
        { type, id: Date.now() },
      ]);
    }
  };
  const closeModal = (id) => {
    setModalStack((prev) => prev.filter((item) => item.id !== id));
  };

  // 디스코드 창 새로 띄우기
  const openDiscordServer = () => {
    window.open("https://discord.gg/8hGq5fsv");
  };

  return (
    <>
      <Container>
        <Icon onClick={() => openModal("aboutUs")}>
          <figure>
            <IconImg src={AboutUsIcon} />
          </figure>
          <IconTitle>AboutUs</IconTitle>
        </Icon>
        <Icon onClick={() => openModal("ourProject")}>
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
        <Icon onClick={() => openModal("music")}>
          <figure>
            <IconImg src={MusicIcon} />
          </figure>
          <IconTitle>Music</IconTitle>
        </Icon>
        <Icon onClick={openDiscordServer}>
          <figure>
            <IconImg src={DiscordIcon} />
          </figure>
          <IconTitle>Discord</IconTitle>
        </Icon>
        <Icon onClick={() => openModal("setting")}>
          <figure>
            <IconImg src={SettingIcon} />
          </figure>
          <IconTitle>Setting</IconTitle>
        </Icon>
      </Container>
      {/* {isAboutUsVisible && (
        <AboutUs onAboutUsHide={() => setIsAboutUsVisible(false)} />
      )}
      {isOurProjectVisible && (
        <OurProject onOurProjectHide={() => setIsOurProjectVisible(false)} />
      )} */}
      {modalStack.map(({ type, id }) => {
        if (type === "aboutUs") {
          return (
            <AboutUs
              key={id}
              onAboutUsHide={() => closeModal(id)}
              zIndexMap={zIndexMap}
              type={type}
            />
          );
        } else if (type === "ourProject") {
          return (
            <OurProject
              key={id}
              onOurProjectHide={() => closeModal(id)}
              zIndexMap={zIndexMap}
              type={type}
            />
          );
        } else if (type === "music") {
          return (
            <Music
              key={id}
              onMusicHide={() => closeModal(id)}
              zIndexMap={zIndexMap}
              type={type}
            />
          );
        } else if (type === "setting") {
          return (
            <Setting
              key={id}
              onSettingHide={() => closeModal(id)}
              zIndexMap={zIndexMap}
              type={type}
            />
          );
        }
        return null;
      })}
    </>
  );
}
