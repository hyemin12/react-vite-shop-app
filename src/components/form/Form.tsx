import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import styles from "./Form.module.scss";

type FromProps = {
  title: string;
  firebaseError: string | null;
  getDataForm: (email: string, password: string) => void;
};

type Inputs = {
  email: string;
  password: string;
};

const Form: React.FC<FromProps> = ({ title, firebaseError, getDataForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onChange" });

  const onSubmit: SubmitHandler<FieldValues> = ({ email, password }) => {
    getDataForm(email, password);
    // form 내용 삭제
    reset();
  };

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
      {firebaseError && (
        <span className={styles.form_error}>{firebaseError}</span>
      )}
    </form>
  );
};

export default Form;
