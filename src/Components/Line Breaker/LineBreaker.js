import React from 'react'
import './LineBreaker.css'
const LineBreaker = ({mode, width, margin}) => {
    return (
        <div>
            <hr 
            className='line_breaker_line' 
            style={{
                borderWidth: mode == 'thick' ? 1.1 : 0.5, 
                borderColor: mode == 'thick' ? '#272727' : '#e0e0db',
                backgroundColor: mode == 'thick' ? '#272727' : '#e0e0db',
                width: width !== 'full' ? `${width + '%'}` : '100%',
                marginTop: margin ? `${margin + 'px'}` : 10,
                marginBottom: margin ? `${margin + 'px'}` : 10
                }} />
        </div>
    )
}

export default LineBreaker
