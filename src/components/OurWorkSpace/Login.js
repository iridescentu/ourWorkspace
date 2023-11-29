import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { login } from "./api";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { getAllContent } from "./api";

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

//{ setLogin }
export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  // const [loginId, setLoginId] = useState("");
  // const [password, setPassword] = useState("");
  // const [userLogin, setUserLogin] = useState(null);
  // const [loggingIn, setLoggingIn] = useState(false);
  // const { loginState, setLoginState } = useContext(contentsContext);
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
        loginId: user.loginId, // 'userId'를 'loginId'로 변경
        password: user.Password,
      };

      // 로그인 처리 로직
      const userData = await login(memberLoginDto);

      if (
        userData &&
        userData.resultCode === "SUCCESS" &&
        userData.data &&
        userData.data.targetId
      ) {
        const targetId = userData.data.targetId;

        // 여기서 getAllContent 함수를 호출하여 컨텐츠를 받아옵니다.
        const contentData = await getAllContent(targetId);

        // 받아온 컨텐츠를 state에 저장하거나 필요한 작업을 수행합니다.
        console.log("Content Data:", contentData);

        // 예: 사용자를 홈 페이지로 리다이렉트
        navigate(`/universe/${targetId}`);
      } else {
        // 로그인 실패 시 처리
        console.error("로그인 실패:", userData.message);
      }
      // 예외 발생 시 전체 에러 객체를 출력
    } catch (error) {
      console.error("에러:", error);
    }
  };

  //     // 로그인 처리 로직
  //     const userData = await login(memberLoginDto);
  //     // const userData = await loginId(memberLoginDto);
  //     console.log(userData);
  //     if (userData && userData.data && userData.data.targetId) {
  //       const targetId = userData.data.targetId;
  //       navigate(`/universe/${targetId}`);
  //     } else {
  //       // 로그인에 성공했지만 유효한 targetId가 없는 경우
  //       console.error("로그인 성공, but 유효한 targetId가 없음");
  //       // 또는 다른 처리 로직 추가
  //     }
  //     // userData에서 필요한 정보 추출
  //     const targetId = userData.targetId; // 예시: 실제 반환되는 데이터 구조에 따라 수정

  //     // 로그인 성공 시 로그인 상태를 true로 변경
  //     // setLogin(true);
  //     // 예: 사용자를 홈 페이지로 리다이렉트
  //     navigate(`/universe/${targetId}`);
  //   } catch (error) {
  //     // 로그인 실패 시 처리 로직
  //     // 예: 에러 메시지를 화면에 표시
  //     alert("로그인에 실패했습니다: " + error.message);
  //     console.log(error);
  //   }
  // };

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
          <Button type="submit" onClick={handleSubmit}>
            Login
          </Button>
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
