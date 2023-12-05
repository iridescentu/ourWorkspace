import { styled, keyframes } from "styled-components";
import Earth from "./IconImage/Earth.png";
import Sun from "./IconImage/Sun.png";
import Mercury from "./IconImage/Mercury.png";
import Venus from "./IconImage/Venus.png";
import Mars from "./IconImage/Mars.png";
import Jupiter from "./IconImage/Jupiter.png";
import Saturn from "./IconImage/Saturn.png";
import Uranus from "./IconImage/Uranus.png";
import Rocket from "./IconImage/Rocket.png";
import BlueAlien from "./IconImage/Alien1.png";
import YellowAlien from "./IconImage/Alien2.png";
import GreenAlien from "./IconImage/Alien3.png";
import RedAlien from "./IconImage/Alien4.png";
import Meteor from "./IconImage/Meteor.png";
import Explosion from "./IconImage/Explosion.png";
import BlackHole from "./IconImage/BlackHole.png";
import { useState } from "react";
import { saveContent } from "./api";
import { useParams } from "react-router-dom";
import { useUser } from "./UserContext";
const SignalBtnAnimation = keyframes`
  0%{
    border: 2px solid red;
  }
  50%{
    border: 2px solid green;
  }
  100%{
    border: 2px solid blue;
  }
`;
const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 90px);
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  font-family: "Silkscreen";
  justify-content: center; /* 추가된 부분 */
  align-items: center;
  text-align: center;
  & h1 {
    font-size: 2.5rem;
  }
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
const PlanetContainer = styled.div`
  width: 55%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  background-color: transparent;
`;

const Planets = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border-radius: 5%;
    animation: ${SignalBtnAnimation} 1s linear infinite alternate;
    cursor: pointer;
  }
`;
const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;
const SignalForm = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 auto;
`;
const SignalIcon = styled.div`
  width: 100px;
  height: 100px;
  border: 2px dotted gray;
  position: absolute;
  left: 2.5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignalNicknameContainer = styled.div`
  width: auto;
  height: 50px;
  position: absolute;
  left: 11%;
  top: 0;
  color: black;
  display: flex;
  align-items: center;
`;

const SignalTo = styled.h2``;
const SignalNickname = styled.h2`
  font-weight: bold;
  display: inline;
`;

const SignalTextarea = styled.textarea`
  /* SignalForm width - gap - BtnWidth */
  width: 100%;
  height: 20vh;
  box-sizing: border-box; /* 내용이 박스 안쪽에 위치하도록 설정 */
  resize: none; /* 사용자 크기 조절 비활성화 */
  padding: 60px 30px 20px 170px;
  font-size: 16px; /* 글꼴 크기 설정 */
  vertical-align: top; /* 텍스트를 상단으로 정렬합니다. */
  background-color: #ddd;
`;

const SignalBtn = styled.button`
  font-family: "Silkscreen";
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  color: white;
  animation: ${SignalBtnAnimation} 3s linear infinite alternate;
