import { styled, keyframes } from "styled-components";
import Earth from "./IconImage/Earth.png";
import Uranus from "./IconImage/Uranus.png";
import Alien1 from "./IconImage/Alien1.png";
import Rocket from "./IconImage/Rocket.png";
import Meteor from "./IconImage/Meteor.png";
import Sun from "./IconImage/Sun.png";
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
                    <Img src={Alien1} alt={`universeSignalIcon${index}`} />
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
        </SwiperSlide>
      </Swiper>
    </>
  );
}
