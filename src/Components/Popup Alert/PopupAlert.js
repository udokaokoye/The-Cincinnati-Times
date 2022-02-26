import React from 'react'
import './PopupAlert.css'
const PopupAlert = ({stateController}) => {
  return (
    <div className='popup_container'>
        <div className="popup_content">
            <button onClick={() => stateController ? stateController(false) : ''}>Close</button>
        </div>
    </div>
  )
}

export default PopupAlert