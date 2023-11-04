import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../../firebase";
import Form from "../../../components/form/Form";
import { firebaseErrorHandler } from "../../../utils/firebaseErrorHandler";

const SignIn = () => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState(null);
  const auth = getAuth(app);
  const logInHandler = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        return (
          error && setFirebaseError("이메일 또는 비밀번호가 잘못되었습니다.")
        );
      });
  };
  return (
    <Form
      title="로그인"
      firebaseError={firebaseError}
      getDataForm={logInHandler}
    />
  );
};

export default SignIn;
