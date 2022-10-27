import React, { useState, useEffect } from "react";
import { BsTwitter, BsInstagram, BsGlobe } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../assets/img/logo.png";
import BGC from "../assets/img/digitalfashion-bg.png";
import OceanVideo from "../assets/video/ocean-video.mp4";
import Jew1White from "../assets/img/jew-img-1-white.png";
import Jew1Black from "../assets/img/jew-img-1-black.png";
import BGC2 from "../assets/img/bgc2-img.png";
import DigiWorld1 from "../assets/img/dw-img-1.jpeg";
import DigiWorld2 from "../assets/img/dw-img-2.jpeg";
import DigiWorld3 from "../assets/img/dw-img-3.jpeg";
import Web3 from "../assets/img/web3.jpg";
import Designer from "../assets/img/designer.png";
import CuraImg from "../assets/img/teal-img.png";
import Metaverse from "../assets/img/metaverse.png";
import Workwithus from "../assets/img/work.jpg";
import CeoImg from "../assets/img/ceo-img.jpeg";
import RFAQBg from "../assets/img/ivanroyo (4).jpg";
import { MdClose } from "react-icons/md";
import { gsap } from "gsap";
import {
  Back,
  Power3,
  Power1,
  Power2,
  Power4,
  Linear,
  Expo,
  Circ,
} from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Link } from "react-router-dom";
// import { SplitText } from "gsap/SplitText";
// import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

function App() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  const [isHeaderMobShowing, setIsHeaderMobShowing] = useState(false);
  useEffect(() => {
    ScrollSmoother.create({
      smooth: 1.25,
      effects: true,
      smoothTouch: 0,
    });
    let landingAnim = gsap.timeline();
    landingAnim
      .fromTo(
        ".loading-screen",
        {
          height: "100vh",
        },
        {
          duration: 0.15,
          height: 0,
        }
      )
      .fromTo(
        "header",
        {
          y: "-100%",
        },
        {
          y: 0,
          duration: 1,
        }
      )

      .fromTo(
        ".about-hero-content > img",
        {
          x: "-10rem",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
        },
        0
      )
      .fromTo(
        ".about-hero-content > div",
        {
          x: "10rem",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
        },
        0
      );
    let threeImagesAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".digital-fash-section",
        start: "top 50%",
      },
    });
    threeImagesAnim.fromTo(
      ".digi-fash-grid div",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: {
          each: 0.075,
        },
      }
    );
    let pioneerAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".pioneer-digifash",
        start: "top 50%",
      },
    });
    pioneerAnim
      .fromTo(
        ".pioneer-digifash h3",
        {
          opacity: 0,
          y: "5rem",
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
        }
      )
      .fromTo(
        ".pioneer-digifash h5",
        {
          opacity: 0,
          y: "5rem",
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
        },
        "<0.25"
      )
      .fromTo(
        ".pioneer-digifash p",
        {
          opacity: 0,
          y: "5rem",
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
        },
        "<0.25"
      );
    let designerAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".designer-section",
        start: "top 50%",
      },
    });
    designerAnim
      .fromTo(
        ".designer-section h3",
        {
          opacity: 0,
          y: "5rem",
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
        }
      )
      .fromTo(
        ".designer-section h5",
        {
          opacity: 0,
          y: "5rem",
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
        },
        "<0.25"
      )
      .fromTo(
        ".designer-section p",
        {
          opacity: 0,
          y: "5rem",
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
        },
        "<0.25"
      );
    let workWithUsAnim = gsap.timeline({
      scrollTrigger: {
        trigger: ".wwu-section",
        start: "top 50%",
      },
    });
    workWithUsAnim
      .fromTo(
        ".wwu-section h3",
        {
          opacity: 0,
          y: "5rem",
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
        }
      )
      .fromTo(
        ".wwu-section a",
        {
          opacity: 0,
          y: "5rem",
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
        },
        "<0.25"
      );
  }, []);

  return (
    <div className="smooth-wrapper" id="smooth-wrapper">
      <div id="smooth-content">
        <div className="app">
          <section className="legal-section">
            <div className="box">
              <div className="legal-content">
                <h2>REFUND POLICY</h2>
                <br />
                <p>
                  At the moment, we have a non-refund policy.
                  <br />
                  Any issues with your purchase can be discussed directly with
                  the corresponding brand. Technical issues can be reported
                  directly to Rquisit.
                </p>
              </div>
            </div>
            <header className="inverted-header">
              <div className="box">
                <div className="header-content">
                  <div className="header-left header-icons">
                    <a target="_blank" href="https://www.instagram.com/rquisit">
                      <FaInstagram />
                    </a>
                    <a target="_blank" href="https://twitter.com/rquisit">
                      <FaTwitter />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/channel/UCvD0lzOvGeynbzFzLTgEuNQ?app=desktop"
                    >
                      <FaYoutube />
                    </a>
                  </div>
                  <div className="header-center">
                    <Link to="/">
                      <img src={Logo} alt="" />
                    </Link>
                    <div
                      className="header-mob-icon"
                      onClick={() => {
                        setIsHeaderMobShowing(true);
                      }}
                    >
                      <div></div>
                      <div></div>
                    </div>
                    <div className="header-navbar">
                      <Link to="/">Home</Link>
                      <Link to="/digitalfashion">DigitalFashion</Link>
                      <Link to="/learnnfts">LearnNFTs</Link>
                      <Link to="/about">About</Link>
                    </div>
                  </div>
                  <div className="header-right">
                    <button className="btn-white">CONNECT WALLET</button>
                  </div>
                </div>
              </div>
            </header>
          </section>

          <footer>
            <div className="box">
              <div className="footer-content">
                <div className="footer-grid">
                  <a href="/about">About</a>
                  <a href="/legal">Privacy</a>
                  <a href="/legal">Terms of Service</a>
                  <a href="#">Partnership</a>
                  <a href="mailto:team@rquisit.com">Contact us</a>
                </div>
                <div className="footer-grid">
                  <a href="#">FAQ</a>
                  <a href="/learnnfts">Education</a>
                  <a href="/legal">Refund Policy</a>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdMkYl3RtKCUzOOrKo79OLNRs-iCvwwrUBII07GeRmU2Qv9OQ/viewform">
                    Jobs
                  </a>
                  <div className="footer-icons">
                    <a target="_blank" href="https://www.instagram.com/rquisit">
                      <FaInstagram />
                    </a>
                    <a target="_blank" href="https://twitter.com/rquisit">
                      <FaTwitter />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/channel/UCvD0lzOvGeynbzFzLTgEuNQ?app=desktop"
                    >
                      <FaYoutube />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      {isHeaderMobShowing ? (
        <div className="header-mob">
          <div className="box">
            <div className="header-mob-content">
              <div
                className="header-mob-close-btn"
                onClick={() => {
                  setIsHeaderMobShowing(false);
                }}
              >
                <MdClose />
              </div>
              <div className="header-mob-links">
                <Link to="/">Home</Link>
                <Link to="/digitalfashion">DigitalFashion</Link>
                <Link to="/learnnfts">LearnNFTs</Link>
                <Link to="/about">About</Link>
              </div>
              <div className="header-mob-bottom">
                <div className="header-mob-icons">
                  <a target="_blank" href="https://www.instagram.com/rquisit">
                    <FaInstagram />
                  </a>
                  <a target="_blank" href="https://twitter.com/rquisit">
                    <FaTwitter />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/channel/UCvD0lzOvGeynbzFzLTgEuNQ?app=desktop"
                  >
                    <FaYoutube />
                  </a>
                </div>
                <button className="btn-white">CONNECT WALLET</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;

/* 951753 */
