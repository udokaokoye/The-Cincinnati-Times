import { faFacebook, faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faCode, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import LineBreaker from '../Line Breaker/LineBreaker';
import './Footer.css'
const Footer = () => {
  return <div className='footer_container'>

      <div className="footer_wrapper">
          <div className="footer_br">
              <h3>Cincinnati Times</h3>
          </div>

          <div className="footer_content">
              <div className="section section1">
                  <h4>A <span>Cincinnati Times</span> Publication</h4>
                  <span className='follow_us'>Follow Us</span>
                  <div className="footer_socials">
                      <span><FontAwesomeIcon icon={faFacebookSquare} /></span>
                      <span><FontAwesomeIcon icon={faTwitterSquare} /></span>
                      <span><FontAwesomeIcon icon={faInstagramSquare} /></span>
                      <span><FontAwesomeIcon icon={faYoutubeSquare} /></span>
                      </div>  
              </div>
              <div className="section section2">
                  <h3>News</h3>

                  <p>Politcs</p>
                  <p>Entertainment</p>
                  <p>Bussines</p>
                  <p>Sports</p>
                  <p>Technology</p>
              </div>
              <div className="section section3">
                    <h3>Services</h3>

                    <p>Place an Ad</p>
                    <p>eNewspaper</p>
                    <p>Share</p>
                    <p>Subscribe</p>
                    <p>Puzzles</p>
              </div>
              <div className="section section4">
                  <h3>Cincy Times Subscription</h3>
                  <small>Get the best of cincy times delivered to your inbox daily.</small>
                  <input type="email" name="email" placeholder='E-mail Address'/>
                  <button>Subscribe!</button>
              </div>
          </div>

          <hr />
          <div className="copyrights_credits">
          <p>Copyright <FontAwesomeIcon icon={faCopyright} /> 2022, The Cincinnati Times | Terms of Service | Privacy Policy</p>
          <p><FontAwesomeIcon icon={faCode} />Developed By: <a href="https://udokaokoye.com" target="_blank">Levi Okoye</a></p>
          </div>
      </div>

  </div>;
};

export default Footer;
