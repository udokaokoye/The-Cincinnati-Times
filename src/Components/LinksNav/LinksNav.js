import React from 'react'
import './LinksNav.css'
import {
    Link
  } from "react-router-dom";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
const LinksNav = () => {
    return (
        <div className='links_nav'>
            <div className="left">
                <div className='search_bars'>
                    <div className="search_icn"><FontAwesomeIcon icon={faSearch} /></div>
                    <div className="menu_bar"><FontAwesomeIcon icon={faBars} /></div>
                </div>
                <Link className='link with_flag'>OHIO 
                <span className='flag_container'><img className='ohio_state_flag' src={require('../../Assets/Images/Icons/Flag_Map_of_Ohio.svg.png')} /></span>
                </Link>
                <Link className='link'> Entertainment</Link>
                <Link className='link'>Crime</Link>
                <Link className='link'>Sports</Link>
                <Link className='link'>Business</Link>
                <Link className='link'>Lifestyle</Link>
                <Link className='link'>Politics</Link>
                <Link className='link'>Travel</Link>
                <Link className='link'>World & Nation</Link>
            </div>
            <div className="right">
                <span>Sign In  <FontAwesomeIcon icon={faUser} /></span>
            </div>
        </div>
    )
}

export default LinksNav
