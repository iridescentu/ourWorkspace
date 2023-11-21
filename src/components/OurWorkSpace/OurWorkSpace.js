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

export function OurWorkSpace() {
  // NavBar toggleFullScreen Btn 눌렀을 때 FullScreen
  const handle = useFullScreenHandle();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const toggleFullScreen = () => {
    if (isFullScreen) {
      handle.exit();
    } else {
      handle.enter();
    }
    setIsFullScreen(!isFullScreen);
  };

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
                <Route path="universe" element={<UniverseWindow />}>
                  <Route index element={<Universe />} />
                  <Route path="login" element={<Login />} />
                  <Route path="logout" element={<Logout />} />
                  <Route path="register" element={<Register />} />
                  <Route path="archive" element={<Archive />} />
                  <Route path="bin" element={<Bin />} />
                </Route>
              </Route>
            </Routes>
          </FullScreen>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
