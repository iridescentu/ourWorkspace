import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useState } from "react";

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
const RegisterContainer = styled.div`
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
  top: 0;
  right: -290px;
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

  // Password 보이거나 안보이게
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Container>
        <FilterOverlay />
        <RegisterContainer>
          <Title>Register</Title>
          <NameAndGenderBox>
            <InnerRowBox>
              <Label>Name</Label>
              <Input type="text" placeholder="Enter your name." />
            </InnerRowBox>
            <InnerRowBox>
              <Label>Gender</Label>
              {/* <RadioBox> */}
              {/* <Label className="radioLabel">Woman</Label> */}
              <Input
                // className="genderInput"
                type="text"
                placeholder="Enter Man or Woman."
              />
              {/* <Label className="radioLabel">Man</Label>
                <Input className="genderInput" type="radio" name="gender" /> */}
              {/* </RadioBox> */}
            </InnerRowBox>
          </NameAndGenderBox>
          <Box>
            <Label>Birth</Label>
            <Input type="text" placeholder="ex) 1999-01-01" />
          </Box>
          <Box>
            <Label>Nickname</Label>
            <Input type="text" placeholder="Enter your Nickname." />
          </Box>

          <Box>
            <Label>ID</Label>
            <Input
              className="idInput"
              type="text"
              placeholder="Enter your ID."
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
              placeholder="Enter your Password."
            />
          </Box>
          <Box>
            <Label>E-mail</Label>{" "}
            <Input type="text" placeholder="Enter your e-mail." />
          </Box>
          <SignupBtn type="submit">Sign up</SignupBtn>
        </RegisterContainer>
      </Container>
    </>
  );
}
