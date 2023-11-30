import React from "react";

export const firebaseErrorHandler = (error: any) => {
  console.log(error);
  switch (error) {
    case "auth/too-many-requests":
      return "너무 많은 시도를 했습니다. 잠시후에 다시 로그인을 시도하세요.";
    case "auth/invalid-login-credentials":
      return "아이디와 비밀번호가 올바르지 않습니다.";
    case "auth/user-not-found":
      return "이메일이 일치하지 않습니다.";
    case "auth/email-already-in-use":
      return "이미 사용 중인 이메일입니다.";
    case "auth/wrong-password":
      return "비밀번호가 일치하지 않습니다.";
    case "auth/weak-password":
      return "약한 암호입니다. 더 강력한 암호를 사용하세요.";
    case "auth/network-request-failed":
      return "네트워크 연결에 실패 하였습니다.";
    case "auth/invalid-email":
      return "잘못된 이메일 형식입니다.";
    case "auth/internal-error":
      return "잘못된 요청입니다.";
    default:
      return "알 수 없는 오류가 발생했습니다.";
  }
};
