import { styled, keyframes } from "styled-components";
import Earth from "./IconImage/Earth.png";
import Uranus from "./IconImage/Uranus.png";
import Alien1 from "./IconImage/Alien1.png";
import Rocket from "./IconImage/Rocket.png";
import Meteor from "./IconImage/Meteor.png";
import Sun from "./IconImage/Sun.png";
import { UniverseModal } from "./UniverseModal";
import { useState, useEffect } from "react";
import { useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import "./Swiper.css";
import { getAllContent } from "./api";

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
const Signal = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Silkscreen";
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
  grid-column: span 3;
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
const MyUniverse = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
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

export function Universe() {
  // 일단 수정 부분 Line 123 ~ Line 126
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
  console.log(loginId);
  // 일단 수정 부분 (Line 136 ~ Line 149)
  useEffect(() => {
    // targetId에 해당하는 전체 Content를 가져오는 함수
    const fetchData = async () => {
      try {
        const data = await getAllContent(loginId);
        setContentList(data || []); // data가 falsy일 경우 빈 배열로 설정
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
    setModalContent(content);
    setModalOpen(true);
  };
  return (
    <>
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
        <SwiperSlide>
          <Container>
            <FilterOverlay />
            <MyUniverse>
              {contentList?.map((content, index) => (
                <UniverseSection key={index}>
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
                    {/* {imagePositions.slice(0, 6).map((position, index) => (
                <UniverseSection key={index}>
                  <ImgBox
                    onClick={handleImageClick}
                    style={{ top: position.top, left: position.left }}
                  > */}
                    {/* <Img src={Alien1} alt={`universeSignalIcon${index}`} /> */}
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
              <Signal>
                <p className="signalCount">{contentList?.length}</p>
                <p>New Signals have been detected !</p>
                <SignalNavLink to={"/universe/signal"}>
                  Send a Signal
                </SignalNavLink>
              </Signal>
              {/* {contentList?.map((content, index) => (
                <UniverseSection key={index}>
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
                  > */}
              {/* {imagePositions.slice(0, 6).map((position, index) => (
                <UniverseSection key={index}>
                  <ImgBox
                    onClick={handleImageClick}
                    style={{ top: position.top, left: position.left }}
                  > */}
              {/* <Img
                      src={content.image} // 이미지 경로를 백엔드에서 받은 데이터에서 가져오도록 수정
                      alt={`universeSignalIcon${index}`}
                      onError={(e) => {
                        console.error("Error loading image:", e);
                      }}
                    /> */}
              {/* <Img src={Uranus} alt={`universeSignalIcon${index}`} /> */}
              {/* </ImgBox> */}
              {/* </UniverseSection> */}
              {/* ))} */}
            </MyUniverse>
          </Container>
          {modalOpen && (
            // <UniverseModal closeModal={() => setModalOpen(false)} />
            <UniverseModal
              closeModal={() => setModalOpen(false)}
              content={modalContent}
            />
          )}
        </SwiperSlide>
        {/* <SwiperSlide>
          <Container>
            <FilterOverlay />
            <MyUniverse>
              {imagePositions.slice(0, 6).map((position, index) => (
                <UniverseSection key={index}>
                  <ImgBox
                    onClick={handleImageClick}
                    style={{ top: position.top, left: position.left }}
                  >
                    <Img src={Earth} alt={`universeSignalIcon${index}`} />
                  </ImgBox>
                </UniverseSection>
              ))}
              <Signal>
                <p className="signalCount">12</p>
                <p>New Signals have been detected !</p>
                <SignalNavLink to={"/universe/signal"}>
                  Send a Signal
                </SignalNavLink>
              </Signal>
              {imagePositions.slice(0, 6).map((position, index) => (
                <UniverseSection key={index}>
                  <ImgBox
                    onClick={handleImageClick}
                    style={{ top: position.top, left: position.left }}
                  >
                    <Img src={Meteor} alt={`universeSignalIcon${index}`} />
                  </ImgBox>
                </UniverseSection>
              ))}
            </MyUniverse>
          </Container>
          {modalOpen && (
            <UniverseModal closeModal={() => setModalOpen(false)} />
          )}
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <FilterOverlay />
            <MyUniverse>
              {imagePositions.slice(0, 6).map((position, index) => (
                <UniverseSection key={index}>
                  <ImgBox
                    onClick={handleImageClick}
                    style={{ top: position.top, left: position.left }}
                  >
                    <Img src={Rocket} alt={`universeSignalIcon${index}`} />
                  </ImgBox>
                </UniverseSection>
              ))}
              <Signal>
                <p className="signalCount">12</p>
                <p>New Signals have been detected !</p>
                <SignalNavLink to={"/universe/signal"}>
                  Send a Signal
                </SignalNavLink>
              </Signal>
              {imagePositions.slice(0, 6).map((position, index) => (
                <UniverseSection key={index}>
                  <ImgBox
                    onClick={handleImageClick}
                    style={{ top: position.top, left: position.left }}
                  >
                    <Img src={Sun} alt={`universeSignalIcon${index}`} />
                  </ImgBox>
                </UniverseSection>
              ))}
            </MyUniverse>
          </Container>
          {modalOpen && (
            <UniverseModal closeModal={() => setModalOpen(false)} />
          )}
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
