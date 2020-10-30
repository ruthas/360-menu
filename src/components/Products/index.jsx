import React, { useContext } from 'react'
import styled from 'styled-components'
import RestaurantContext from '../../context/Restaurant'
import styles from './Products.module.css'
import Icon from '../Icon'
import Title from '../Title'
import Card from '../Card'

const ImageWrap = styled.div`
  height: 160px;
  width: 99px;
  object-fit: cover;
  border-radius: 6px 0px 0px 6px;
`

const Products = () => {
  const { activeCategory, products, setActiveProduct } = useContext(
    RestaurantContext
  )
  return (
    <div>
      <Title table={19} category={activeCategory.name} />
      <div className={styles.Products}>
        {products
          .filter(product => product.category.includes(activeCategory.id))
          .map(product => (
            <Card
              onClick={() => setActiveProduct(product)}
              key={product.id}
              name={product.name}
              description={product.description}
              amount={product.price}
              image={
                product.images?.[0]?.thumbnails.large.url ? (
                  product.images[0].thumbnails.large.url
                ) : (
                  <ImageWrap>
                    <Icon size="large" name={activeCategory.icon} />
                  </ImageWrap>
                )
              }
              likes={product.likes}
            />
          ))}
      </div>
    </div>
  )
}
export default Products
