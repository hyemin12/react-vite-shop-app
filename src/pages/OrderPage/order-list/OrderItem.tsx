import React from "react";
import { Link } from "react-router-dom";
import { Product } from "src/store/products/products.type";

type OrderItemProps = {
  order: Product;
  idx: number;
};

const OrderItem: React.FC<OrderItemProps> = ({ order, idx }) => {
  const { id, image, category, title, price, quantity, total } = order;

  return (
    <tr>
      <td className='td_index'>
        <p>{idx}</p>
      </td>
      <td>
        <Link to={`/product/${id}`}>
          <div className='td_image_wrapper'>
            <img src={image} alt='product card' />
          </div>

          <div>
            <p className='td_category'>{category}</p>
            <h3 className='td_item_title'>{title}</h3>
          </div>
        </Link>
      </td>
      <td>
        <p>{quantity}</p>
      </td>
      <td>
        <p>${total}</p>
      </td>
    </tr>
  );
};

export default OrderItem;
