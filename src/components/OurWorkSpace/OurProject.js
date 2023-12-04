import styled from "styled-components";
import OurProjectIcon from "./IconImage/OurProject.png";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const Container = styled.div`
  width: 320px;
  height: 360px;
  border-top: 3px solid #ddd;
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
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
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
  right: 3px;
  top: 3px;
  width: 23px;
  height: 23px;
  cursor: pointer;
  & .xIcon {
    width: 100%;
    height: 100%;
  }
`;
const PopupHome = styled.div`
  background-color: darkgray;
  width: 100%;
  /* PopupNavBar height 30px */
  height: calc(100% - 30px);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Title = styled.h3`
  /* background-color: pink; */
  font-size: 1.5rem;
  margin-top: -15px;
  border-radius: 5px;
  border-bottom: 3px solid rgb(27, 36, 71);
  border-right: 3px solid rgb(27, 36, 71);
  padding: 1%;
`;
const Content = styled.p`
  /* background-color: gold; */
  font-size: 15px;
  font-weight: bold;
  display: flex;
  text-align: justify;
  padding: 3%;
  padding-top: 1%;
  line-height: 21px;
  border-radius: 5px;
  border-bottom: 3px solid rgb(27, 36, 71);
  border-right: 3px solid rgb(27, 36, 71);
  padding-left: 10%;
  padding-right: 10%;
`;

export function OurProject({ onOurProjectHide }) {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({
    top: window.innerHeight / 2 - 50,
    left: window.innerWidth / 2 + 70,
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

  return (
    <>
      <Container top={position.top} left={position.left}>
        <PopupBox>
          <PopupNavBar onMouseDown={mouseDown}>
            <Logo>
              <LogoImg>
                <img src={OurProjectIcon} />
              </LogoImg>
              <p>Our Project</p>
            </Logo>
            <XBtn onClick={onOurProjectHide}>
              <Icon className="xIcon" icon="pixelarticons:close" />
            </XBtn>
          </PopupNavBar>
          <PopupHome>
            <Title>About Our Project</Title>
            <Content>
              This project is a web page with the concept of space and retro. We
              made efforts to design the desktop interface, and for the
              frontend, we developed the website using React, while Java served
              as the backend language.
            </Content>
          </PopupHome>
        </PopupBox>
      </Container>
    </>
  );
}
