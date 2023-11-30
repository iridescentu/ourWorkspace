import styled from "styled-components";
import { useEffect, useState } from "react";
import MusicIcon from "./IconImage/Music.png";
import YouTube from "react-youtube";

const Container = styled.div`
  width: 560px;
  /* Youtube video 16:9, PopupNavBar height 30px */
  height: calc(315px + 30px);
  border-top: 3px solid #ddd;
  border-left: 3px solid gray;
  border-bottom: 3px solid rgb(27, 36, 71);
  border-right: 3px solid rgb(27, 36, 71);
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  transform: translate(10%, -70%);
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

  const videoId = "cyN5nJylCj0";

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
          <YouTube
            videoId={videoId}
            opts={{
              width: "100%",
              height: "310",
              playerVars: {
                autoplay: 1,
                color: "white",
                rel: 0,
                loop: 1,
                // 전체화면 없앰
                fs: 0,
              },
            }}
          />
        </PopupBox>
      </Container>
    </>
  );
}
