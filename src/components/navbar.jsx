import { ShoppingCart } from "lucide-react";
import { Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../store";
import { clearCart } from "../features/cart/cartSlice";
import { toggle } from "../features/cart/popUpSlice";
import { memo } from "react";
const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <nav>
      <div className="nav-header">
        <h1>Redux Cart</h1>
        <div className="cart-nav-container">
          <ShoppingCart className="cart-nav-shopping"></ShoppingCart>
          <Trash2
            className="cart-nav-delete"
            onClick={() => dispatch(toggle())}
          ></Trash2>
          <p className="cart-nav-size">{amount}</p>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
