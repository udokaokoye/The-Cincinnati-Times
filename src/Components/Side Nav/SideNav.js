import React from 'react'
import { Link } from 'react-router-dom';
import './SideNav.css';

const SideNav = ({setsideToggle}) => {

    const disableSidebar = () => {
        setsideToggle(false)
    }
  return (
    <div className="sideNav_container">
        <div className="side_nav_wrapper">
            <div className="search">
                <input placeholder='Search...' type="text" />
                <button>Go</button>
            </div>

            
            <h3 className='side_intro'>News</h3>

            <div className="side_bar_news_list">
                <div className="left">
                    <Link onClick={() => disableSidebar()} to={'/'} className='side_links'>Home</Link>
                    <Link onClick={() => disableSidebar()} to={'/category/ohio'} className='side_links'>Ohio</Link>
                    <Link onClick={() => disableSidebar()} to={'/category/entertainment'} className='side_links'>Entertainment</Link>
                    <Link onClick={() => disableSidebar()} to={'/category/crime'} className='side_links'>Crime</Link>
                    <Link onClick={() => disableSidebar()} to={'/category/sport'} className='side_links'>Sport</Link>
                    <Link onClick={() => disableSidebar()} to={'/category/business'} className='side_links'>Business</Link>
                    <Link onClick={() => disableSidebar()} to={'/category/lifestyle'} className='side_links'>Lifestyle</Link>
                    <Link onClick={() => disableSidebar()} to={'/category/politcs'} className='side_links'>Politics</Link>
                    <Link onClick={() => disableSidebar()} to={'/category/travel'} className='side_links'>Travel</Link>
                    <Link onClick={() => disableSidebar()} to={'/category/world'} className='side_links'>World & Nation</Link>
                </div>
                <div className="right">
                    <Link onClick={() => disableSidebar()} className='side_links'>Super Bowl</Link>
                    <Link onClick={() => disableSidebar()} className='side_links'>Oplympics</Link>
                    <Link onClick={() => disableSidebar()} className='side_links'>Russia Vs Ukraine</Link>
                    <Link onClick={() => disableSidebar()} className='side_links'>Covid-19</Link>
                </div>
            </div>

            <div className="side_subscribe">
                <p>Subscribe To Our Newsletter</p>
                <input type="email" placeholder='Enter Email' />
                <button className='side_sub_btn'>Susbscribe</button>
            </div>
        </div>
    </div>
  )
}

export default SideNav