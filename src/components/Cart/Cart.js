import React, { Fragment, useContext } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const hasItems = cartCtx.items.length > 0;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
    

  const cartItemAddHandler = (item) => {
      cartCtx.addItem({...item, amount:1});
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Fragment>
      <Modal onClose={props.onHideCart}>
        {cartItems}

        <section className={classes.total}>
          <h1>Total Amount</h1>
          <h2>{totalAmount}</h2>
        </section>
        <section className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onHideCart}>
            Close
          </button>
          {hasItems && <button className={classes.button}>Order</button>}
        </section>
      </Modal>
    </Fragment>
  );
};

export default Cart;
