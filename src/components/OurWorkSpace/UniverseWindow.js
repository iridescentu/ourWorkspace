import { useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import { useUser } from "./UserContext";
// import { Navigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  background-color: rgb(27, 36, 71);
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
const Search = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3%;
  background-color: rgb(27, 36, 71);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);
`;
const SearchInput = styled.input`
  width: 75%;
  height: 75%;
`;
const SearchBtn = styled(NavLink)`
  color: white;
  /* SearchInput height 75% */
  height: 75%;
`;
const MyAccount = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(27, 36, 71);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);
`;
const DashboardNavLink = styled(NavLink)`
  width: 100%;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3%;
  font-weight: bold;
`;
const StyledIcon = styled(Icon)`
  font-size: 1.3rem;
`;
const Alerts = styled.div`
  opacity: ${({ isAlertsVisible }) =>
    isAlertsVisible ? { opacity: 1 } : { opacity: 0 }};
  width: 300px;
  height: 300px;
  border-top: 3px solid #ddd;
  border-left: 3px solid gray;
  border-bottom: 3px solid rgb(27, 36, 71);
  border-right: 3px solid rgb(27, 36, 71);
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;
const AlertsTopBar = styled.div`
  width: 100%;
  height: 30px;
  background-color: rgb(27, 36, 71);
  position: relative;
`;
const AlertsLogo = styled.div`
  width: 100%;
  height: 100%;
  font-size: 21px;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  & .waringIcon {
    color: gold;
  }
`;
const XBtn = styled.button`
  position: absolute;
  right: 3px;
  top: 3px;
  width: 23px;
  height: 23px;
  cursor: pointer;
  & .xIcon {
    width: 100%;
    height: 100%;
  }
`;
const AlertsContent = styled.div`
  background-color: darkgray;
  width: 100%;
  height: calc(100% - 30px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  /* text를 박스 크기에 맞게 늘림 */
  /* text-align: justify; */
  font-size: 15px;
`;
const AlertsText = styled.p`
  font-weight: 600;
  text-align: center;
  line-height: 1.7;
`;
const AlertsBtn = styled.button`
  cursor: pointer;
  color: white;
  background-color: rgb(27, 36, 71);
  padding: 5px 10px;
  border-radius: 5px;
`;

const AlertBtns = styled.button`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  border: none;
  gap: 15px;
`;

export function UniverseWindow() {
  // 해당 경로일 때 스타일링을 위해
  const Tab = styled(NavLink)`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 20%;
    background-color: ${({ to }) =>
      location.pathname === to ? "rgb(27, 36, 71)" : "white"};
    color: ${({ to }) => (location.pathname === to ? "white" : "black")};
    font-weight: ${({ to }) => (location.pathname === to ? 900 : 400)};
    box-shadow: ${({ to }) =>
      location.pathname === to
        ? "inset 0 0 10px rgba(255, 255, 255, 0.2)"
        : "inset 0 0 10px rgba(0, 0, 0, 0.8)"};
    text-decoration: none;
    /* 박스 폰트 정렬 */
    padding-top: 3px;
    &:hover {
      /* 폰트까지 opacity 적용됨 */
      /* opacity: 0.5; */
      /* rgba로 배경에만 opacity 부여 */
      background-color: rgba(255, 255, 255, 0.2);
      cursor: pointer;
      font-weight: 600;
      color: white;
    }
  `;
  const { updateUser } = useUser();
  const user = JSON.parse(localStorage.getItem("loginUserData"));
  const location = useLocation();
  const { targetId, loginId } = useParams();

  console.log("user", user);

  // 경고창 확인 눌렀을 때 home으로 이동 취소 눌렀을 때 변화 x
  const navigate = useNavigate();

  const [isAlertsVisible, setIsAlertsVisible] = useState(false);
  // const [login, setLogin] = useState(false);

  const onClickLogout = () => {
    setIsAlertsVisible(true);
  };

  const handleConfirm = () => {
    // localStorage에서 userData 가져오기
    const storedUserData = JSON.parse(localStorage.getItem("loginUserData"));
    // userData가 있다면 updateUser로 상태 업데이트
    if (storedUserData) {
      updateUser(storedUserData);
    }
    navigate("/");
    setIsAlertsVisible(false);
  };
  const handleCancel = () => {
    setIsAlertsVisible(false);
  };

  return (
    <>
      {/* {!login ? (
        <Navigate to="/universe/login" />
      ) : ( */}
      <Container>
        <Topbar>
          <Tabs>
            <Tab to={`/universe/${user.loginId}`}>Universe</Tab>
            <Tab to={`/universe/archive/${user.loginId}`}>Archive</Tab>
            <Tab to={`/universe/bin/${user.loginId}`}>Bin</Tab>
            <Tab onClick={onClickLogout}>Logout</Tab>
          </Tabs>
          <Tabs className="control">
            <Search>
              <SearchInput placeholder="Search by Nickname" />
              <SearchBtn to="/universe/search">
                <StyledIcon icon="pixelarticons:search" />
              </SearchBtn>
            </Search>
            <MyAccount>
              {user && (
                <DashboardNavLink to="/universe/dashboard">
                  <StyledIcon icon="pixelarticons:user" />
                  {`${user.loginId}님`}
                </DashboardNavLink>
              )}
            </MyAccount>
          </Tabs>
        </Topbar>

        {isAlertsVisible && (
          <Alerts>
            <AlertsTopBar>
              <AlertsLogo>
                <Icon className="waringIcon" icon="ic:round-warning" />
                <p>Alert</p>
              </AlertsLogo>
              <XBtn onClick={handleCancel}>
                <Icon className="xIcon" icon="pixelarticons:close" />
              </XBtn>
            </AlertsTopBar>
            <AlertsContent>
              <AlertsText>
                When you log out,<br></br>you will return to home screen.
                <br></br>Are you sure you want to log out?
              </AlertsText>
              <AlertBtns>
                <AlertsBtn onClick={handleConfirm}>Yes</AlertsBtn>
                <AlertsBtn onClick={handleCancel}>No</AlertsBtn>
              </AlertBtns>
            </AlertsContent>
          </Alerts>
        )}
      </Container>
      {/* // )} */}
      <Outlet />
    </>
  );
}
