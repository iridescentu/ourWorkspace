import styled from "styled-components";
import { useEffect, useState } from "react";
import SettingIcon from "./IconImage/Setting.png";
import { useTheme } from "./ThemeContext";

const Container = styled.div`
  width: 300px;
  height: 400px;
  border-top: 3px solid gray;
  border-left: 3px solid gray;
  border-bottom: 3px solid rgb(27, 36, 71);
  border-right: 3px solid rgb(27, 36, 71);
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`;
const PopupBox = styled.div`
  width: 100%;
  height: 100%;
`;
const PopupNavBar = styled.div`
  width: 100%;
  height: 30px;
  background-color: rgb(27, 36, 71);
  position: relative;
  cursor: grab;
`;
const Logo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
const LogoImg = styled.div`
  width: 1.5rem;
  /* img 가운데 정렬하기 위해 flex 줘 봤는데 됨 이유는 모름 나중에 보기 */
  display: flex;
  & img {
    width: 100%;
  }
`;
const XBtn = styled.button`
  position: absolute;
  right: 2px;
  top: 2px;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
const PopupHome = styled.div`
  background-color: darkgray;
  width: 100%;
  /* PopupNavBar height 30px */
  height: calc(100% - 30px);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Title = styled.h3``;
const BtnBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
`;
const Btn = styled.button`
  cursor: pointer;
  border: 0;
  color: white;
  padding: 50px 0;
  &.defaultTheme {
    background-color: rgb(27, 36, 71);
    border-top-left-radius: 50%;
  }
  &.blackTheme {
    background-color: black;
    border-top-right-radius: 50%;
  }
  &.purpleTheme {
    background-color: rgb(82, 57, 135);
    border-bottom-left-radius: 50%;
  }
  &.greenTheme {
    background-color: rgb(34, 50, 48);
    border-bottom-right-radius: 50%;
  }
`;
export function Setting({ onSettingHide }) {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({
    top: window.innerHeight / 2 - 150,
    left: window.innerWidth / 2 - 150,
  });
  const mouseDown = (e) => {
    // 기본 drag 동작 방지
    e.preventDefault();
    setDragging(true);
  };
  const mouseUp = (e) => {
    setDragging(false);
  };
  const mouseMove = (e) => {
    if (dragging) {
      setPosition((prev) => ({
        top: prev.top + e.movementY,
        left: prev.left + e.movementX,
      }));
    }
  };
  useEffect(() => {
    document.addEventListener("mouseup", mouseUp);
    document.addEventListener("mousemove", mouseMove);

    return () => {
      document.removeEventListener("mouseup", mouseUp);
      document.removeEventListener("mousemove", mouseMove);
    };
  }, [dragging]);

  // Theme setting
  const { changeTheme } = useTheme();
  const handleThemeChangeToDefault = () => {
    changeTheme(
      `${process.env.PUBLIC_URL}/Logo03.png`,
      "rgb(27,36,71)",
      "white",
      'url("https://openseauserdata.com/files/e96084d648812c87be57cb30661e685a.gif")'
    );
  };
  const handleThemeChangeToBlack = () => {
    changeTheme(
      `${process.env.PUBLIC_URL}/Logo01.png`,
      "black",
      "white",
      'url("https://cdnb.artstation.com/p/assets/images/images/054/768/341/original/pxsprite-dreamspace-chaos.gif?1665334885")'
    );
  };
  const handleThemeChangeToPurple = () => {
    changeTheme(
      `${process.env.PUBLIC_URL}/Logo03.png`,
      "rgb(82,57,135)",
      "white",
      'url("https://i.pinimg.com/originals/0f/d3/fc/0fd3fcc6ba35a9015aa7f0017d96a079.gif")'
    );
  };
  const handleThemeChangeToGreen = () => {
    changeTheme(
      `${process.env.PUBLIC_URL}/Logo02.png`,
      "rgb(34,50,48)",
      "white",
      'url("https://i.pinimg.com/originals/43/e9/16/43e9164cfe2537bb9d6746b4d053d032.gif")'
    );
  };

  return (
    <>
      <Container top={position.top} left={position.left}>
        <PopupBox>
          <PopupNavBar onMouseDown={mouseDown}>
            <Logo>
              <LogoImg>
                <img src={SettingIcon} />
              </LogoImg>
              <p>Setting</p>
            </Logo>
            <XBtn onClick={onSettingHide}>X</XBtn>
          </PopupNavBar>
          <PopupHome>
            <Title>Choose your theme color!</Title>
            <BtnBox>
              <Btn
                className="defaultTheme"
                onClick={handleThemeChangeToDefault}
              >
                Default
              </Btn>
              <Btn className="blackTheme" onClick={handleThemeChangeToBlack}>
                To black
              </Btn>
              <Btn className="purpleTheme" onClick={handleThemeChangeToPurple}>
                To purple
              </Btn>
              <Btn className="greenTheme" onClick={handleThemeChangeToGreen}>
                To Green
              </Btn>
            </BtnBox>
          </PopupHome>
        </PopupBox>
      </Container>
    </>
  );
}
