import styled from "styled-components";
import AboutUsIcon from "./IconImage/AboutUs.png";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const Container = styled.div`
  width: 270px;
  height: 280px;
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
  color: white;
  font-size: 20px;
  font-weight: bold;
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
  gap: 30px;
`;
const Title = styled.h3`
  /* background-color: pink; */
  font-size: 1.5rem;
  margin-top: -15%;
  border-radius: 5px;
  /* border-top: 3px solid #ddd;
  border-left: 3px solid gray; */
  border-bottom: 3px solid rgb(27, 36, 71);
  border-right: 3px solid rgb(27, 36, 71);
  padding: 1%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 25px;
  border-radius: 5px;
  /* border-top: 3px solid #ddd;
  border-left: 3px solid gray; */
  border-bottom: 3px solid rgb(27, 36, 71);
  border-right: 3px solid rgb(27, 36, 71);
  padding-left: 10%;
  padding-right: 10%;
`;

const Jihee = styled.p``;
const Dahye = styled.p``;
const Chaeyoung = styled.p``;
const Hyejeong = styled.p``;

export function AboutUs({ onAboutUsHide }) {
  // PopupNavBar로 드래그 하기 위해
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({
    top: window.innerHeight / 2 - 250,
    left: window.innerWidth / 2 - 150,
    // ( top: 50%;, left: 50% === /2 ) => 같은 메커니즘: 가운데 오게 하고,
    // ( transform: translate(-50%,-50%) === -150px ) => 같은 메커니즘: container가 300px이기 때문에
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
                <img src={AboutUsIcon} />
              </LogoImg>
              <p>About Us</p>
            </Logo>
            <XBtn onClick={onAboutUsHide}>
              <Icon className="xIcon" icon="pixelarticons:close" />
            </XBtn>
          </PopupNavBar>
          <PopupHome>
            <Title>Team Members</Title>
            <Content>
              <Jihee>Jihee Yoon</Jihee>
              <Dahye>Dahye Kim</Dahye>
              <Chaeyoung>ChaeYoung Go</Chaeyoung>
              <Hyejeong>Hyejeong Yeom</Hyejeong>
            </Content>
          </PopupHome>
        </PopupBox>
      </Container>
    </>
  );
}
