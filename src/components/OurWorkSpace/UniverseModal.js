import styled from "styled-components";

const Container = styled.div`
  transition: all 0.5s ease;
  color: black;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 40%;
  background-color: white;
  box-shadow: 0 0 100px 0 rgba(255, 255, 255, 0.5);
  z-index: 10;
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

export function UniverseModal({ handleModalOpen }) {
  return (
    <>
      <Backdrop />
      <Container>
        <ModalBar>
          <Btn className="likeBtn">좋아요</Btn>
          <Btn className="favoriteBtn">즐찾</Btn>
          <Btn onClick={handleModalOpen} className="closeBtn">
            닫기
          </Btn>
        </ModalBar>
        <Content>
          <Title>제목입니다.</Title>
          <Text>
            저는 내용입니다. 고채영은 메이플을 좋아한다. 롤도 좋아하고
            발로란트를 가장 많이 하는 것 같다. 나랑 좀보이드도 같이 해주기로
            했는데 언제 해줄지 모르겠다. 내가 아는 채영이는 가상 세계 인물이고
            집에 가서 컴퓨터를 켜야 현실 세계로 들어가는 애 같다.
          </Text>
        </Content>
      </Container>
    </>
  );
}
