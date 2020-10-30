import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const ProductSize = ({ children, size }) => (
  <div className={`ProductSize-${size}`}>{children}</div>
)

ProductSize.propTypes = {
  children: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
}

ProductSize.defaultProps = {
  size: 'large',
}

export default ProductSize
