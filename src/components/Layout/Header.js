import React from 'react'
import styles from './Header.module.css'
import mealsImage from '../../assets/images/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {

  
  return (
    <>
    <header className= {styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart ={props.onShowCart}> 
        
        </HeaderCartButton>
    </header>
    <section className={styles['main-image']}>
    <img alt= "hyper leckes essen" src={mealsImage}></img>
    </section>
    </>
  )
}

export default Header