import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { toggle } from "../features/cart/popUpSlice";
import { memo } from "react";

const RemovePopUp = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-bg">
      <div className="modal-fg">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="modal-btn-ctn">
          <button
            onClick={() => {
              dispatch(clearCart());
              dispatch(toggle());
            }}
          >
            Confirm
          </button>
          <button onClick={() => dispatch(toggle())}>Cancel</button>
        </div>
      </div>
    </aside>
  );
};
export default memo(RemovePopUp);
