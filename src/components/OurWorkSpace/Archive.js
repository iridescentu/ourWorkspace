import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  /* NavBar 60px UniverseWindow 30px */
  height: calc(100vh - 90px);
  background-color: black;
  color: white;
  /* padding-top: 15px;
  padding-left: 5%; */
`;

export function Archive() {
  // const avatarUrl =
  //   "https://source.boringavatars.com/beam/120/zzZ?colors=1F1F20,2B4C7E,567EBB,606D80,DCE0E6";
  // 각각의 닉네임/ID에 아바타를 부여하기 위해서는 120/닉네임?colors= 이런 식으로 닉네임 자리에 닉네임이든 ID든 값을 부여하면 됨
  // 아바타를 정사각형 모양으로 바꾸고 싶다면 코드의 맨 마지막에 ?square를 추가하면 됨
  // const MyPostAvatarUrl =
  //   "https://source.boringavatars.com/beam/60/zzZ?colors=1F1F20,2B4C7E,567EBB,606D80,DCE0E6";

  return (
    <>
      <Container>
        <h1>Archive</h1>
      </Container>
    </>
  );
}
