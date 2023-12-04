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

export function OurWorkSpace() {
  // NavBar toggleFullScreen Btn 눌렀을 때 FullScreen
  const handle = useFullScreenHandle();
  const [isFullScreen, setIsFullScreen] = useState(false);

  // user 상태를 useState로 정의
  const [user, setUser] = useState(null);

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
                      user={user}
                      setUser={setUser}
                      targetId={targetId} // targetId를 UniverseWindow 컴포넌트에 전달
                      setTargetId={setTargetId}
                    />
                  }
                >
                  <Route index element={<Universe />} />
                  {/* 일단 수정 부분 (Line 64 ~ Line 65) */}
                  <Route path=":loginId" element={<Universe />} />
                  <Route path="targetId" element={<Universe />} />

                  <Route path="login" element={<Login />} />
                  <Route path="logout" element={<Logout />} />

                  <Route path="archive" element={<Archive />} />
                  <Route path="bin" element={<Bin />} />
                  {/* ☆ dashboard에 user={user} 추가*/}
                  <Route path="dashboard" element={<Dashboard user={user} />} />
                  <Route path="search" element={<Search />} />
                  <Route path="signal" element={<Signal />} />
                </Route>
              </Route>
              {/* 주소 틀렸을 때 Error Page */}
              <Route path="*" element={<Error />} />
              {/* <Route path="universe/loginIdDB정보" element={<Error />} /> */}
            </Routes>
          </FullScreen>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
