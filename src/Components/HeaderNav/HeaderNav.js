import React from 'react'
import LinksNav from '../LinksNav/LinksNav'
import './HeaderNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCloudRain, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import HotTopics from '../Hot Topics/HotTopics';

const HeaderNav = () => {
    return (
        <section className='header'>
            <LinksNav />
            <section className='sub_header'>
                <div className="left">
                    <p>Wednesday, December 22, 2021</p>
                </div>
                <div className="center">
                    <h1>The Cincinnati Times</h1>
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
