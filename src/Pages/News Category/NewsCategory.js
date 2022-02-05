import React from "react";
import "./NewsCategory.css";
import { useParams, useHistory, Link } from "react-router-dom";
import LineBreaker from "../../Components/Line Breaker/LineBreaker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import TopStories from "../../Components/Top Stories/TopStories";
import NewsCategorySection from "../../Components/News Category Section/NewsCategorySection";
import GridCategory from "../../Components/Grid Category/GridCategory";
import NewsCategoryList from "../../Components/News Category List/NewsCategoryList";
const NewsCategory = () => {
  const { category } = useParams();
  return (
    <div className="news_category_container">
      <div className="news_category_wrapper">
        <div className="m_content">
          <div className="category_showcase">
            <div className="showcase_top">
              <div className="showcase_main">
                <img
                  className="show_main_media"
                  src={require("../../Assets/Demo/bidenchristmas.jpg")}
                  alt=""
                />
                <div className="gradient">
                  <h1 className="show_main_title">
                    As Covid cases explode in California, next few weeks are
                    ‘absolutely critical’
                  </h1>
                </div>
              </div>
            </div>
            <div className="showcase_bottom">
              <div className="btm_news_1">
                <p>
                  Trauma in House gallery bonds members of Congress even a year
                  later
                </p>
              </div>
              <div className="btm_news_2">
                <p>
                  As Capitol riot anniversary nears, Western allies fear for
                  health of U.S. democracy
                </p>
              </div>
              <div className="btm_news_3">
                <p>
                  A photographer’s helmet cam captured the Jan. 6 assault on the
                  Capitol
                </p>
              </div>
            </div>
          </div>

          <LineBreaker mode='thick' width='full' />
            <NewsCategorySection />
            <GridCategory placement="category" />
        <LineBreaker mode={''} width='full' />
        <br />
        <br />
        <br />
        <LineBreaker mode={'thick'} width='full' />
        
        <NewsCategoryList />
        </div>

        <div className="right_bar">
          <LineBreaker mode="thick" margin="0" width="98" />
          <div className="right_bar_opinion">
            <div className="right_opionion_bar">
              <h3>OPINION</h3>{" "}
              <FontAwesomeIcon style={{ marginLeft: 7 }} icon={faArrowRight} />
            </div>
            <LineBreaker />

            <div className="right_bar_opinion_content">
              <p>
                {" "}
                Editorial: Where are the COVID tests Newsom promised for
                schools?{" "}
              </p>
            </div>
            <LineBreaker />
            <div className="right_bar_opinion_content">
              <p>
                {" "}
                Jonah Goldberg: ‘Don’t Look Up’ is a political satire that
                misses its target{" "}
              </p>
            </div>
            <LineBreaker />
            <div className="right_bar_opinion_content">
              <p>
                {" "}
                Editorial: Where are the COVID tests Newsom promised for
                schools?{" "}
              </p>
            </div>
            <LineBreaker />
            <div className="right_bar_opinion_content">
              <p>
                {" "}
                Editorial: Where are the COVID tests Newsom promised for
                schools?{" "}
              </p>
            </div>

            <LineBreaker />
            <div className="right_bar_opinion_content">
              <p>
                {" "}
                Editorial: Where are the COVID tests Newsom promised for
                schools?{" "}
              </p>
            </div>

            <LineBreaker />
            <div className="right_bar_opinion_content">
              <p>
                {" "}
                Editorial: Where are the COVID tests Newsom promised for
                schools?{" "}
              </p>
            </div>

            <LineBreaker />
            <div className="right_bar_opinion_content">
              <p>
                {" "}
                Editorial: Where are the COVID tests Newsom promised for
                schools?{" "}
              </p>
            </div>

            <LineBreaker />
            <div className="right_bar_opinion_content">
              <p>
                {" "}
                Editorial: Where are the COVID tests Newsom promised for
                schools?{" "}
              </p>
            </div>
            <LineBreaker />
            <div className="right_bar_opinion_content">
              <p>
                {" "}
                Editorial: Where are the COVID tests Newsom promised for
                schools?{" "}
              </p>
            </div>
            <LineBreaker />

            <div className="right_bar_opinion_content">
              <p>
                {" "}
                Editorial: Where are the COVID tests Newsom promised for
                schools?{" "}
              </p>
            </div>
          </div>
          <br />
          <LineBreaker mode="thick" width={98} />

          <br />
          <LineBreaker mode="thick" width={98} />

          <div className="right_ads_cnt">
            <div className="ads_sign"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCategory;
