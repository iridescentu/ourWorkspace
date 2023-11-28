import styled from "styled-components";
import AboutUsIcon from "./IconImage/AboutUs.png";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 300px;
  height: 300px;
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
  width: 100px;
  height: 100%;
  display: flex;
  color: white;
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
  /* img 가운데 정렬하기 위해 flex 줘 봤는데 됨 이유는 모름 나중에 보기 */
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
  background-color: darkgray;
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
  justify-content: center;
  align-items: center;
  display: flex;
`;
const Content = styled.p`
  background-color: gold;
  /* p 태그의 text는 크기에 상관없이 글자가 튀어져 나감 때문에 word-wrap의 break-word 속성 부여 */
  word-wrap: break-word;
  justify-content: center;
  align-items: center;
  display: flex;
  font-weight: bold;
`;
const Btn = styled.button`
  cursor: pointer;
`;
export function AboutUs({ onAboutUsHide }) {
  // PopupNavBar로 드래그 하기 위해
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({
    top: window.innerHeight / 2 - 150,
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
            <XBtn onClick={onAboutUsHide}>X</XBtn>
          </PopupNavBar>
          <PopupHome>
            <Title>About Us</Title>
            <Content>
              <p>
                Jihee Yoon<br></br>Dahye Kim<br></br>ChaeYoung Go<br></br>
                Hyejeong Yeom
              </p>
            </Content>
            <Btn>Button</Btn>
          </PopupHome>
        </PopupBox>
      </Container>
    </>
  );
}
