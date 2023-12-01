import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { login } from "./api";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { getAllContent } from "./api";

const Container = styled.div`
  width: 100vw;
  /* NavBar 60px */
  height: calc(100vh - 60px);
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
export function Login({ setLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const [user, setUser] = useState({ loginId: "", Password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const memberLoginDto = {
        loginId: user.loginId,
        password: user.Password,
      };

      const userData = await login(memberLoginDto);
      console.log("userData:", userData);

      if (
        userData &&
        userData.resultCode === "SUCCESS" &&
        userData.data // data가 null이 아닌지 확인
      ) {
        const loginId = userData.data.loginId; // loginId를 추출

        //타 컴포넌트에서 정보를 필요로 할 때 이것을 이용해서 불러오기 가능
        // localStorage에 사용자 정보 저장 등
        localStorage.setItem("loginUserData", JSON.stringify(userData.data));
        // console.log("로그인 성공, 사용자 id:", id);
        navigate(`/universe/${loginId}`);
        // console.log("로그인 성공, 사용자 id:", id);
        // const targetId = userData.data.loginId; // 사용자의 loginId를 targetId로 설정
        // navigate(`/universe/${targetId}`);
        // const targetId = userData.data.loginId; // 사용자의 loginId를 targetId로 설정
      } else {
        console.error("로그인 실패:", userData.error);
      }
    } catch (error) {
      console.error("로그인 처리 중 오류 발생:", error);
      return { error: "로그인 실패" };
    }
  };

  return (
    <>
      <Container>
        <FilterOverlay />
        <LoginContainer>
          <Title>Login</Title>
          <Label className="idLabel">ID</Label>
          <Label className="passwordLabel">Password</Label>
          <Input
            type="text"
            placeholder="Enter your ID."
            name="loginId"
            onChange={handleChange}
          />
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your Password."
            name="Password"
            onChange={handleChange}
          />
          <StyledIcon
            icon={
              showPassword ? "basil:eye-outline" : "basil:eye-closed-outline"
            }
            onClick={togglePasswordVisible}
          />
          <Button type="submit" onClick={handleSubmit}>
            Login
          </Button>
          <RegisterText>
            <p>
              Do you wanna hang out with us?
              <br />
              <RegisterTxt>
                Then, &nbsp;
                <RegisterNavLink to="/register">Join us!</RegisterNavLink>
              </RegisterTxt>
            </p>
          </RegisterText>
        </LoginContainer>
      </Container>
    </>
  );
}
