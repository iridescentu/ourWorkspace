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
  cursor: pointer;
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
  font-family: "Silkscreen";
  letter-spacing: -1px;
`;
export function Main() {
  const [modalStack, setModalStack] = useState([]);
  const openModal = (type) => {
    if (!modalStack.includes(type)) {
      setModalStack((prev) => [
        ...prev.filter((item) => item.type !== type),
        { type, id: Date.now() },
      ]);
    } else {
      setModalStack((prev) => [
        ...prev.filter((item) => item.type !== type),
        { type, id: Date.now() },
      ]);
    }
  };
  const closeModal = (id) => {
    setModalStack((prev) => prev.filter((item) => item.id !== id));
  };

  // 디스코드 서버 링크
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
      {modalStack.map(({ type, id }) => {
        if (type === "aboutUs") {
          return <AboutUs key={id} onAboutUsHide={() => closeModal(id)} />;
        } else if (type === "ourProject") {
          return (
            <OurProject key={id} onOurProjectHide={() => closeModal(id)} />
          );
        } else if (type === "music") {
          return <Music key={id} onMusicHide={() => closeModal(id)} />;
        } else if (type === "setting") {
          return <Setting key={id} onSettingHide={() => closeModal(id)} />;
        }
        return null;
      })}
    </>
  );
}
