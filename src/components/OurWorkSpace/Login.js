import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useState, useContext } from "react";
import { login } from "./api";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { getAllContent } from "./api";
import { UserContext } from "./UserContext";

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
export function Login({ setLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const { updateUser } = useContext(UserContext);
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

    // 비밀번호 형식 검사
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    if (!passwordRegex.test(user.Password)) {
      alert(
        "비밀번호 형식이 올바르지 않습니다.\n영문 대소문자, 숫자, 특수문자를 포함한 8~20자리로 입력해주세요."
      );
      return;
    }

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
        const targetId = userData.data.loginId;
        // const loginId = userData.data.loginId; // loginId를 추출
        setUser(userData.data);
        console.log(userData.data);
        //타 컴포넌트에서 정보를 필요로 할 때 이것을 이용해서 불러오기 가능
        // localStorage에 사용자 정보 저장 등
        localStorage.setItem("loginUserData", JSON.stringify(userData.data));
        updateUser(userData.data);
        // console.log("로그인 성공, 사용자 id:", id);
        navigate(`/universe/${targetId}`);
        // console.log("로그인 성공, 사용자 id:", id);
        // const targetId = userData.data.loginId; // 사용자의 loginId를 targetId로 설정
        // navigate(`/universe/${targetId}`);
        // const targetId = userData.data.loginId; // 사용자의 loginId를 targetId로 설정
        alert("로그인이 성공되었습니다.");
      } else {
        console.error("로그인 실패:", userData.error);
        alert("아이디 또는 비밀번호가 맞지 않습니다. 다시 확인해 주세요.");
      }
    } catch (error) {
      console.error("로그인 처리 중 오류 발생:", error);
      return { error: "로그인 실패" };
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
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
            onKeyPress={handleKeyPress}
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
