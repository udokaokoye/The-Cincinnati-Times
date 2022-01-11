import { faCloud, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Weather.css'

const Weather = () => {
    return (
        <div className='weather_container'>
            <div className="days">
                <div className="day">
                    <span className="day_name">Today</span>
                    <span className="weather_icn"><FontAwesomeIcon color='yellow' icon={faSun} /></span>
                    <span className="weather_info">38°-27°</span>
                </div>
                <div className="day">
                    <span className="day_name">Tue</span>
                    <span className="weather_icn"><FontAwesomeIcon color='lightblue' icon={faCloud} /></span>
                    <span className="weather_info">38°-27°</span>
                </div>
                <div className="day">
                    <span className="day_name">Wed</span>
                    <span className="weather_icn"><FontAwesomeIcon color='#474545' icon={faMoon} /></span>
                    <span className="weather_info">38°-27°</span>
                </div>
                <div className="day">
                    <span className="day_name">Thu</span>
                    <span className="weather_icn"><FontAwesomeIcon color='yellow' icon={faSun} /></span>
                    <span className="weather_info">38°-27°</span>
                </div>

                <span className='seemore'>see more {">>"}</span>
            </div>
        </div>
    )
}

export default Weather
