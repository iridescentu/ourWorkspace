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

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  border-radius: 10px;
  width: 90vw;
  height: 40vh; // 나중에 삭제하기 (내용물에 따라 높이가 늘어나거나 줄어들도록 하기 위해)
  background-color: navy;
`;

const SearchContent = styled.div`
  width: 90vw;
  height: 10vh; // 나중에 삭제하기 (내용물에 따라 높이가 늘어나거나 줄어들도록 하기 위해)
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: blue;
`;

const MyPostAvatarIcon = styled.img`
  /* width: 100%;
  height: 100%; */
`;

const MyPostNickname = styled.h1`
  color: black;
`;

const MyPostContent = styled.h3``;

export function Search() {
  const MyPostAvatarUrl =
    "https://source.boringavatars.com/beam/60/zzZ?colors=1F1F20,2B4C7E,567EBB,606D80,DCE0E6";
  // 각각의 닉네임/ID에 아바타를 부여하기 위해서는 120/닉네임?colors= 이런 식으로 닉네임 자리에 닉네임이든 ID든 값을 부여하면 됨
  // 아바타를 정사각형 모양으로 바꾸고 싶다면 코드의 맨 마지막에 ?square를 추가하면 됨

  return (
    <>
      <Container>
        <h1>Search</h1>
        <SearchContainer>
          <SearchContent>
            <MyPostAvatarIcon src={MyPostAvatarUrl} alt="Avatar" />
            <MyPostNickname>zzZ</MyPostNickname>
            <MyPostContent>
              우리 프로젝트 다음 주까지 끝낼 수 있을까
            </MyPostContent>
          </SearchContent>
          <SearchContent>
            <MyPostAvatarIcon src={MyPostAvatarUrl} alt="Avatar" />
            <MyPostNickname>zzZ</MyPostNickname>
            <MyPostContent>슬슬 배고픈데 점심시간 언제쯤</MyPostContent>
          </SearchContent>
          <SearchContent>
            <MyPostAvatarIcon src={MyPostAvatarUrl} alt="Avatar" />
            <MyPostNickname>zzZ</MyPostNickname>
            <MyPostContent>헐... 집에 가고 싶음</MyPostContent>
          </SearchContent>
          <SearchContent>
            <MyPostAvatarIcon src={MyPostAvatarUrl} alt="Avatar" />
            <MyPostNickname>zzZ</MyPostNickname>
            <MyPostContent>아싸 이따가 붕어빵 먹는다</MyPostContent>
          </SearchContent>
        </SearchContainer>
      </Container>
    </>
  );
}
