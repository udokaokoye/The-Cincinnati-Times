import React from 'react';
import LineBreaker from '../Line Breaker/LineBreaker';
import './NewsCategory.css';
const NewsCategory = ({categoryName}) => {
  return <div className='newscategory_container'>
      <div className="newscatg_bar">
          <h3>{categoryName}.</h3>
      </div>
      <LineBreaker />

      <div className="newscatg_wrapper">
          <div className="main_content">
              <div className="media">
                  <img src={require('../../Assets/Demo/bidenchristmas.jpg')} alt="" />
              </div>

              <div className="title">
                  <h1>White House frustrations grow over health chief Becerra’s handling of pandemic</h1>
              </div>
          </div>
          <div className="side_content">
              <div className="left_cnt">
                  <div className="left_media"><img src={require('../../Assets/Demo/download22.png')} alt="" /></div>
                  <div className="left_title"><h4>John James announces run for Michigan congressional seat</h4></div>

                  <div className='links_lst'>
                      <p>- John James announces run for Michigan congressional seat</p>
                      <LineBreaker />
                      <p>- John James announces run for Michigan congressional seat</p>
                      <LineBreaker />
                      <p>- John James announces run for Michigan congressional seat</p>
                      <LineBreaker />
                      <p>- John James announces run for Michigan congressional seat</p>
                      <LineBreaker />
                  </div>
              </div>

              <div className="right_cnt">
                  <li>More On {categoryName}</li>
              <div className='links_lst'>
                      <p>- John James announces run for Michigan congressional seat <br /> <span>6m ago</span></p>
                      <LineBreaker />
                      <p>- John James announces run for Michigan congressional seat <br /> <span>6m ago</span></p>
                      <LineBreaker />
                      <p>- John James announces run for Michigan congressional seat <br /> <span>6m ago</span></p>
                      <LineBreaker />
                      <p>- John James announces run for Michigan congressional seat <br /> <span>6m ago</span></p>
                      <LineBreaker />
                      <p>- John James announces run for Michigan congressional seat <br /> <span>6m ago</span></p>
                      <LineBreaker />
                      <p>- John James announces run for Michigan congressional seat <br /> <span>6m ago</span></p>
                      <LineBreaker />
                      <p>- John James announces run for Michigan congressional seat <br /> <span>6m ago</span></p>
                      <LineBreaker />
                      <p>- John James announces run for Michigan congressional seat <br /> <span>6m ago</span></p>
                      <LineBreaker />
                      
                  </div>
              </div>
          </div>
      </div>
  </div>;
};

export default NewsCategory;