`;

export function Signal() {
  const { targetId } = useParams();
  const [selectIcon, setSelectIcon] = useState();
  const [userNickName, setUserNickName] = useState("");
  console.log("Current value of targetId:", targetId);
  const handleIconClick = (src) => {
    setSelectIcon(src);
  };

  const handleSignalButtonClick = () => {
    console.log("handleSignalButtonClick called ");
    const content = {
      icon: selectIcon,
      targetId: targetId,
    };

    saveContent(content)
      .then((response) => {
        console.log("Content save successfully: ", response);
      })
      .catch((error) => {
        console.error("Error saving content: ", error);
      });
  };

  return (
    <>
      <Container>
        <FilterOverlay />
        <h1>Choose your Planets</h1>
        <PlanetContainer>
          <Planets>
            <Img
              onClick={() =>
                handleIconClick(
                  "https://lh3.googleusercontent.com/pw/ADCreHcS6_NS1X17kkWPwWOuYMNJmu43DJhqYpINv79KZ0m7mqNht0hAEUuFJLNWY--dpj8Z3KW5KgXEAE3O0ihISzx0IZoO4Opjy4rCKR6rbViYV3imn9WBlPbfSID8JQudzSjCdx5oWUYMJtu8pPcbJhYg3A=w159-h154-s-no-gm?authuser=0"
                )
              }
              src={Earth}
              alt="EarthIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() =>
                handleIconClick(
                  "https://lh3.googleusercontent.com/pw/ADCreHenrljRDSWnY9t6OAoJjZf5I5r3bnIG7arJCcCjNM_Naz7HBcGaPMU0c0InlQj-Sc-SZywC3xpLeJUOyjWiY_VWWwQKX8Y344jNgUVctUbq_mu22NNanON5hecN6Oj7_5CBiRUJbfTaWf41A02xCD4Ahg=w175-h171-s-no-gm?authuser=0"
                )
              }
              src={Sun}
              alt="SunIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() =>
                handleIconClick(
                  "https://lh3.googleusercontent.com/pw/ADCreHfYcx6llHKSJ82EAx9SDZQM2wLMtuymwP7rqcEEozWkGBqPIBxdVDnIu61dMErjzR1t6M8bnPs3M51iRQZYnXe_8djEps5TrxwR5B9dfV507pozKz9rGdyfbpP-eyDrHISvkLyhYmynb6RzT-yZjYmNlg=w164-h153-s-no-gm?authuser=0"
                )
              }
              src={Mercury}
              alt="MercuryIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() =>
                handleIconClick(
                  "https://lh3.googleusercontent.com/pw/ADCreHfJRZohLgah0dPLgpC5BbphgMnLgl7Jqnnzt_Je3ZiOMutKZREWoqhFk15AyFdSOrDVzCUHfHvhyEezvQFvHW_5ayrjnWIYY0Sttoqh2tD5TczXiNvFIwMIAk_cq3lA_ix3RYSZ5JBWWIuCyKWXterC2g=w171-h177-s-no-gm?authuser=0"
                )
              }
              src={Venus}
              alt="VenusIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() =>
                handleIconClick(
                  "https://lh3.googleusercontent.com/pw/ADCreHfHnCB8fvs6ss13aMI1pqn8yAHTiThPjp38-8XVapdFOcFOSe8xPT_WnxcqMy6d0rmKiyRbpp8tfHmj6wTm9xwfN2WIFXutZ9JNR8IAAH0EDiCjD7EE8FLP0Z_aU7HlNzvaWJO945CT1RiDMXg_kTYREA=w117-h123-s-no-gm?authuser=0"
                )
              }
              src={Mars}
              alt="MarsIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() =>
                handleIconClick(
                  "https://lh3.googleusercontent.com/pw/ADCreHeJPjP0r3cbg_LTYa3GSZYjhHaCrAm_kgOQZbQR6J_uQfrF9D6RW6cFhllLL2eqEWaYbpp2xlcj0Q9xVi7Stt4vk1ypM8iaSpM_qyIx1fOPVcXAjX_kPWe_czxO8h8bwa9mBnHTFFt0u0w4KedfBckhYQ=w176-h159-s-no-gm?authuser=0"
                )
              }
              src={Jupiter}
              alt="JupiterIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() =>
                handleIconClick(
                  "https://lh3.googleusercontent.com/pw/ADCreHfWZROkH0xhoqdxnZ4Ts27sTR_z_uipqFhxIHoirT13NI5n1UnXomHIcElehqjRA9_PYhQfY--831T19QgPG-Sb8PLLOceIVDHhz3NRf7cPumormRicMeuH4WWdMAN7qeKSyZwCuw04QMACjfT4JTb3Zg=w304-h162-s-no-gm?authuser=0"
                )
              }
              src={Saturn}
              alt="SaturnIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() =>
                handleIconClick(
                  "https://lh3.googleusercontent.com/pw/ADCreHeUl7a4mhqqiyzS1Kq9TQZ9wuL69V9WwKK-2wpsyEUxqX-W0aC8ASAWLDRc6Fb9FS6ty0oGRUekn4LpI2GHv2ruRyeaHPCyENfyV9kllbXEFvuDkWEUpZqA1GFhQWs8hG31mi_4ZRdtnTtbIonQmEALvw=w224-h181-s-no-gm?authuser=0"
                )
              }
              src={Uranus}
              alt="UranusIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() =>
                handleIconClick(
                  "https://lh3.googleusercontent.com/pw/ADCreHdxeVVzMMzU4Vt9rdemIpUrUf3oLiTXcf57H1-0IdSjLCmtYtbI2LZeVMDpCfUeAwcNJaRTR66h264Q155aqBrAnv2Dfi2Gqjb1a9QCY7ojqYilFB4AV_uwmJUmtfbrpry6XCvoMmnvYOnmFdmR0zIpyA=w194-h199-s-no-gm?authuser=0"
                )
              }
              src={Rocket}
              alt="RocketIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() =>
                handleIconClick(
                  "https://lh3.googleusercontent.com/pw/ADCreHd3p2Ys-fXkXglPCVjOHhgzo5AHtNIRIsuuWkzIjFxk45qLTbs19zdeQlM6P1jlLkDrYF0lUnMHK5YzCTGEPLbWR2EoOfnxoGNwuhrNHWcT4LE8hr4ZhJkhiLwzzrJ-Qfh3Ct_8C3tEE_8RE63o7cs3ww=w112-h114-s-no-gm?authuser=0"
                )
              }
              src={BlueAlien}
              alt="BlueAlienIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() =>
                handleIconClick(
                  "https://lh3.googleusercontent.com/pw/ADCreHfaMlqMbFYzXjtQdaFk0yxi89CgvX_pP0cxHC2swKgQlodbs5vCZqCBPYZeW4z6DQwfCINEljFxfuieXfm6XfvydZiki0x62C-JIdyryNLPr4LJVkD_qIcqrZhcClWhiMyQAp2dZ1hdIarm7Wq6QiEXVw=w107-h109-s-no-gm?authuser=0"
                )
              }
              src={YellowAlien}
              alt="YellowAlienIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() =>
                handleIconClick(
                  "https://lh3.googleusercontent.com/pw/ADCreHeYjIsizycXQ98o9F1O_4rAdeA1wCX7U3IeGTfJTqt2B8B6pOrFq8EZ0-Gjd12bx8Xipf5ADs3-VRot-nAsi2WbO5_gVIXZ1Es02psAoXLjTCVHur_TXM1iBP41H4WiSVLFa4JRs5kBOVljD4fN8kwJDw=w116-h112-s-no-gm?authuser=0"
                )
              }
              src={GreenAlien}
              alt="GreenAlienIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() =>
                handleIconClick(
                  "https://lh3.googleusercontent.com/pw/ADCreHevV1KY9KWnzUE0_1vO2skxEGSm9TnkbEHyHi5hxj9X0sVhdEcFpzDRXKtDKY1jGMBMaR1gV-y3ZyouL0rZ2sIMuIv7Vw8jtt58fNuZlmbI-gVDF0uKnYZWFvsyEdzCynXCqZsD6W5ytsrzmzf4_JSJHQ=w112-h104-s-no-gm?authuser=0"
                )
              }
              src={RedAlien}
              alt="RedAlienIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() =>
                handleIconClick(
                  "https://lh3.googleusercontent.com/pw/ADCreHfYww6D2riNwPmaleXVWRzTbuM94t4-JAzCnDSQkFjCSyNtiKOlV0dLYmMpKtQyLmf-VF_PUK_3QcJmz0Wer9sq1pF225aD59XlV4N9XV_0WYBPS_Umh6CmXKcXCMvXdkhSwAOtMS1qPUpUu4d13m8uRA=w122-h113-s-no-gm?authuser=0"
                )
              }
              src={Meteor}
              alt="MeteorIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() =>
                handleIconClick(
                  "https://lh3.googleusercontent.com/pw/ADCreHfwA__GSctJv5Bex0e-dkDt4ozWg8k6Dnrqnu9lVmlaX5kAewNkNcmNYfKAFMTePGFJQaYWirdkhLl6OOGFy4DJ5XDU_Oz7EqGv8vgE3qFc_WxFQqTtaUwlV8tYLPcYtQb-QP_mtNr_H_2J41TSI3fyZw=w155-h152-s-no-gm?authuser=0"
                )
              }
              src={Explosion}
              alt="ExplosionIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() =>
                handleIconClick(
                  "https://lh3.googleusercontent.com/pw/ADCreHdJp8_lRmiZHvOPllChb__3grXcMmoQIClzpLEmQHZPBSRcVLqLO8VkRyQmkzMpEGlnM0WRS8SLCbP9DZw20wv2uGb72qgZnF73NABrPKi9wNhzg2FAfgggFEl6VXahmIBZ-tHwmLrafoqkmDXyQiwK1w=w123-h116-s-no-gm?authuser=0"
                )
              }
              src={BlackHole}
              alt="BlackHoleIcon"
            />
          </Planets>
        </PlanetContainer>
        <h1>Send a signal</h1>
        <SignalForm>
          <SignalIcon>
            <Img src={selectIcon} />
          </SignalIcon>
          <SignalNicknameContainer>
            <SignalTo>
              To.&nbsp;<SignalNickname>{targetId}</SignalNickname>
            </SignalTo>
          </SignalNicknameContainer>
          <SignalTextarea
            type="text"
            name="signal"
            placeholder="Type a signal..."
          />
        </SignalForm>
        <SignalBtn onClick={handleSignalButtonClick}>Send A Signal!</SignalBtn>
      </Container>
    </>
  );
}
