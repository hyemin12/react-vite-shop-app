import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAppSelector } from "@hooks/redux";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import SuccessOrderModal from "@components/modal/SuccessOrderModal";
import styles from "./Layout.module.scss";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  const { viewSuccessOrder } = useAppSelector((state) => state.modalSlice);

  return (
    <div className={styles.layout}>
      {viewSuccessOrder && <SuccessOrderModal />}
      <ToastContainer
        position='bottom-left'
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme='colored'
      />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
