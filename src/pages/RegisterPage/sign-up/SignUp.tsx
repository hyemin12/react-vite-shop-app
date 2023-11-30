import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import app from "@/firebase";
import Form from "@components/form/Form";
import { firebaseErrorHandler } from "@utils/firebaseErrorHandler";
import { useAppDispatch } from "@hooks/redux";
import { setUserId } from "@store/cart/cart.slice";
import { setUser } from "@store/user/user.slice";

const SignUp = () => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const auth = getAuth(app);

  const signUpAndLoginHandler = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch((error) => error && setFirebaseError(firebaseErrorHandler(error.code)));
  };
  return <Form title='가입하기' getDataForm={signUpAndLoginHandler} firebaseError={firebaseError} />;
};

export default SignUp;
