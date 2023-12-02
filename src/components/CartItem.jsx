import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { X } from "lucide-react";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { memo } from "react";

const CartItem = (props) => {
  // console.log(props);
  const { title, id, price, img, amount } = props.item;
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart-container">
        <div
          style={{
            display: "flex",
          }}
        >
          <img src={img} alt="" className="cart-container-img" />
          <div>{title}</div>
        </div>
        <div>{price}£</div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            className="incdec"
            onClick={() =>
              amount > 1 ? dispatch(decrease(id)) : dispatch(removeItem(id))
            }
          >
            <Minus />
          </button>
          <div>{amount}</div>
          <button className="incdec" onClick={() => dispatch(increase(id))}>
            <Plus />
          </button>
        </div>
        <div>{(price * amount).toFixed(2)}£</div>
      </div>
      <hr />
    </>
  );
};
export default memo(CartItem);
