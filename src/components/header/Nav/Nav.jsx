import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { GoSignIn, GoSignOut } from "react-icons/go";
import { getAuth, signOut } from "firebase/auth";
import app from "../../../firebase";
import useAuth from "../../../hooks/useAuth";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import styles from "./Nav.module.scss";
import { removeUser } from "../../../store/user/user.slice";
import { removeUserId } from "../../../store/cart/cart.slice";
import NavCartBlock from "../nav-cart-block/NavCartBlock";

function Nav() {
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();
  const { products } = useAppSelector((state) => state.cartSlice);

  const auth = getAuth(app);
  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        dispatch(removeUserId());
      })
      .catch((error) => console.error(error));
  };
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav}>
        <li>
          <div className={styles.counter}>
            <Link to={"/cart"}>
              <FiShoppingCart title="장바구니" />
            </Link>
            {products.length > 0 && (
              <div className={styles.nav_hover_cart}>
                <NavCartBlock />
              </div>
            )}
          </div>
        </li>
        <li>
          <div className={styles.counter}>
            <Link to={"/order"}>
              <FiUser title="주문" />
            </Link>
          </div>
        </li>
        <li>
          {isAuth ? (
            <GoSignOut
              onClick={logoutHandler}
              className={styles.nav_sign_out}
              title="로그아웃"
            />
          ) : (
            <Link to="/login">
              <GoSignIn title="로그인" />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
