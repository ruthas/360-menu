import React, { useContext } from 'react'
import styles from './Orders.module.css'
import RestaurantContext from '../../context/Restaurant'
import Icon from '../Icon'
import OrderCard from '../OrderCard'

const Orders = () => {
  const {
    orders,
    addToOrders,
    removeOrderAtIndex,
    setActiveProduct,
  } = useContext(RestaurantContext)
  return (
    <div className={styles.Orders}>
      <h2>Order Summary</h2>
      {orders.map((order, index) => (
        <OrderCard
          key={`order_${order.id}`}
          name={order.name}
          descr={order?.selectedOption?.option}
          price={order.total}
        >
          {order.name} entry components &bull; {order?.selectedOption?.option}
          <button type="button" onClick={() => addToOrders(orders)}>
            <Icon name="COPY" />
          </button>
          <button type="button" onClick={() => removeOrderAtIndex(index)}>
            🗑
          </button>
          <button type="button" onClick={() => setActiveProduct(order)}>
            ✏️
          </button>
        </OrderCard>
      ))}
    </div>
  )
}

export default Orders
