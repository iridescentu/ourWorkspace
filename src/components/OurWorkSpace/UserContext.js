import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [targetId, setTargetId] = useState(null);
  // const updateUser = (userData) => {
  //   setUser(userData);
  // };
  const updateUser = (newUser) => {
    setUser(newUser);
  };
  const updateTargetId = (newTargetId) => {
    setTargetId(newTargetId);
  };
  // const updateTargetId = (id) => {
  //   setTargetId(id);
  // };

  //   const isLoggedIn = () => {
  //     return !!user; // 사용자 정보가 존재하면 로그인된 것으로 간주
  //   };

  useEffect(() => {
    console.log("UserContext");
    const storedUserData = JSON.parse(localStorage.getItem("loginUserData"));
    if (storedUserData) {
      updateUser(storedUserData);
    }
  }, []);
  console.log(children); // children props 로그 출력
  return (
    <UserContext.Provider
      value={{ user, setUser, targetId, updateUser, updateTargetId }}
    >
      {children}
      {/* <div>I am a test component inside UserProvider</div> */}
      {/* // 임시 컴포넌트 추가 */}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext); // useContext 훅을 호출해서 UserContext의 값을 가져옵니다.
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
