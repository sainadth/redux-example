import { useDispatch, useSelector } from "react-redux";
import cartItems from "../cartItems";
import CartItem from "./cartItem";
import { clearCart, updateShippingMode } from "../features/cart/cartSlice";
import { memo } from "react";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total, shippingMode } = useSelector(
    (store) => store.cart
  );
  if (amount < 1) {
    return (
      <section>
        <header>
          <h2>YOUR CART IS EMPTY</h2>
        </header>
      </section>
    );
  }
  return (
    <section>
      <header>
        <div className="cart-container">
          <label htmlFor="">Product</label>
          <label htmlFor="">Price</label>
          <label htmlFor="">Quantity</label>
          <label htmlFor="">Total</label>
        </div>
        <hr />
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <footer>
        <div className="total">
          <div className="shipping-container">
            <b>&nbsp;Choose shipping mode:</b>
            <div>
              <input
                type="radio"
                name="contact"
                onChange={() => dispatch(updateShippingMode(0))}
              />
              <span>
                Store pickup [in 20 min] <b> . FREE</b>
              </span>
            </div>
            <div>
              <input
                type="radio"
                name="contact"
                onChange={() => dispatch(updateShippingMode(1))}
              />
              <span>Delivery at home [Under 2-3 days] . 9.90£</span>
            </div>
          </div>
          <div className="checkout-container">
            <div>
              <span>SUBTOTAL</span>
              <span>{(total - (shippingMode ? 9.9 : 0)).toFixed(2)}£</span>
            </div>
            <div>
              <span>SHIPPING</span>
              <span>{shippingMode ? "9.90" : "FREE"}</span>
              {/* <hr /> */}
            </div>
            <hr />
            <div>
              <span>TOTAL</span>
              <span>{total.toFixed(2)}£</span>
            </div>
            <button /* onClick={() => dispatch(clearCart())} */>
              Checkout
            </button>
          </div>
        </div>
      </footer>
      <div
        style={{
          font: "caption",
        }}
      >
        @Copyright developed by Sainadth Pagadala
      </div>
    </section>
  );
};
export default memo(CartContainer);
