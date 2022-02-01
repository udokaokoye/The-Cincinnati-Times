import React, {useState} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LineBreaker from '../../Components/Line Breaker/LineBreaker'
import TopStories from '../../Components/Top Stories/TopStories'
import './Home.css'
import { faArrowRight, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Weather from '../../Components/Weather/Weather';
import NewsCategory from '../../Components/News Category/NewsCategory';
import NewsCategory2 from '../../Components/News Category 2/NewsCategory2';
import GridCategory from '../../Components/Grid Category/GridCategory';
import HorizontalAds from '../../Components/Horizontal Ads/HorizontalAds';
const Home = () => {
    const dummy = [1,2,3,4,5,6,7,8,9,0]
    return (
        <div className='container'>
            <div className="container-wrapper">
                <div className="main_content">
                    <div className="showcase">
                        <div className="showcase_top">
                            <div className="showcase_content">
                                <h1 className="show_contnent_title">Inside Klete Keller’s fall from Olympic gold to the Capitol riot</h1>
                                <p className="show_content_description">Keller has pleaded guilty to a felony charge of obstructing an officialproceeding before Congress and agreed to cooperate with the government’s investigation.</p>

                                <div className="showcase_content_child">
                                    <p className="content_child_header"> More Coverage</p>
                                    <p className="content_child_title">
                                        <Link className='router_link'><p>California lawmakers on Jan. 6: ‘I really thought that I was going to die that day’</p></Link>
                                        <LineBreaker width='full' />
                                        <Link className='router_link'><p>California lawmakers on Jan. 6: ‘I really thought that I was going to die that day’</p></Link>
                                    </p>
                                </div>
                            </div>
                            <div className="showcase_main">
                                <img className='show_main_media' src={require('../../Assets/Demo/bidenchristmas.jpg')} alt="" />
                                <div className="gradient">
                                    <h1 className="show_main_title">As Covid cases explode in California, next few weeks are ‘absolutely critical’</h1>
                                </div>
                            </div>
                        </div>
                        <div className="showcase_bottom">
                            <div className="btm_news_1">
                                <p>Trauma in House gallery bonds members of Congress even a year later</p>
                            </div>
                            <div className="btm_news_2">
                                <p>As Capitol riot anniversary nears, Western allies fear for health of U.S. democracy</p>
                            </div>
                            <div className="btm_news_3">
                                <p>A photographer’s helmet cam captured the Jan. 6 assault on the Capitol</p>
                            </div>
                        </div>
                    </div>
                    <LineBreaker mode='thick' width='full' />
                    <TopStories /> 
                </div>
                <div className="right_bar">
                    <LineBreaker mode='thick' margin='0'  width='98' />
                    <div className="right_bar_opinion">
                        <div className="right_opionion_bar">
                            <h3>OPINION</h3> <FontAwesomeIcon style={{marginLeft: 7}} icon={faArrowRight} />
                        </div>
                        <LineBreaker />

                        <div className="right_bar_opinion_content">
                            <p> Editorial: Where are the COVID tests Newsom promised for schools? </p>
                        </div>
                        <LineBreaker />
                        <div className="right_bar_opinion_content">
                            <p> Jonah Goldberg: ‘Don’t Look Up’ is a political satire that misses its target </p>
                        </div>
                        <LineBreaker />
                        <div className="right_bar_opinion_content">
                            <p> Editorial: Where are the COVID tests Newsom promised for schools? </p>
                        </div>
                        <LineBreaker />
                        <div className="right_bar_opinion_content">
                            <p> Editorial: Where are the COVID tests Newsom promised for schools? </p>
                        </div>
                        <LineBreaker />
                        <div className="right_bar_opinion_content">
                            <p> Editorial: Where are the COVID tests Newsom promised for schools? </p>
                        </div>
                    </div>
                    <br />
                    <LineBreaker mode='thick' width={98} />

                    <div className="covid_tracker">
                        <div className="covid_tracker_bar">
                            <h3>Coronavirus in Cincinnati</h3> <FontAwesomeIcon style={{marginLeft: 7}} icon={faArrowRight} />
                        </div>
                        <LineBreaker />

                        <div className="covid_tracker_content">
                            <div className="covid_tracker_cases">
                                <span className=''>Cases</span>
                                <span className='toll'>15K</span>
                                <span className='rate'>+525%</span>
                            </div>
                            <div className="covid_tracker_deaths">
                                <span className=''>Deaths</span>
                                <span className='toll'>15K</span>
                                <span className='rate'>+525%</span>
                            </div>

                            <div className="covid_tracker_vaccine">
                                <h3>Vaccines</h3>
                                <div className="vaccine_toll">
                                    <p className="figure">73%</p>
                                    <div className="toll_color_code"><div className='ovrly_cnt'></div></div>
                                </div>
                                <small>are fully vaccinated</small>

                                <p className='find_shot'>Find a vaccine shot near you {">>"}</p>
                            </div>
                        </div>
                    </div>

                    <br />
                    <LineBreaker mode='thick' width={98} />

                    <div className="right_bar_subscribe">
                        <h3>Subscribe to Newsletter{" >>"} </h3>
                        <LineBreaker />
                        <p className="subscribe_intro">Get the best of The Cincinnati Times delivered to your inbox daily</p>

                        <input type="email" className='right_bar_subscribe_input' placeholder='Enter email address' />
                        <button className='right_bar_subscribe_btn'>SUBSCRIBE</button>
                    </div>

                    <br />
                    <LineBreaker mode='thick' width={98} />

                    <div className="right_bar_weather">
                        <div className="weather_br_location">
                            <h3>Weather {">>"} </h3>

                            <span><FontAwesomeIcon icon={faMapMarkerAlt} /> Cincinnati</span>
                        </div>
                        <LineBreaker />
                        <Weather />
                    </div>

                    <br />
                    <LineBreaker mode='thick' width={98} />

                    <div className="right_vaccine_finder">
                        <h3>Vaccine {">>"} </h3>
                        <LineBreaker />

                        <p>Find Vaccine shots near you! Enter you zip code below</p>

                        <center><input type="text" className='zipcode_field' placeholder='Enter Zip Code' /></center>
                        {/* <br /> */}
                        <center><button>SEARCH!</button></center>
                    </div>

                    <div className="right_ads_cnt">
                    <div className="ads_sign"></div>
                    </div>
                </div>
            </div>

            <LineBreaker mode='thick' width='full' />
            <div className="categories">
                <NewsCategory categoryName={"Politcs"} />

                <LineBreaker mode='thick' width='full' margin={"25"} />

                <NewsCategory2 categoryName={'Sports'} />

                <LineBreaker mode='thick' width='full' margin={"25"} />
                <GridCategory categoryName={"Cincy Times Cooking"} />

                    <br />
                <LineBreaker mode='thick' width='full' margin={"25"} />
                <NewsCategory categoryName={"Entertainment"} />

                <HorizontalAds />

                <br />
                <LineBreaker mode='thick' width='full' margin={"25"} />
                <NewsCategory2 categoryName={"Business"} img={"buss.jpg"} />


                <LineBreaker mode='thick' width='full' margin={"25"} />
                <GridCategory categoryName={"Cincy Times Cooking"} />
            </div>
        </div>
    )
}

export default Home
