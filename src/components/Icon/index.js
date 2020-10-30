import React from 'react'
import PropTypes from 'prop-types'
import DrinkSvg from '../assets/icons/Drink'
import StarterSvg from '../assets/icons/Starter'
import PaniniSvg from '../assets/icons/Panini'
import SaladSvg from '../assets/icons/Salad'
import PizzaSvg from '../assets/icons/Pizza'
import PastaSvg from '../assets/icons/Pasta'
import DessertSvg from '../assets/icons/Dessert'
import WaiterSvg from '../assets/icons/Waiter'
import PlusSvg from '../assets/icons/Plus'
import HeartSvg from '../assets/icons/HeartFilled'

const Icon = ({ name, size }) => {
  let content
  switch (name) {
    case 'DRINK':
      content = <DrinkSvg />
      break
    case 'STARTER':
      content = <StarterSvg />
      break
    case 'PANINI':
      content = <PaniniSvg />
      break
    case 'SALAD':
      content = <SaladSvg />
      break

    case 'PIZZA':
      content = <PizzaSvg />
      break

    case 'PASTA':
      content = <PastaSvg />
      break

    case 'DESSERT':
      content = <DessertSvg />
      break

    case 'WAITER':
      content = <WaiterSvg />
      break

    case 'PLUS':
      content = <PlusSvg />
      break

    case 'HEART':
      content = <HeartSvg />
      break

    default:
      break
  }

  let iconSize
  switch (size) {
    case 'small':
      iconSize = 10
      break
    case 'medium':
      iconSize = 16
      break
    case 'large':
      iconSize = 24
      break

    default:
      break
  }

  return (
    <div
      style={{
        fontSize: `${iconSize}px`,
        height: `${iconSize}px`,
        width: `${iconSize}px`,
        margin: `auto auto`,
      }}
    >
      {content}
    </div>
  )
}

Icon.propTypes = {
  /**
   * name of the icon
   */
  name: PropTypes.string.isRequired,
  /**
   * size of the icon to display
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

Icon.defaultProps = {
  size: 'medium',
}

export default Icon
