import styled from "styled-components";
import MyDatePicker from "./DatePicker";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  /* NavBar 60px UniverseWindow 30px */
  height: calc(100vh - 90px);
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
    /* grid-template-columns: 1fr 1fr; */
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
`;
const LoginBtn = styled.button``;
const LoginInfo = styled.p``;
const SignUpButton = styled.button``;
const StyledIcon = styled(Icon)`
  width: 30px;
  height: 30px;
`;

export function Register() {
  // 출생연월일 선택
  const years = [];
  const months = [];
  const days = [];
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= 1923; year--) {
    years.push(
      <option key={year} value={year}>
        {year}
      </option>
    );
  }
  for (let month = 1; month <= 12; month++) {
    months.push(
      <option key={month} value={month}>
        {month}
      </option>
    );
  }
  for (let day = 1; day <= 31; day++) {
    days.push(
      <option key={day} value={day}>
        {day}
      </option>
    );
  }

  // email domain 직접 입력 또는 자동 완성
  const [selectedDomain, setSelectedDomain] = useState("");
  const [inputValue, setInputValue] = useState("");
  const handleDomainChange = (e) => {
    const value = e.target.value;
    setSelectedDomain(value);
    if (value !== "type") {
      setInputValue(value);
    } else {
      setInputValue("");
    }
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setSelectedDomain("type");
  };

  // Password 보이거나 안보이게
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Container>
        <MyDatePicker />
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
            {/* 생년월일 입력 */}
            <label>Birthdate</label>
            <div>
              <select>
                <option disabled selected>
                  출생 연도
                </option>
                {years.map((year) => (
                  <option>{year}</option>
                ))}
              </select>
              <select>
                <option disabled selected>
                  월
                </option>
                {months.map((month) => (
                  <option>{month}</option>
                ))}
              </select>
              <select>
                <option disabled selected>
                  일
                </option>
                {days.map((day) => (
                  <option>{day}</option>
                ))}
              </select>
            </div>
            {/* 이메일 입력 */}
            <label>E-mail</label>
            <div>
              <input type="text" placeholder="이메일 입력" />
              <input
                type="text"
                placeholder="domain select"
                value={inputValue}
                onChange={handleInputChange}
              />
              <select value={selectedDomain} onChange={handleDomainChange}>
                <option value={"type"}>직접 입력</option>
                <option className="domainList" value={"naver.com"}>
                  naver.com
                </option>
                <option className="domainList" value={"google.com"}>
                  google.com
                </option>
                <option className="domainList" value={"nate.com"}>
                  nate.com
                </option>
                <option className="domainList" value={"kakao.com"}>
                  kakao.com
                </option>
              </select>
            </div>
            {/* 닉네임 입력 */}
            <label>Nickname</label>
            <input type="text" />
            {/* ID 입력 */}
            <label>ID</label>
            <input type="text" placeholder="Enter your Id." />
            {/* Password 입력 */}
            <label>
              Password
              {/* input 태그 안에 아이콘 넣기 */}
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
              placeholder="Enter your password."
            />
          </form>
          <LoginBtn type="submit">Sign up</LoginBtn>
        </RegisterBox>
      </Container>
    </>
  );
}
