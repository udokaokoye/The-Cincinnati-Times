import React from 'react';
import LineBreaker from '../Line Breaker/LineBreaker';
import './NewsCategory2.css';
const NewsCategory2 = ({categoryName, img='download (1).png'}) => {
  return <div className='newscategory_container'>
      <div className="newscatg_bar">
          <h3>{categoryName}.</h3>
      </div>
      <LineBreaker />

      <div className="newscatg_wrapper">
          <div className="main_content2">
                <div className='links_lst'>
                        <div className="links_wrap">
                            <h3>- John James announces run for Michigan congressional seat</h3>
                            <p>Ms. Kryst, who was also a correspondent for the television show “Extra,” was found dead on Sunday in New York.</p>
                        </div>
                        <LineBreaker />
                        <div className="links_wrap">
                            <h3>- John James announces run for Michigan congressional seat</h3>
                            <p>Big shows did well when they returned in the fall after the long pandemic shutdown but new plays struggled, previously undisclosed industry data shows.</p>
                        </div>
                        <LineBreaker />
                        <div className="links_wrap">
                            <h3>- John James announces run for Michigan congressional seat</h3>
                            <p>Ms. Kryst, who was also a correspondent for the television show “Extra,” was found dead on Sunday in New York.</p>
                        </div>
                        <LineBreaker />
                        <div className="links_wrap">
                            <h3>- John James announces run for Michigan congressional seat</h3>
                            <p>Big shows did well when they returned in the fall after the long pandemic shutdown but new plays struggled, previously undisclosed industry data shows.</p>
                        </div>
                        <LineBreaker />
                </div>

                <div className="main_show">
                    <div className="media">
                    <img src={require(`../../Assets/Demo/${img}`)} alt="" />
                </div>

                <div className="title">
                    <h1>White House frustrations grow over health chief Becerra’s handling of pandemic</h1>
                </div>
                </div>
          </div>
          <div className="side_content2">
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
  </div>;
};

export default NewsCategory2;
