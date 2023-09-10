import twitter from "../../images/twitter.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import youtube from "../../images/youtube.png";
import linkedin from "../../images/linkedin.png";
import Logoimg from "../../images/Logoimg.png";
import play_store from "../../images/play_store.webp";
import app_store from "../../images/app_store.webp";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className="Company-Logo">
          <img src={Logoimg} alt="FooterImg" />
          <p>
            &#169; 2023 Sharma Technologies <br></br> Pvt Ltd.
          </p>
        </div>
        <div className="About">
          <h3 className="text">ABOUT KHAOJI</h3>
          <a className="anc" href="#" target="_blank">
            <p className="text">About</p>
          </a>
          <a className="anc" href="#" target="_blank">
            <p className="text">Careers</p>
          </a>
          <a className="anc" href="#" target="_blank">
            <p className="text">Team</p>
          </a>
          <a className="anc" href="#" target="_blank">
            <p className="text">KhaoJi One</p>
          </a>
          <a className="anc" href="#" target="_blank">
            <p className="text">KhaoJi Instamart</p>
          </a>
          <a className="anc" href="#" target="_blank">
            <p className="text">KhaoJi Genie</p>
          </a>
        </div>
        <div className="auth">
          <div className="contact">
            <h3 className="text">CONTACT US</h3>
            <a className="anc" href="#" target="_blank">
              <p className="text">Help & Support</p>
            </a>
            <a className="anc" href="#" target="_blank">
              <p className="text">Partner with us</p>
            </a>
            <a className="anc" href="#" target="_blank">
              <p className="text">Ride with us</p>
            </a>
          </div>
          <div className="legal">
            <h3 className="text">Legal</h3>
            <a className="anc" href="#" target="_blank">
              <p className="text">Terms & Condition</p>
            </a>
            <a className="anc" href="#" target="_blank">
              <p className="text">Cookie Policy</p>
            </a>
            <a className="anc" href="#" target="_blank">
              <p className="text">Privacy Policy</p>
            </a>
          </div>
        </div>
        <div className="links">
          <h3>SOCIAL LINKS</h3>
          <div className="social">
            <a href="https://www.linkedin.com/" target="_blank">
              <img className="logs" src={linkedin} alt="linkedin" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img className="logs" src={instagram} alt="instagram" />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <img className="logs" src={twitter} alt="twitter" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img className="logs" src={youtube} alt="youtube" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <img className="logs" src={facebook} alt="facebook" />
            </a>
          </div>
          <div className="social-img">
            <a href="https://www.playstore.com/" target="_blank">
              <img className="biglogs" src={play_store} alt="Play Store" />
            </a>
            <a href="https://www.appstore.com/" target="_blank">
              <img className="biglogs" src={app_store} alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
