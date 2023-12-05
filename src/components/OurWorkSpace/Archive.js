import styled from "styled-components";
import { useState } from "react";
import {
  getAllArchivesByLoginId,
  removeFromArchive,
  getArchiveByNickName,
} from "./api";
import { Icon } from "@iconify/react";
import { keyframes } from "styled-components";

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
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 가로로 세 개
  grid-template-rows: repeat(2, auto); // 세로로 두 개
  gap: 20px; // 각 그리드 아이템 사이의 간격
  border-radius: 15px;
  width: 96vw;
`;

const PostContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 30vw; // 각 그리드 아이템의 너비 (가로로 세 개이므로 전체 너비의 30%)
  height: 35vh; // 각 그리드 아이템의 높이 (세로로 두 개이므로 전체 높이의 50%)
  background-color: darkgray;
  margin-bottom: 2%;
  border-radius: 15px;
  border-top: 3px solid #ddd;
  border-left: 3px solid gray;
  border-bottom: 3px solid rgb(27, 36, 71);
  border-right: 3px solid rgb(27, 36, 71);
`;

// const CheckboxContainer = styled.div`
//   display: flex;
//   position: absolute;
//   top: 7%;
//   right: 5%;
//   /* background-color: red;
//   opacity: 0.7; */
// `;

// const CheckboxInput = styled.input`
//   cursor: pointer;
// `;

const twinklingAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 0.5; }
`;

const MoonIcon = styled.span`
  display: flex;
  position: absolute;
  top: 8.5%;
  right: 5%;
  font-size: 24px;
  color: ${(props) => (props.filled ? "yellow" : "black")};
  cursor: pointer;
  animation: ${(props) => (props.filled ? twinklingAnimation : "none")} 1s 1;
`;

const ProfileContainer = styled.div`
  display: flex;
  position: absolute;
  width: 25vw;
  top: 5%;
  left: 3%;
  flex-direction: row;
  /* background-color: purple;
  opacity: 0.7; */
`;

const PlanetIconContainer = styled.div`
  display: flex;
  width: 5vw;
  /* background-color: orange;
  opacity: 0.7; */
  justify-content: center;
  align-items: center;
`;

const PlanetIcon = styled.img`
  width: 85%;
  height: 85%;
`;

const NicknameContainer = styled.h2`
  width: 100%;
  /* background-color: yellow;
  opacity: 0.7; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

const MessageContainer = styled.h3`
  width: 28vw;
  height: 20vh;
  /* background-color: green;
  opacity: 0.7; */
  display: flex;
  position: absolute;
  top: 37%;
  left: 3%;
  justify-content: center;
  align-items: center;
  text-align: justify;
  overflow-y: scroll;
  padding: 1%;
  border-top: 5px solid #ddd;
  border-left: 5px solid gray;
  border-bottom: 5px solid rgb(27, 36, 71);
  border-right: 5px solid rgb(27, 36, 71);
`;

const DateContainer = styled.h4`
  width: 7vw;
  /* background-color: violet;
  opacity: 0.7; */
  display: flex;
  position: absolute;
  top: 28%;
  left: 5%;
  /* justify-content: center;
  align-items: center; */
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
  //       const allArchve = await getAllArchivesByLoginId(localStorage.getItem('loginId')); //login 부분은 localStorage와 연결해야 함
  //       setPosts(allArchive || []); // allArchive가 false일 경우 빈 배열로 설정
  //     } catch (error) {
  //       console.error("Error fetching content:", error);
  //     }
  //   };
  //   fetchAllArchive();
  // }, [loginId]);

  // (사용자) 즐겨찾기 항목 ArchiveID로 선택적으로 해제(archive 목록에서 하나만(선택해서) 제외하겠다)
  // useEffect(() => {
  //   const fetchChoiceRemove = async () => {
  //     try {
  //       const choiceRemove = await removeFromArchive(archiveId, localStorage.getItem('loginId')); //archiveId는 뭐랑 연결해야 하지?
  // archive에 들어가 있는 content가 지워졌을 경우, 지워졌다는 post를 update해 줘야 함
  //        setPosts(prevPosts => prevPosts.filter(post => post.archiveId !== archiveId));
  //     } catch (error) {
  //       console.error("Error fetching content:", error);
  //     }
  //   };
  //   fetchChoiceRemove();
  // }, [archiveId]);

  // (사용자) 즐겨찾기 항목 NickName으로 선택적 조회\
  // useEffect(() => {
  //   const fetchSearchByNickName = async () => {
  //     try {
  //       const searchByNickName = await searchByNickName(localStorage.getItem('nickName'), localStorage.getItem('loginId'));
  //       setPosts(searchByNickName || []);
  //     } catch (error) {
  //       console.error("Error fetching content:", error);
  //     }
  //   };
  //   fetchSearchByNickName();
  // }, [nickname]);

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
              {/* <CheckboxContainer>
                <CheckboxInput
                  type="checkbox"
                  checked={post.checked}
                  onChange={() => handleCheckboxChange(post.postId)}
                />
              </CheckboxContainer> */}
              <MoonIcon
                filled={postCheckMap[post.postId]}
                onClick={() => handleCheckboxChange(post.postId)}
              >
                {/* <Icon icon="pixelarticons:heart" /> */}
                <Icon
                  icon="pixelarticons:moon-stars"
                  style={{
                    color: postCheckMap[post.postId] ? "yellow" : "black",
                  }}
                />
              </MoonIcon>
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
