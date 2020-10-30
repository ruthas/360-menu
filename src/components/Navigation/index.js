import React, { useContext } from 'react'
import styles from './Navigation.module.css'
import RestaurantContext from '../../context/Restaurant'
import NavItem from '../NavItem'
import Logo from '../Logo'

const Navigation = () => {
  const { categories, setActiveCategory, activeCategory } = useContext(
    RestaurantContext
  )

  return (
    <div className={styles.Navigation}>
      <Logo />
      {categories.map(category => (
        <NavItem
          key={category.id}
          name={category.name}
          icon={category.icon}
          onClick={() => setActiveCategory(category)}
          disabled={!category.Products}
          style={{
            color: `${
              category.id === activeCategory.id ? '#E54A2D' : '#FFFFFF'
            }`,
          }}
        >
          {category.name}
        </NavItem>
      ))}
      <NavItem
        name="waiter"
        icon="WAITER"
        style={{
          backgroundColor: `#E54A2D`,
        }}
      >
        Waiter
      </NavItem>
      {/* <NavItem name="heart">Drinks</NavItem>
      <NavItem name="heart">Starter</NavItem>
      <NavItem name="heart">Panini</NavItem>
      <NavItem name="heart">Salad</NavItem>
      <NavItem name="heart">Pizza</NavItem>
      <NavItem name="heart">Pasta</NavItem>
      <NavItem name="heart">Dessert</NavItem>
      <NavItem name="heart">Waiter</NavItem> */}

      {/* {data.map(category => (
        <NavItem key={category.id} name={category.icon}>
          {category.name}
        </NavItem>
      ))} */}
    </div>
  )
}

export default Navigation
