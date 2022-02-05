import {
  faFacebook,
  faFacebookMessenger,
  faInstagram,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faComment,
  faComments,
  faEnvelope,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import GridCategory from "../../Components/Grid Category/GridCategory";
import LineBreaker from "../../Components/Line Breaker/LineBreaker";
import NewsCategorySection from "../../Components/News Category Section/NewsCategorySection";
import "./NewsPage.css";
const NewsPage = () => {
  return (
    <div className="newsPage_container">
      <div className="newsPage_wrapper">
        <h1 className="news_title">
          Wordly, Charming and Quietly Equipping a Brutal Military
        </h1>
        <p className="news_summary">
          Officials said Russia was planning a fake video showing an attack by
          Ukrainians on Russian territory or Russian speakers in eastern
          Ukraine.
        </p>
        <LineBreaker />
        <div className="top_socialmedia">
          <div className="icn">
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div className="icn">
            <FontAwesomeIcon icon={faComments} />
          </div>
          <div className="icn">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="icn">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="icn">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="icn">
            <FontAwesomeIcon icon={faShare} />
          </div>
        </div>
        <LineBreaker />

        <div className="media_1">
          <img
            src={require("../../Assets/Demo/33bb0c83-Vincent-Jackson.jpg")}
            alt=""
          />
          <small className="media_description">
            Sora Bundle in Kuala Lumpur, Malaysia, is one of many secondhand
            stores in the country.Credit...Ian Teh for The New York Times
          </small>
        </div>

        <div className="author">
          <div className="auth_img">
            <img src={require("../../Assets/Demo/me.jpg")} alt="" />
          </div>
          <p className="auth_name">By Levi Okoye</p>
        </div>

        <div className="date_time">Feb. 3, 2022</div>

        <p className="news_text">
          WASHINGTON — The United States has acquired intelligence about a
          Russian plan to fabricate a pretext for an invasion of Ukraine using a
          faked video that would build on recent disinformation campaigns,
          according to senior administration officials and others briefed on the
          material. The plan — which the United States hopes to spoil by making
          public — involves staging and filming a fabricated attack by the
          Ukrainian military either on Russian territory or against
          Russian-speaking people in eastern Ukraine. Russia, the officials
          said, intended to use the video to accuse Ukraine of genocide against
          Russian-speaking people. It would then use the outrage over the video
          to justify an attack or have separatist leaders in the Donbas region
          of eastern Ukraine invite a Russian intervention. Officials would not
          release any direct evidence of the Russian plan or specify how they
          learned of it, saying to do so would compromise their sources and
          methods. But a recent Russian disinformation campaign focused on false
          accusations of genocide and efforts in the Russian Parliament to
          recognize breakaway governments in Ukraine lent credence to the
          intelligence. <br />
          <br /> If carried out, the Russian operation would be an expansion of
          a propaganda theme that American intelligence officials and outside
          experts have said Moscow has been pushing on social media, on
          conspiracy sites and with state-controlled media since November. The
          video was intended to be elaborate, officials said, with plans for
          graphic images of the staged, corpse-strewn aftermath of an explosion
          and footage of destroyed locations. They said the video was also set
          to include faked Ukrainian military equipment, Turkish-made drones and
          actors playing Russian-speaking mourners. American officials would not
          say precisely who in Russia was planning the operation, but a senior
          official said the G.R.U., Russia’s military intelligence arm, was
          deeply involved in the effort. Ned Price, the State Department
          spokesman, discussed some details of the planned video at his daily
          news conference on Thursday, though he said evidence of the plot
          remained classified to protect American sources. “The production of
          this propaganda video is one of a number of options that the Russian
          government is developing as a fake pretext to initiate and potentially
          justify military aggression against Ukraine,” Mr. Price said. <br />
          <br /> A British official said its government had done its own
          analysis of the intelligence and had high confidence that Russia was
          planning to engineer a pretext to blame Ukraine for an attack. Another
          British official, Liz Truss, the foreign secretary, said the
          intelligence was “clear and shocking evidence of Russia’s unprovoked
          aggression and underhand activity to destabilize Ukraine.” “The U.K.
          and our allies will continue to expose Russian subterfuge and
          propaganda and call it out for what it is,” Ms. Truss said in a
          statement. The Kremlin’s spokesman, Dmitri S. Peskov, dismissed the
          American allegations in comments carried by Russian news agencies.
          “This isn’t the first report of its kind,” he said. “Similar things
          have been claimed before. But nothing ever came of them.” While it is
          not clear that senior Russian officials approved the operation, it was
          far along in the planning and the United States had high confidence
          that it was under serious consideration, officials said. Russian
          officials had found corpses to use in the video, discussed actors to
          play mourners and plotted how to make military equipment appear
          Ukrainian or NATO-supplied. While the plan sounded far-fetched,
          American officials said they believed it could have worked to provide
          a spark for a Russian military operation — an outcome they said they
          hoped would be made less likely by exposing the effort publicly. The
          highlights of the intelligence have been declassified, in hopes of
          both derailing the plot and convincing allies of the seriousness of
          the Russian planning. The officials interviewed for this article
          requested anonymity to discuss declassified but sensitive intelligence
          before it was released publicly. <br />
          <br /> Avril D. Haines, the director of national intelligence, and
          other top administration officials briefed members of Congress on the
          material on Thursday. Details of the information have also been shared
          with allies, as the United States and Britain push a kind of
          intelligence diplomacy. <br />
          <br /> In recent weeks, both Washington and London have outlined
          elements of Moscow’s war planning, highlighting planned troop
          buildups, exposing a false-flag sabotage plot and revealing Russian
          plans to install a friendly government in Kyiv. Senator Mark Warner,
          Democrat of Virginia and the chairman of the Senate Intelligence
          Committee, said the recent work by the United States and Britain to
          publicize plots being considered by Russia was an important
          development. Making the information public, he said, provides notice
          to Ukrainians and will help the world make different, more accurate
          judgments about Russian actions. “Too often we come in after the fact
          and say that was a false-flag operation,” Mr. Warner said. “By
          forewarning, it diminishes the Russian credibility and ability to use
          something like that as an excuse.” The American and British strategy
          aims to persuade allies that Russia is not posturing and has real war
          plans that it could put into effect. The releases also aim to force
          Russia to drop and redraft plans, further delaying any invasion plan.
          The longer the international community can delay a decision by
          President Vladimir V. Putin about whether to approve a military
          operation against Ukraine, the more of a chance there is that he will
          reconsider his plans, according to diplomats.
        </p>

        <div className="comments_socials">
          <div className="btn">
            <button>Read 225 Comments</button>
          </div>
          <div className="btm_socialmedia">
            <div className="icn">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="icn">
              <FontAwesomeIcon icon={faComments} />
            </div>
            <div className="icn">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="icn">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="icn">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="icn">
              <FontAwesomeIcon icon={faShare} />
            </div>
          </div>
        </div>
      </div>

      <GridCategory />
            <br />
            <LineBreaker mode={'thick'} />
            <br />
      <NewsCategorySection />
    </div>
  );
};

export default NewsPage;
