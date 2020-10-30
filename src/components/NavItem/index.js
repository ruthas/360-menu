import React from 'react'
import PropTypes from 'prop-types'
import styles from './NavItem.module.css'
import Icon from '../Icon'
import Copy from '../Copy'

const NavItem = ({ children, icon }) => (
  <div className={styles.NavItem}>
    <button type="button">
      <Icon name={icon} />
      <Copy
        style={{
          paddingTop: `9px`,
        }}
        size="small"
      >
        {children}
      </Copy>
    </button>
  </div>
)

NavItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  icon: PropTypes.string.isRequired,
}

export default NavItem
