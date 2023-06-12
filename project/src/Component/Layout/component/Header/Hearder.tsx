import React, { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import img from '../../../../assets/images1/TT.png'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless';


const cx = classNames.bind(styles)

function Hearder() {
const [searchResult, setSearchResult] = useState([]);

useEffect(() =>{
  setTimeout(() =>{
setSearchResult([])
  }, 2000)
},[])

  return (
    <header className= {cx('wrapper')}>
        <div className={cx('inner')}>
          <div className={cx('logo')}>
            <img style={{width: 120}} src ={img} ></img>
          </div>

          <Tippy content= 'Tìm kiếm' interactive
          visible=  {searchResult.length > 0}
                      render={attrs => (
              <div className={cx('search-results')}tabIndex={-1} {...attrs}> 
              Tìm kiếm

              </div>
            )}
            >  

          <div className={cx('search')}>
            <input placeholder='Search and videos' spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon ={faXmark} />
            </button>
           <FontAwesomeIcon className={cx('loading')} icon={ faSpinner} />
           
              <button className={cx('search-btn')}>
              <FontAwesomeIcon icon ={faMagnifyingGlass} />
              </button>
          </div>
            </Tippy>
          <div className={cx('actions')}></div>
        </div>
      
    </header>
   
  ) 

}

export default Hearder