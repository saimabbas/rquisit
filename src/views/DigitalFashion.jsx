import React, { useState, useEffect } from "react";
import { BsTwitter, BsInstagram, BsGlobe } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../assets/img/logo.png";
import BGC from "../assets/img/digitalfashion-bg.png";
import OceanVideo from "../assets/video/ocean-video.mp4";
import Jew1White from "../assets/img/jew-img-1-white.png";
import Jew1Black from "../assets/img/jew-img-1-black.png";
import Jaw1Black from "../assets/img/jaw-img-1-black.png";
import Jaw1White from "../assets/img/jaw-img-1-white.png";
import BGC2 from "../assets/img/bgc2-img.png";
import DigiWorld1 from "../assets/img/dw-img-1.jpeg";
import DigiWorld2 from "../assets/img/dw-img-2.jpeg";
import DigiWorld3 from "../assets/img/dw-img-3.jpeg";
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
          <section className="hero-section df-hero">
            <img src={BGC} alt="Hero-img" data-speed={0.95} />
            <div className="hero-content">
              <div className="hero-head" data-speed={1.75}>
                <div className="hero-head-left">
                  <h1>universe </h1>
                </div>
                <span>|</span>
                <div className="hero-head-right">
                  <h1>metaverse</h1>
                </div>
              </div>
              {/* <h1>future | fashion</h1> */}
            </div>
            <header data-speed={1.75}>
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
          <section className="featured-brand-section">
            <div className="box">
              <div className="fb-grid">
                <div className="fb-grid-left">
                  <video src={OceanVideo} controls></video>
                </div>
                <div className="fb-grid-right">
                  <h2>
                    FEATURED <br /> BRAND
                  </h2>
                  <i>- Jacto</i>
                  <p>
                    Jacto is a line of innovative <b>demi-fine jewelry</b>{" "}
                    hand-made in <b>NYC</b>. It was founded in 2015 by{" "}
                    <b>Melanie Maggio</b>, a footwear <b>designer</b> who left
                    behind a lucrative career to create a sustainable,{" "}
                    <b>zero-waste</b> accessory brand using the{" "}
                    <b>skin, bones,</b> and <b>teeth</b> left over from
                    commercial fishing. The raw material is sourced from{" "}
                    <b>sustainable</b> fisheries and then transported to a{" "}
                    <b>taxidermist</b> upstate, where{" "}
                    <b>flesh-eating beetles</b> clean it naturally. The bones
                    are cast on <b>45th Street</b> in the{" "}
                    <b>Jewelry District</b>, and all the chains and findings are
                    sourced in <b>Manhattan</b>.
                  </p>
                  <a target={"_blank"} href="https://shopjacto.com/">
                    <i>website</i>
                    <BsGlobe />
                  </a>
                  <a
                    target={"_blank"}
                    href="https://www.instagram.com/jacto_jewelry/?hl=en"
                  >
                    <i>instagram</i>
                    <BsInstagram />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="seabones-section">
            <video src={OceanVideo} autoPlay loop muted></video>
            <div className="box">
              <div className="seabones-content">
                <div className="sb-left">
                  <h2>“SeaBones”</h2>
                  <h3>Physical + Virtual Collection</h3>
                </div>
                <div className="sb-right">
                  <p>
                    SeaBones is Jacto's first <b>Phyigital</b> (Physical and
                    Virtual) collection. Like technology, the ocean holds
                    mysteries still unknown to humankind; it's also home to some
                    of the most <b>exquisite jewels</b> in the world. Here, at
                    the intersection of the <b>sea</b> and <b>future tech</b>,
                    Jacto merges sea bones with precious metal and{" "}
                    <b>Augmented Reality</b> to create a rare and exquisite
                    collection that is the first of its kind.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="products-section">
            <div className="box">
              <div className="products-grid">
                <a href="/productpage1">
                  <div className="product-card">
                    <img src={Jew1White} alt="Jew1White" />
                    <h5>“Barblings” - Digital Only</h5>
                    <p>One of a Kind | 24krt Gold Plated</p>
                    <p>$60</p>
                  </div>
                </a>
                <a href="/productpage2">
                  <div className="product-card">
                    <img src={Jew1Black} alt="Jew1White" />
                    <h5>“Barblings” - Phygital (Physical + Digital)</h5>
                    <p>Limited Edition | Only 200 Available</p>
                    <p>$260</p>
                  </div>
                </a>
                <a href="/productpage3">
                  <div className="product-card">
                    <img src={Jaw1White} alt="Jew1White" />
                    <h5>“Jaws” - Digital</h5>
                    <p>Limited Edition | Only 200 Available</p>
                    <p>$60</p>
                  </div>
                </a>
                <a href="/productpage4">
                  <div className="product-card">
                    <img src={Jaw1Black} alt="Jew1White" />
                    <h5>“Jaws” - Phygital (Physical + Digital)</h5>
                    <p>One of a Kind | 24krt Gold Plated</p>
                    <p>$8,000.00</p>
                  </div>
                </a>
              </div>
            </div>
          </section>
          <div className="digital-worlds">
            <div className="box">
              <div className="digital-worlds-content">
                <h4>
                  Bridging physical brands to <b>digital worlds.</b>
                </h4>

                <div className="digital-worlds-grid">
                  <img src={DigiWorld3} alt="DigiWorld" />
                  <img src={DigiWorld1} alt="DigiWorld" />
                  <img src={DigiWorld2} alt="DigiWorld" />
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div className="box">
              <div className="footer-content">
                <div className="footer-grid">
                  <a href="#">About</a>
                  <a href="#">Privacy</a>
                  <a href="https://deploy-preview-20--tender-montalcini-a9ead8.netlify.app/terms-of-service">
                    Terms of Service
                  </a>
                  <a href="#">Partnership</a>
                  <a href="#">Contact us</a>
                </div>
                <div className="footer-grid">
                  <a href="#">FAQ</a>
                  <a href="#">Education</a>
                  <a href="https://deploy-preview-20--tender-montalcini-a9ead8.netlify.app/refund-policy">
                    Refund Policy
                  </a>
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
