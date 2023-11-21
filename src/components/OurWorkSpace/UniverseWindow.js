import { useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const Container = styled.div`
  width: 100%;
  /* height 100% 하면 Universe.js 내용때문에 크기 달라짐 */
  /* height: 100%; */
  /* border: 10px solid darkgray; */
`;
const Topbar = styled.div`
  background-color: darkgray;
  width: 100%;
  /* Tab의 text크기에 따라 맞춘 다음 padding으로 height 조절하는 게 나을듯 */
  /* height: 30px; */
  display: grid;
  grid-template-columns: 9fr 1fr;
`;
const Tabs = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
`;
// const Tab = styled(NavLink)``; 함수 안에 써줌
const Control = styled.div`
  width: 100%;
`;
const Alerts = styled.div`
  opacity: ${({ isAlertsVisible }) =>
    isAlertsVisible ? { opacity: 1 } : { opacity: 0 }};
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & div {
    width: 100%;
    height: 25px;
    background-color: gray;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: end;
    &.warning {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      color: white;
      margin-left: 50px;
    }
    &.circle {
      width: 15px;
      height: 15px;
      background-color: darkred;
      border-radius: 100%;
      margin-right: 5px;
    }
    &#yellow {
      background-color: darkgoldenrod;
    }
    &#green {
      background-color: darkgreen;
      margin-right: 20px;
    }
  }
  & p {
    padding: 50px;
    font-weight: 600;
  }
  & button {
    color: white;
    background-color: dodgerblue;
    border: 0;
    padding: 3px 15px;
    font-weight: 700;
    border-radius: 20px;
    font-size: 13px;
    letter-spacing: 1px;
    cursor: pointer;
    margin-top: 50px;
    margin-left: 40px;
  }
`;
export function UniverseWindow() {
  // 해당 경로일 때 스타일링을 위해
  const location = useLocation();
  const Tab = styled(NavLink)`
    width: 20%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: ${({ to }) =>
      location.pathname === to ? "khaki" : "darkkhaki"};
    font-weight: ${({ to }) => (location.pathname === to ? 600 : 400)};
    border: 1px solid beige;
    text-decoration: none;
    color: black;
    &:hover {
      /* 폰트까지 opacity 적용됨 */
      /* opacity: 0.5; */
      /* rgba로 배경에만 opacity 부여 */
      background-color: rgba(189, 183, 107, 0.5);
      cursor: pointer;
      font-weight: 600;
    }
  `;

  // 경고창 확인 눌렀을 때 home으로 이동 취소 눌렀을 때 변화 x
  const navigate = useNavigate();
  const [isAlertsVisible, setIsAlertsVisible] = useState(false);
  const onClickLogout = () => {
    setIsAlertsVisible(true);
  };
  const handleConfirm = () => {
    navigate("/");
    setIsAlertsVisible(false);
  };
  const handleCancel = () => {
    setIsAlertsVisible(false);
  };

  return (
    <>
      <Container>
        <Topbar>
          <Tabs>
            <Tab to="/universe">Universe</Tab>
            <Tab to="/universe/archive">Archive</Tab>
            <Tab to="/universe/bin">Bin</Tab>
            <Tab to="/universe/register">Register</Tab>
            <Tab onClick={onClickLogout}>Logout</Tab>
          </Tabs>
          <Control></Control>
        </Topbar>
        {isAlertsVisible && (
          <Alerts>
            <div>
              <div className="warning">
                <h2>
                  <Icon icon="ic:round-warning" />
                  Warning
                </h2>
              </div>
              <div className="circle"></div>
              <div className="circle" id="yellow"></div>
              <div className="circle" id="green"></div>
            </div>
            <p>Logout 하면 Home으로 갑니다 그렇다면 확인 아니면 취소~</p>
            <button onClick={handleConfirm}>Confirm</button>
            <button onClick={handleCancel}>Cancel</button>
          </Alerts>
        )}
      </Container>
      <Outlet />
    </>
  );
}
