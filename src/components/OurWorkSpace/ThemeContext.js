import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // 기본 테마
  // NavBar
  const [navBarBackgroundColor, setNavBarBackgroundColor] = useState("orange");
  // Screen
  const [screenBackgroundImage, setScreenBackgroundImage] = useState(
    'url("https://cdn.discordapp.com/attachments/1172066053451423844/1172067976401403914/dfpwt5g-e7ed244c-8c4e-429c-96ee-1c0f67fcc7d5.gif?ex=656832dd&is=6555bddd&hm=853b2a88236d4ee7ee61b5c3eff541c5f7486a51e1dd74625312348dcc9f4063&")'
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
