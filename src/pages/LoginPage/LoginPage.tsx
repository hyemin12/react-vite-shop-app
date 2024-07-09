import { useState } from "react";
import { Link } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "src/firebase";
import { useAppDispatch } from "src/hooks/redux";
import useNavigationHandlers from "src/hooks/useNavigationHandlers";
import Form from "src/components/form/Form";
import { setUser } from "src/store/user/user.slice";
import { setUserId } from "src/store/cart/cart.slice";
import { firebaseErrorHandler } from "src/utils/firebaseErrorHandler";

const LoginPage = () => {
  const [firebaseError, setFirebaseError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const { moveToMainPageHandler } = useNavigationHandlers();

  const logInHandler = async (email: string, password: string) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
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
        <h1>로그인</h1>
        <Form
          title='로그인'
          firebaseError={firebaseError}
          getDataForm={logInHandler}
        />
        <p>
          계정이 없습니까?
          <Link className='text-primary' to={"/register"}>
            가입하기
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
