import styled from "styled-components";
import Earth from "./IconImage/image-removebg-preview.png";
import Uranus from "./IconImage/image-removebg-preview (7).png";
import { useEffect } from "react";
import { useRef } from "react";
import { UniverseModal } from "./UniverseModal";
import { useState } from "react";
import { useMemo } from "react";

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
const Signal = styled.h1`
  font-family: "Silkscreen";
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
  grid-column: span 3;
  /* 세로 정렬하기 위해 height값이 지정되어 있어서 가능함 */
  margin: auto 0;
  & .signalCount {
    font-size: 5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
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

  return (
    <>
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
            <span className="signalCount">12</span> New Signals have been
            detected !
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
      {modalOpen && <UniverseModal closeModal={() => setModalOpen(false)} />}
    </>
  );
}
