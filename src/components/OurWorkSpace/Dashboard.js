import { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileTestImg from "./IconImage/Alien3.png";

const Container = styled.div`
  width: 100%;
  /* NavBar 60px UniverseWindow 30px */
  height: calc(100vh - 90px);
  color: white;
  position: relative;
  display: flex;
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
const Profile = styled.div`
  background-color: rgba(255, 255, 0, 0.2);
  position: fixed;
  top: 90px;
  left: 0;
  width: 500px;
  height: 100%;
`;
const ProfileImgbox = styled.div`
  background-color: rgba(255, 0, 0, 0.2);
  width: 300px;
  height: 300px;
`;
const ProfileImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
const ProfileContentBox = styled.div`
  background-color: rgba(0, 255, 0, 0.2);
  width: 100%;
  height: 100%;
  padding: 10%;
`;
const ProfileContent = styled.div`
  background-color: beige;
  width: 100%;
  height: 100%;
`;
const PostContainer = styled.div`
  margin-left: 500px;
  background-color: rgba(34, 35, 90, 0.5);
  width: calc(100% - 500px);
  height: 100%;
  color: red;
`;

export function Dashboard() {
  // 스크롤 할 때 Profile
  const [scrollOffset, setScrollOffset] = useState(0);
  const [memberInfo, setMemberInfo] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Container>
        <FilterOverlay />
        <Profile style={{ top: `${90 - scrollOffset}px` }}>
          <ProfileImgbox>
            <ProfileImg src={ProfileTestImg} />
          </ProfileImgbox>
          <ProfileContentBox>
            <ProfileContent></ProfileContent>
          </ProfileContentBox>
        </Profile>
        <PostContainer></PostContainer>
      </Container>
    </>
  );
}
