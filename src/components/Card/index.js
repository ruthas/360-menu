import React from 'react'
import PropTypes from 'prop-types'
import styles from './Card.module.css'
import ProductName from '../ProductName'
import ProductImage from '../ProductImage'
import Icon from '../Icon'
import LikeCount from '../LikeCount'
import Copy from '../Copy'
import Price from '../Price'

const Card = ({ name, description, amount, image, likes }) => (
  <div className={styles.Card}>
    <div className={styles.ImageDiv}>
      <ProductImage image={image} name={name} />
    </div>
    <div className={styles.TextDiv}>
      <div className={styles.Name}>
        <ProductName name={name}>
          <h4>{name}</h4>
        </ProductName>
      </div>
      <div className={styles.Likes}>
        <LikeCount numberOfLikes={likes} />
      </div>
      <div className={styles.Description}>
        <Copy>
          <p>{description}</p>
        </Copy>
      </div>
      <div className={styles.Price}>
        <Price amount={amount} />
      </div>
    </div>
    <div className={styles.Plus}>
      <button type="button">
        <Icon name="PLUS" />
      </button>
    </div>
  </div>
)

Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  amount: PropTypes.number,
  image: PropTypes.string,
  likes: PropTypes.number,
}

export default Card
