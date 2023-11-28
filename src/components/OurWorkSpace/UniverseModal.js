import styled, { keyframes } from "styled-components";

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
  color: black;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 40%;
  height: 50%;
  background-color: white;
  box-shadow: 0 0 100px 0 rgba(255, 255, 255, 0.5);
  z-index: 10;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease forwards;
`;
const Backdrop = styled.div`
  width: 100vw;
  height: calc(100vh - 90px);
  margin-top: 90px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.3);
`;
const ModalBar = styled.div`
  width: 100%;
  height: 10%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const ImgBox = styled.div``;
const Img = styled.img``;
const Btn = styled.button``;
const Content = styled.p`
  width: 100%;
  height: 100%;
  padding: 5%;
`;
const Title = styled.h1``;
const Text = styled.p`
  /* opacity: 0; */
  &.visible {
    opacity: 1;
  }
`;

export function UniverseModal({ closeModal }) {
  return (
    <>
      <Backdrop />
      <Container>
        <ModalBar>
          <ImgBox>
            <Img />
          </ImgBox>
          <Btn className="closeBtn" onClick={closeModal}>
            닫기
          </Btn>
        </ModalBar>
        <Content>
          <Title>
            Title 가운데 정렬
            <br />
            입력시간(날짜,시각)
            <br />
            닉네임 : 아무개
          </Title>
          <Text>
            저는 내용입니다. 고채영은 메이플을 좋아한다. 롤도 좋아하고
            발로란트를 가장 많이 하는 것 같다. 나랑 좀보이드도 같이 해주기로
            했는데 언제 해줄지 모르겠다. 내가 아는 채영이는 가상 세계 인물이고
            집에 가서 컴퓨터를 켜야 현실 세계로 들어가는 애 같다.
          </Text>
          <Btn className="likeBtn">좋아요</Btn>
          <Btn className="favoriteBtn">즐찾</Btn>
        </Content>
      </Container>
    </>
  );
}
