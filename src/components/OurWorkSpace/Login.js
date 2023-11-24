import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { login } from "./api";
import { Icon } from "@iconify/react";

// const Container = styled.div`
//   width: 100vw;
//   height: calc(100vh - 90px);
//   background-color: black;
//   color: white;
// `;

// const Row = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   height: 100vh;
//   background-color: navy;
// `;

// const Col = styled.div``;

// export function Login() {
//   return (
//     <Container>
//       <h1>Login</h1>
//       <Row></Row>
//       <Col></Col>
//     </Container>
//   );
// }

// const LoginForm = styled.form`
//  display: flex;
//  flex-direction: column;
//  align-items: center;
//  justify-content: center;
//  width: 100%;
//  height: 100%;
// `;

// const Input = styled.input`
//  width: 100%;
//  padding: 10px;
//  margin: 5px 0;
//  border: 1px solid #ccc;
//  border-radius: 4px;
//  outline: none;
// `;

// const Button = styled.button`
//  width: 100%;
//  padding: 10px;
//  margin: 5px 0;
//  background-color: #007bff;
//  color: white;
//  border: none;
//  border-radius: 4px;
//  cursor: pointer;
// `;

// export function Login () {
//  return (
//     <LoginForm>
//       <Input type="text" placeholder="Username" />
//       <Input type="password" placeholder="Password" />
//       <Input type="email" placeholder="Email" />
//       <Button type="submit">SIGN UP</Button>
//     </LoginForm>
//  );
// };

// const Container = styled.div`
//   width: 100vw;
//   height: calc(100vh - 90px);
//   background-color: black;
//   color: white;
// `;

// const Row = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   height: 100vh;
//   background-color: navy;
// `;

// const Col = styled.div``;

// const Form = styled.form`
//   /* ... form styles */
// `;

// const Button = styled.button`
//   position: relative;
//   padding: 8px 16px;
//   background-color: navy;
//   border: none;
//   color: white;
//   font-size: 14px;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   &:before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: blue;
//     border-radius: 50px;
//     z-index: -1;
//     transition: all 0.3s ease;
//   }

//   &:hover {
//     color: blue;

//     &:before {
//       background-color: white;
//     }
//   }
// `;

// export function Login() {
//   const [isLogin, setIsLogin] = useState(true);

//   const toggle = () => {
//     setIsLogin(!isLogin);
//   };

//   const [user, setUser] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // ... handle form submission logic
//   };

//   const Login = () => {
//     return <Form>{/* ... login input fields */}</Form>;
//   };

//   const Signup = () => {
//     return <Form>{/* ... signup input fields */}</Form>;
//   };

//   return (
//     <Container>
//       <h2>{isLogin ? "Login" : "Signup"}</h2>
//       <Button onClick={toggle}>
//         {isLogin ? "Switch to Signup" : "Switch to Login"}
//       </Button>
//       {isLogin ? <Login /> : <Signup />}
//     </Container>
//   );
// }

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 90px);
  background-color: black;
  color: white;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 40vw;
  height: 50vh;
  background-color: navy;
  border-radius: 10px;
`;

const Col = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin-top: 100px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: black;
  font-size: 14px;
  width: 100%;
`;

const Button = styled.button`
  position: relative;
  padding: 8px 16px;
  background-color: navy;
  border: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: blue;
    border-radius: 50px;
    z-index: -1;
    transition: all 0.3s ease;
  }

  &:hover {
    color: blue;

    &:before {
      background-color: white;
    }
  }
`;

export function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggle = () => {
    setIsLogin(!isLogin);
  };

  const [user, setUser] = useState({
    ID: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ... handle form submission logic
  };

  const LoginForm = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="ID"
          value={user.fullName}
          onChange={handleChange}
          placeholder="ID"
        />
        <Input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <Button type="submit">Log In</Button>
      </Form>
    );
  };

  const SignupForm = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="fullName"
          value={user.fullName}
          onChange={handleChange}
          placeholder="Your Full Name"
        />
        <Input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Your Email"
        />
        <Input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Your Password"
        />
        <Button type="submit">Sign Up</Button>
      </Form>
    );
  };

  return (
    <Container>
      <LoginBox>
        <Col>
          <p onClick={toggle}>
            {isLogin ? "Switch to Signup" : "Switch to Login"}
          </p>
          {isLogin ? <LoginForm /> : <SignupForm />}
        </Col>
      </LoginBox>
    </Container>
  );
}
