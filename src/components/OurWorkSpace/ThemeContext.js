import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // 기본 테마
  // NavBar
  const [navBarBackgroundColor, setNavBarBackgroundColor] = useState("#162354");
  // Screen
  const [screenBackgroundImage, setScreenBackgroundImage] = useState(
    'url("https://openseauserdata.com/files/e96084d648812c87be57cb30661e685a.gif")'
  );

  const changeTheme = (newNavBarBackgroundColor, newScreenBackgroundImage) => {
    setNavBarBackgroundColor(newNavBarBackgroundColor);
    setScreenBackgroundImage(newScreenBackgroundImage);
  };

  return (
    <ThemeContext.Provider
      value={{
        navBarBackgroundColor,
        screenBackgroundImage,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
