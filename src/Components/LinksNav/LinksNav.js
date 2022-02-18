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
                <Link to={'/category/ohio'} className='link with_flag'>OHIO 
                <span className='flag_container'><img className='ohio_state_flag' src={require('../../Assets/Images/Icons/Flag_Map_of_Ohio.svg.png')} /></span>
                </Link>
                <Link to={'/category/entertainment'} className='link'> Entertainment</Link>
                <Link to={'/category/crime'} className='link'>Crime</Link>
                <Link to={'/category/sport'} className='link'>Sports</Link>
                <Link to={'/category/business'} className='link'>Business</Link>
                <Link to={'/category/lifestyle'} className='link'>Lifestyle</Link>
                <Link to={'/category/politcs'} className='link'>Politics</Link>
                <Link to={'/category/travel'} className='link'>Travel</Link>
                <Link to={'/category/world'} className='link'>World & Nation</Link>
            </div>
            <div className="right">
               <Link to={'/auth'} style={{color: 'white'}} className='router_link auth_nav_btn'><span>Sign In  <FontAwesomeIcon icon={faUser} /></span></Link>
               <div className="menu">
                   <FontAwesomeIcon icon={faBars} />
               </div>
            </div>
        </div>
    )
}

export default LinksNav
