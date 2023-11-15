import styled from "styled-components";
import { UniverseWindow } from "./UniverseWindow";

const Container = styled.div`
  width: 100%;
  /* NavBar 50px UniverseWindow 23px */
  height: calc(100vh - 73px);
  background-color: darkred;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RegisterBox = styled.div`
  width: 50%;
  height: 70%;
  background-color: gold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10%;
  & form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: orange;
    text-align: center;
    & input {
      width: 300px;
      height: 50px;
    }
    & div {
      display: flex;
      width: 300px;
      height: 50px;
      vertical-align: middle;
      & label {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      & input {
        width: 10%;
        margin-right: 10%;
      }
    }
  }
`;
const Header = styled.h2`
  background-color: aliceblue;
  margin-bottom: 10%;
`;
const LoginBtn = styled.button``;
const LoginInfo = styled.p``;
const SignUpButton = styled.button``;

export function Register() {
  return (
    <>
      <UniverseWindow />
      <Container>
        <RegisterBox>
          <Header>Register</Header>
          <form>
            <label>Name</label>
            <input type="text" />
            <label>Gender</label>
            <div>
              <label>Woman</label>
              {/* input - type - radio 단일 선택을 위해선 name 속성 부여해야 함 */}
              <input type="radio" name="sex" checked />
              <label>Man</label>
              <input type="radio" name="sex" />
            </div>
            <label>Birthdate</label>
            <input type="text" />
            <label>Nickname</label>
            <input type="text" />
            <label>ID</label>
            <input type="text" />
            <label>Password</label>
            <input type="text" />
          </form>
          <LoginBtn type="submit">Sign up</LoginBtn>
        </RegisterBox>
      </Container>
    </>
  );
}
