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

  const moveToCartPageHandler = () => {
    navigate("/cart");
  };

  return {
    moveToMainPageHandler,
    moveToOrderPageHandler,
    moveToLoginPageHandler,
    moveToCartPageHandler,
  };
};
export default useNavigationHandlers;
