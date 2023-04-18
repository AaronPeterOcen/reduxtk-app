import React from "react";
import { useSelector } from "react-redux";
import { ChevronDown, ChevronUp } from "../icons";

const CartItem = ({ id, price, title, img, amount }) => {
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn">remove</button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => {}}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={() => {}}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
