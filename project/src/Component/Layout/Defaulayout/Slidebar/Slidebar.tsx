import React from 'react'
import classNames from 'classnames/bind'
import styles from './Siderbar.module.scss'

const cx = classNames.bind(styles)
function Slidebar() {
  return (
    <aside className={cx('wrapper')}>
      <h2>Side bar</h2>
    </aside>
  )
}

export default Slidebar