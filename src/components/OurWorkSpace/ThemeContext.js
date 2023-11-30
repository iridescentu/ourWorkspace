import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Color
  // const [defaultColor, setDefaultColor] = useState("rgb(27,36,71)");
  // const [purpleColor, setPurpleColor] = useState("rgb(82,57,135)");
  // const [greenColor, setGreenColor] = useState("rgb(34, 50, 48)");
  // FontSize

  // 기본 테마
  // NavBar
  const [navBarLogoImage, setNavBarLogoImage] = useState(
    `${process.env.PUBLIC_URL}/Logo_de.png`
  );
  const [navBarBackgroundColor, setNavBarBackgroundColor] =
    useState("rgb(27,36,71)");
  const [navBarFontColor, setNavBarFontColor] = useState("white");
  // Screen
  const [screenBackgroundImage, setScreenBackgroundImage] = useState(
    'url("https://openseauserdata.com/files/e96084d648812c87be57cb30661e685a.gif")'
  );

  const changeTheme = (
    newNavBarLogoImage,
    newNavBarBackgroundColor,
    newNavBarFontColor,
    newScreenBackgroundImage
  ) => {
    setNavBarLogoImage(newNavBarLogoImage);
    setNavBarBackgroundColor(newNavBarBackgroundColor);
    setNavBarFontColor(newNavBarFontColor);
    setScreenBackgroundImage(newScreenBackgroundImage);
  };

  return (
    <ThemeContext.Provider
      value={{
        // defaultColor,
        // purpleColor,
        // greenColor,
        navBarLogoImage,
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
