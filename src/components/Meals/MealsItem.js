import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import classes from './MealsItem.module.css'
import MealsItemForm from './MealsItemForm'

const MealsItem = (props) => {
    const cartCtx = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        }
        )
    };

  return (
    <li id={props.id} className={classes.meal}>
        <div>
        <h3 >{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
        </div>
        <MealsItemForm onAddToCart = {addToCartHandler}/>
    </li>
  )
}

export default MealsItem
// id: 'm1',
//       name: 'Sushi',
//       description: 'Finest fish and veggies',
//       price: 22.99,