import { useState } from "react";
import { Link } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "src/firebase";
import { useAppDispatch } from "src/hooks/redux";
import useNavigationHandlers from "src/hooks/useNavigationHandlers";
import Form from "src/components/form/Form";
import { setUser } from "src/store/user/user.slice";
import { setUserId } from "src/store/cart/cart.slice";
import { firebaseErrorHandler } from "src/utils/firebaseErrorHandler";

const RegisterPage = () => {
  const [firebaseError, setFirebaseError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const { moveToMainPageHandler } = useNavigationHandlers();

  const signUpAndLoginHandler = async (email: string, password: string) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(
        setUser({
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
        })
      );
      dispatch(setUserId(user.uid));
      moveToMainPageHandler();
    } catch (error) {
      if (error instanceof FirebaseError) {
        setFirebaseError(firebaseErrorHandler(error.code));
        return;
      }
      console.error(error);
    }
  };

  return (
    <div className='page'>
      <div className='form_container'>
        <h1>회원가입</h1>
        <Form
          title='가입하기'
          getDataForm={signUpAndLoginHandler}
          firebaseError={firebaseError}
        />
        <p>
          이미 계정이 있습니까? <Link to={"/login"}>로그인</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
