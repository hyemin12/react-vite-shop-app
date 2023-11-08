import { Outlet } from "react-router-dom";
import { useAppSelector } from "@hooks/redux";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import SuccessOrderModal from "@components/modal/SuccessOrderModal";
import styles from "./Layout.module.scss";

const Layout = () => {
  const { viewSuccessOrder } = useAppSelector((state) => state.modalSlice);
  return (
    <div className={styles.layout}>
      {viewSuccessOrder && <SuccessOrderModal />}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
