import React, {useState} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import LineBreaker from '../../Components/Line Breaker/LineBreaker'
import TopStories from '../../Components/Top Stories/TopStories'
import './Home.css'
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
                    
                </div>
            </div>
        </div>
    )
}

export default Home
