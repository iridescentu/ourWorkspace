import styled from "styled-components";
import { OpenWeather } from "./OpenWeather";
import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";
import { Icon } from "@iconify/react";

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
`;
const NavSection = styled.div`
  width: 100%;
  height: 50px;
  /* box-shadow: 0 5px 50px 0 rgba(255, 255, 255, 0.05); */
`;
const Logo = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 5%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 3%;
`;
const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: 900;
  font-size: 2rem;
  cursor: pointer;
`;
const LogoImgBox = styled.div`
  width: 60px;
`;
const LogoImg = styled.img`
  width: 100%;
`;
const NavItem = styled.div`
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
`;
const NavItemSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
  & figure {
    width: 20px;
    height: 20px;
  }
`;
const StyledIcon = styled(Icon)`
  font-size: 1.5rem;
`;
const Btn = styled.button`
  background-color: transparent;
  color: white;
  border: 0;
  cursor: pointer;
`;

export function NavBar({ toggleFullScreen }) {
  // 날짜, 시각 표시
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const formattedDate = currentDateTime
    .toLocaleDateString()
    .split(".")
    .slice(0, 3)
    .join(" -");
  const formattedTime = currentDateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const amPm = currentDateTime.getHours() >= 12 ? "PM " : "AM ";

  // Theme
  const { navBarLogoImage, navBarBackgroundColor, navBarFontColor } =
    useTheme();

  return (
    <>
      <Container
        style={{
          backgroundColor: navBarBackgroundColor,
        }}
      >
        <NavSection>
          <Logo>
            <LogoImgBox>
              <LogoImg src={navBarLogoImage} alt="Logo" />
            </LogoImgBox>
            <StyledNavLink to={"/"} style={{ color: navBarFontColor }}>
              Our Workspace
            </StyledNavLink>
          </Logo>
        </NavSection>
        <NavSection>
          <NavItem>
            <NavItemSection>
              <StyledIcon icon="pixelarticons:clock" />
              <Btn>
                {amPm} {formattedTime}
                <br />
                {formattedDate}
              </Btn>
            </NavItemSection>
            <NavItemSection>
              <OpenWeather />
            </NavItemSection>
            <NavItemSection>
              <StyledIcon icon="pixelarticons:aspect-ratio" />
              <Btn onClick={toggleFullScreen}>FullScreen</Btn>
            </NavItemSection>
          </NavItem>
        </NavSection>
      </Container>
      <Outlet />
    </>
  );
}
// icon="mingcute:time-line"
// icon="mingcute:fullscreen-fill"
