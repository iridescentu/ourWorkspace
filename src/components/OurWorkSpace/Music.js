import styled from "styled-components";
import { useEffect, useState } from "react";
import MusicIcon from "./IconImage/Music.png";

const Container = styled.div`
  width: 300px;
  height: 300px;
  border: 2px solid gray;
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  z-index: ${({ type, zIndexMap }) => zIndexMap[type] || 0};
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
`;

export function Music({ onMusicHide, type, zIndexMap }) {
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

  return (
    <>
      <Container
        top={position.top}
        left={position.left}
        zIndexMap={zIndexMap}
        type={type}
      >
        <PopupBox>
          <PopupNavBar onMouseDown={mouseDown}>
            <Logo>
              <LogoImg>
                <img src={MusicIcon} />
              </LogoImg>
              <p>Music</p>
            </Logo>
            <XBtn onClick={onMusicHide}>X</XBtn>
          </PopupNavBar>
          <PopupHome>
            <Title>Music</Title>
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
