import Hearder from "../component/Header/Hearder";
import styles from './Defaulayout.module.scss';

import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

import Slidebar from "./Slidebar/Slidebar";

function Defaulayout({children}: {children : any}) {
  return (
    <div className={cx('wrapper')}>
        <Hearder />
        <div className={cx('container')}>
             <Slidebar/>
            <div className={cx('content')}> {children}</div>
        </div>
    </div>
  )
}

export default Defaulayout