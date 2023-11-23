import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { login } from "./api";
import { Icon } from "@iconify/react";

const Container = styled.div`
  width: 100vw;
  /* NavBar 60px UniverseWindow 30px */
  height: calc(100vh - 90px);
  background: radial-gradient(
    circle,
    rgba(7, 17, 54, 1) 0%,
    rgba(22, 35, 84, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginBox = styled.div`
  width: 70%;
  height: 90%;
  border-radius: 20px;
  box-shadow: 1px 1px 20px 10px rgba(0, 0, 0, 0.3);
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
  margin-bottom: 10%;
`;
const LoginBtn = styled.button``;
const LoginInfo = styled.p``;
const SignUpButton = styled.button``;
const StyledIcon = styled(Icon)``;

export function Login() {
  // login
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  // 로그인 시도를 위해 입력된 user의 정보를 담고 있는 state
  const [userLogin, setUserLogin] = useState(null);
  const [loggingIn, setLoggingIn] = useState(false);
  // const { loginState, setLoginState } = useContext(UserContext);

  // Password 보이거나 안보이게
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Container>
        <LoginBox>
          <Header>Login</Header>
          <form>
            <label>ID</label>
            <input type="text" placeholder="Enter your Id." />
            <label>
              PW
              <StyledIcon
                icon={
                  showPassword
                    ? "basil:eye-outline"
                    : "basil:eye-closed-outline"
                }
                onClick={togglePasswordVisible}
              />
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password."
            />
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
