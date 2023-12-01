import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  /* NavBar 60px UniverseWindow 30px */
  height: calc(100vh - 90px);
  color: white;
  padding-top: 15px;
  padding-left: 2%;
  position: relative;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
`;

const FilterOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://i.gifer.com/WBVk.gif");
  background-size: auto;
  filter: grayscale(100%);
  z-index: -10;
`;
// const ArchiveContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   /* align-items: center;
//   justify-content: center; */
//   border-radius: 10px;
//   width: 90vw;
//   height: 40vh; // 나중에 삭제하기 (내용물에 따라 높이가 늘어나거나 줄어들도록 하기 위해)
//   background-color: rgba(26, 26, 26, 0.7);
// `;

// const Archives = styled.div`
//   width: 90vw;
//   height: 10vh; // 나중에 삭제하기 (내용물에 따라 높이가 늘어나거나 줄어들도록 하기 위해)
//   border-radius: 10px;
//   display: flex;
//   align-items: center;
//   /* background-color: rgba(26, 26, 26, 0.7); */
// `;

// const MyPostAvatarIcon = styled.img`
//   /* width: 100%;
//   height: 100%; */
// `;

// const MyPostNickname = styled.h1`
//   color: black;
// `;

// const MyPostContent = styled.h3``;

// export function Archive() {
//   const MyPostAvatarUrl =
//     "https://source.boringavatars.com/beam/60/zzZ?colors=1F1F20,2B4C7E,567EBB,606D80,DCE0E6";
//   // 각각의 닉네임/ID에 아바타를 부여하기 위해서는 120/닉네임?colors= 이런 식으로 닉네임 자리에 닉네임이든 ID든 값을 부여하면 됨
//   // 아바타를 정사각형 모양으로 바꾸고 싶다면 코드의 맨 마지막에 ?square를 추가하면 됨

//   return (
//     <>
//       <Container>
//         <FilterOverlay />
//         <h1>Archive</h1>
//         <ArchiveContainer>
//           <Archives>
//             <MyPostAvatarIcon src={MyPostAvatarUrl} alt="Avatar" />
//             <MyPostNickname>zzZ</MyPostNickname>
//             <MyPostContent>
//               우리 프로젝트 다음 주까지 끝낼 수 있을까
//             </MyPostContent>
//           </Archives>
//           <Archives>
//             <MyPostAvatarIcon src={MyPostAvatarUrl} alt="Avatar" />
//             <MyPostNickname>zzZ</MyPostNickname>
//             <MyPostContent>슬슬 배고픈데 점심시간 언제쯤</MyPostContent>
//           </Archives>
//           <Archives>
//             <MyPostAvatarIcon src={MyPostAvatarUrl} alt="Avatar" />
//             <MyPostNickname>zzZ</MyPostNickname>
//             <MyPostContent>헐... 집에 가고 싶음</MyPostContent>
//           </Archives>
//           <Archives>
//             <MyPostAvatarIcon src={MyPostAvatarUrl} alt="Avatar" />
//             <MyPostNickname>zzZ</MyPostNickname>
//             <MyPostContent>아싸 이따가 붕어빵 먹는다</MyPostContent>
//           </Archives>
//         </ArchiveContainer>
//       </Container>
//     </>
//   );
// }

const ArchiveTitle = styled.div`
  display: flex;
  padding-top: 1%;
  padding-bottom: 3%;
`;

const ArchiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 96vw;
  height: 70vh; // 나중에 삭제하기 (내용물에 따라 높이가 늘어나거나 줄어들도록 하기 위해)
  background-color: rgba(26, 26, 26, 0.7);
`;

const PostContainer = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  flex-direction: row;
  border-radius: 10px;
  width: 96vw;
  height: 7vh; // 나중에 삭제하기 (내용물에 따라 높이가 늘어나거나 줄어들도록 하기 위해)
  background-color: navy;
  opacity: 0.7;
`;

const CheckboxContainer = styled.div`
  width: 3vw;
  background-color: red;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckboxInput = styled.input`
  cursor: pointer;
`;

const ProfileContainer = styled.div`
  width: 15vw;
  background-color: purple;
  display: flex;
  flex-direction: row;
  opacity: 0.7;
