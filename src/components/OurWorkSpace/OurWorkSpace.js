import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Universe } from "./Universe";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { Register } from "./Register";
import { Archive } from "./Archive";
import { Bin } from "./Bin";
import { NavBar } from "./NavBar";
import { useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { UniverseWindow } from "./UniverseWindow";
const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
font-family: 'Black Ops One','Noto Serif KR';
}
html,body{
  width: 100%;
  height: 100%;
}
`;

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

  // login 안했을 때 Login.js 했을 때 Universe.js
  // const navigate = useNavigate();

  // const isLoggedIn =

  // if (!isLoggedIn) {
  //   navigate("/universe/login");
  // }

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <FullScreen handle={handle}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route
                index
                element={<NavBar toggleFullScreen={toggleFullScreen} />}
              />
            </Route>
            <Route
              path="universe"
              element={<NavBar toggleFullScreen={toggleFullScreen} />}
            >
              <Route index element={<Universe />} />
              <Route path="login" element={<Login />} />
              <Route path="logout" element={<Logout />} />
              <Route path="register" element={<Register />} />
              <Route path="archive" element={<Archive />} />
              <Route path="bin" element={<Bin />} />
            </Route>
          </Routes>
        </FullScreen>
      </BrowserRouter>
    </>
  );
}
