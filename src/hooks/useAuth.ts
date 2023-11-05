import { useAppSelector } from "./redux";

const useAuth = () => {
  const { id, email, token } = useAppSelector((state) => state.userSlice);

  return {
    isAuth: !!email,
    email,
    id,
    token,
  };
};
export default useAuth;
