import styled from "styled-components";
import { useEffect, useState } from "react";
import SettingIcon from "./IconImage/Setting.png";
import { useTheme } from "./ThemeContext";

const Container = styled.div`
  width: 300px;
  height: 300px;
  border: 2px solid gray;
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
  background-color: white;
  position: relative;
  cursor: grab;
`;
const Logo = styled.div`
  width: 100px;
  height: 100%;
  background-color: aqua;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
`;
const LogoImg = styled.div`
  width: 1.5rem;
  display: flex;
  & img {
    width: 100%;
  }
`;
const XBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  width: 30px;
  height: 100%;
`;
const PopupHome = styled.div`
  background-color: red;
  width: 100%;
  /* PopupNavBar height 30px */
  height: calc(100% - 30px);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Title = styled.h2`
  background-color: pink;
`;
const Content = styled.p`
  background-color: gold;
  /* p 태그의 text는 크기에 상관없이 글자가 튀어져 나감 때문에 word-wrap의 break-word 속성 부여 */
  word-wrap: break-word;
`;
const Btn = styled.button`
  cursor: pointer;
  padding: 5px 15px;
  border: 0;
  color: white;
  background-color: darkgrey;
  margin: 1px;
  &.defaultTheme {
    background-color: rgb(27, 36, 71);
  }
  &.blackTheme {
    background-color: black;
  }
  &.purpleTheme {
    background-color: rgb(82, 57, 135);
  }
  &.greenTheme {
    background-color: rgb(34, 50, 48);
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
            <Title>Setting</Title>
            <Content>
              zzzzzzzzzzzzzzzzzzzzzsljdglsjdgljsgdzzzzzzzzzzzzzlsdjgljsgljzzzzzzzdsfsfd32ljzzzz
            </Content>
            <div>
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
              <Btn>예시 테마들</Btn>
            </div>
          </PopupHome>
        </PopupBox>
      </Container>
    </>
  );
}
