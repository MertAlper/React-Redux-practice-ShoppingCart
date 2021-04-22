import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const products = useSelector((state) => state.cartReducer.products);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {products.length === 0 ? (
          <h1> Your cart is empty</h1>
        ) : (
          products.map((product, index) => {
            return (
              <li>
                <CartItem
                  item={{
                    id: product.id,
                    title: product.title,
                    quantity: product.amount,
                    price: product.price,
                  }}
                />
              </li>
            );
          })
        )}
      </ul>
    </Card>
  );
};

export default Cart;
