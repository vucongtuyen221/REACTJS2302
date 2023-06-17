import React from 'react'
import { CheckCircleOutlined } from '@ant-design/icons'
import classNames from 'classnames/bind'
import styles from './Account.module.scss'
import { Link } from 'react-router-dom'

export interface List {
  id: number,
  first_name: string,
  last_name: string,
  full_name: string,
  nickname: string,
  avatar: string,
  bio: string,
  tick: boolean,
  followwings_count: number,
  followers_count: number,
  likes_count: number,
  website_url: string,
  facebook_url: string,
  youtube_url: string,
  twitter_url: string,
  instagram_url: string,
  reated_at: string,
  updated_at: string,

}




const cx = classNames.bind(styles)

function AccountItem({data}: any) {
  return (
    <Link className={cx('wrapper')} to={`http://google.com`}>   {/*=>> link vô video phim */}
    
    <img className={cx('avatar')} 
src= {data.avatar}
    alt={data.full_name}/>
    <div className={cx('info')}>
        <h4 className={cx('name')}>
            <span>{data.full_name}</span>
            {data.tick && <CheckCircleOutlined className={cx('icon')} />}
              
             
        </h4>
         <span className={cx('username')}>{data.nickname}</span>

    </div>
</Link>
  )
}

export default AccountItem