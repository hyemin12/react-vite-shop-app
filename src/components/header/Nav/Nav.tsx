import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { GoSignOut } from "react-icons/go";
import { signOut } from "firebase/auth";

import { auth } from "src/firebase";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import useAuth from "src/hooks/useAuth";
import NavCartBlock from "../nav-cart-block/NavCartBlock";
import { removeUser } from "src/store/user/user.slice";
import { removeUserId } from "src/store/cart/cart.slice";
import styles from "./Nav.module.scss";

function Nav() {
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();
  const { products } = useAppSelector((state) => state.cartSlice);

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      dispatch(removeUser());
      dispatch(removeUserId());
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav}>
        <li className={styles.counter}>
          <Link to='/cart'>
            <FiShoppingCart title='장바구니' />
          </Link>

          {products.length > 0 && (
            <>
              <b>{products.length}</b>
              <div className={styles.nav_hover_cart}>
                <NavCartBlock />
              </div>
            </>
          )}
        </li>

        <li className={styles.counter}>
          <Link to='/order'>
            <FiUser title='주문' />
          </Link>
        </li>

        {isAuth && (
          <li>
            <GoSignOut
              onClick={logoutHandler}
              className={styles.nav_sign_out}
              title='로그아웃'
            />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
