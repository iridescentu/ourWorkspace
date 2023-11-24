import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Weather = styled.div`
  padding-right: 10px;
  font-weight: 400;
`;
const Icon = styled.div`
  width: 45px;
  height: 45px;
  /* background-color: gold; */
  img {
    width: 100%;
  }
`;
// const Location = styled.div``;
const Temp = styled.div``;
const City = styled.div``;
const Info = styled.div``;

export function OpenWeather({ cityName }) {
  const API_KEY = "b353ec7a9a2f1026b55dc52fc9d679bf";
  const API_KEY_NINJA = "Lw9i6FbdDRCvwGKJ7ERDPQ==7ioKn3NN5PL57Ft5";

  const [icon, setIcon] = useState(null);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    if (cityName) {
      const urlToNinja = `https://api.api-ninjas.com/v1/city?name=${cityName}`;
      fetch(urlToNinja, { headers: { "X-Api-Key": API_KEY_NINJA } })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const position = {
            coords: {
              latitude: data[0].latitude,
              longitude: data[0].longitude,
            },
          };
          geoOK(position);
        })
        .catch((error) => {
          geoError(error);
        });
    } else {
      navigator.geolocation.getCurrentPosition(geoOK, geoError);
    }
  }, []);

  function geoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setIcon(data.weather[0].icon);
        setTemp(parseInt(data.main.temp));
        setCity(data.name);
        setWeather(data.weather[0].main);
      })
      .catch((error) => {
        console.log("요청이 실패했습니다.", error);
      });
  }
  function geoError() {
    alert("현재 위치 정보를 찾을 수 없습니다.");
  }
  return (
    <>
      <Container>
        <Icon>
          <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
        </Icon>
        <Weather className="city">{city}</Weather>
        <Weather className="temp">
          {temp}
          <i className="ti ti-temperature-celsius"></i>
        </Weather>
        <Weather className="info">{weather}</Weather>
      </Container>
    </>
  );
}
