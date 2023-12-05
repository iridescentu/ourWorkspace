import styled, { keyframes } from "styled-components";
import { Icon } from "@iconify/react";
import ModalTestImg from "./IconImage/Rocket.png";
import React, { useEffect, useState } from "react";
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform:scale(0)
  }
  to{
    opacity: 1;
    transform: scale(1) translate(-50%, -50%);
  }
`;
const Container = styled.div`
  border-top: 3px solid #ddd;
  border-left: 3px solid gray;
  border-bottom: 3px solid rgb(27, 36, 71);
  border-right: 3px solid rgb(27, 36, 71);
  position: fixed;
  top: 50%;
  left: 50%;
  width: 40%;
  height: 50%;
  background-color: white;
  box-shadow: 0 0 100px 0 rgba(255, 255, 255, 0.2);
  z-index: 10;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease forwards;
`;
const Backdrop = styled.div`
  width: 100vw;
  height: calc(100vh - 90px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.2);
`;
const ModalBar = styled.div`
  width: 100%;
  height: 40px;
  background-color: rgb(27, 36, 71);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: white;
`;
const ImgBox = styled.div`
  width: 35px;
  height: 100%;
  margin-left: 1%;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ModalFrom = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  font-size: 24px;
  font-weight: bold;
  & .userId {
    font-size: 20px;
    font-weight: 400;
  }
`;
const Btn = styled.button`
  cursor: pointer;
  &.closeBtn {
    position: absolute;
    right: 8px;
    top: 7px;
    width: 25px;
    height: 25px;

    & .xIcon {
      width: 100%;
      height: 100%;
    }
  }
`;

const twinklingAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 0.5; }
`;

const Tooltip = styled.span`
  display: ${(props) => (props.show ? "inline" : "none")};
  flex-direction: row;
  white-space: nowrap;
  position: absolute;
  top: 40px; /* 툴팁이 버튼 하단에 나타나도록 설정 */
  right: 5%;
  font-size: 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 5px;
  border-radius: 3px;
`;

const FavoriteBtn = styled.span`
  position: absolute;
  right: 5%;
  font-size: 30px;
  color: ${(props) => (props.filled ? "yellow" : "black")};
  cursor: pointer;
  animation: ${(props) => (props.filled ? twinklingAnimation : "none")} 1s 1;
`;

const Content = styled.p`
  width: 100%;
  height: calc(100% - 30px);
  padding: 5%;
  background-color: darkgray;
`;
const Title = styled.h1``;
const Text = styled.p`
  /* opacity: 0; */
  width: 36vw;
  height: 20vh;
  /* background-color: green;
  opacity: 0.7; */
  display: flex;
  position: absolute;
  top: 37%;
  left: 4.7%;
  justify-content: center;
  align-items: center;
  text-align: justify;
  overflow-y: scroll;
  padding: 1%;
  border-top: 5px solid #ddd;
  border-left: 5px solid gray;
  border-bottom: 5px solid rgb(27, 36, 71);
  border-right: 5px solid rgb(27, 36, 71);
  &.visible {
    opacity: 1;
  }
`;

export function UniverseModal({ closeModal, content }) {
  const [favorite, setFavorite] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  useEffect(() => {
    // 모달이 열릴 때마다 favorite 상태를 초기화
    setFavorite(false);
  }, [content]); // content가 변경될 때마다 useEffect가 실행

  const handleFavorite = () => {
    console.log("즐겨찾기 버튼이 클릭되었습니다!");
    setFavorite(!favorite);
    setShowTooltip(false);
  };

  // 수정 여기부터
  // const handleFavorite = async () => {
  //   try {
  //     // fetch를 사용하여 서버로 요청을 보냅니다.
  //     const response = await fetch("/api/updateFavoriteStatus", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ postId: content.id, favorite: !favorite }),
  //     });

  //     if (response.ok) {
  //       // 서버로부터의 응답에 따라 상태를 업데이트할 수 있습니다.
  //       const data = await response.json();
  //       if (data.success) {
  //         // 서버 응답이 성공일 때만 favorite 상태를 업데이트합니다.
  //         setFavorite(!favorite);
  //         setShowTooltip(false);
  //       } else {
  //         console.error("서버에서 즐겨찾기 상태 업데이트 실패");
  //       }
  //     } else {
  //       console.error("서버 응답 실패", response.status);
  //     }
  //   } catch (error) {
  //     console.error("서버 통신 중 에러 발생", error);
  //   }
  // };
  return (
    <>
      <Backdrop />
      <Container>
        <ModalBar>
          <ImgBox>
            <Img src={ModalTestImg} alt="universeIcon" />
          </ImgBox>
          <ModalFrom>
            {/* <ImgBox>
              <Img src={ModalTestImg} alt="universeIcon" />
            </ImgBox> */}
            Signal from " <span className="userId">{content.authorId}</span> "
          </ModalFrom>
          <Btn className="closeBtn" onClick={closeModal}>
            <Icon className="xIcon" icon="pixelarticons:close" />
          </Btn>
        </ModalBar>
        <Content>
          <Title>
            From. {content.nickName}
            <br />
            {content.timestamp}
          </Title>
          <Text>{content.text}</Text>
          {/* <Btn className="favoriteBtn">즐겨찾기</Btn> */}
          <FavoriteBtn
            filled={favorite}
            onClick={handleFavorite}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <Icon icon="pixelarticons:moon-stars" />
            <Tooltip show={showTooltip}>
              {favorite ? "즐겨찾기 해제" : "즐겨찾기"}
            </Tooltip>
          </FavoriteBtn>
        </Content>
      </Container>
    </>
  );
}
