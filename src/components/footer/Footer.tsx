import { BsGithub } from "react-icons/bs";
import styles from "./Footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p> ⓒ {year} HYEMIN</p>
      </div>
    </footer>
  );
};

export default Footer;
