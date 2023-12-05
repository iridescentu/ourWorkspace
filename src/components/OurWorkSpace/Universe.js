import { styled, keyframes } from "styled-components";
import { UniverseModal } from "./UniverseModal";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import "./Swiper.css";
import { getAllContent } from "./api";
import { useUser } from "./UserContext";
import { Navigate } from "react-router-dom";

const SignalBtnAnimation = keyframes`
  0%{
    border: 2px solid red;
  }
  50%{
    border: 2px solid green;
  }
  100%{
    border: 2px solid blue;
  }
`;
const SignalBtnHoverAnimation = keyframes`
  0%{
    border: 2px solid red;
    transform: scale(1);
  }
  50%{ 
    border: 2px solid green;
    transform: scale(1.05);
  }
  100%{  
    border: 2px solid blue;
    transform: scale(1);
  }
`;
const Container = styled.div`
  width: 100vw;
  /* NavBar 60px UniverseWindow 30px */
  height: calc(100vh - 90px);
  position: relative;
  color: white;
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
const MyUniverse = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "section1 section2 section3 section4 section5"
    "section6 signal signal signal section7"
    "section8 section9 section10 section11 section12";
`;

const UniverseSection = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const ImgBox = styled.div`
  width: 40%;
  position: absolute;
  top: ${(props) => Math.floor(Math.random() * 45)}%;
  left: ${(props) => Math.floor(Math.random() * 60)}%;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;
const Signal = styled.div`
  grid-area: signal;
  width: 100%;
  height: 100%;
  font-family: "Silkscreen";
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
  /* grid-column: span 3; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  & .signalCount {
    font-size: 5rem;
    font-weight: 600;
  }
`;
const SignalNavLink = styled(NavLink)`
  width: 200px;
  background-color: transparent;
  color: white;
  text-decoration: none;
  font-family: "Silkscreen";
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  animation: ${SignalBtnAnimation} 3s linear infinite alternate;
  &:hover {
    opacity: 0.8;
    animation: ${SignalBtnHoverAnimation} 1.5s infinite ease-in-out;
  }
`;

export function Universe() {
  const { user } = useUser();
  const { loginId } = useParams();
  const { targetId } = useParams();
  const [contentList, setContentList] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  // const imagePositions = useMemo(() => {
  //   return Array.from({ length: 12 }, () => ({
  //     top: `${Math.floor(Math.random() * 45)}%`,
  //     left: `${Math.floor(Math.random() * 60)}%`,
  //   }));
  // }, []);
  console.log("loginId", loginId);
  // 일단 수정 부분 (Line 136 ~ Line 149)
  useEffect(() => {
    // targetId에 해당하는 전체 Content를 가져오는 함수
    const fetchData = async () => {
      try {
        const data = await getAllContent(loginId);
        setContentList(data || []); // data가 false일 경우 빈 배열로 설정
        console.log("Content data:", data);
        // setContentList(data);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };
    // console.log(getAllContent(loginId));
    fetchData(); // 비동기 함수이므로 fetchData를 호출해서 데이터를 먼저 받아온 후에 다음 로직을 수행
  }, [loginId]);

  const handleImageClick = (content) => {
    console.log("Clicked Image Content:", content); // 확인을 위해 추가
    console.log("Clicked Image Text:", content.text);
    console.log("Image Path:", content.image); // 이미지 경로 확인을 추가
    setModalContent(content);
    setModalOpen(true);
  };
  console.log(targetId);
  // 로그인되어 있지 않으면 로그인 페이지로 리디렉션
  // if (!user) {
  //   return <Navigate to="login" />;
  // }
  // // 로그인된 경우 Universe 페이지 컨텐츠 반환

  // content가 12개 이상일 때 swipeSlide 생성하기 위해
  const [slideContents, setSlideContents] = useState([]);
  const itemsPerPage = 12;
  useEffect(() => {
    if (contentList && contentList.length > 0) {
      // contentList를 itemsPerPage(12개) 단위로 자르기
      const slicedContents = [];
      for (let i = 0; i < contentList.length; i += itemsPerPage) {
        slicedContents.push(contentList.slice(i, i + itemsPerPage));
      }
      setSlideContents(slicedContents);
    }
  }, [contentList]);

  return (
    <>
      {/* content가 없을 때 화면 */}
      {contentList?.length === 0 ? (
        <Container>
          <FilterOverlay />
          <Signal>
            <p className="signalCount">{contentList?.length}</p>
            <p>Zero Signals have been detected !</p>
            <SignalNavLink to={`/universe/signal/${loginId}`}>
              Send a Signal
            </SignalNavLink>
          </Signal>
        </Container>
      ) : (
        <Swiper
          slidesPerView={1}
          // 넘어갈 때 선보여서
          spaceBetween={-1}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
          noSwiping={true}
        >
          {slideContents.map((slideContent, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <Container>
                <FilterOverlay />
                <MyUniverse>
                  <Signal>
                    <p className="signalCount">{contentList?.length}</p>
                    <p>Signals have been detected !</p>
                    <SignalNavLink to={`/universe/signal/${loginId}`}>
                      Send a Signal
                    </SignalNavLink>
                  </Signal>
                  {slideContent?.map((content, index) => (
                    <UniverseSection
                      key={index}
                      style={{ gridArea: `section${index + 1}` }}
                    >
                      <ImgBox
                        onClick={() => handleImageClick(content)}
                        style={{
                          top:
                            content.position && content.position.top
                              ? content.position.top
                              : 0, // 기본값 0으로 설정
                          left:
                            content.position && content.position.left
                              ? content.position.left
                              : 0, // 기본값 0으로 설정
                        }}
                      >
                        <Img
                          src={content.image} // 이미지 경로를 백엔드에서 받은 데이터에서 가져오도록 수정
                          alt={`universeSignalIcon${index}`}
                          onError={(e) => {
                            console.error("Error loading image:", e);
                          }}
                        />
                      </ImgBox>
                    </UniverseSection>
                  ))}
                </MyUniverse>
              </Container>
              {modalOpen && (
                <UniverseModal
                  closeModal={() => setModalOpen(false)}
                  content={modalContent}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
