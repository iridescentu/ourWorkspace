import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Universe } from "./Universe";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { Register } from "./Register";
import { Archive } from "./Archive";
import { Bin } from "./Bin";
import { NavBar } from "./NavBar";
import { useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Screen } from "./Screen";
import { UniverseWindow } from "./UniverseWindow";
import { ThemeProvider } from "./ThemeContext";
import { Dashboard } from "./Dashboard";
import { Search } from "./Search";
import { Signal } from "./Signal";
import { Error } from "./Error";
import { UserProvider, useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";

export function OurWorkSpace() {
  // NavBar toggleFullScreen Btn 눌렀을 때 FullScreen
  const handle = useFullScreenHandle();
  const [isFullScreen, setIsFullScreen] = useState(false);
  // // user 상태를 useState로 정의
  const [user, setUser] = useState(null);
  // const { user, targetId, updateUser, updateTargetId } = useUser(); // UserContext를 통해 user와 targetId 상태를 가져옴

  const toggleFullScreen = () => {
    if (isFullScreen) {
      handle.exit();
    } else {
      handle.enter();
    }
    setIsFullScreen(!isFullScreen);
  };
  const [targetId, setTargetId] = useState(null); //targetId 상태 생성
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <FullScreen handle={handle}>
            <UserProvider>
              <Routes>
                <Route
                  path="/"
                  element={<NavBar toggleFullScreen={toggleFullScreen} />}
                >
                  <Route index element={<Screen />} />
                  {/* ☆ universe에 user={user} setUser={setUser} 추가*/}
                  {/* <Route path="universe" element={<Navigate to="/universe/login" />}> */}
                  <Route path="register" element={<Register />} />
                  <Route
                    path="universe"
                    element={
                      <UniverseWindow
                      // user={user}
                      // setUser={updateUser} // updateUser 함수를 통해 user 상태 업데이트
                      // targetId={targetId} // targetId 상태 사용
                      // setTargetId={updateTargetId}
                      // updateTargetId 함수를 통해 targetId 상태 업데이트
                      />
                    }
                  >
                    <Route index element={<Universe targetId={targetId} />} />
                    {/* 일단 수정 부분 (Line 64 ~ Line 65) */}
                    <Route path=":loginId" element={<Universe />} />
                    {/* <Route path=":loginId" element={<Universe />} /> */}
                    {/* <Route
                    path=":loginId"
                    element={<Universe loginId={loginId} />}
                  /> */}

                    {/* <Route path="targetId" element={<Universe />} /> */}

                    <Route path="login" element={<Login />} />
                    <Route path="logout" element={<Logout />} />

                    <Route path="archive" element={<Archive />} />
                    <Route path="bin" element={<Bin />} />
                    {/* ☆ dashboard에 user={user} 추가*/}
                    <Route
                      path="dashboard"
                      element={<Dashboard user={user} />}
                    />
                    <Route path="search" element={<Search />} />
                    <Route
                      path="/universe/signal/:targetId"
                      element={<Signal targetId={targetId} />}
                    />
                  </Route>
                </Route>
                {/* 주소 틀렸을 때 Error Page */}
                <Route path="*" element={<Error />} />
                {/* <Route path="universe/loginIdDB정보" element={<Error />} /> */}
              </Routes>
            </UserProvider>
          </FullScreen>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
