import React from 'react'
import { Link } from 'react-router-dom'
import './AllPost.css'
const AllPost = () => {
  return (
    <div className='allpost_container'>
        <div className="allpost_wrapper">
            <div className="allpost_search">
            <h1>All Posts</h1>

            <input type="text" placeholder='Search...' />
            </div>

            <div className="allPosts">
                <div className="post">
                    <Link><div className="media"></div></Link>
                    <Link className='router_link'><div className="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolore velit iste?</div></Link>
                    <div className="ft"><p>22-01-2022 - 12:00pm</p> <p>Levi Okoye</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllPost