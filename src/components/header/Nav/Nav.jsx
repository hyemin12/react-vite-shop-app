import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { GoSignIn, GoSignOut } from "react-icons/go";
import styles from "./Nav.module.scss";
import useAuth from "../../../hooks/useAuth";

function Nav() {
  const isAuth = useAuth();
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav}>
        <li>
          <div className={styles.counter}>
            <Link to={"/cart"}>
              <FiShoppingCart title="장바구니" />
            </Link>
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
            <GoSignOut className={styles.nav_sign_out} title="로그아웃" />
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
