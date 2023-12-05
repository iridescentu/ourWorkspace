import styled from "styled-components";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { keyframes } from "styled-components";
import {
  getAllBinsByUser,
  restoreContentByIdUser,
  permanentlyDeleteContentUser,
  deleteAllBinsUser,
  getHiddenContentById,
} from "./api";
import { useEffect } from "react";

const Container = styled.div`
  width: 100vw;
  /* NavBar 60px UniverseWindow 30px */
  height: calc(100vh - 90px);
  /* color: white; */
  padding-top: 15px;
  padding-left: 2%;
  position: relative;
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

const BinTitle = styled.div`
  color: white;
  padding-top: 1%;
  padding-bottom: 3%;
`;

const BinContainer = styled.div`
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
//   /* align-items: center;
//   justify-content: center; */
// `;

// const CheckboxInput = styled.input`
//   cursor: pointer;
// `;

const twinklingAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 0.5; }
`;

const BinIcon = styled.span`
  display: flex;
  position: absolute;
  top: 8.5%;
  right: 5%;
  font-size: 24px;
  color: ${(props) => (props.filled ? "darkgray" : "white")};
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

export function Bin() {
  const [postCheckMap, setPostCheckMap] = useState({});

  const handleCheckboxChange = (postId) => {
    setPostCheckMap((prevMap) => ({
      ...prevMap,
      [postId]: !prevMap[postId],
    }));
  };

  //(사용자) 자신의 Bin의 모든 항목을 조회
  // useEffect(() => {
  //   const fetchAllBinsByUser = async () => {
  //     try {
  //       const allBinsByUser = await getAllBinsByUser(localStorage.getItem('loginId'));
  //       setPosts(allBinsByUser || []); // allBinsByUser가 false일 경우 빈 배열로 설정
  //     } catch (error) {
  //       console.error("Error fetching content:", error);
  //     }
  //   };
  //   fetchAllBinsByUser();
  // }, []);

  // (사용자) contentID로 숨김처리 항목 선택하여 영구삭제
  //(bin DB와 ContentDB에서 모두 삭제, archiveDB도 contentDB에 따라 자동적으로 삭제)
  // useEffect(() => {
  //   const fetchyDeleteContentUser = async () => {
  //     try {
  //       const deleteContentUser = await permanentlyDeleteContentUser(contentId, localStorage.getItem('loginId')); //archiveId는 뭐랑 연결해야 하지?
  // archive에 들어가 있는 content가 지워졌을 경우, 지워졌다는 post를 update해 줘야 함
  //        setPosts(prevPosts => prevPosts.filter(post => post.contentId !== contentId));
  //     } catch (error) {
  //       console.error("Error fetching content:", error);
  //     }
  //   };
  //   fetchdeleteContentUser();
  // }, [contentId]);

  //☆ 이거 전체 삭제 버튼 없어요
  //(사용자) 숨김처리 항목 전체 조회하여 영구 삭제
  // useEffect(() => {
  //   const fetchyDeleteAllBinsUser = async () => {
  //     try { await delteAllBinsUser(localStorage.getItem('loginId'));
  //        setPosts([]); //빈 post
  //     } catch (error) {
  //       console.error("Error fetching content:", error);
  //     }
  //   };
  //   fetchdeleteContentUser();
  // }, [setPosts]);

  // (사용자) contentID로 숨김처리 항목 선택하여 복구
  //(bin DB와 ContentDB에서 모두 삭제, archiveDB도 contentDB에 따라 자동적으로 삭제)
  // useEffect(() => {
  //   const fetchyRestoreContentByIdUser = async () => {
  //     try {
  //  await restoreContentByUser(contentId, localStorage.getItem('loginId'));
  // const restoredContent = await getHiddenContentById(contentId);
  // setPosts(prevPosts => prevPosts.concat(restoredContent));
  //     } catch (error) {
  //       console.error("Error fetching content:", error);
  //     }
  //   };
  //   fetchdeleteContentUser();
  // }, [contentId]);

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

  const MyPostAvatarUrl =
    "https://source.boringavatars.com/beam/60/zzZ?colors=1F1F20,2B4C7E,567EBB,606D80,DCE0E6";
  // 각각의 닉네임/ID에 아바타를 부여하기 위해서는 120/닉네임?colors= 이런 식으로 닉네임 자리에 닉네임이든 ID든 값을 부여하면 됨
  // 아바타를 정사각형 모양으로 바꾸고 싶다면 코드의 맨 마지막에 ?square를 추가하면 됨

  return (
    <>
      <Container>
        <FilterOverlay />
        <BinTitle>
          <h1>Bin</h1>
        </BinTitle>
        <BinContainer>
          {posts.map((post) => (
            <PostContainer key={post.postId}>
              {/* <CheckboxContainer>
                <CheckboxInput
                  type="checkbox"
                  checked={post.checked}
                  onChange={() => handleCheckboxChange(post.postId)}
                />
              </CheckboxContainer> */}
              <BinIcon
                filled={postCheckMap[post.postId]}
                onClick={() => handleCheckboxChange(post.postId)}
              >
                {/* <Icon icon="pixelarticons:heart" /> */}
                <Icon
                  icon="pixelarticons:trash"
                  style={{
                    color: postCheckMap[post.postId] ? "black" : "white",
                  }}
                />
              </BinIcon>
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
        </BinContainer>
      </Container>
    </>
  );
}
