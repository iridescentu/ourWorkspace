import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 90px);
  background-color: navy;
  color: white;
`;

const PlanetContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 가로로 다섯 칸
  grid-template-rows: repeat(3, 1fr); // 세로로 세 칸
  gap: 10px; // 각 셀 사이의 간격 조정 (원하는 크기로 조절)
  grid-row-gap: 150px; // 세로 줄 사이의 간격 조정
  background-color: black;
  justify-content: center;
  align-items: center;
  border: 1px solid yellow;
`;

const Planets = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

const SignalForm = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column; /* 세로로 배치 */
  align-items: flex-start; /* 가운데 정렬 대신 맨 위쪽으로 정렬 */
  /* align-items: center; 가운데 정렬 */
`;

const SignalInput = styled.input`
  width: 90vw;
  height: 300px;
  box-sizing: border-box; /* 내용이 박스 안쪽에 위치하도록 설정 */
  resize: none; /* 사용자 크기 조절 비활성화 */
  padding: 10px; /* 내용과 경계 사이에 여백 추가 */
  font-size: 16px; /* 글꼴 크기 설정 */
  vertical-align: top; /* 텍스트를 상단으로 정렬합니다. */
`;

const SignalBtn = styled.button`
  width: 10vw;
  height: 3vh;
  cursor: pointer;
`;

export function Signal() {
  return (
    <>
      <Container>
        <h1>Choose your Planets</h1>
        <PlanetContainer>
          <Planets>Planets 1</Planets>
          <Planets>Planets 2</Planets>
          <Planets>Planets 3</Planets>
          <Planets>Planets 4</Planets>
          <Planets>Planets 5</Planets>
          <Planets>Planets 6</Planets>
          <Planets>Planets 7</Planets>
          <Planets>Planets 8</Planets>
          <Planets>Planets 9</Planets>
          <Planets>Planets 10</Planets>
          <Planets>Planets 11</Planets>
          <Planets>Planets 12</Planets>
          <Planets>Planets 13</Planets>
          <Planets>Planets 14</Planets>
          <Planets>Planets 15</Planets>
        </PlanetContainer>
        <h1>Send a signal</h1>
        <SignalForm>
          <SignalInput
            type="text"
            name="signal"
            placeholder="Type some signal"
          />
          <SignalBtn>Send Signal!</SignalBtn>
        </SignalForm>
      </Container>
    </>
  );
}
