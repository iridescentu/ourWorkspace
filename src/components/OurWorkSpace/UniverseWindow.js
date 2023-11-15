import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  /* height 100% 하면 Universe.js 내용때문에 크기 달라짐 */
  /* height: 100%; */
  /* border: 10px solid darkgray; */
`;
const Topbar = styled.div`
  background-color: darkgray;
  width: 100%;
  /* Tab의 text크기에 따라 맞춘 다음 padding으로 height 조절하는 게 나을듯 */
  /* height: 30px; */
  display: grid;
  grid-template-columns: 9fr 1fr;
`;
const Tabs = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
`;
const Tab = styled(NavLink)`
  width: 20%;
  /* border-top-left-radius: 10px;
  border-top-right-radius: 10px; */
  background-color: darkkhaki;
  border: 1px solid beige;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: khaki;
    cursor: pointer;
    font-weight: 600;
  }
`;
const Control = styled.div`
  width: 100%;
`;
export function UniverseWindow() {
  return (
    <>
      <Container>
        <Topbar>
          <Tabs>
            <Tab to="/universe">Universe</Tab>
            <Tab to="/universe/archive">Archive</Tab>
            <Tab to="/universe/bin">Bin</Tab>
            <Tab to="/universe/register">Register</Tab>
            <Tab>Logout</Tab>
          </Tabs>
          <Control></Control>
        </Topbar>
      </Container>
    </>
  );
}
