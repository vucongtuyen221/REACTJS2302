import React, { useState } from 'react'
import { Link, Outlet} from 'react-router-dom'
import Login from '../Login/Login'
import styles from './Home.module.scss'

import classNames from 'classnames/bind'


// phần của bạn Hải//
// mình dùng scss hàm bind của thư viện classnames//

const cx = classNames.bind(styles)



function Hompage() {

  return (

<>


    <div className={cx('bg')}>

        <ul className={cx('ul')}>
   

           <li ><Link className={cx('li')} to={'/'}>  Trang chủ</Link></li>
           <li ><Link className={cx('li')} to={'/login'}>Đăng nhập</Link></li>
    </ul>
  
<section>
    <Outlet/>
</section>
    </div>
    </>
  )
}

export default Hompage