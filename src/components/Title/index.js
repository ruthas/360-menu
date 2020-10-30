import React from 'react'
import PropTypes from 'prop-types'
import styles from './Title.module.css'

const Title = ({ table, category }) => (
  <div className={styles.Title}>
    <h2>Table {table}</h2>
    <h1>{category} Menu</h1>
  </div>
)

Title.propTypes = {
  table: PropTypes.number,
  category: PropTypes.string,
}

export default Title
