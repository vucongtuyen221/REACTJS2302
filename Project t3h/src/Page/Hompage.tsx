import React from 'react'
import { Link, Outlet} from 'react-router-dom'
import Login from './Login'
import './styleRegister/style1.scss'
import { Button, MenuProps } from 'antd'



function Hompage() {
   
  return (
    <div className='bg'>
        <ul className='ul'>
           <li ><Link className='li' to={'/'}>  Trang chủ</Link></li>
           <li ><Link className='li' to={'/login'}>Đăng nhập</Link></li>
    </ul>
  
<section>
    <Outlet/>
</section>
    </div>
  )
}

export default Hompage