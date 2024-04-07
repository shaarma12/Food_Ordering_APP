import twitter from "../../images/twitter.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import youtube from "../../images/youtube.png";
import linkedin from "../../images/linkedin.png";
import Logoimg from "../../images/Logoimg.png";
import play_store from "../../images/play_store.webp";
import app_store from "../../images/app_store.webp";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="md:mt-20 mt-[10rem] hidden md:flex justify-center bg-gray-100 md:w-full w-[90rem]">
        <div className="flex flex-col m-16 mt-5">
          <Link>
            <img className="w-56" src={Logoimg} alt="FooterImg" />
          </Link>
          <p className="relative bottom-10 ml-16 md:text-lg text-xl text-slate-500">
            &#169; 2024 Sharma Technologies <br></br> Pvt Ltd.
          </p>
        </div>
        <div className="m-16">
          <h3 className="md:text-xl text-2xl font-medium">ABOUT KHAOJI</h3>
          <Link to="/about">
            <p className="md:text-lg text-2xl text-slate-500 pt-2 pb-1 hover:text-red-600 hover:scale-y-110 transition-all duration-200">
              About
            </p>
          </Link>
          <a className="anc" href="#" target="_blank">
            <p className="md:text-lg text-2xl text-slate-500 py-1 hover:text-red-600 hover:scale-y-110 transition-all duration-200">
              Careers
            </p>
          </a>
          <a className="anc" href="#" target="_blank">
            <p className="md:text-lg text-2xl text-slate-500 py-1 hover:text-red-600 hover:scale-y-110 transition-all duration-200">
              Team
            </p>
          </a>
          <a className="anc" href="#" target="_blank">
            <p className="md:text-lg text-2xl text-slate-500 py-1 hover:text-red-600 hover:scale-y-110 transition-all duration-200">
              KhaoJi One
            </p>
          </a>
          <a className="anc" href="#" target="_blank">
            <p className="md:text-lg text-2xl text-slate-500 py-1 hover:text-red-600 hover:scale-y-110 transition-all duration-200">
              KhaoJi Instamart
            </p>
          </a>
          <a className="anc" href="#" target="_blank">
            <p className="md:text-lg text-2xl text-slate-500 py-1 hover:text-red-600 hover:scale-y-110 transition-all duration-200">
              KhaoJi Genie
            </p>
          </a>
        </div>
        <div className="m-16">
          <div className="contact">
            <h3 className="md:text-xl text-2xl font-medium">CONTACT US</h3>
            <a className="anc" href="#" target="_blank">
              <p className="md:text-lg text-2xl text-slate-500 pt-2 pb-1 hover:text-red-600 hover:scale-y-110 transition-all duration-200">
                Help & Support
              </p>
            </a>
            <a className="anc" href="#" target="_blank">
              <p className="md:text-lg text-2xl text-slate-500 py-1 hover:text-red-600 hover:scale-y-110 transition-all duration-200">
                Partner with us
              </p>
            </a>
            <a className="anc" href="#" target="_blank">
              <p className="md:text-lg text-2xl text-slate-500 py-1 hover:text-red-600 hover:scale-y-110 transition-all duration-200">
                Ride with us
              </p>
            </a>
          </div>
          <div className="mt-16">
            <h3 className="md:text-xl text-2xl font-medium">Legal</h3>
            <a className="anc" href="#" target="_blank">
              <p className="md:text-lg text-2xl text-slate-500 pt-2 pb-1 hover:text-red-600 hover:scale-y-110 transition-all duration-200">
                Terms & Condition
              </p>
            </a>
            <a className="anc" href="#" target="_blank">
              <p className="md:text-lg text-2xl text-slate-500 py-1 hover:text-red-600 hover:scale-y-110 transition-all duration-200">
                Cookie Policy
              </p>
            </a>
            <a className="anc" href="#" target="_blank">
              <p className="md:text-lg text-2xl text-slate-500 py-1 hover:text-red-600 hover:scale-y-110 transition-all duration-200">
                Privacy Policy
              </p>
            </a>
          </div>
        </div>
        <div className="m-16 flex flex-col items-center ">
          <h3 className="md:text-xl text-2xl font-medium">SOCIAL LINKS</h3>
          <div className="flex py-7">
            <Link to="https://www.Linkedin.com/">
              <img
                className="md:w-7 w-10 mx-1 hover:scale-y-110 transition-all duration-200"
                src={linkedin}
                alt="linkedin"
              />
            </Link>
            <Link to="https://www.instagram.com/">
              <img
                className="md:w-7 w-10 mx-1 hover:scale-y-110 transition-all duration-200 "
                src={instagram}
                alt="instagram"
              />
            </Link>
            <Link to="https://www.twitter.com/">
              <img
                className="md:w-7 w-10 mx-1 hover:scale-y-110 transition-all duration-200"
                src={twitter}
                alt="twitter"
              />
            </Link>
            <Link to="https://www.youtube.com/">
              <img
                className="md:w-7 w-10 mx-1 hover:scale-y-110 transition-all duration-200"
                src={youtube}
                alt="youtube"
              />
            </Link>
            <Link to="https://www.facebook.com/">
              <img
                className="md:w-7 w-10 mx-1 hover:scale-y-110 transition-all duration-200"
                src={facebook}
                alt="facebook"
              />
            </Link>
          </div>
          <div className="social-img">
            <Link to="https://www.playstore.com/">
              <img
                className="md:w-40 w-52 mb-2 hover:scale-y-110 transition-all duration-200"
                src={play_store}
                alt="Play Store"
              />
            </Link>
            <Link to="https://www.appstore.com/">
              <img
                className="md:w-40 w-52 hover:scale-y-110 transition-all duration-200"
                src={app_store}
                alt="App Store"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