`;

const PlanetIconContainer = styled.div`
  width: 5vw;
  background-color: orange;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlanetIcon = styled.img`
  width: 85%;
  height: 85%;
`;

const NicknameContainer = styled.h2`
  width: 10vw;
  background-color: yellow;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

const MessageContainer = styled.h3`
  width: 71vw;
  background-color: green;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DateContainer = styled.h4`
  width: 7vw;
  background-color: violet;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Archive() {
  // const [checked, setChecked] = useState(false);

  const [postCheckMap, setPostCheckMap] = useState({});

  const handleCheckboxChange = (postId) => {
    setPostCheckMap((prevMap) => ({
      ...prevMap,
      [postId]: !prevMap[postId],
    }));
  };

  // ...

  const posts = [
    // your array of post data
    // each post object should have a unique identifier, e.g., postId
    {
      postId: 1,
      checked: postCheckMap[1] || false,
      PlanetIconUrl:
        "https://source.boringavatars.com/beam/60/zzZ?colors=1F1F20,2B4C7E,567EBB,606D80,DCE0E6",
      Nickname: "User1",
      Message: "첫 번째 포스트입니다. 어디까지 써야 할지 몰라요.",
      Date: "2023.11.29",
    },
    {
      postId: 2,
      checked: postCheckMap[2] || false,
      PlanetIconUrl:
        "https://source.boringavatars.com/beam/60/Kimdahye?colors=1F1F20,2B4C7E,567EBB,606D80,DCE0E6",
      Nickname: "User2",
      Message: "두 번째 포스트입니다. 어디까지 써야 할지 몰라요.",
      Date: "2023.11.29",
    },
    {
      postId: 3,
      checked: postCheckMap[3] || false,
      PlanetIconUrl:
        "https://source.boringavatars.com/beam/60/chaeyoung?colors=1F1F20,2B4C7E,567EBB,606D80,DCE0E6",
      Nickname: "User3",
      Message: "세 번째 포스트입니다. 어디까지 써야 할지 몰라요.",
      Date: "2023.11.29",
    },
    {
      postId: 4,
      checked: postCheckMap[4] || false,
      PlanetIconUrl:
        "https://source.boringavatars.com/beam/60/hyejeong?colors=1F1F20,2B4C7E,567EBB,606D80,DCE0E6",
      Nickname: "User4",
      Message: "네 번째 포스트입니다. 어디까지 써야 할지 몰라요.",
      Date: "2023.11.29",
    },
    {
      postId: 5,
      checked: postCheckMap[5] || false,
      PlanetIconUrl:
        "https://source.boringavatars.com/beam/60/yoonjihee?colors=1F1F20,2B4C7E,567EBB,606D80,DCE0E6",
      Nickname: "User5",
      Message: "다섯 번째 포스트입니다. 어디까지 써야 할지 몰라요.",
      Date: "2023.11.29",
    },
  ];

  // const PlanetIconUrl =
  //   "https://source.boringavatars.com/beam/60/zzZ?colors=1F1F20,2B4C7E,567EBB,606D80,DCE0E6";

  return (
    <>
      <Container>
        <FilterOverlay />
        <ArchiveTitle>
          <h1>Archive</h1>
        </ArchiveTitle>
        <ArchiveContainer>
          {/* <PostContainer>
          <CheckboxContainer>
            <CheckboxInput
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          </CheckboxContainer>
          <ProfileContainer>
            <PlanetIconContainer>
              <PlanetIcon src={PlanetIconUrl} alt="Avatar" />
            </PlanetIconContainer>
            <NicknameContainer>Nickname</NicknameContainer>
          </ProfileContainer>
          <MessageContainer>
            나는야 메시지 일단 길게 써 봐야 할 것 같아서 쓰는데 어디까지 써야
            할지 몰루겠네요
          </MessageContainer>
          <DateContainer>2023.11.29</DateContainer>
        </PostContainer>
        <PostContainer>
          <CheckboxContainer>
            <CheckboxInput
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          </CheckboxContainer>
          <ProfileContainer>
            <PlanetIconContainer>
              <PlanetIcon src={PlanetIconUrl} alt="Avatar" />
            </PlanetIconContainer>
            <NicknameContainer>Nickname</NicknameContainer>
          </ProfileContainer>
          <MessageContainer>
            나는야 메시지 일단 길게 써 봐야 할 것 같아서 쓰는데 어디까지 써야
            할지 몰루겠네요
          </MessageContainer>
          <DateContainer>2023.11.29</DateContainer>
        </PostContainer>
        <PostContainer>
          <CheckboxContainer>
            <CheckboxInput
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          </CheckboxContainer>
          <ProfileContainer>
            <PlanetIconContainer>
              <PlanetIcon src={PlanetIconUrl} alt="Avatar" />
            </PlanetIconContainer>
            <NicknameContainer>Nickname</NicknameContainer>
          </ProfileContainer>
          <MessageContainer>
            나는야 메시지 일단 길게 써 봐야 할 것 같아서 쓰는데 어디까지 써야
            할지 몰루겠네요
          </MessageContainer>
          <DateContainer>2023.11.29</DateContainer>
        </PostContainer>
        <PostContainer>
          <CheckboxContainer>
            <CheckboxInput
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          </CheckboxContainer>
          <ProfileContainer>
            <PlanetIconContainer>
              <PlanetIcon src={PlanetIconUrl} alt="Avatar" />
            </PlanetIconContainer>
            <NicknameContainer>Nickname</NicknameContainer>
          </ProfileContainer>
          <MessageContainer>
            나는야 메시지 일단 길게 써 봐야 할 것 같아서 쓰는데 어디까지 써야
            할지 몰루겠네요
          </MessageContainer>
          <DateContainer>2023.11.29</DateContainer>
        </PostContainer>
        <PostContainer>
          <CheckboxContainer>
            <CheckboxInput
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          </CheckboxContainer>
          <ProfileContainer>
            <PlanetIconContainer>
              <PlanetIcon src={PlanetIconUrl} alt="Avatar" />
            </PlanetIconContainer>
            <NicknameContainer>Nickname</NicknameContainer>
          </ProfileContainer>
          <MessageContainer>
            나는야 메시지 일단 길게 써 봐야 할 것 같아서 쓰는데 어디까지 써야
            할지 몰루겠네요
          </MessageContainer>
          <DateContainer>2023.11.29</DateContainer>
        </PostContainer>
        <PostContainer>
          <CheckboxContainer>
            <CheckboxInput
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          </CheckboxContainer>
          <ProfileContainer>
            <PlanetIconContainer>
              <PlanetIcon src={PlanetIconUrl} alt="Avatar" />
            </PlanetIconContainer>
            <NicknameContainer>Nickname</NicknameContainer>
          </ProfileContainer>
          <MessageContainer>
            나는야 메시지 일단 길게 써 봐야 할 것 같아서 쓰는데 어디까지 써야
            할지 몰루겠네요
          </MessageContainer>
          <DateContainer>2023.11.29</DateContainer>
        </PostContainer>
        <PostContainer>
          <CheckboxContainer>
            <CheckboxInput
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          </CheckboxContainer>
          <ProfileContainer>
            <PlanetIconContainer>
              <PlanetIcon src={PlanetIconUrl} alt="Avatar" />
            </PlanetIconContainer>
            <NicknameContainer>Nickname</NicknameContainer>
          </ProfileContainer>
          <MessageContainer>
            나는야 메시지 일단 길게 써 봐야 할 것 같아서 쓰는데 어디까지 써야
            할지 몰루겠네요
          </MessageContainer>
          <DateContainer>2023.11.29</DateContainer>
        </PostContainer> */}

          {posts.map((post) => (
            <PostContainer key={post.postId}>
              <CheckboxContainer>
                <CheckboxInput
                  type="checkbox"
                  checked={post.checked}
                  onChange={() => handleCheckboxChange(post.postId)}
                />
              </CheckboxContainer>
              <ProfileContainer>
                <PlanetIconContainer>
                  <PlanetIcon src={post.PlanetIconUrl} alt="Avatar" />
                </PlanetIconContainer>
                <NicknameContainer>{post.Nickname}</NicknameContainer>
              </ProfileContainer>
              <MessageContainer>{post.Message}</MessageContainer>
              <DateContainer>{post.Date}</DateContainer>
            </PostContainer>
          ))}
        </ArchiveContainer>
      </Container>
    </>
  );
}
