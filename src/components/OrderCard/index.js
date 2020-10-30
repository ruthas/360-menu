import React from 'react'
import PropTypes from 'prop-types'
import Copy from '../Copy'
import Icon from '../Icon'
import Price from '../Price'
import ProductName from '../ProductName'
import styles from './OrderCard.module.css'

const OrderCard = ({ name, descr, price }) => (
  <div className={styles.OrderCard}>
    <ProductName name={name} />
    <Copy size="small">{descr}</Copy>
    <Price amount={price}>{price}</Price>
    <button type="button" id="duplicate">
      <Icon name="COPY" />
    </button>
    <button type="button" id="delete">
      <Icon name="TRASH" />
    </button>
    <button type="button" id="edit">
      <Icon name="PENICIL" />
    </button>
    <hr />
  </div>
)

OrderCard.PropType = {
  name: PropTypes.string,
  descr: PropTypes.string,
  price: PropTypes.number,
}

export default OrderCard
