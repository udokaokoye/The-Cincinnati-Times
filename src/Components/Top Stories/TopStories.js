import React from 'react'
import LineBreaker from '../Line Breaker/LineBreaker'
import './TopStories.css'
const TopStories = () => {
    return (
        <div className='topstories_container'>
            <div className="topstor_bar">
                <h3>Top Stories.</h3>
            </div>
            <LineBreaker />

            <div className="topstor_content_wrapper">
                <div className="topstor_side_content">
                    <div className="side_content_w_related">
                        <h1>As Covid cases explode in California, next few weeks are ‘absolutely critical’</h1>

                        <div className="side_content_related">
                            <p>Related</p>
                            <p>L.A. County sees delays in ambulance response to 911 calls as COVID-19 taxes hospitals</p>
                        </div>
                    </div>
                        <LineBreaker />
                        <div className="side_content_w_img">
                        <div className="side_content_media">
                            <img src={require('../../Assets/Demo/Henry-Cuellar-Kamala-Harris.jpg')} alt="" />
                        </div>
                            <h3>California adopts droughtrules outlawing water wasting, with fines of upto $500</h3>
                        </div>
                        <LineBreaker />
                        <div className="side_content_w_related">
                        <h1>As Covid cases explode in California, next few weeks are ‘absolutely critical’</h1>

                        <div className="side_content_related">
                            <p>Related</p>
                            <p>L.A. County sees delays in ambulance response to 911 calls as COVID-19 taxes hospitals</p>
                        </div>
                    </div>
                </div>
                <div className="topstor_main_content">
                    <div className="topstor_section_1">
                        <div className="side_left">
                            <div className="side_left_media">
                                <img src={require('../../Assets/Demo/7fee440bf94f8b7b28950425ea11e562.jpg')} alt="" />
                            </div>

                            <h2 className="side_left_content_title">Will Kawhi Leonard play this season? Tyronn Lue senses optimism from Clippers star</h2>
                            <div className="side_left_content">
                                <div className="side_left_catgr_1">
                                    <p className="catgr_title">Opinion</p>
                                    <p className='catgr_content'>Biden and Putin speak again on Ukraine, eyeing next month’s talks</p>
                                    <p className='catgr_content'>Biden and Putin speak again on Ukraine, eyeing next month’s talks</p>
                                </div>
                                <div className="side_left_catgr_2">
                                <p className="catgr_title">Politics</p>
                                    <p className='catgr_content'>Biden and Putin speak again on Ukraine, eyeing next month’s talks</p>
                                    <p className='catgr_content'>Biden and Putin speak again on Ukraine, eyeing next month’s talks</p>
                                </div>
                            </div>
                            
                    
                        </div>
                        
                        <div className="side_right">

                            <div className="side_right_content">
                                <h1>Larry Elder won’t seek rematch against Gov. Gavin Newsom in 2022 race</h1>
                                <p>The Los Angeles native said that he has instead formed a political action committee to help Republicans running for the Senate and House.</p>
                            </div>
                            <div className="side_right_content">
                                <h1>Larry Elder won’t seek rematch against Gov. Gavin Newsom in 2022 race</h1>
                                <p>The Los Angeles native said that he has instead formed a political action committee to help Republicans running for the Senate and House.</p>
                            </div>
                            <div className="side_right_content">
                                <h1>Larry Elder won’t seek rematch against Gov. Gavin Newsom in 2022 race</h1>
                                <p>The Los Angeles native said that he has instead formed a political action committee to help Republicans running for the Senate and House.</p>
                            </div>

                            <div className="side_right_content">
                                <h1>Larry Elder won’t seek rematch against Gov. Gavin Newsom in 2022 race</h1>
                                <p>The Los Angeles native said that he has instead formed a political action committee to help Republicans running for the Senate and House.</p>
                            </div>

                            
                        </div>
                    </div>
                        <LineBreaker width='97' />
                    <div className="topstor_section_2">
                        <div className="side_left">
                            <div className="side_left_content">
                                <div className="side_left_content_media">
                                    <img src={require('../../Assets/Demo/download (1).png')} alt="" />
                                </div>
                                <h4 className="side_left_content_title">It’s March 2020 COVID deja vu for UC students as the new term begins</h4>
                                <p className="side_left_content_description">College students compare the remote start of 2022 to March 2020, when a two-week shutdown turned into a months-long hiatus from campus.</p>
                            </div>
                            <LineBreaker width='95' />

                            <div className="side_left_content">
                                <h4 className="side_left_content_title">Larry Elder won’t seek rematch against Gov. Gavin Newsom in 2022 race</h4>
                                <p className="side_left_content_description">The Los Angeles native said that he has instead formed a political action committee to help Republicans running for the Senate and House.</p>
                            </div>
                            <LineBreaker width='95' />

                            <div className="side_left_content">
                                <h4 className="side_left_content_title">California lawmakers unveil plan to hold gun makers liable for shootings</h4>
                                <p className="side_left_content_description">Motorists were stranded overnight in freezing temperatures along a 50-mile stretch of Interstate 95 south of Washington, D.C.</p>
                            </div>
                            <LineBreaker width='95' />

                            <div className="side_left_content">
                                <h4 className="side_left_content_title">California adopts drought rules outlawing water wasting, with fines of up to $500</h4>
                                <p className="side_left_content_description">WASHINGTON (AP) — A deeply divided Congress is about to show the world a very unsettled view from the U.S.  Capitol: Rather than a national crisis that pulls the country together, the deadly riot on </p>
                            </div>
                            <LineBreaker width='95' />

                            <div className="side_left_content">
                                <h4 className="side_left_content_title">A year after Jan. 6, Congress more deeply divided than ever</h4>
                                <p className="side_left_content_description">College students compare the remote start of 2022 to March 2020, when a two-week shutdown turned into a months-long hiatus from campus.</p>
                            </div>
                            <LineBreaker width='95' />
                        </div>
                        <div className="side_right">
                            <div className="side_right_content">
                                <div className="side_right_content_media">
                                    <img src={require('../../Assets/Demo/download22.png')} alt="" />
                                </div>
                                <h3 className="side_right_content_title">Listen: Mahershala Ali and Benjamin Cleary on sci-fi drama ‘Swan Song’</h3>
                            </div>
                            <LineBreaker width='95' margin='20' />

                            <div className="side_right_content">
                                <div className="side_right_content_media">
                                    <img src={require('../../Assets/Demo/download22.png')} alt="" />
                                </div>
                                <h3 className="side_right_content_title">Listen: Mahershala Ali and Benjamin Cleary on sci-fi drama ‘Swan Song’</h3>
                            </div>
                            <LineBreaker width='95' margin='20' />

                            <div className="side_right_content">
                                <div className="side_right_content_media">
                                    <img src={require('../../Assets/Demo/download22.png')} alt="" />
                                </div>
                                <h3 className="side_right_content_title">Listen: Mahershala Ali and Benjamin Cleary on sci-fi drama ‘Swan Song’</h3>
                            </div>
                            <LineBreaker width='95' margin='20' />

                            <div className="side_right_content">
                                <div className="side_right_content_media">
                                    <img src={require('../../Assets/Demo/download22.png')} alt="" />
                                </div>
                                <h3 className="side_right_content_title">Listen: Mahershala Ali and Benjamin Cleary on sci-fi drama ‘Swan Song’</h3>
                            </div>
                            <LineBreaker width='95' margin='20' />

                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TopStories
