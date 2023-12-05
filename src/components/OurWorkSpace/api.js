// ----- Content 부분 -----
// Content 전체 조회 (사용자)
export async function getAllContent(targetId) {
  try {
    const response = await fetch(
      `http://localhost:8080/universe/content/${targetId}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // JSON 데이터를 읽어와서 data에 저장
    const data = await response.json();

    // 각 컨텐츠에 대해 임의의 위치 정보를 추가
    const contentWithPositions = data.map((content) => ({
      ...content,
      position: {
        top: `${Math.floor(Math.random() * 45)}%`,
        left: `${Math.floor(Math.random() * 60)}%`,
      },
    }));

    return contentWithPositions;
  } catch (error) {
    console.error("Error fetching content:", error);
    throw error;
  }
  //   const data = await response.json();
  //   return data;
  // } catch (error) {
  //   console.error("Error fetching content:", error);
  //   throw error;
  // }
}
// export function getAllContent(targetId) {
//   return fetch(`http://localhost:8080/universe/content/${targetId}`, {
//     method: "GET",
//   }).then((response) => response.json());
// }
// Content 전체 조회 (관리자)
export function getAllContentAdmin() {
  return fetch(`http://localhost:8080/universe/content/admin`, {
    method: "GET",
  }).then((response) => response.json());
}
// 내가 작성한 Content 보기 (사용자)
export function getMyContentsByAuthorId(authorId) {
  return fetch(`http://localhost:8080/universe/content/mypost/${authorId}`, {
    method: "GET",
  }).then((response) => response.json());
}

// Content 저장 (사용자)
export function saveContent(content, targetId) {
  return fetch(`http://localhost:8080/universe/content/${targetId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  }).then((response) => response.json());
}

// TargetId와 NickName으로 Content 선택적 조회 (사용자)
// NicName이 TargetId에게 남긴 글을 조회하는 것
export function findByNickNameAndTargetId(targetId, nickName) {
  return fetch(
    `http://localhost:8080/universe/content/${targetId}/${nickName}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .catch(() => "ERROR");
}

// Content ID로 선택적 조회한 글을 수정(사용자 본인 것만 수정 가능)
export function updateContentById(content, id, authorId) {
  return fetch(`http://localhost:8080/universe/content/${id}/${authorId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  }).then((response) => response.json());
}

// Content ID로 선택적 조회한 글을 삭제(숨김처리)
export function deleteContentById(id, authorId) {
  return fetch(`http://localhost:8080/universe/content/${id}/${authorId}`, {
    method: "DELETE",
  }).then((response) => response.json());
}

// Content ID로 선택적 조회한 글을 내 Archive에 추가(즐겨찾기 추가)
export function addToArchive(archiveParam, id, loginId) {
  const archive = archiveParam.map((content) => ({
    content: content,
  }));
  return fetch(
    `http://localhost:8080/universe/content/${id}/archive/${loginId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(archive),
    }
  ).then((response) => response.json());
}

// ----- Archive 부분 -----

// (사용자) 로그인한 사용자의 Archive 항목 전체 조회
export function getAllArchivesByLoginId(loginId) {
  return fetch(`http://localhost:8080/universe/archive/${loginId}`, {
    method: "GET",
  }).then((response) => response.json());
}
// (사용자) 즐겨찾기 항목 ArchiveID로 선택적으로 해제
export function removeFromArchive(archiveId, loginId) {
  return fetch(
    `http://localhost:8080/universe/archive/${archiveId}/${loginId}`,
    {
      method: "DELETE",
    }
  ).then((response) => response.text());
}

// (사용자) 즐겨찾기 항목 NickName으로 선택적 조회
export function getArchiveByNickName(nickName, loginId) {
  return fetch(
    `http://localhost:8080/universe/archive/nickname/${nickName}/${loginId}`,
    {
      method: "GET",
    }
  ).then((response) => response.json());
}
// (관리자 권한) 즐겨찾기 항목 전체 조회
export function getAllArchive() {
  return fetch(`http://localhost:8080/universe/archive/admin`, {
    method: "GET",
  }).then((response) => response.json());
}
//(관리자 권한) 즐겨찾기 항목 ArchiveID로 선택적으로 해제  //관리자 권한 모든 archive에 접근하여 archiveID로 선택적 해제 가능
export function removeArchiveAdmin(archiveId) {
  return fetch(`http://localhost:8080/universe/archive/admin/${archiveId}`, {
    method: "DELETE",
  }).then((response) => response.text());
}
// (관리자 권한) 즐겨찾기 항목 NickName으로 선택적 조회 //관리자 권한 모든 archive에 접근 가능
export function getArchiveByNickNameAdmin(nickName) {
  return fetch(`http://localhost:8080/universe/archive/admin/${nickName}`, {
    method: "GET",
  }).then((response) => response.json());
}

// ----- Bin 부분 -----
//(사용자) 자신의 Bin의 모든 항목을 조회
export function getAllBinsByUser(loginId) {
  return fetch(`http://localhost:8080/universe/bin/${loginId}`, {
    method: "GET",
  }).then((response) => response.json());
}

// (사용자) contentID로 숨김처리 항목 선택하여 복구(bin DB와 ContentDB에서 모두 삭제, archiveDB도 contentDB에 따라 자동적으로 삭제)
export function restoreContentByIdUser(contentId, loginId) {
  return fetch(
    `http://localhost:8080/universe/bin/restore/${contentId}/${loginId}`,
    {
      method: "PUT",
    }
  ).then((response) => response.text());
}

//(사용자)  contentID로 숨김처리 항목 선택하여 영구 삭제
export function permanentlyDeleteContentUser(contentId, loginId) {
  return fetch(`http://localhost:8080/universe/bin/${contentId}/${loginId}`, {
    method: "DELETE",
  }).then((response) => response.text());
}

//(사용자) 숨김처리 항목 전체 조회하여 영구 삭제
export function deleteAllBinsUser(loginId) {
  return fetch(`http://localhost:8080/universe/bin/all/${loginId}`, {
    method: "DELETE",
  }).then((response) => response.text());
}

// 숨김처리 항목 전체 조회(관리자) 모든 bin에 접근 가능함
export function getAllBins() {
  return fetch(`http://localhost:8080/universe/bin/admin`, {
    method: "GET",
  }).then((response) => response.json());
}

// contentID로 숨김처리 항목 선택하여 복구(관리자)
// 숨김처리 해제, binDB에서는 삭제됨
export function restoreContentByIdAdmin(contentId) {
  return fetch(
    `http://localhost:8080/universe/bin/admin/restore/${contentId}`,
    {
      method: "PUT",
    }
  ).then((response) => response.text());
}

// contentID로 숨김처리 항목 선택하여 영구삭제(관리자)
// bin DB와 ContentDB에서 모두 삭제, archiveDB도 contentDB에 따라 자동적으로 삭제
export function permanentlyDeleteContentAdmin(contentId) {
  return fetch(`http://localhost:8080/universe/bin/admin/${contentId}`, {
    method: "DELETE",
  }).then((response) => response.text());
}

// 숨김처리 항목 전체 영구 삭제(관리자)
// 관리자 권한으로 모든 bin에 접근하여 영구 삭제
export function deleteAllBinsAdmin() {
  return fetch(`http://localhost:8080/universe/bin/admin/all`, {
    method: "DELETE",
  }).then((response) => response.text());
}

// ----- member 부분 -----
// signUp
export function signup(memberDto) {
  return fetch(`http://localhost:8081/universe/member/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(memberDto),
  }).then((response) => response.json());
}

// login
export function login(memberLoginDto) {
  return (
    fetch(`http://localhost:8081/universe/member/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(memberLoginDto),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("로그인 실패");
        }
        return response.json();
      })
      // .then((data) => {
      //   console.log("서버 응답 데이터:", data); // 여기서 데이터 확인
      //   // const userId = data.id; // 로그인 성공 시 사용자 아이디를 추출합니다.
      //   return { userId: data.data.id }; // 사용자 아이디를 객체로 감싸서 반환합니다.
      // })//이것 때문에 이동하지 못하고 오류가 나고 있음.
      .catch((error) => {
        console.error("로그인 실패", error);
        return { error: "로그인 실패" };
      })
  );
}

// universemodal 즐겨찾기
// const handleFavorite = async () => {
//   try {
//     // fetch를 사용하여 서버로 요청을 보냅니다.
//     const response = await fetch("/api/updateFavoriteStatus", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ postId: content.id, favorite: !favorite }),
//     });

//     if (response.ok) {
//       // 서버로부터의 응답에 따라 상태를 업데이트할 수 있습니다.
//       const data = await response.json();
//       if (data.success) {
//         // 서버 응답이 성공일 때만 favorite 상태를 업데이트합니다.
//         setFavorite(!favorite);
//         setShowTooltip(false);
//       } else {
//         console.error("서버에서 즐겨찾기 상태 업데이트 실패");
//       }
//     } else {
//       console.error("서버 응답 실패", response.status);
//     }
//   } catch (error) {
//     console.error("서버 통신 중 에러 발생", error);
//   }
// };
