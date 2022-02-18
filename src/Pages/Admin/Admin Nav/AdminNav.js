import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNav.css'

const AdminNav = () => {
  return <div className='adminNav_container'>
      <div className="nv_top">
          <h1>The Cincinnati Times</h1>
          <button className='user_btn'> <FontAwesomeIcon icon={faUser} /> Levi Okoye</button>
      </div>

      <div className="nv_links">
          <Link className='admNav_link'>Dashboard</Link>
          <Link className='admNav_link'>Add Post</Link>
          <Link className='admNav_link'>View All Post</Link>
          <Link className='admNav_link'>Pending Posts</Link>
          <Link className='admNav_link'>Edit Post</Link>
          <Link className='admNav_link'>News Categories</Link>
          <Link className='admNav_link'>Add User</Link>
      </div>
  </div>;
};

export default AdminNav;
