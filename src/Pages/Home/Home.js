import React, {useState} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LineBreaker from '../../Components/Line Breaker/LineBreaker'
import TopStories from '../../Components/Top Stories/TopStories'
import './Home.css'
import { faArrowRight, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Weather from '../../Components/Weather/Weather';
import NewsCategory2 from '../../Components/News Category 2/NewsCategory2';
import GridCategory from '../../Components/Grid Category/GridCategory';
import HorizontalAds from '../../Components/Horizontal Ads/HorizontalAds';
import HomeNewsCategory from '../../Components/News Category/HomeNewsCategory';
import CovidTracker from '../../Components/Covid Tracker/CovidTracker';
import VaccineFinder from '../../Components/Vaccine Finder/VaccineFinder';
import SubscribeBox from '../../Components/Subscribe Box/SubscribeBox';
const Home = () => {
    const dummy = [1,2,3,4,5,6,7,8,9,0]
    return (
        <div className='container'>
            <div className="container-wrapper">
                <div className="main_content">
                    {/* !!SHOWCASE */}
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
                            <div className="showcase_main_content">
                                <h1>As Covid cases explode in California, next few weeks are ‘absolutely critical’</h1>
                                <p>Keller has pleaded guilty to a felony charge of obstructing an officialproceeding before Congress and agreed to cooperate with the government’s investigation.</p>
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
                    {/* !TOP STORIES */}
                    <TopStories /> 
                </div>

                {/* !RIGHT BAR */}
                <div className="right_bar">
                    <LineBreaker mode='thick' margin='0'  width='98' />
                    {/* !RIGHT BAR OPINIONS */}
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
                    {/* !COVID TRACKER */}
                    <CovidTracker />

                    <br />
                    <LineBreaker mode='thick' width={98} />
                    {/* !SUBSCRIBE BOX */}
                    <SubscribeBox />

                    <br />
                    <LineBreaker mode='thick' width={98} />

                    {/* !SIDE WEATHER */}
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

                    {/* !VACCIEN FINDER */}

                    <VaccineFinder />

                    {/* RIGHT BAR ADS */}
                    <div className="right_ads_cnt">
                    <div className="ads_sign"></div>
                    </div>
                </div>
            </div>

            {/* !MOBILE VIEW OF COVID CASES */}

            <div className="mobile_covid_container">
                    <div className="mobile_covid_wrapper">
                        <CovidTracker mobile="true" />
                    </div>
                </div>

            <LineBreaker mode='thick' width='full' />

            {/* CATEGORIES CONTAINER */}
            <div className="categories">

                {/* FIRST NEWS CATEGORY */}
                <HomeNewsCategory categoryName={"Politcs"} />


                {/* !MOBILE VIEW OF WEATHER COMPONENT */}
                <div className="mobile_weather_container">
                {/* <LineBreaker mode='thick' width='full' margin={"25"} /> */}

                    <div className="mobile_weather_wrapper">
                        <div className="bar_intro">
                            <span>Weather In Cincinnati <FontAwesomeIcon icon={faArrowRight} /></span>
                            <LineBreaker mode={"thin"} />
                        </div>
                        <Weather />
                    </div>
                </div>

                <LineBreaker mode='thick' width='full' margin={"25"} />

                {/* !SECOND NEWS CATEGORY */}
                <NewsCategory2 categoryName={'Sports'} />

                <LineBreaker mode='thick' width='full' margin={"25"} />
                {/* !FIRST GRID CATEGORY */}
                <GridCategory placement='home' categoryName={"Cincy Times Cooking"} />

                    <br />
                <LineBreaker mode='thick' width='full' margin={"25"} />

                {/* !THIRD NEWS CATEGORY */}
                <HomeNewsCategory categoryName={"Entertainment"} />

                {/* ! HORIZONTAL ADS */}
                <HorizontalAds />

                <br />
                <LineBreaker mode='thick' width='full' margin={"25"} />

                {/* FOURTH NEWS CATEGORY */}
                <NewsCategory2 categoryName={"Business"} img={"buss.jpg"} />


                {/* MOBILE VIEWS OF VACCINE FINDER */}
                <div className="mobile_vaccine_container">

                    <div className="mobile_vaccine_wrapper">
                        <VaccineFinder mobile='true' />
                    </div>
                </div>


                <LineBreaker mode='thick' width='full' margin={"25"} />

                {/* !SECOND GRID CATEGORY */}
                <GridCategory categoryName={"Cincy Times Cooking"} />
            </div>
        </div>
    )
}

export default Home
