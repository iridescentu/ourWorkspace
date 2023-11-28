import { styled, keyframes } from "styled-components";
import Earth from "./IconImage/Earth.png";
import Uranus from "./IconImage/image-removebg-preview (7).png";
import { useEffect } from "react";
import { useRef } from "react";
import { UniverseModal } from "./UniverseModal";
import { useState } from "react";
import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

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
  background-position: center;
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
  border: 1px solid white;
  font-family: "Silkscreen";
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  animation: ${SignalBtnAnimation} 3s linear infinite alternate;
  &:hover {
    opacity: 0.8;
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
  // position fetch
  // 실제 ImgBox의 top과 left값과 전송하는 top과 left값이 맞는 확인 필요
  const imgBoxRefs = useRef([]);
  useEffect(() => {
    imgBoxRefs.current.forEach((boxRef, index) => {
      if (boxRef && boxRef.current) {
        const { top, left } = boxRef.current.getBoundingClientRect();
        console.log(`ImgBox ${index} - Top: ${top}, Left: ${left}`);
        sendDataToBackend({ top, left }); // 백엔드로 데이터를 전송하는 함수 호출
      }
    });
  }, []);

  // 백엔드로 데이터를 전송하는 함수
  const sendDataToBackend = (data) => {
    fetch("YOUR_BACKEND_API_URL", {
      method: "POST", // GET 또는 POST 방식 선택
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // 전송할 데이터 형태에 맞게 수정
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data sent to backend:", data);
      })
      .catch((error) => {
        console.error("Error sending data to backend:", error);
      });
  };

  const [modalOpen, setModalOpen] = useState(false);
  const imagePositions = useMemo(() => {
    return Array.from({ length: 12 }, () => ({
      top: `${Math.floor(Math.random() * 45)}%`,
      left: `${Math.floor(Math.random() * 60)}%`,
    }));
  }, []);
  const handleImageClick = () => {
    setModalOpen(true);
  };

  const slides = useMemo(() => {
    const slideCount = Math.ceil(imagePositions.length / 12); // 12개 이상의 이미지 박스는 새로운 슬라이드로
    const slidesArray = [];

    for (let i = 0; i < slideCount; i++) {
      const start = i * 12;
      const end = Math.min((i + 1) * 12, imagePositions.length);
      const slideImages = imagePositions.slice(start, end);

      slidesArray.push(
        <SwiperSlide key={`slide-${i}`}>
          <Container>
            <FilterOverlay />
            <MyUniverse>
              {slideImages.map((position, index) => (
                <UniverseSection key={start + index}>
                  <ImgBox
                    onClick={handleImageClick}
                    style={{ top: position.top, left: position.left }}
                  >
                    <Img
                      src={Earth}
                      alt={`universeSignalIcon${start + index}`}
                    />
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
              {slideImages.map((position, index) => (
                <UniverseSection key={start + index}>
                  <ImgBox
                    onClick={handleImageClick}
                    style={{ top: position.top, left: position.left }}
                  >
                    <Img
                      src={Uranus}
                      alt={`universeSignalIcon${start + index}`}
                    />
                  </ImgBox>
                </UniverseSection>
              ))}
            </MyUniverse>
          </Container>
          {modalOpen && (
            <UniverseModal closeModal={() => setModalOpen(false)} />
          )}
        </SwiperSlide>
      );
    }

    return slidesArray;
  }, [imagePositions, handleImageClick, modalOpen]);

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
          el: ".swiper-pagination",
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
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
                    <Img src={Uranus} alt={`universeSignalIcon${index}`} />
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
                    <Img src={Uranus} alt={`universeSignalIcon${index}`} />
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
                    <Img src={Uranus} alt={`universeSignalIcon${index}`} />
                  </ImgBox>
                </UniverseSection>
              ))}
            </MyUniverse>
          </Container>
          {modalOpen && (
            <UniverseModal closeModal={() => setModalOpen(false)} />
          )}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
