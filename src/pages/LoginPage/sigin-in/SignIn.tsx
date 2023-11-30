import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import app from "@/firebase";
import { setUser } from "@store/user/user.slice";
import { setUserId } from "@store/cart/cart.slice";
import { useAppDispatch } from "@hooks/redux";
import Form from "@components/form/Form";
import { firebaseErrorHandler } from "@utils/firebaseErrorHandler";

const SignIn = () => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const auth = getAuth(app);
  const logInHandler = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(
          setUser({
            email: userCredential.user.email,
            token: userCredential.user.refreshToken,
            id: userCredential.user.uid,
          })
        );
        dispatch(setUserId(userCredential.user.uid));
        navigate("/");
      })
      .catch((error: FirebaseError) => error && setFirebaseError(firebaseErrorHandler(error.code)));
  };
  return <Form title='로그인' firebaseError={firebaseError} getDataForm={logInHandler} />;
};

export default SignIn;
