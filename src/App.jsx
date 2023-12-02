import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import CartContainer from "./components/cartContainer";
import RemovePopUp from "./components/RemovePopUp";

import { calculateTotals } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

/**
 * UI reference
 * https://cdn.dribbble.com/users/2058322/screenshots/7170609/media/0103f414c48d59a1e0b0f76ed60d6ec3.png
 */

function App() {
  const { cartItems, shippingMode } = useSelector((store) => store.cart);
  const { isOpened } = useSelector((store) => store.popUp);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, shippingMode]);

  return (
    <main>
      {isOpened && <RemovePopUp />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
