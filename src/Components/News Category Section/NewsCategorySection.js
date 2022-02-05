import React from "react";
import LineBreaker from '../Line Breaker/LineBreaker'
import './NewsCategorySection.css'
const NewsCategorySection = () => {
  return (
    <div className="topstories_container">
      <div className="topstor_bar">
        <h3>Top Stories.</h3>
      </div>
      <LineBreaker />

      <div className="topstor_content_wrapper">
        <div className="topstor_side_content">
          <div className="side_content_w_related">
            <h1>
              As Covid cases explode in California, next few weeks are
              ‘absolutely critical’
            </h1>

            <div className="side_content_related">
              <p>Related</p>
              <p>
                L.A. County sees delays in ambulance response to 911 calls as
                COVID-19 taxes hospitals
              </p>
            </div>
          </div>
          <LineBreaker />
          <div className="side_content_w_img">
            <div className="side_content_media">
              <img
                src={require("../../Assets/Demo/Henry-Cuellar-Kamala-Harris.jpg")}
                alt=""
              />
            </div>
            <h3>
              California adopts droughtrules outlawing water wasting, with fines
              of upto $500
            </h3>
          </div>
        </div>
        <div className="topstor_main_content">
          <div className="topstor_section_1">
            <div className="side_left">
              <div className="side_left_media">
                <img
                  src={require("../../Assets/Demo/7fee440bf94f8b7b28950425ea11e562.jpg")}
                  alt=""
                />
              </div>

              <h2 className="side_left_content_title">
                Will Kawhi Leonard play this season? Tyronn Lue senses optimism
                from Clippers star
              </h2>
              <div className="side_left_content">
                <div className="side_left_catgr_1">
                  <p className="catgr_title">Opinion</p>
                  <p className="catgr_content">
                    Biden and Putin speak again on Ukraine, eyeing next month’s
                    talks
                  </p>
                  <p className="catgr_content">
                    Biden and Putin speak again on Ukraine, eyeing next month’s
                    talks
                  </p>
                </div>
                <div className="side_left_catgr_2">
                  <p className="catgr_title">Politics</p>
                  <p className="catgr_content">
                    Biden and Putin speak again on Ukraine, eyeing next month’s
                    talks
                  </p>
                  <p className="catgr_content">
                    Biden and Putin speak again on Ukraine, eyeing next month’s
                    talks
                  </p>
                </div>
              </div>
            </div>

            <div className="side_right">
              <div className="side_right_content">
                <h1>
                  Larry Elder won’t seek rematch against Gov. Gavin Newsom in
                  2022 race
                </h1>
                <p>
                  The Los Angeles native said that he has instead formed a
                  political action committee to help Republicans running for the
                  Senate and House.
                </p>
              </div>
              <div className="side_right_content">
                <h1>
                  Larry Elder won’t seek rematch against Gov. Gavin Newsom in
                  2022 race
                </h1>
                <p>
                  The Los Angeles native said that he has instead formed a
                  political action committee to help Republicans running for the
                  Senate and House.
                </p>
              </div>

              <div className="side_right_content">
                <h1>
                  Larry Elder won’t seek rematch against Gov. Gavin Newsom in
                  2022 race
                </h1>
                <p>
                  The Los Angeles native said that he has instead formed a
                  political action committee to help Republicans running for the
                  Senate and House.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
          <LineBreaker width="97" mode={'thick'} />
    </div>
  );
};

export default NewsCategorySection;
