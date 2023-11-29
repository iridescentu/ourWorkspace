import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 추가

const Container = styled.div`
  width: 100%;
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

// const RadioBox = styled.div`
//   display: flex;
//   gap: 1rem;
// `;

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

export function Register() {
  // email domain 직접 입력 또는 자동 완성
  // const [selectedDomain, setSelectedDomain] = useState("");
  // const [inputValue, setInputValue] = useState("");
  // const handleDomainChange = (e) => {
  //   const value = e.target.value;
  //   setSelectedDomain(value);
  //   if (value !== "type") {
  //     setInputValue(value);
  //   } else {
  //     setInputValue("");
  //   }
  // };
  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  //   setSelectedDomain("type");
  // };
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
  const handleSubmit = (e) => {
    e.preventDefault();
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
        } else {
          // 회원가입 실패 시 처리
          console.error("회원가입 실패:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
              <Label>Gender</Label>
              {/* <RadioBox> */}
              {/* <Label className="radioLabel">Woman</Label> */}
              <Label>
                <Input
                  className="genderInput"
                  type="radio"
                  name="gender"
                  value="WOMAN" // 수정: 문자열 값으로 설정
                  checked={gender === "WOMAN"}
                  onChange={handleChange}
                />
                <span>Woman</span>
              </Label>
              {/* <Input
                // className="genderInput"
                type="text"
                name="gender"
                value={gender}
                onChange={handleChange}
                placeholder="Enter MAN or WOMAN"
                 /> */}
              {/* <Label className="radioLabel">Man</Label> */}
              <Label>
                <Input
                  className="genderInput"
                  type="radio"
                  name="gender"
                  value="MAN" // 수정: 문자열 값으로 설정
                  checked={gender === "MAN"}
                  onChange={handleChange}
                />
                <span>Man</span>
              </Label>
              {/* </RadioBox> */}
            </InnerRowBox>
          </NameAndGenderBox>
          <Box>
            <Label>Birth</Label>
            <Input
              type="text"
              name="birthDate"
              value={birthDate}
              onChange={handleChange}
              placeholder="ex) 1999-01-01"
            />
          </Box>
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
          <Box>
            <Label>E-mail</Label>{" "}
            <Input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your e-mail"
            />
          </Box>
          <SignupBtn type="submit" onClick={handleSubmit}>
            Sign up
          </SignupBtn>
        </RegisterContainer>
      </Container>
    </>
  );
}
