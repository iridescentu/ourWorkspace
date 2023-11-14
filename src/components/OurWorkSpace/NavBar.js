import styled from "styled-components";
import FullScreenIcon from "./IconImage/FullScreen.png";
import { OpenWeather } from "./OpenWeather";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  background-color: orange;
  width: 100%;
  height: 50px;
`;
const Nav = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const NavSection = styled.div`
  background-color: rgba(255, 110, 169);
  border: 1px solid black;
  width: 100%;
  height: 50px;
`;
const Logo = styled.div``;
const NavItem = styled.div`
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
`;
const NavItemSection = styled.div`
  border-right: 1px solid white;
  & :last-child {
    border-right: 0;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  & figure {
    width: 20px;
    height: 20px;
  }
`;
const IconImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Btn = styled.button`
  cursor: pointer;
`;

export function NavBar({ toggleFullScreen }) {
  return (
    <>
      <Container>
        <Nav>
          <NavSection>
            <Logo>
              <p>아이콘과 로고</p>
            </Logo>
          </NavSection>
          <NavSection>
            <NavItem>
              <NavItemSection>
                <figure>
                  <IconImg src={FullScreenIcon} />
                </figure>
                <Btn>
                  오전 대충 시간 <br /> 2023-날-짜
                </Btn>
              </NavItemSection>
              <NavItemSection>
                <OpenWeather />
              </NavItemSection>
              <NavItemSection>
                <figure>
                  <IconImg src={FullScreenIcon} />
                </figure>
                <Btn onClick={toggleFullScreen}>FullScreen F11 기능</Btn>
              </NavItemSection>
            </NavItem>
          </NavSection>
        </Nav>
      </Container>
      <Outlet />
    </>
  );
}
