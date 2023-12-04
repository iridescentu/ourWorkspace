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
  gap: 10px;
  color: white;
`;
const ImgBox = styled.div`
  width: 40px;
  height: 100%;
  margin-left: 2%;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ModalFrom = styled.h2`
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
    right: 7px;
    top: 7px;
    width: 25px;
    height: 25px;

    & .xIcon {
      width: 100%;
      height: 100%;
    }
  }
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
  &.visible {
    opacity: 1;
  }
`;

export function UniverseModal({ closeModal, content }) {
  return (
    <>
      <Backdrop />
      <Container>
        <ModalBar>
          <ImgBox>
            <Img src={ModalTestImg} alt="universeIcon" />
          </ImgBox>
          <ModalFrom>
            Signal from " <span className="userId">{content.authorId}</span> "
            {/* ghkt2535 */}
          </ModalFrom>
          <Btn className="closeBtn" onClick={closeModal}>
            <Icon className="xIcon" icon="pixelarticons:close" />
          </Btn>
        </ModalBar>
        <Content>
          <Title>
            {/* From. 닉네임 */}
            from. {content.nickName}
            <br />
            {/* 입력시간(날짜,시각) */}
            {content.timestamp}
          </Title>
          <Text>
            {/* 저는 내용입니다. 고채영은 메이플을 좋아한다. 롤도 좋아하고
            발로란트를 가장 많이 하는 것 같다. 나랑 좀보이드도 같이 해주기로
            했는데 언제 해줄지 모르겠다. 내가 아는 채영이는 가상 세계 인물이고
            집에 가서 컴퓨터를 켜야 현실 세계로 들어가는 애 같다. */}
            {content.text}
          </Text>
          <Btn className="favoriteBtn">즐겨찾기</Btn>
        </Content>
      </Container>
    </>
  );
}
