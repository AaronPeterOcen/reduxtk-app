import React from "react";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all Items from cart?</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            type="button"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            Confirm
          </button>
          <button
            className="btn clear-btn"
            type="button"
            onClick={() => {
              // dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            Cancel
          </button>
        </div>
      </div>
      Modal
    </aside>
  );
};

export default Modal;
