import { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileTestImg from "./IconImage/Alien3.png";

const Container = styled.div`
  width: 100%;
  /* NavBar 60px UniverseWindow 30px */
  height: calc(100vh - 90px);
  color: white;
  position: relative;
  /* display: flex; */
  display: grid;
  grid-template-columns: 30% 70%;
`;
const FilterOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 90px);
  background-image: url("https://i.gifer.com/WBVk.gif");
  background-size: auto;
  filter: grayscale(100%);
  z-index: -10;
`;
const Profile = styled.div`
  /* background-color: rgba(255, 255, 0, 0.2); */
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 30% 70%;
`;
const ProfileImgBox = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  width: 200px;
  height: 200px;
  border-radius: 5px;
  border-top: 3px solid #ddd;
  border-left: 3px solid gray;
  border-bottom: 3px solid rgb(27, 36, 71);
  border-right: 3px solid rgb(27, 36, 71);
  margin: auto auto;
`;
const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ProfileContentBox = styled.div`
  /* background-color: green; */
  width: 100%;
  height: 100%;
  padding: 0 8% 8% 8%;
`;
const ProfileContent = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border-top: 3px solid #ddd;
  border-left: 3px solid gray;
  border-bottom: 3px solid rgb(27, 36, 71);
  border-right: 3px solid rgb(27, 36, 71);
  background-color: darkgray;
  display: grid;
  grid-template-rows: 3fr 1fr;
`;
const MyPage = styled.div`
  padding: 30px;
  &.privacyPage {
    display: grid;
    gap: 2rem;
  }
  &.totalPage {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 0;
    gap: 2rem;
  }
`;
const Privacy = styled.p`
  border: 3px ridge rgba(27, 36, 71, 0.5);
  border-radius: 5px;
  font-size: 1.5rem;
  color: black;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  & .privacyLabel {
    position: absolute;
    top: -13px;
    left: 15px;
    color: rgb(27, 36, 71);
    background-color: darkgray;
    font-weight: bold;
    font-size: 1rem;
    padding: 0 3%;
  }
`;
const Total = styled.div`
  border: 3px ridge rgb(27, 36, 71);
  border-radius: 5px;
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  & .totalLabel {
    position: absolute;
    top: -13px;
    left: auto;
    color: rgb(27, 36, 71);
    background-color: darkgray;
    font-size: 1rem;
    font-weight: bold;
    padding: 0 3%;
  }
`;

const PostContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 3%;
  overflow-y: scroll;
  /* 스크롤 전체 */
  &::-webkit-scrollbar {
  }
  &::-webkit-scrollbar-corner {
  }
  /* 드래그 가능한 막대 */
  &::-webkit-scrollbar-thumb {
  }
  /* 스크롤 진행률 */
  &::-webkit-scrollbar-track {
  }
  /* 스크롤 진행률 thumb 제외 막대 */
  &::-webkit-scrollbar-track-piece {
  }
  /* 방향 버튼 */
  &::-webkit-scrollbar-button {
  }
  & h1 {
    text-align: center;
    font-family: "silkscreen";
    font-size: 3rem;
    letter-spacing: 20px;
  }
`;
const MySiganl = styled.div`
  /* border-radius: 5px; */
  border-top: 3px solid #ddd;
  border-left: 3px solid gray;
  border-bottom: 3px solid rgb(27, 36, 71);
  border-right: 3px solid rgb(27, 36, 71);
  background-color: darkgray;
  width: 100%;
  height: 200px;
  border-radius: 20px;
  margin-top: 3%;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 15%;
    width: 0;
    height: 0;
    border: 25px solid transparent;
    border-right-color: darkgray;
    border-left: 0;
    border-top: 0;
    margin-left: -25px;
  }
  display: grid;
`;
const MySignalImgBox = styled.div`
  background-color: red;
`;
const MySignalImg = styled.img``;
const MySignalTime = styled.p`
  background-color: purple;
`;
const MySignalText = styled.p`
  background-color: blue;
  overflow-y: scroll;
`;
const MySignalTo = styled.h3`
  background-color: green;
`;
export function Dashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // 로컬 스토리지에서 저장된 사용자 정보 불러오기
    const storedUser = localStorage.getItem("loginUserData");

    if (storedUser) {
      const parsedUserData = JSON.parse(storedUser);
      setUserData(parsedUserData);
    }
  }, []);

  return (
    <>
      <Container>
        <FilterOverlay />
        <Profile>
          <ProfileImgBox>
            <ProfileImg src={ProfileTestImg} alt="ProfileImage" />
          </ProfileImgBox>
          <ProfileContentBox>
            <ProfileContent>
              <MyPage className="privacyPage">
                <Privacy>
                  <span className="privacyLabel">ID</span>
                  {userData?.loginId}
                </Privacy>
                <Privacy>
                  <span className="privacyLabel">Nickname</span>
                  {userData?.nickName}
                </Privacy>
                <Privacy>
                  <span className="privacyLabel">Birth</span>
                  {userData?.birthDate}
                </Privacy>
                <Privacy>
                  <span className="privacyLabel">Email</span>
                  {userData?.email}
                </Privacy>
              </MyPage>
              <MyPage className="totalPage">
                <Total>
                  <span className="totalLabel">Total post written</span> 10
                </Total>
                <Total>
                  <span className="totalLabel">Total favorite signals</span> 5
                </Total>
              </MyPage>
            </ProfileContent>
          </ProfileContentBox>
        </Profile>
        <PostContainer>
          <h1>My Posts</h1>
          <MySiganl>
            <MySignalImgBox>
              <MySignalImg src={ProfileTestImg} alt="MySignalImage" />
            </MySignalImgBox>
            <MySignalTime>2023-12-01</MySignalTime>
            <MySignalTo>To. 다혜 누나 ghkt2535</MySignalTo>
            <MySignalText>
              다혜 누나 행복한 하루 되세요^^ 다혜 누나 행복한 하루 되세요^^ 다혜
              누나 행복한 하루 되세요^^ 다혜 누나 행복한 하루 되세요^^ 다혜 누나
              행복한 하루 되세요^^ 다혜 누나 행복한 하루 되세요^^ 다혜 누나
              행복한 하루 되세요^^ 다혜 누나 행복한 하루 되세요^^ 다혜 누나
              행복한 하루 되세요^^ 다혜 누나 행복한 하루 되세요^^ 다혜 누나
              행복한 하루 되세요^^ 다혜 누나 행복한 하루 되세요^^ 다혜 누나
              행복한 하루 되세요^^ 다혜 누나 행복한 하루 되세요^^ 다혜 누나
              행복한 하루 되세요^^ 다혜 누나 행복한 하루 되세요^^ 다혜 누나
              행복한 하루 되세요^^ 다혜 누나 행복한 하루 되세요^^ 다혜 누나
              행복한 하루 되세요^^ 다혜 누나 행복한 하루 되세요^^ 다혜 누나
              행복한 하루 되세요^^ 다혜 누나 행복한 하루 되세요^^ 다혜 누나
              행복한 하루 되세요^^ 다혜 누나 행복한 하루 되세요^^ 다혜 누나
              행복한 하루 되세요^^ 다혜 누나 행복한 하루 되세요^^ 다혜 누나
              행복한 하루 되세요^^ 다혜 누나 행복한 하루 되세요^^ 다혜 누나
              행복한 하루 되세요^^
            </MySignalText>
          </MySiganl>
          <MySiganl></MySiganl>
          <MySiganl></MySiganl>
          <MySiganl></MySiganl>
          <MySiganl></MySiganl>
          <MySiganl></MySiganl>
        </PostContainer>
      </Container>
    </>
  );
}
