import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { toggleSuccessOrderModal } from "src/store/modal/modal.slice";
import styles from "./Modal.module.scss";

const SuccessOrderModal = () => {
  const dispatch = useAppDispatch();
  const { order } = useAppSelector((state) => state.orderSlice);
  const newOrder = order.at(-1);

  const changeDateFormat = (date: string) => {
    if (!date) return;
    return date.slice(0, 19).replace("T", " ");
  };
  const closeSuccessOrderModal = () => {
    dispatch(toggleSuccessOrderModal(false));
  };
  console.log(order);
  if (!order || !newOrder) return;

  return (
    <div className={styles.modal_container}>
      <div>
        <h2>고객님의 주문이 완료 되었습니다.</h2>
        <p>
          주문번호 <span>{newOrder.id}</span>
        </p>
        <p>
          주문일자 <span>{changeDateFormat(newOrder.createdAt as string)}</span>
        </p>
        <div className={styles.button_group}>
          <Link to='/' className='button' onClick={closeSuccessOrderModal}>
            계속 쇼핑하기
          </Link>
          <Link
            to='/order'
            className='primary-button'
            onClick={closeSuccessOrderModal}
          >
            주문내역 보기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessOrderModal;
