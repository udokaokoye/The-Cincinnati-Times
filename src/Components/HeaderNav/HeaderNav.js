import React from 'react'
import LinksNav from '../LinksNav/LinksNav'
import './HeaderNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCloudRain, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import HotTopics from '../Hot Topics/HotTopics';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
    return (
        <section className='header'>
            <LinksNav />
            <section className='sub_header'>
                <div className="left">
                    <p>Wednesday, December 22, 2021</p>
                </div>
                <div className="center">
                   <Link to={'/'} className='router_link'><h1>The Cincinnati Times</h1></Link> 
                </div>
                <div className="right">
                    <FontAwesomeIcon icon={faCloudRain} className='weather_icn' /> 32°F
                </div>
            </section>
            <HotTopics />
        </section>
    )
}

export default HeaderNav
