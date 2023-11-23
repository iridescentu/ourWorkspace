import { useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const Container = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
`;
const Topbar = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10%;
`;
const Tabs = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
`;
// const Tab = styled(NavLink)``; 함수 안에 써줌
const MyAccount = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
`;
const DashboardNavLink = styled(NavLink)`
  background-color: red;
  text-decoration: none;
  color: black;
`;
const StyledIcon = styled(Icon)`
  font-size: 1.3rem;
`;

const Search = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`;
const SearchInput = styled.input``;
const SearchBtn = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
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
const StyledOutlet = styled(Outlet)``;
export function UniverseWindow() {
  // 해당 경로일 때 스타일링을 위해
  const location = useLocation();
  const Tab = styled(NavLink)`
    width: 20%;
    background-color: ${({ to }) =>
      location.pathname === to ? "rgb(27, 36, 71)" : "white"};
    color: ${({ to }) => (location.pathname === to ? "white" : "black")};
    font-weight: ${({ to }) => (location.pathname === to ? 600 : 400)};

    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);
    text-decoration: none;
    /* 박스 폰트 정렬 */
    padding-top: 3px;
    &:hover {
      /* 폰트까지 opacity 적용됨 */
      /* opacity: 0.5; */
      /* rgba로 배경에만 opacity 부여 */
      background-color: rgba(27, 36, 71, 0.8);
      cursor: pointer;
      font-weight: 600;
      color: white;
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
            <Tab onClick={onClickLogout}>Logout</Tab>
          </Tabs>
          <Tabs className="control">
            <Search>
              <SearchInput placeholder="Search by Nickname" />
              <SearchBtn>
                <StyledIcon icon="pixelarticons:search" />
              </SearchBtn>
            </Search>
            <MyAccount>
              <DashboardNavLink to="/universe/dashboard">
                <StyledIcon icon="pixelarticons:user" />
                Eyhadk님
              </DashboardNavLink>
            </MyAccount>
          </Tabs>
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
      <StyledOutlet />
    </>
  );
}
