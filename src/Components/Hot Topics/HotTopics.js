import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './HotTopics.css'
const HotTopics = () => {
    return (
        <div className='hot_topics'>
            <p className='hot_topics_intro'>Hot Topics:</p>
            <Link className='topics'><p>Omicron</p></Link>
            <Link className='topics'><p>Covid-19</p></Link>
            <Link className='topics'><p>Christmas</p></Link>
            <Link className='topics'><p>Stocks</p></Link>
            <Link className='topics'><p>Homicide</p></Link>
        </div>
    )
}

export default HotTopics
