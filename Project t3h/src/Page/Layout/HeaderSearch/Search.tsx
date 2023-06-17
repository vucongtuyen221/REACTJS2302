import  { useEffect, useState, useRef } from 'react'
import styles from './Search.module.scss'
import classNames from 'classnames/bind'
    
import {LoadingOutlined, CloseCircleOutlined, SearchOutlined
 } from '@ant-design/icons'
import Tippy from '@tippyjs/react/headless';
import Wrapper  from './Wapper/Wrapper'
import AccountItem, { List } from './Account/AccountItem'
import HeadlessTippy from '@tippyjs/react/headless';
import axios from 'axios';
import Debounce from './debounce/Debounce';



const cx = classNames.bind(styles)


function Search() {
  const [searchValue, setSearchValue] = useState('')
const [searchResult, setSearchResult] = useState<any>([]);
const [showR, setShowR] = useState(true);
const [loading, setLoading] = useState(false);
const Deboun = Debounce(searchValue, 2900)


const inputRef = useRef<any> ()

const hendleClear = ()=> {
      setSearchValue('');
       setSearchResult([])
        inputRef.current.focus();
}

useEffect(() => {
  if(!Deboun.trim()) {
      setSearchResult([])
    return
  }
  setLoading(true)
  axios.get(`http://tiktok.fullstack.edu.vn/api/users/search`, {//phần gọi Api của Search Video
    params: {
      q: Deboun,
      type: 'less'
    }
  }).then((res) =>{
         setSearchResult(res.data.data);
        setLoading(false);
}).catch((err) =>{
  setLoading(false);
})
}, [Deboun])


const hanldHide = () => {
  setShowR(false)
}

  return (
    <header className= {cx('wrapper')}>
        <div className={cx('inner')}>
          <Tippy       
           interactive
            visible ={showR && searchResult.length > 0}
            render={attrs => (
              <div className={cx('search-results')} tabIndex={-1} {...attrs}> 
              <Wrapper>
               <h4 className={cx('search-title')}>
                Accounts
               </h4>
               <hr style={{width: 400}} />
               {searchResult.map((result: List) => (
                    <AccountItem key = {result.id} data = {result} />
               ))}  
              </Wrapper>
                </div>
            )}
            onClickOutside={hanldHide}
            >  

          <div className={cx('search')}>
            <input 
             ref = {inputRef} 
            value={searchValue}
              placeholder='Search and videos' 
              spellCheck={false}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setShowR(true)} 
              />
              {!!searchValue && ! loading &&(
                   <button className={cx('clear')}
                   onClick= {hendleClear}>
                   <CloseCircleOutlined />
                   </button>
              )}
        
            {loading && <LoadingOutlined className={cx('loading')}/>}
           
              <button  className={cx('search-btn')}>
              <SearchOutlined      ref = {inputRef} 
            value={searchValue} />
              </button>
          </div>
            </Tippy>
            </div>
    </header>
  ) 

}

export default Search;