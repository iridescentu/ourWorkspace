import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { login } from "./api";
import { Icon } from "@iconify/react";

const Container = styled.div`
  width: 100vw;
  /* NavBar 60px UniverseWindow 30px */
  height: calc(100vh - 90px);
  background-image: url("https://i.gifer.com/WBVk.gif");
  color: white;
`;

const LoginContainer = styled.div`
  width: 300px;
  height: 300px;
  background-color: #1a1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.3);
`;

const Input = styled.input`
  background-color: #1a1a1a;
  border: none;
  border-bottom: 1px solid #555;
  outline: none;
  color: #fff;
  padding: 5px;
  width: 200px;
  font-size: 16px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #555;
  border: none;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #666;
  }
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 30px;
`;

const RegisterText = styled.p`
  white-space: pre-line;
`;

const RegisterNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: bold;
`;

export function Login() {
  return (
    <>
      <Container>
        <LoginContainer>
          <Title>Login</Title>
          <Input type="text" placeholder="ID" />
          <Input type="password" placeholder="Password" />
          <Button>Login</Button>
          <RegisterText>
            <p>
              Do you wanna hang out with us?
              <br /> Then, &nbsp;
              <RegisterNavLink to="/universe/register">
                Join us!
              </RegisterNavLink>
            </p>
          </RegisterText>
        </LoginContainer>
      </Container>
    </>
  );
}
