import React, { useState, useEffect, useRef } from "react";
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
import P1 from "../assets/img/p1.png";
import P2 from "../assets/img/p2.png";
import P3 from "../assets/img/p3.mp4";
import Metaverse from "../assets/img/metaverse.png";
import Workwithus from "../assets/img/work.jpg";
import CeoImg from "../assets/img/ceo-img.jpeg";
import RFAQBg from "../assets/img/ivanroyo (4).jpg";
import { MdClose } from "react-icons/md";
import { BsPlus, BsDash } from "react-icons/bs";
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
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
          <section className="product-details-section">
            <div className="box">
              <div className="product-details-grid">
                <div className="pdg-left">
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    }}
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{
                      swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                          ? thumbsSwiper
                          : null,
                    }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <video loop autoPlay muted>
                        <source src={P3} type="video/mp4" />
                      </video>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={P2} alt="Product Image" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={P1} alt="Product Image" />
                    </SwiperSlide>
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <video loop autoPlay muted>
                        <source src={P3} type="video/mp4" />
                      </video>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={P2} alt="Product Image" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={P1} alt="Product Image" />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="pdg-right">
                  <h3>"Barblings" Digital Only</h3>
                  <h6>
                    <span>Designer: </span> Jacto
                  </h6>
                  <h6>
                    <span>Limited Edition:</span> One of a kind
                  </h6>
                  <h6 className="product-price">
                    <span>$60.00</span>
                  </h6>
                  <p>
                    The predatory, ancient Barracuda from the Sphyraena family
                    has survived for over 50 million years.
                    <br /> Skulls from the Barracuda are rare, and in this
                    one-of-a-kind collection, Jacto has hand-painted five
                    limited edition pieces. The skull is mounted with a hook for
                    hanging, meant to display as decor on a table, shelf, or
                    wall.
                  </p>
                  <a href="#" className="btn-outline">
                    Buy with Crypto Wallet
                  </a>
                  <a href="#" className="btn-black">
                    Buy with Credit Wallet
                  </a>
                  <div className="product-more-details">
                    <h3>
                      WHAT YOU WILL <br /> RECEIVE
                    </h3>
                    <div className="product-accordion">
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            <div className="acc-header">
                              <h6>Digital Only</h6>
                              <div className="acc-closed">
                                <BsPlus />
                              </div>
                              <div className="acc-open">
                                <BsDash />
                              </div>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            A limited edition NFT
                            <br />
                            <br />A 3D rendering of a Baracuda skull ferronnière
                            that can be worn "virtually" as an AR filter in
                            pictures, social media, and on camera.
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </div>
                </div>
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
/* 4725 */
