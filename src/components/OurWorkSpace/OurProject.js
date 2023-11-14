import styled from "styled-components";
import OurProjectIcon from "./IconImage/OurProject.png";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 300px;
  height: 300px;
  border: 2px solid gray;
  position: absolute;
  /* top: 70%; 
  left: 70%; */
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  transform: translate(-50%, -50%);
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
`;
export function OurProject({ onOurProjectHide }) {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ top: 500, left: 500 });

  const mouseDown = (e) => {
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

  const XBtnClick = () => {
    onOurProjectHide();
  };

  return (
    <>
      <Container top={position.top} left={position.left}>
        <PopupBox>
          <PopupNavBar onMouseDown={mouseDown}>
            <Logo>
              <LogoImg>
                <img src={OurProjectIcon} />
              </LogoImg>
              <p>OurProject</p>
            </Logo>
            <XBtn onClick={XBtnClick}>X</XBtn>
          </PopupNavBar>
          <PopupHome>
            <Title>OurProject</Title>
            <Content>
              zzzzzzzzzzzzzzzzzzzzzsljdglsjdgljsgdzzzzzzzzzzzzzlsdjgljsgljzzzzzzzdsfsfd32ljzzzz
            </Content>
            <Btn>Button</Btn>
          </PopupHome>
        </PopupBox>
      </Container>
    </>
  );
}
