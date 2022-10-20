import React from "react";

const CartContext = React.createContext({
    items: ['das', 'dasd'],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
})

export default CartContext