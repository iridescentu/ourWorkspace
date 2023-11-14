import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginBox = styled.div`
  width: 500px;
  height: 500px;
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
  }
`;
const Header = styled.h2`
  background-color: aliceblue;
`;
const LoginBtn = styled.button``;
const LoginInfo = styled.p``;
const SignUpButton = styled.button``;
export function Login() {
  return (
    <>
      <Container>
        <LoginBox>
          <Header>Login</Header>
          <form>
            <label>ID</label>
            <input type="text" placeholder="Enter your Id." />
            <label>PW</label>
            <input type="text" placeholder="Enter your Password." />
          </form>
          <LoginBtn type="submit">Login</LoginBtn>
          <LoginInfo>
            Do you wanna hang out with us?
            <br />
            Then, please
            <NavLink to="/universe/register">
              <SignUpButton>Sign up!</SignUpButton>
            </NavLink>
          </LoginInfo>
        </LoginBox>
      </Container>
    </>
  );
}
