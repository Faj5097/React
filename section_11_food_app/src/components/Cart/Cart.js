import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import SimpleInput from "./SimpleInput";

const Cart = (props) => {
  const [orderState, setOrderState] = useState("ITEMS_STATE");

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const onOrderHandle = () => {
    setOrderState("CUSTOMER_STATE");
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={onAddHandler.bind(null, item)}
          onRemove={onRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const orderCartItems = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={onOrderHandle}>
            Order
          </button>
        )}
      </div>
    </React.Fragment>
  );

  const orderCustomerForm = (
    <React.Fragment>
      <SimpleInput onHideCart={props.onHideCart} />
    </React.Fragment>
  );

  return (
    <Modal onClick={props.onHideCart}>
      {orderState === "CUSTOMER_STATE" ? orderCustomerForm : orderCartItems}
    </Modal>
  );
};

export default Cart;
