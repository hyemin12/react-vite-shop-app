import { useNavigate } from "react-router-dom";

const useNavigationHandlers = () => {
  const navigate = useNavigate();

  const moveToMainPageHandler = () => {
    navigate("/");
  };

  const moveToOrderPageHandler = () => {
    navigate("/order");
  };

  const moveToLoginPageHandler = () => {
    navigate("/login");
  };

  return {
    moveToMainPageHandler,
    moveToOrderPageHandler,
    moveToLoginPageHandler,
  };
};
export default useNavigationHandlers;
