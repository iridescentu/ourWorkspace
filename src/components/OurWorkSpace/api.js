// ----- Content 부분 -----
// Content 전체 조회
export function getAllContents() {
  return fetch(`http://localhost:8080/universe/content`, {
    method: "GET",
  }).then((response) => response.json());
}

// Content 저장
export function saveContent(content) {
  return fetch(`http://localhost:8080/universe/content`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  }).then((response) => response.json());
}

// NickName으로 Content 선택적 조회
export function getContentByNickName(nickName) {
  return fetch(`http://localhost:8080/universe/content/nickname/${nickName}`, {
    method: "GET",
  }).then((response) => response.json());
}

// Content ID로 선택적 조회한 글을 수정
export function updateContentById(content, id, loginId) {
  return fetch(`http://localhost:8080/universe/content/${id}/${loginId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  }).then((response) => response.json());
}

// Content ID로 선택적 조회한 글을 삭제(숨김처리)
export function deleteContentById(id, loginId) {
  return fetch(`http://localhost:8080/universe/content/${id}/${loginId}`, {
    method: "DELETE",
  }).then((response) => response.json());
}

// Content ID로 선택적 조회한 글을 Archive에 추가(즐겨찾기 추가)
export function addToArchive(id, archive) {
  return fetch(`http://localhost:8080/universe/content/${id}/archive`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(archive),
  }).then((response) => response.json());
}

// ----- Archive 부분 -----
// 즐겨찾기 항목 전체 조회
export function getAllArchives() {
  return fetch(`http://localhost:8080/universe/archive`, {
    method: "GET",
  }).then((response) => response.json());
}

// 즐겨찾기 항목 NickName으로 선택적 조회
export function getArchiveByNickName(nickName) {
  return fetch(`http://localhost:8080/universe/archive/nickname/${nickName}`, {
    method: "GET",
  }).then((response) => response.json());
}

// 즐겨찾기 항목 ArchiveID로 선택적으로 해제
export function removeFromArchive(id) {
  return fetch(`http://localhost:8080/universe/archive/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());
}

// ----- Bin 부분 -----
// 숨김처리 항목 전체 조회
export function getAllBins() {
  return fetch(`http://localhost:8080/universe/bin`, {
    method: "GET",
  }).then((response) => response.json());
}

// contentID로 숨김처리 항목 선택하여 복구(숨김처리 해제, binDB에서는 삭제됨)
export function restoreContentById(id) {
  return fetch(`http://localhost:8080/universe/bin/restore/${id}`, {
    method: "PUT",
  }).then((response) => response.text());
}
// contentID로 숨김처리 항목 선택하여 영구삭제(bin DB와 ContentDB에서 모두 삭제, archiveDB도 contentDB에 따라 자동적으로 삭제)
export function permanentlyDeleteContent(id) {
  return fetch(`http://localhost:8080/universe/bin/${id}`, {
    method: "DELETE",
  }).then((response) => response.text());
}

// 숨김처리 항목 전체 조회하여 영구 삭제
export function deleteAllBins() {
  return fetch(`http://localhost:8080/universe/bin/all`, {
    method: "DELETE",
  }).then((response) => response.text());
}

// signUp
export function signUp(memberDto) {
  return fetch(`http://localhost:8081/universe/member/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(memberDto),
  }).then((response) => response.json());
  // .then((data) => {
  //   console.log("회원 가입 성공", data);
  //   return data;
  // })
  // .catch((error) => {
  //   console.error("회원 가입 실패", error);
  //   return { error: "회원 가입 실패" };
  // });
}

// login
export function login(memberLoginDto) {
  return fetch(`http://localhost:8081/universe/member/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(memberLoginDto),
  }).then((response) => response.json());
  // .then((data) => {
  //   console.log("로그인 성공", data);
  //   return data;
  // })
  // .catch((error) => {
  //   console.error("로그인 실패", error);
  //   return { error: "로그인 실패" };
  // });
}
