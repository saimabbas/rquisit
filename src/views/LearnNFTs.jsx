import React, { useState, useEffect } from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../assets/img/logo.png";
import BGC from "../assets/img/learnnfts-hero.png";
import GetStartedBG from "../assets/img/getstarted-bg.png";
import EditorialBG from "../assets/img/editorial-bg.jpeg";
import E1 from "../assets/img/e1.png";
import E2 from "../assets/img/e2.png";
import E3 from "../assets/img/e3.png";
import ShowTimeImg from "../assets/img/showtime.jpeg";
import BGC2 from "../assets/img/bgc2-img.png";
import DigiFash1 from "../assets/img/digi1.jpg";
import DigiFash2 from "../assets/img/digi2.jpg";
import DigiFash3 from "../assets/img/digi3.jpeg";
import Web3 from "../assets/img/web3.jpg";
import Designer from "../assets/img/designer.png";
import CuraImg from "../assets/img/teal-img.png";
import Metaverse from "../assets/img/metaverse.png";
import Workwithus from "../assets/img/work.jpg";
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
/* import { ScrollSmoother } from "gsap/ScrollSmoother"; */
import { Link } from "react-router-dom";
// import { SplitText } from "gsap/SplitText";
// import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const [isHeaderMobShowing, setIsHeaderMobShowing] = useState(false);
  useEffect(() => {
    /* ScrollSmoother.create({
      smooth: 1.25,
      effects: true,
      smoothTouch: 0,
    }); */
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
        ".hero-head-left h1",
        {
          x: "115%",
        },
        {
          x: 0,
          duration: 1,
        },
        "<0"
      )
      .fromTo(
        ".hero-head-right h1",
        {
          x: "-115%",
        },
        {
          x: 0,
          duration: 1,
        },
        "<0"
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
          <section className="hero-section">
            <img src={BGC} alt="Hero-img" data-speed={0.95} />
            <div className="hero-content">
              <div className="hero-head" data-speed={1.75}>
                <div className="hero-head-left">
                  <h1>view</h1>
                </div>
                <span>|</span>
                <div className="hero-head-right">
                  <h1> explore</h1>
                </div>
              </div>
              {/* <h1>future | fashion</h1> */}
            </div>
            <header>
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
          <section className="welcome-section">
            <div className="box">
              <div className="welcome-section-content">
                <div className="welcome-head">
                  <h2>WELCOME TO WEB3</h2>
                  <h5>Learn the basics with our video resources.</h5>
                </div>
                <div className="welcome-videos-grid">
                  <iframe
                    src="https://www.youtube.com/embed/Y0kBOlM4WOg"
                    title="Why Do NFT's Matter?"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <iframe
                    src="https://www.youtube.com/embed/qolNFm5u3r4"
                    title="A Brief History of NFTs"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <iframe
                    src="https://www.youtube.com/embed/HKAnyX6sfmU"
                    title="What are CC0 NFT's?"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <iframe
                    src="https://www.youtube.com/embed/JNUo4ZRDCcc"
                    title="Crypto and the Environment"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <iframe
                    src="https://www.youtube.com/embed/l3gtkDggSwI"
                    title="What is the blockchain?"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
          <section className="getstarted-section">
            <img src={GetStartedBG} alt="GetStartedBG" />
            <div className="box">
              <div className="getstarted-section-content">
                <div className="welcome-head">
                  <h2>GET STARTED</h2>
                </div>
                <div className="getstarted-videos-grid">
                  <iframe
                    src="https://www.youtube.com/embed/Z3QzeVpRazs"
                    title="How to set up an account on Coinbase"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <iframe
                    src="https://www.youtube.com/embed/amB9oBE_o0Y"
                    title="How to set up a crypto wallet on Coinbase"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <iframe
                    src="https://www.youtube.com/embed/78dNXN0g61E"
                    title="How to locate your crypto wallet address"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
          <div className="box">
            <div className="blog-section">
              <h2>RQUISIT BLOG</h2>
              <div className="blog-grid">
                <iframe
                  src="https://widgets.sociablekit.com/medium-post/iframe/96895"
                  frameborder="0"
                  width="100%"
                  height="1000"
                ></iframe>
                <iframe
                  src="https://widgets.sociablekit.com/medium-post/iframe/96895"
                  frameborder="0"
                  width="100%"
                  height="1000"
                ></iframe>
              </div>
            </div>
          </div>
          <section className="editorial-section">
            <img src={EditorialBG} alt="" />
            <div className="box">
              <div className="editorial-content">
                <div className="editorial-head">
                  <h2>EDITORIAL</h2>
                  <h5>
                    Explore featured articles from digital fashion editor{" "}
                    <a
                      href="https://twitter.com/astroporcelain"
                      target={"_blank"}
                    >
                      @astroporcelain
                    </a>
                  </h5>
                </div>

                <div className="editorial-grid">
                  <div className="editorial-grid-card">
                    <img src={DigiFash1} alt="" />
                    <a href="#">
                      Applying Gravity Layer's Universal Law to Digital Fashion
                    </a>
                  </div>
                  <div className="editorial-grid-card">
                    <img src={E2} alt="" />
                    <a href="#">Vitamin Sea with Extra Foam</a>
                  </div>
                  <div className="editorial-grid-card">
                    <img src={E3} alt="" />
                    <a href="#">
                      Injury Is Building the Metaworld I've Always Dreamed Of
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="box">
            <div className="showtime-grid">
              <img src={ShowTimeImg} alt="ShowTimeImg" />
              <div className="showtime-text">
                <h2>Showtime</h2>
                <p>
                  <b>Follow us</b> and your <b>favorite designers</b> on
                  Showtime to hear of
                  <b> new drops</b> and <b>collabs!</b>
                </p>
                <a href="https://showtime.xyz/rquisit" className="btn-white">
                  follow us
                </a>
              </div>
            </div>
          </div>

          <footer>
            <div className="box">
              <div className="footer-content">
                <div className="footer-grid">
                  <a href="/about">About</a>
                  <a href="https://webexhaust-rquisit.netlify.app/legal#privacy">
                    Privacy
                  </a>
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
