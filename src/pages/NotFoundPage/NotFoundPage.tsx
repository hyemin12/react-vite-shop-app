import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <div className="page">
      <div className="container">
        <div className={styles.not_found}>
          <img src="/img/not-found.png" alt="페이지 찾을 수 없음" />
          <h4>죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다. </h4>
          <p>존재하지 않는 주소를 입력하셨거나</p>
          <p>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</p>
          <Link to="/">메인으로</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
