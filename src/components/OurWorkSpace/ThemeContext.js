import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // 기본 테마
  // NavBar
  const [navBarBackgroundColor, setNavBarBackgroundColor] = useState("#162354");
  const [navBarFontColor, setNavBarFontColor] = useState("white");
  // Screen
  const [screenBackgroundImage, setScreenBackgroundImage] = useState(
    'url("https://openseauserdata.com/files/e96084d648812c87be57cb30661e685a.gif")'
  );

  const changeTheme = (
    newNavBarBackgroundColor,
    newNavBarFontColor,
    newScreenBackgroundImage
  ) => {
    setNavBarBackgroundColor(newNavBarBackgroundColor);
    setNavBarFontColor(newNavBarFontColor);
    setScreenBackgroundImage(newScreenBackgroundImage);
  };

  return (
    <ThemeContext.Provider
      value={{
        navBarBackgroundColor,
        navBarFontColor,
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
