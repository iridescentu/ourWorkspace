import styled from "styled-components";
import { useState } from "react";
import { getAllArchivesByLoginId } from "./api";

const Container = styled.div`
  width: 100vw;
  /* NavBar 60px UniverseWindow 30px */
  height: calc(100vh - 90px);
  /* color: white; */
  padding-top: 15px;
  padding-left: 2%;
  /* position: relative; */
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  /* align-items: center;
  justify-content: center; */
`;

const FilterOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://i.gifer.com/WBVk.gif");
  background-size: auto;
  filter: grayscale(100%);
  z-index: -10;
`;

const ArchiveTitle = styled.div`
  color: white;
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
  /* height: 70vh; */
  /* background-color: rgba(26, 26, 26, 0.7); */
  /* overflow-y: scroll; */
`;

const PostContainer = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  flex-direction: row;
  /* border-radius: 10px; */
  width: 96vw;
  height: 25vh;
  background-color: darkgray;
  /* opacity: 0.7; */
  margin-bottom: 2%;
  border-radius: 10px;
  border-top: 3px solid #ddd;
  border-left: 3px solid gray;
  border-bottom: 3px solid rgb(27, 36, 71);
  border-right: 3px solid rgb(27, 36, 71);
`;

const CheckboxContainer = styled.div`
  width: 3vw;
  /* background-color: red; */
  /* opacity: 0.7; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckboxInput = styled.input`
  cursor: pointer;
`;

const ProfileContainer = styled.div`
  width: 15vw;
  /* background-color: purple; */
  display: flex;
  flex-direction: row;
  /* opacity: 0.7; */
`;

const PlanetIconContainer = styled.div`
  width: 5vw;
  /* background-color: orange;
  opacity: 0.7; */
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
  /* background-color: yellow;
  opacity: 0.7; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

const MessageContainer = styled.h3`
  width: 71vw;
  /* background-color: green;
  opacity: 0.7; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  overflow-y: scroll;
  padding: 1%;
`;

const DateContainer = styled.h4`
  width: 7vw;
  /* background-color: violet;
  opacity: 0.7; */
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

  // (사용자) 로그인한 사용자의 Archive 항목 전체 조회 api 연결
  // useEffect(() => {
  //   const fetchAllArchive = async () => {
  //     try {
  //       const allArchive = await getAllArchivesByLoginId(loginId); //login 부분은 localStorage와 연결해야 함
  //       setPosts(allArchive || []); // allArchive가 false일 경우 빈 배열로 설정
  //     } catch (error) {
  //       console.error("Error fetching content:", error);
  //     }
  //   };
  //   fetchAllArchive();
  // }, [loginId]);

  const posts = [
    // your array of post data
    // each post object should have a unique identifier, e.g., postId
    {
      postId: 1,
      checked: postCheckMap[1] || false,
      PlanetIconUrl:
        "https://source.boringavatars.com/beam/60/zzZ?colors=1F1F20,2B4C7E,567EBB,606D80,DCE0E6",
      // 60/zzZ? 이 링크의 zzZ 부분의 사용자의 닉네임 혹은 아이디가 들어가야 함
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
        {/* <FullContainer> */}
        <ArchiveTitle>
          <h1>Archive</h1>
        </ArchiveTitle>
        <ArchiveContainer>
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
        {/* </FullContainer> */}
      </Container>
    </>
  );
}
