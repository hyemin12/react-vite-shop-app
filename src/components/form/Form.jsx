import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";

const Form = ({ title }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = ({ email, password }) => {
    console.log({ email, password });
  };
  console.log(errors);
  //   유효성
  const userEmail = {
    required: "이메일은 필수 입력입니다",
    pattern: {
      value:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: "올바른 이메일 형식이 아닙니다.",
    },
  };
  const userPassword = {
    required: "비밀번호는 필수 입력입니다",
    minLength: {
      value: 6,
      message: "최소 6자입니다.",
    },
    pattern: {
      value: /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/,
      message:
        "소문자, 숫자, 특수문자를 각 하나 포함한 8자리 이상이여야 합니다.",
    },
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <input
          type="email"
          placeholder="E-mail"
          {...register("email", userEmail)}
        />
        {errors?.email && (
          <span className={styles.form_error}>{errors?.email.message}</span>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password", userPassword)}
        />
        {errors?.password && (
          <span className={styles.form_error}>{errors?.password.message}</span>
        )}
      </div>

      <button type="submit">{title}</button>
      <span className={styles.form_error}></span>
    </form>
  );
};

export default Form;
