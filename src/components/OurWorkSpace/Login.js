import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { login } from "./api";
import { Icon } from "@iconify/react";

const Container = styled.div`
  width: 100vw;
  /* NavBar 60px UniverseWindow 30px */
  height: calc(100vh - 90px);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const FilterOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://i.gifer.com/WBVk.gif");
  background-size: auto;
  filter: grayscale(100%);
  z-index: -10;
`;
const LoginContainer = styled.div`
  width: 400px;
  height: 600px;
  background-color: rgba(26, 26, 26, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  gap: 3.5rem;
  position: relative;
`;
const Label = styled.label`
  font-size: 1.1rem;
  font-weight: 600;
  position: absolute;
  left: 21%;
  &.idLabel {
    top: 27%;
  }
  &.passwordLabel {
    top: 45%;
  }
`;
const Input = styled.input`
  background-color: #1a1a1a;
  border: none;
  border-bottom: 1px solid #555;
  outline: none;
  color: #fff;
  padding: 5px;
  width: 60%;
  font-size: 16px;
  margin-bottom: 20px;
`;
const StyledIcon = styled(Icon)`
  position: absolute;
  top: 50.5%;
  right: 23%;
  font-size: 1.5rem;
  cursor: pointer;
`;
const Button = styled.button`
  width: 60%;
  background-color: #555;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #666;
  }
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 40px;
`;

const RegisterText = styled.p`
  white-space: pre-line;
`;

const RegisterNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: bold;
`;

const RegisterTxt = styled.div`
  display: flex;
  justify-content: center;
`;

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisible = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Container>
        <FilterOverlay />
        <LoginContainer>
          <Title>Login</Title>
          <Label className="idLabel">ID</Label>
          <Label className="passwordLabel">Password</Label>
          <Input type="text" placeholder="Enter your ID." />
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your Password."
          />
          <StyledIcon
            icon={
              showPassword ? "basil:eye-outline" : "basil:eye-closed-outline"
            }
            onClick={togglePasswordVisible}
          />
          <Button>Login</Button>
          <RegisterText>
            <p>
              Do you wanna hang out with us?
              <br />
              <RegisterTxt>
                {" "}
                Then, &nbsp;
                <RegisterNavLink to="/universe/register">
                  Join us!
                </RegisterNavLink>
              </RegisterTxt>
            </p>
          </RegisterText>
        </LoginContainer>
      </Container>
    </>
  );
}
