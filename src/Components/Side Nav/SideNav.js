import React from 'react'
import './SideNav.css';

const SideNav = () => {
  return (
    <div className="sideNav_container">
        <div className="side_nav_wrapper">
            <div className="search">
                <input placeholder='Search...' type="text" />
                <button>Go</button>
            </div>
        </div>
    </div>
  )
}

export default SideNav