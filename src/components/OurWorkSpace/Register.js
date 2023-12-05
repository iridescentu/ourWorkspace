import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 추가

const Container = styled.div`
  width: 100%;
  /* NavBar 60px*/
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
const RegisterContainer = styled.form`
  width: 600px;
  height: 700px;
  background-color: rgba(26, 26, 26, 0.7);
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: 2fr repeat(6, 1fr) 1.5fr;
  border-radius: 5px;
  /* gap: 1.2rem; */
`;
const Title = styled.h1`
  color: #fff;
  text-align: center;
`;
const Label = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  &.radioLabel {
    font-weight: 400;
    font-size: 1rem;
  }
  &.passwordLabel {
    position: relative;
  }
`;
const Input = styled.input`
  background-color: #1a1a1a;
  border: none;
  border-bottom: 1px solid #555;
  outline: none;
  color: #fff;
  padding: 5px;
  width: 100%;
  font-size: 16px;
  &.genderInput {
    width: 15px;
  }
`;
const NameAndGenderBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;
const Box = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  align-items: center;
`;
const InnerRowBox = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  gap: 0.7rem;
`;
const StyledIcon = styled(Icon)`
  position: absolute;
  top: 2.7px;
  right: -290px;
  cursor: pointer;
`;
const SignupBtn = styled.button`
  width: 60%;
  background-color: #555;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 10px 20px;
  margin: 0 auto;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #666;
  }
`;
const GenderBox = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
`;

const NicknameP = styled.p`
  display: flex;
  position: absolute;
  top: 50%;
  left: 45.5%;
  width: 16%;
  /* background-color: red; */
  font-size: 13px;
  opacity: 0.5;
`;

const BirthP = styled.p`
  display: flex;
  position: absolute;
  top: 42%;
  left: 45.5%;
  width: 16%;
  /* background-color: red; */
  font-size: 13px;
  opacity: 0.5;
`;

const PwP = styled.p`
  display: flex;
  position: absolute;
  top: 66%;
  left: 45.5%;
  width: 16%;
  /* background-color: red; */
  font-size: 13px;
  opacity: 0.5;
`;

const EmailP = styled.p`
  display: flex;
  position: absolute;
  top: 74.5%;
  left: 45.5%;
  width: 16%;
  /* background-color: red; */
  font-size: 13px;
  opacity: 0.5;
`;

export function Register() {
  const navigate = useNavigate(); // 추가
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [nickName, setNickName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  // Password 보이거나 안보이게
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisible = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "nickName":
        setNickName(value);
        break;
      case "birthDate":
        setBirthDate(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "loginId":
        setLoginId(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 유효성 검사 - 입력 필드가 비어있는지 확인
    if (
      !name ||
      // !gender ||
      !birthDate ||
      !nickName ||
      !loginId ||
      !password ||
      !email
    ) {
      alert("모든 필드를 입력해주세요.");
      return;
    }
    // 성별 선택 여부 확인
    if (gender !== "WOMAN" && gender !== "MAN") {
      alert("성별을 선택해주세요.");
      return;
    }
    // 날짜 형식 확인 (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(birthDate)) {
      alert("유효한 날짜 형식(YYYY-MM-DD)으로 입력해주세요.");
      return;
    }

    // 닉네임 형식 확인
    const nicknameRegex = /^[a-zA-Z가-힣]{2,8}$/;
    if (!nicknameRegex.test(nickName)) {
      alert(
        "닉네임 형식이 올바르지 않습니다.\n영문 또는 한글 2~8자 이내로 입력해주세요."
      );
      return;
    }

    // 닉네임 중복 확인
    // 아이디 중복 확인

    // 비밀번호 형식 확인
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "비밀번호 형식이 올바르지 않습니다.\n영문 대소문자, 숫자, 특수문자를 모두 포함한 8~20자리로 입력해주세요."
      );
      return;
    }
    // 이메일 형식 확인
    const emailRegex = /^[^\s@]+@[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("이메일 형식이 올바르지 않습니다.\n다시 입력해주세요.");
    }

    const member = {
      name,
      gender,
      birthDate,
      email,
      nickName,
      loginId,
      password,
    };
    console.log("Submitted Member Data:", member); // 데이터가 정상적으로 전달되는지 로그로 확인
    fetch("http://localhost:8081/universe/member/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(member),
    })
      //     .then((response) => response.json())
      // .then((data) => {
      //   console.log(data); // 서버 응답 기록
      // })
      // .catch((error) => {
      //   console.error("에러:", error);
      //   setError("등록 중에 오류가 발생했습니다.");
      // });

      // .then((response) => response.json())
      // .then((data) => console.log(data))
      // .catch((error) => console.error("Error:", error));
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Server Response:", data);

        if (data.resultCode === "SUCCESS") {
          // 회원가입이 성공하면 로그인 페이지로 이동
          navigate("/universe/login");
          // 회원가입이 성공하면 알림창 표시
          alert("회원가입이 성공하였습니다!");
        } else {
          console.error("회원가입 실패:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
        <RegisterContainer onSubmit={handleSubmit}>
          <Title>Register</Title>
          <NameAndGenderBox>
            <InnerRowBox onSubmit={handleSubmit}>
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </InnerRowBox>
            <InnerRowBox onSubmit={handleSubmit}>
              <Label>Gender</Label>{" "}
              <GenderBox>
                <Label>
                  <Input
                    className="genderInput"
                    type="radio"
                    name="gender"
                    value="WOMAN" // 수정: 문자열 값으로 설정
                    checked={gender === "WOMAN"}
                    onChange={handleChange}
                  />
                  Woman
                </Label>
                <Label>
                  <Input
                    className="genderInput"
                    type="radio"
                    name="gender"
                    value="MAN" // 수정: 문자열 값으로 설정
                    checked={gender === "MAN"}
                    onChange={handleChange}
                  />
                  Man
                </Label>
              </GenderBox>
            </InnerRowBox>
          </NameAndGenderBox>
          <Box>
            <Label>Birth</Label>
            <Input
              type="text"
              name="birthDate"
              value={birthDate}
              onChange={handleChange}
              placeholder="Enter your birthdate"
            />
          </Box>
          <BirthP>ex. 1999-01-01</BirthP>
          <Box>
            <Label>Nickname</Label>
            <Input
              type="text"
              name="nickName"
              value={nickName}
              onChange={handleChange}
              placeholder="Enter your Nickname"
            />
          </Box>
          <NicknameP>
            Enter 2 to 8 characters excluding special characters
          </NicknameP>

          <Box>
            <Label>ID</Label>
            <Input
              id="loginIdInput"
              className="IdInput"
              type="text"
              name="loginId"
              value={loginId}
              onChange={handleChange}
              placeholder="Enter your ID"
            />
          </Box>
          <Box>
            <Label className="passwordLabel">
              Password
              <StyledIcon
                icon={
                  showPassword
                    ? "basil:eye-outline"
                    : "basil:eye-closed-outline"
                }
                onClick={togglePasswordVisible}
              />
            </Label>
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handleChange}
              name="password"
              placeholder="Enter yout Password"
            />
          </Box>
          <PwP>
            Enter 8 to 20 characters<br></br>Including letters, numbers, and
            special characters
          </PwP>
          <Box>
            <Label>E-mail</Label>
            <Input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your e-mail"
              onKeyPress={handleKeyPress}
            />
          </Box>
          <EmailP>ex. example@email.com</EmailP>
          <SignupBtn type="submit" onClick={handleSubmit}>
            Sign up
          </SignupBtn>
        </RegisterContainer>
      </Container>
    </>
  );
}
