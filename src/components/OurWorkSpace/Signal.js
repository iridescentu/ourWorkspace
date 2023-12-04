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
import Alien1 from "./IconImage/Alien1.png";
import Alien2 from "./IconImage/Alien2.png";
import Alien3 from "./IconImage/Alien3.png";
import Alien4 from "./IconImage/Alien4.png";
import Meteor from "./IconImage/Meteor.png";
import Explosion from "./IconImage/Explosion.png";
import BlackHole from "./IconImage/BlackHole.png";
import { useState } from "react";
import { saveContent } from "./api";

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
  const [selectIcon, setSelectIcon] = useState(
    "https://cdn.discordapp.com/attachments/1171639133572190338/1178963847206412309/question.png?ex=65780ea5&is=656599a5&hm=665a676f04a3d1ffa6437036e05800f2e85b5fa8c72d77a648ac668ec5ab156b&"
  );
  const handleIconClick = (src) => {
    setSelectIcon(src);
  };

  const handleSignalButtonClick = () => {
    const content = {
      icon: selectIcon,
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
                  "https://lh3.googleusercontent.com/pw/ADCreHeYncPpqRGozXBwZyDm0C9HoC9FwxrrN2-20VgV4VeZO1zFT9_qjQ6O_k93jXc7N5H4B86RV7DF7zcsOhOWxsYr9a7OPmeOt2RwY2FKq2QtzM5zE-NG8ygxabYhF0JmENv2zpbymPb3omworbSIxGiKJqrNRVbpqX-HEIaetP-5gFpuv5z0pvTDO-VcFutHRuScPlSZPV2HSAxCiJXLvi_pXAlet_eBkSq8X_puhn-t3obMjOk-FuPfAbXF0ub-N1lmMQpl1XfbqMh3C8XQRQVnjADcnMXaeFC9sA0HDlTheLEc4y1ZL9CBZMniK8iUE61lVb0kPNQkXJ_b4hG0GgmL2_SXBowdc-LSITxHNkagUoD-lCpO7emi9dbcOkSSg9UJDfcE1JbXvOxWfrRtyPU8KyQXZre4l7I4_buRBCw3K4--T-RK4QNE8rfaWmqewRwLfbFBW1b1L-y2JpDnziJqMIMxqKsGwx62debcPQm2xGj6XbdvtL83oW7o9zTlMPELLv3yALmcLomyvmitNM2ydQxRz0GTB5Xl6MHN2Gc3EbcER_sH9OcxsSstbO6hcKakNuEkaFk3aRfICSWKgFTaGmE2cSYZwNIT7l3ctMHDyE8uJVUUiYsz5bMbYxCSiBCaMpzFdrDjVUXjbtqX-AlFerRKwr7Ug9O6MAjaeLrKwsIEfBI3Pe-VLDgzrMjWoFOG9L2fxvlus70grS0xta42_Qhcvy4VU9hIJm771ygGbM8lGI8qA374p3_9dHZbHSdADVp7L5-j1oqS_-YwmPhVEVyim9TFPd-svRnnwMGKfHFQbe1rGvyryS0sVCKYoS6zFzijYBjjAj-RiQq1I6qr3g-a2Lz4Yfptkp0PtExgz7yhCjsp1RjGsr2WbP-gkOyIufU=w159-h154-no?authuser=0"
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
                  "https://lh3.googleusercontent.com/pw/ADCreHe9xeth3AckIElqmGxQPhYBJtzzZJHP_bhSizWlKUNwJ9A7tZifTTtfcXJtLtm-37SMtXQ_0JsSfVXVwrEjdcwPCpLmo_XtzolohlFdiFa3MCMIzD6QkZB7WGg66ePw2377Ny_xFsQua19nkvsMChikniFryLHms2TBDl4mstxix1CjbMTnzwuF8mCQp80ajiCon0MnyTfNCii4VpsIqAL6QVY85QOGfZnl3gRp76pluRVw3JkpgW8dRv5cphkmnrJ7y1u8mZPPAEhriA-QxZ4dqRRsO5z4YAE2wdmip8WCL45xttl6FMVDAgFYEDw-Bvqnyn8nM-8buZHHp38UQIrcUGOVFmb2dU2A0DuSdUzJqx4qIDzT6v-r3oL0ZbxCPGENHP54TJOsXL1t35r-PFwaXrua3KmKFN9KA53ZSe7MNBLP2e3-pjyNXgXpK8S-8-rJ_GwtNNg4c8wSFJWj6hrNZ_-rFXSKUMweD_vVGAYhCe6ITglSThkbD8XEu_Z-_jRyGSM5YuW1lwwUGtKVboMdUSNh_DiVuRM4vxhrCaRy6h8D-xZ2vu6KZwSBmx7FdSIsKKxVfZmurzOwpzH3BJ0WSY2yOz1dFJTyAnFj5PFUCMxClsqHRjzUqAmlT3oBr_3inqSuA_TczFrSQBltLjVeAZ6weyy3twS4JJpvm7Mqo70_rgcNpK2EcVEWcd91lCuBI-MXYrCgh9ALTSPebtj6iPzkxaI3TW3_SscvoV_cHXM6Q5AjgcnUDBJc2T2FubKFLdnM1fhfkX60OebisafV3nDywPbH57KZ2_lKbz6SJJIPacuNfyKdAwa14n-lIyg8XT3dRsS8K3gVE40YxOW7yu3fKMDSK4QwefDSmVihvCKfEb6i0iUNmjYlhVlG7dW0b5I=w175-h171-s-no-gm?authuser=0"
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
                  "https://lh3.googleusercontent.com/pw/ADCreHdIwpQ7AHSj5jZe3ci-PV1Vfth8c_u1DITPluTEstGanjBX5Tg_XYM2R_0TldKK8rDz-5htagNsn9ywm3-ZGrsGDULGaio0PsemlC11naxnaNI6GNHYEZmtyuTZBBEBZE4AchezeDCB7ekQXWF5O9_NqMwFO0f88Z_OXeu_S8eeqWm5nVeEPdyygMzsFdh8ompWzhqfnWd8SEg48_IzSRH_fsLij_4icsnYNzK1GnSIdrw2Dlf1dVMMk7MfFMpPEmhUu-XaLFgke7bP11bUGG0jD1ZP6OBdUs5Ux2-kNdHyksf-b7tlT9SnkIiGsS6k1AaciaoafjHxbDvirHL4mbd4aH4W5F32g-HZKpje_MeuFdMVxR_LtFSmUj1eZMigL_Vq6kwbyA23yO4WS3jMxfA3mb4J_VZOkn9iIMRhLvFtVh3nJW_ukdjRQT3MV9caPlHTj3fXFUcRtIXDbt_UtFoI-em-RRZWNUDDdxR7tT_oqOgON2qHWXy5_voKVBTKiy__JJAI7YEfGarOd2tziMHb05naW4V7drpOhxo6FtKfNA7KgUhbifVMj2oMp3182-ruqPX89N459YAfRKRP65jS4IYMKE32dfIZaVlk6THRT7tqy7n6_Kk_r-MAGcMwSFoNslkALbTTj-y6FUwwzd-zYkkNgvNJS01XW1PbxjUqSbMCdCA0GF3Hz0tf3vbqF21OwBMdY_Mr-Is0LPw84Ey-Jz1dR8d8fuFuYkStQcVLMxqzkfnxi66HwYN8to7UEXvfzu9FzW8dLXtZ_Bmg0iCY2yiOziJc-K6UOLeCYjPkNjBicPr9KaoJ5DSSyT5raoMCtZ2rQjTbQ_DEBMxkhNXSeQ4bLTtczVWS9kQ8Elsj04jjeDzDRi2r5AQk-gh9KQfH1dc=w164-h153-s-no-gm?authuser=0"
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
                  "https://lh3.googleusercontent.com/pw/ADCreHdedjY635unZ6IMuOAKMsSI5YEwBji7BcZwGuEcaNhdzBH_E1NKinlcY8CwBBV0WKDLjFahrpe0OU8ZJs1D0Ceir8zG5fkmyLj5oodILJw7Xt_dEWXux8oCEpmXu4uf2mwRozihPTpK6ESSZ1TSgSM2jJvLpNCAODOCrnYPbndU3d8WumGma6HR8sGfnN6FyCKy1KXu1WuPhJrYibcoV2hR6TS2zTzHOvzZFznACQ7DRgos3LmLfPMP_y6vV9L6OU5oGDYEZvneAw3BO6aKZbEHrzf7zWCzQNhQWa-EDIjqhS7ufbdaB0Q1kHL5wUkHLROmD2i1SDTKvTdggRA2R41ZmFt3_pJYGUvaN18sPOunQzPq1-WWE-MqdPZSu3WzYw52k1PhhQJPf5jxbtSD8Dg0UpIjOHt2JaTpxHjuko0kvXsDywnCYwOA5P-T8iZbbL0qyFefWKmGShAcFDw6I4oWUGhVcGLcD2bXS_Uu6v1_Rtk6g6Dj0FtVY5trPF0C5UrX2lWcYOj9S-f-EHoJTqz7Nm2fBa7D5CjI4YFEDwXmyEI0VOWno8NzVT2NbLTakhNFLFtp_ZWB9JQ2J84aTx7yRo0knpcw02jDuhe4gh9UDzvbeugE4YO73fT3k0dbf4krzsHNVXf8HA3I_EYOSd3Q6JG44Efa0d0RTD3wpyPe9cA0lDRgusmjWytTuQJlSJvKwPojP3D08LaqFu12Wi0Tk4Z1Uowxz4KfWgkc4WCKyLWG8WJjxqCHcg9vxaXi7o7IclzKKGb_r1UwnBHyv7ZZvBgShU_P6NMTnxp5mtFhdpCDO7bkiNJkj8MIAg24Yoxw1jtmnKgqYJuNoqUuogboSxlIaI0li3GbQSiY_0N0dThoUGSrbVJP4_nb2CiQSbwWBrY=w171-h177-s-no-gm?authuser=0"
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
                  "https://lh3.googleusercontent.com/pw/ADCreHfq2Hz2AAejKgvziAcnmzyjAEga5j0W45D1RbVALuIcN8VblxhA5JJwtYXIPJaM8PyBNAzZtd3fzaKsA3SjdnKnYwjliFmpUjn8aihpkJR7Wc9-KSsJlhKaePnFBmEvhN3ansPWNjUDjHy1_R-B8Q67jG86ETNJWgfg-CJ_fQ4OKLpCCz7GBflWqSByrtEnqlK5ZvRq0lBTgMk1u-wM4Oypz1PxtS7Rxei6guoaGvz8OGvbVxVcmP30YIninCSPaGMsI_77Gk6X45Zat5wlTaSH4rHwg2IVlUeTJZ7XUeb7O--ZzFO--d08mRJ6mNtOnopDXsupE1gY8_2Yv2teciX4ZjbF3zJPuJwAw93nYnc4KBSijBDxNMxyYDA5SuTkwD1lrwmO2omVuhrHhfiM3N3cPDle8sQABCt7qW6Uvq7OOUqtScy2ecbW2yBPnunc8BwNvzvl0JbIZiOQrOIfRuMfDy612pLO91knS_26F04aFGhNo_fYFcWWLdYg2OiWg6Hm87iyXiV7YnEMNK1P6YuA7pjROfWo6l_POCBNRukJGK6y9cNhnAB_TtaOzwRlcfcnliKqSykmHTkhAuaBOLu6sLJZUhUJzG4lOS9BGmyPQIW_O46kn8qry1eDThFgZQpkrNQulRo1l7HbJFFpqkkD20vSYCloXiMezEawrdmFtyBBDMC-gq-Wz-u198MaZp_JqlWskRS8Y7ujOzhGNHClLMt1lVh04WYnKllQyn_CWzw11rR5kLqvj6IyAP-7T76KX2C0YvZEx1_KeFPSnTtDMVeVznIbam3oHD9suSY2YhQvXbjjDqpNGxNidGbdfPc6RuMhDBWS0s-9MqC88joGi6tvcEirJeDIT8tyR9uD3gDNMid6YO3YODPHUjzAt5xKAfQ=w117-h123-s-no-gm?authuser=0"
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
                  "https://lh3.googleusercontent.com/pw/ADCreHc28GjLYWWmByNqWgceSpXsfhn4xafIL27aIVgwC0AlroZY47TyhZrP7WKnAxC9aVua_dn68a_Rg8gXbiNPtyAdSJP9Bvzm0wbMMBL82JJNQ-B1IeDLvzrZLe45DxOZpfDQ0XpAn207RVoyOxhPDFajKtRqVieyMgxmx0tOL6DXBc0IZQbAexTzDGTWl5TYq5gFsy0D4kLZEKxKkIbXvMhp7uXG7LwoEBCKes6vWYbk9vlJUiuotfwDiP28G-jSs7a3Ups7cPM9ojDVDcRjnK4Izcul0B1OAxByWtlcNHvG37bUgL5rUP_9dlxNKBeIaS5SfrBs8mG2DAVH7sUmybDg-sx4J1Qk8DULTvCWm6bDHGniSflpt_QtW5TGLtF6LOzAltIyzRtqzK48V2YUAArG2utfwL_UQ-uILwHOoOXI6S-e2kgJut8zXCK_p3t_rmKmzPVDG-U8kZ3mxSQA9M_-kULTsxLLvx84L_LQUnf-K3j9T06zS_xgF48_ntjAwZ7lOrD18QzsgaFExSxPcDaKBRBCqv-8RQzxtJwJicqCyP2xYeDQ2Oo553w4D__h6hR7-Kk1mFMQVuBrdpQ9tm8ce4PfSjFEklSKNGCPqasRMX1-Qe6nraZNNUCKTxQiaUzH-Y8ugAROf2IDVTelF8MvgJMHvhzY11Z7aJFfwMeLa_4ZIGxsh8yNiMcuXktoANQDqMl0FQ_JCAHRLWvCWv3rkWNe19ox5siRyKx69EZoVk8aXMokEYRHn4Jsi0P_Da__8fzaKHIt_D1k9Qek7EAkSc7mYI_X22bccAsDOHIwFGH7YkEcTvvYCqfaosGsPUW_ICQufKohYmSRCwRcvbxRFBppD3P3j19EZUJxAoEiG_TyEomFAfjrKYVVEncIYM63y2A=w176-h159-s-no-gm?authuser=0"
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
                  "https://lh3.googleusercontent.com/pw/ADCreHeaPKqpIKSLrrJg9bQj7hc3nECeiUTQmvyU3U5GJyqDT9Q3RDt7ypcB6dGYz366v7LgsytrwrIf9lbhIwGhADlS0iTbuD1ODUmp2s2eaP9y6E-S0nOtjXKFtjOSQ5ZdTKnkNo5IaB9HrqqOYqJ2Nq8VA4UkpOupn-vuC5WZOtkFuo8rkcdycPOQtvbqbUALNqbAgBOea_6fhVCeP2c7S7qaUeGDhYaCPQ7lSeHElFe3DMmXBIcewi1GSyHH-zObnnc7LFl41rH-zy6Jsd8RpClVM-3NxP9ADUjaKpnnT5cKBe5oUe_euLlQqM0LW_RJ90e9VUW2IqqNQm_GDzNduXF3KlMGk-VKue_ABuIItUKJ9OBfu4hsca76EKxnZ5jtOdLAuspBE4DSgta2uhQNHpNVgrWPoxQ70oU4J8Ak6oXzZapQ_U2osGxwppRwFg0q0btMrfQXXTs87JQWr5ogCyTOQc_Vjqvm7YZVQ1gdCVFfPjf5MjypzVATA7pq6l_gl8J2kqSeIz9t5EDuvfjhnH_iuuHN9ljHVMYFzalul7PhoDvqTykgbkERZN6dqoCNcN1TXc2UW_LJyM9VFjCpuXgBn0bPV6mu3aSFJRP6dKbfd8pSHhCjslSn1y7toPTSBxks0NFz2emy3td0HI534KArC-MUvXjnj6OfwErk7dcNaUd7g50fVwyPTsEO5rjuUbvVFseQq2PkNUeDfS7zuPSd1KJwOnvitPGrFtzcRVF2LDrd-JRG-Sn-gKR3aTFKMxZagicBLvFNLRnDD7K27TnF-XYzMg_5AA6BpVc6f3DfSETU4DBc_n1Z3m22uq0m4GlusqDE8eSxMXC-4RoYHN6AAADQnr84XzdOZCai8kIdw4Uuj3gubGIF-Re5QgxlzxIFcx4=w304-h162-s-no-gm?authuser=0"
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
                  "https://lh3.googleusercontent.com/pw/ADCreHcd0N6gJ1GFUeGO940f8uBHraBrGgcDWMl_Cqyb7Fs_2sQACWT8zOLYQryFwm2H3VZj78I1K_NJIjwQqWGgboPi869wtMX70f1kcnuxWB_nAFnLy8DrsedIH7KyL2vEPP-5FUvyUkkj7M6beUGh9p4c0OyIITP_1FRhwqiyhsRjIosKZv59RrGpnuv6dP22FRx3RK211Tud1KmAUlpubW1xAFryXVVmI4nTMJgx_1AC5-2NGCWWMKJ4_zuCfg1VpBFdKpiHMINiUuk73W2fWUEczbtc7_WmWoX2HZcFGrPj11FJ_oyQBQx9u-Abi4G_RywKojZIOskbgjYQgyK-Xz3PDJMS6khzS3leLp-cPXIyVbxAw7OY25fCoqpKrSPXW4wEUASn1fra_apGlJ0FPStasnXYoO73DeqNl9CLmp4KE6S3XyhcEtUbxvzHHmshVFLEV1FSD0BmbowgQoxWfI4qdmV2rIao0si1P_4Nv0kxj1XUBbNxv2ByxyMFmaQfpGFWYbhLOEC-9XRk1et1xROumysvmKTHPV9Qu5kG4P4_86Dn0LswCgFBcdK9UYlh01DmXxMcLa0dck4DCxYZoQPIwUcE7ppJ1WLLZOoBK2iJQmNMtfNJHKxE1MALm_5JE7mw3lgNSmgOJLphLQmuAJZWgClxfc32aN0oU5OtoZ6_11WimJnZnUrOK-2_CQX0NaAjEP7t02MOlGynk3rioTSWH_BerMRhJ0GHvGPrLhvLGZ-VrLwAo2Uiu0LQb1cfVG0IQD7ET4WRZd5bQSumlQOlC2gzdb3HLjAmHFfdiNf1E-I_crrjQyV8O4-eRM88MHg62GT71i8eR8ucm1vmaoH6X2k18md8Rmkz0bR4lA6BVw6WsP6LKWnqZR6qgyeru0pLW-M=w224-h181-no?authuser=0"
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
                  "https://lh3.googleusercontent.com/pw/ADCreHeBh_Magv_9Wg7pqI_PX0Y-ISEAU9Y3XhNUNlsfftNNupfbBgMNfPuuLEHXF10FmqFLV_Czu1JWr0OpxMdS-5y4mBG-3358g2Arw7FzgT0fbZXmU1cUh6wnMK1ylMTO3I317_FcbSOfdrRvBiJtngyFqk5sZbNjTxF68iQ9qv8ULNhj7YN7rvaEEVXIBTpoheC_x_8pV6_0lDXnlBZNrO9mTpZb8nuvuQHk_ncqxBz1nHZRFIs54lgVTlHzHrtIpXA9wQ6Lw7vBPBS65VPdbGA90hc5S7qipKjBCwHbyODSy8UaRrgzcHkoD1T7aUmQE5UZbOrXY8i_Io2OgDapRtD2vplQhfK1YNwL7qHMFbudBmVUSW3968Eb-_pKr29I4eXjRcEO_RbsW4_5qmU3VG7N1W3k62rVo88bU-ao8bUjDM9zZtfdW2ffRATcZqUkmjm7C15r8a3QXjEE3lDFcU2fZ-RxlTmbKLhxL_k55vUcfIxGM6iJ8A1ncHDJDWSqumyiJRs4RHfrolIKkAuTD3VtgAAmGA0-vry2OYP9bvsnxSWq5qHHFRKQzfwuENkkc0TcNZWaijO9rdzCFccRkG7JBPT3Nis2eQDfc5t1IQIUtcuhxqdoYFGpabuosbX9r40B2OCFlCzITgiLteqt3pfUVyAtEhiUqJMnJVI50Rk6Nd252QIQyn92eqtt-2bTvdUWKF8OyPjkFK1SK3-pyvVl0PX60fhoKb50oL_34li0IdnLMN7oM2JnIuCDBaqsb_ZRbQKjidBehfHVJHexBUgYC1-wz6EFnBS2Ne9VGUy9MKl5HOfMBpwnivfB0uzHfn59_P1cYno32BlSLNTLf2qw-hl6FV6HSLCHbnDGco1ZxhuGRQ4Ronn789vGOQHUVD1-UHc=w194-h199-no?authuser=0"
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
                  "https://lh3.googleusercontent.com/pw/ADCreHerS5t9wdjdPjsaSrO-cbSytq5HXczmlhCyaYMee14II8H1EdVYp1IZlFJ2CT5fPPVDHrtLiI7A7bQoHdZsUhTLUL_euZrtbcvVUqNzzgE_92KQPWI1yi7pfp9-x_Uje2AppyCZU-Wq9d-Z9HtD3b2yf1b__HTimRW7e2jLGi8xkUFM9-MSNo3hfUVKNaXq_btZMyzjocHlZIwAuvz4GjjsOnL6J2ldVPdiTnoiuS4YPqB6CktWzrwbT6NDnONPsGUW-StVrScpf4zJS3aD1jLrsPP6gTQz4swdQqQ4yDjLRfXuCGB_e74IAKdG1dVbRwvpJbypcLOCmkQH1ZrBJkR2THLGZF2i4Fu7G06zr2Nds-DwvoNACXbAnfzVp5xcjZkohI7sl86_UYaL0ib3BHpcNpF0q0_AN6suRuecqSjnZM7puHZND-aKLgj9RuRmT2eo4eLDAxNJjr3GR0FntJRIHw30KIgezNecD8f5JnpnboiOZNUUNisGp8UCGgt2bKWEKpV3ixmmJzV4Pv6PATvoD_adwFy5A2id7LhXnNgYCBvUwLe8BLN47cW3a77EApRQLeP4ydskaGmp1iFmWP-TR2WfOAjmDUNkEWc828HV7-85trTjkOi9tRtQgzX-12PiOA41AN3C1PeM7P_TBlKlbVaxqDlwttaZNIqALesm-DBly7CwkfT8slUCG8At7ald6H8yyj43eJ_7qDw546u3m70I9vk5qItEhIrtcGjUhiuv02eRBsRqldcOVbpv7hdGkkZ1G7yh-r27DXK1YO6d9gMbWlexCwI8_rg9zX-GYHN7FLla1LNasTuULkAalSOsF4g8FCo9vMNUiBUh8ChNnnGKBWQPxeZ9m7pW4UmuuszWFyQ4JyAbdadkRbK31u27Edk=w112-h114-s-no-gm?authuser=0"
                )
              }
              src={Alien1}
              alt="BlueAlienIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() =>
                handleIconClick(
                  "https://lh3.googleusercontent.com/pw/ADCreHf7WKdljZC7NhqNuueMoXdwRa1qj7NYr_jHsSgmsiKGRXLWu1heZRjoXBCmufCimY7dGNEGtcQQ0LFKBml2Bal7kgpYGxcMKkUOWA-YQjNZbMHmq-pad72MTCyVEbaiIkhq4SieAhbut7ls2fHaa6hlC_ejS4hmnwPe47l80Jqf5zIcO9LOnUzmliYnYIoCx5WtLj9jY-XeG1Jmu_NLKICIMQsQvacOczrfpZIx4pxZQeZL8V2FUmi5_zyF3mtAw0OCttHRW9jy2HgBCtUp-Xs8Yll8E8UOdEnEXAcFq50ZonvNMeOGuzc6oMcDwyP0DFVyVLG9Ljbo9j5Uz4a49YmYlkOha__KBRM4vLspXrPWcZp7oHy43eq46Ka6oEjyOl4-6XrMVNoc-RxZOguiArACXODS0pda7raoiGMsenUO_5bFjxNKPfXBnNPHdPZzuG1-D-ekkaCsgc-nMSwyWUf8LbuDL8aEwYpxJ5OzNIrvtkXaPEOf1bubjV9odbkVR7QIA-PdVmFq8dF8_rjorooyMpkjGfox5dqewS1gIZVYOnrVDU3Ui0pwhTiVWBv98EKkRYcYnGnyEGXQl3KBswWOZ1gTgK_aqo5MUvMVLy6rDvl9QjhW3BCOZthcu6p63pVLuFcC6NETpy8QE-EpAj9VHjjjb7LKyDaOBeqrGIgME868uySYGzfM3fhaE0yIg3KrSlhpysF3L6hEmt3r7IkVeMKPDkGHhz20hn6q3oYKG8HjcpOWB2-u-tB6k4ULI6_A1OVHqqzbON3GH6z9I8_2d7NB0hAFuXkHQt0NXL7LxQ16wqJcnwnvHl071rjf5af9yP1yCNJ1wkFiCecS5EjPLxScs0Pwi8_aKktGg7p9ozjazWKDIMe8BSf1iea-ZodOilE=w107-h109-s-no-gm?authuser=0"
                )
              }
              src={Alien2}
              alt="YellowAlienIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() =>
                handleIconClick(
                  "https://lh3.googleusercontent.com/pw/ADCreHerBSOiVPlF9lN7cYi3328UU-uPZzjGBXJzg5jqya3SjpX_Y8eaeX1DKobaryhVTuFRBcbqj_-qnWhwSTfkQzwB0znfGcmqi_xfYCmtEExtS5M43day9D2ShZ6Ysll32dnU2nlql4Lqw9SvQugjvfkWzdA-IxeXUV_8H3sjimont_61UyWffxaEyWqAv3HQQaqBoUdsFZaWqqQ3L-C78rFrg-6rKh5kaDjLr4Vel8xPiAhRtVSu5RrylSbmXbFw7H2GSEPpJ2g2Jmhu3jQ1b5VMDsTAiI8X5QvzAtjllTUh9clvihhZEUqUhAghHyDGTDXrYFCFsofUxPEXp4Ob-nmJCN48vva6kGDnUmWF0Ua3Yb5b1Ln6bgCsxMRtl3y7VduhV8ngLQ7fIjg2xfq40fgmH5FmjuOwwMWsyvUzVEmRyEaVsHTKQCn4mwO0KUqXTR6mJSO7z_kU7iSuNBj_7f6Ypl-I6U4VPMeA3QRUTRXWZ84vXVcC5iiIRbYng_kd4LYksjNMntSvBmfdnmm9UYioHukRWbwG-Ol-hU4rDgMf3mgJvUEI_PJKqqnyNa9CEMPry-fWlvRzinQpR5Abs2390HjZpyqV42yl94AWCtMTPgFwDAlgm9_-RkRtwmJXKivdKvrVVlwUqSsmsEDn8-CXHgxX5xzaX322b7BPcmXM7Y8uP0sGbgGrMJ_-ha7ZVuoouOylhG4JkLq3QKkXiuEEx1y-qxKTkpYcLnR5jeUdWuBK9v54THVXemg9DuiETmj7N-YphiE--wQPT4q6LjvgjjJ1B7RCqmtwNiY9JnAThWscD_ejMazzhGFeIeYTxbnxv0MNsJJS63gNlTW20WM0sX85krP6TLHhPKQsQRAsXX4yTw-Op-liOKrzfXd5ZzphDas=w116-h112-s-no-gm?authuser=0"
                )
              }
              src={Alien3}
              alt="GreenAlienIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() =>
                handleIconClick(
                  "https://lh3.googleusercontent.com/pw/ADCreHdZZ4msYKNp6kFLkDsRdpz4qDxznj3D8ZIjVxNfRFqKN94qsHacgRiV6TBDqNRBjqA8yryrmCyTebnncPUNwABh-6hyxZr9PL_3M_qcPku7-PEgnX8_pJCkC73JkA9WVZabmO-blYcwZH-hgc1SVDIZGZRCOs2n09NNUXKPD4UwPHAnV9F_6BQuj5CP_RB6IBg_aEO_nfg_ZwF-hpPD317bvz_IQDxIRv47__ue2bi_M5Af__EjCzNbyX0uC0QVRKS_vX_dbN-Zz5otCRkRQ9VsaIepMZaCDjP3NzXMlzqMgbbkRMOp3oyViTikmQcwrDgqpejzZzVYNqums5Vcsc4834zf8RuKpS2LhkUi8-SUU2BaYSORZGDPdMa9jQIwxrqIma2YQVfMjPrNownOFZzi46zWvjh2Taz7rI4_z_Lzi0hMr4U99rvFsqpn3T0fHyMYAtKDLXnF95lnM4A25GvquGt0rz57afKCBo9ePipQWoS64QRgHbvvbshyTv9IGsxfyu3vt8FjV6NODzCNAv7ui0oc0Mcif-EPwy_souAIe9FHQy3AttK5ZchYgeplu93tPEGZwUsmFuabLtdBz8cBxqrS9uwPsE6yVh0t2Xqo2KM-Qf9zOE24lCPTERkFOQi_RSfRxqgo0lxvsU9NI9ZSMh14gE7SdCHhkLZxt04EF_-ZLx4necVWVBWLUo5rofFCbzQPqlBKrF_Y7PbLA2JCbxCQyHGs46D25nEtlRtYCO2BsRTANEVwDPUfQKqadUAfqIFhzHR_jL5V_hNZXdNdRSeLN2zMRDfGMF9AYrnRbXLsc2PPHah9U50xSA-1fpbUMMgZ0T5-qe4e9hW767HLdeLXf-J1VF0zQejrVxzS7P0RIEzbXZjD11iRNx0jYpdzsAw=w112-h104-s-no-gm?authuser=0"
                )
              }
              src={Alien4}
              alt="RedAlienIcon"
            />
          </Planets>
          <Planets>
            <Img
              onClick={() =>
                handleIconClick(
                  "https://lh3.googleusercontent.com/pw/ADCreHcRvh0pdzHzhYJeS8Wwd3nHN_BIKSG5IMG4f7WvPUdAq1p3560srcP0U1R-sIhRq1rcWArUCJrh_5jhqk4y_bpKuYcPkpXIe6P9G_rpYxs8N_YRtkv6u40WhnKcS7sc2rGremiD_A7GmUVmMiGcC7va-uTyPSqnRX8H4QlmqlAhCZYDj_MemhZ9oREbYTq8EbrdAL-CLqouueWf7h2-PoZGszUrimZI8NNxtIcbEiQibv1vVHiiNS_gv2NKsEuHUpAfFarqmOPoUqHG8BvZt6KVqOBNLXu3sf4qa53JLCdAde7704b-wcFHFTK1dwdABr9x9lXNKQU5ovAxwuOM3ZdTDrVJJ-Rwvp93nMMmbT8PArqJEd4zBu2Mk0NW-iPtRpq1QC8RvBoETUJ0ndMs6eqLnp1LwJUrlw9dXZcK3ExhBs5Y7OiKwsT4EZ3p-rL7hUYlEBixlfDE6Iokn0kOUeoW85thepbSZN5Df3cJv898eCqiHGVSwpiAmO2gdjkh7fBgPKQcBFeqEt9vwuqp2nyOzR-FjxbJ2ojQjLojeruoknHXfR40X8vVPTeTvXXsDuVMRoFVESmKp9pdjIVIOBbAUV_wWWw92Gx5t45ZGP58XMlRdEs90kx7SHLA4Cac2cCns0kaYTBOu7e9AfortUHDaMUOGAbjbTrQg85CSKKw1wrXT9wpwFJfvo23EOLX4c55IioqDLPqhmNps2gZE5nOh2gBJLF0dXlh20nNJVP9e_wobeoqKV7V2NS5uezgw23Bbl0LHh-DW-qfQxhkPUliNqUWPvTLgyoKWmlR_ODTGbMgSpiZnPGtgA4jmheAN-ab6MGwm5cLPVF9eBF8tQb1VX-rRvys7QSV519zYngaSlmF6-4oEcFrAh30Zcs4XSmispg=w122-h113-s-no-gm?authuser=0"
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
                  "https://lh3.googleusercontent.com/pw/ADCreHexs-6yljfBtLXWP67linXV9t-cocLJAGKPDw5wrLgZztYobYO5PgpMLliROh2fPl2rim8yRDtRNLcxDiSXg0cewp1hrzEbQpfcjxF2TXNDt3vjPXhhfRvcELMm2brbozcErckhSTQH1YBFWH-yi8DCUj0J2pA_mwBHt0KE2CkEvHvi_LugJN6qOIfNAaHAjC0sLJCU0Dcc6rwHwkLIWMVoJecgvKcesBwK6tXl9qLvvYgxG3wG5uuuQTPyS1W99tKJb5Xekne_YelLBceQK61peJm_F1mpIJoKRfFD_KwHWEbrTvlIrzBoK5k_dt3DtwJtvK1ym5DErOKs-nRXQNmb21hKFnUbnyrg9O0rLJeTmGDoFCTSw33UmdufURwWUOhelL7g2APIDbLDuzUCDkI2kj_br1KCLmipqatdWCrSrcZf9M7NS6PK-MJU0Iea4AFF_HAf_2nvksc6fG0UQ76N3IUhZhEX0FJM7cITaOLVfu6aLe293DkFyzCyBIsd6JcXUeDYcOoFSxLmCl_Hjmz3LVesRjip17WqYImYPVWblh541MNza1c6sw1fWuKga0MGrqm--_CI241oc2spkGMK167jnYFk55eNHfwWO_3gL6cXc144Dk8KbXORE2jN7LF9-hMN6Pymmve6Iv7MYqvjaZEVo5EaEAqWb1w5GHmHoHOZQhoEKzEQCI5lqbQhz36Vyw0DG4XFv1koBDNsLS5HGvi4p8gehu_hgdL6FoCJqfliwoNddLv0zYaT4aqpOjBF8TSyl1Tu1FVTlPDVcKjZKVErzlJdN3lG7yU3p1bs1mfxyMDm3h_Nz4jCcvlGoi_pB8UrQk3qZS1VMWx2FCsqdlXNXTxG8NXnRJCBCtxf6kgzfPefE2OaXLuMMlhuQMXpdsY=w155-h152-s-no-gm?authuser=0"
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
                  "https://lh3.googleusercontent.com/pw/ADCreHegAmZLTyUZb5m1DNdJfIKQsyvAQWyQYH2CSHdTqg9Nq0Zn0DVpL75ScwEqO-4TQp1lxgGiN0N8sLS7Wp2_NvIe7oglU2zCXfKck0HCYfslBVR2G51o0vqdVWfJbag-RoWagwzJOw7WSsoiUCm9tKR3E3xgWRjx0M183Qmlr7cjs4P_7MTsy5KqvzNwWqd_ja6RB0tRx3aVH2zUKiQSHCSr91NwCA_Vq6kx9DJBW-VHpLvXX1iO6JrM7_TEXbtsZAiaGEGkyMP3jnhe0cZGA_rTeYX3tiCvZP_tF_WnigcSLYiKzoclZ6yyDbuZOp44cp_mk8wzH6_JCrWHQWG2XVH8Mo_qHDAC4SmPJNm-qL-wxrD980xDHbKnOc7T2loSR6NetKFYcMGyU6UlRWd62kI-dNTG6TZREAoRJp2Fpml6r74ofIlmb_b00dCzAVm1NQpZmPleZGxGDvCvoYDsI-9MCn2MfI2o6QZGeTxJ-Ed0HvHIJ9wmYEF23xh3jySsk4ewvhbJlzCA0M_sNWvbr7tFN6c525yVnPwPLvZQS183YgYp5PkbtrdY1UAgwpNzCSrwxOymNxjsPQZpNEZmLSBIt2xcLkpDQkyMLzT3gwG0pa9B6xm8157WHjePJ13jKF73JCF4Bpn7g2er1fU1uCLWbwoZQiTTpUoi1-DWSzwpRFoUe_yvJaIl3QAwVwvs4Iu1DazO9qy96cFgKPlUUjA1IsAjwMc-pBoZ3ROxku2yN_dE85hsXOYC4F0rFbou0iKyY8hwWUPyPs4xS334qt9GozJsGh2Wmwmfr10NTDeUNo07E2oWPPU_SsGipqKywsXDDfpqqJNHcXQRyYme9f_7YwBuBLzSwpSWP58xeRx1uY6entGk1pypTVmtrpC41nYlYq0=w123-h116-s-no-gm?authuser=0"
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
              To.&nbsp;<SignalNickname>Nickname</SignalNickname>
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
