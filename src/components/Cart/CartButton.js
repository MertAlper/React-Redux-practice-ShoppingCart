import classes from './CartButton.module.css';
import {cartActions} from '../../store/CartReducer';
import { useDispatch, useSelector } from "react-redux";
const CartButton = (props) => {
  const products = useSelector((state) => state.cartReducer.products);
  const toggle= ()=> dispatch(cartActions.toggleCart());
  const dispatch = useDispatch();

  return (
    <button onClick={toggle} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{products.length}</span>
    </button>
  );
};

export default CartButton;
