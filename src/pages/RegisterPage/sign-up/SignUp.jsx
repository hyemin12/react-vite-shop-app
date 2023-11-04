import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Form from "../../../components/form/Form";
import app from "../../../firebase";
import { firebaseErrorHandler } from "../../../utils/firebaseErrorHandler";

const SignUp = () => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState(null);

  const auth = getAuth(app);

  const signUpAndLoginHandler = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        // 리덕스 스토어에 담는 로직
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        firebaseErrorHandler(error);
        return (
          error && setFirebaseError("이메일 또는 비밀번호가 잘못되었습니다.")
        );
      });
  };
  return (
    <Form
      title="가입하기"
      getDataForm={signUpAndLoginHandler}
      firebaseError={firebaseError}
    />
  );
};

export default SignUp;
