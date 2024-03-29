import classNames from 'classnames/bind';
import styles from './Wrapper.module.scss'

const cx = classNames.bind(styles)
function Wrapper({children}: any) {
  return (
    <div className={cx('wrapper')}>{children}</div>
  )
}

export default Wrapper