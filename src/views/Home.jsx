import React, { useState, useEffect } from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../assets/img/logo.png";
import BGC from "../assets/img/bgc-img.jpg";
import BGC2 from "../assets/img/bgc2-img.png";
import DigiFash1 from "../assets/img/digi1.jpg";
import DigiFash2 from "../assets/img/digi2.jpg";
import DigiFash3 from "../assets/img/digi3.jpeg";
import Web3 from "../assets/img/web3.jpg";
import Designer from "../assets/img/designer.png";
import RFAQBg from "../assets/img/ivanroyo (4).jpg";
import PioneeringBG from "../assets/img/pioneering-bg.png";
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
          <section className="hero-section">
            <img src={BGC} alt="Hero-img" data-speed={0.95} />
            <div className="hero-content">
              <div className="hero-head" data-speed={1.75}>
                <div className="hero-head-left">
                  <h1>future</h1>
                </div>
                <span>|</span>
                <div className="hero-head-right">
                  <h1>fashion</h1>
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
          <section className="digital-fash-section">
            <div className="box">
              <div className="digi-fash-content">
                <h4>
                  A marketplace and creative agency for{" "}
                  <strong>digital fashion</strong> based in NYC.
                </h4>
                <div className="digi-fash-grid digi-fash-grid-pc">
                  <img src={DigiFash1} alt="" data-speed={1.15} />
                  <img src={DigiFash2} alt="" data-speed={1.25} />
                  <img src={DigiFash3} alt="" data-speed={1.35} />
                </div>
                <div className="digi-fash-grid digi-fash-grid-mob ">
                  <img src={DigiFash1} alt="" />
                  <img src={DigiFash2} alt="" />
                  <img src={DigiFash3} alt="" />
                </div>
              </div>
            </div>
          </section>
          <section className="pioneer-digifash">
            <div className="pioneer-digifash-grd"></div>
            <img src={PioneeringBG} alt="" />
            <div className="box">
              <div className="pioneer-df-content">
                <h3>PIONEERING DIGITAL FASHION</h3>
                <h5>Bringing designers and fashion lovers into Web3</h5>
                <p>
                  Rquisit <strong>vets,</strong> <strong>onboards,</strong> and{" "}
                  <strong>curates</strong> digital fashion for brands with
                  utility in mind. We aim to bring <strong>designers</strong>{" "}
                  and <strong>fashion lovers</strong> into <strong>Web3</strong>{" "}
                  by providing <strong>cutting-edge initiatives</strong> and
                  educational resources to teach you how to get started while
                  keeping you updated on the <strong>latest trends</strong>.
                </p>
              </div>
            </div>
          </section>
          <section className="web3-fash-section">
            <div className="box">
              <div className="web3-fash-content">
                <h4>
                  Merging <strong>digital</strong> creations with{" "}
                  <strong>physical</strong> reality.
                </h4>
                <div className="web3-grid">
                  <div>
                    <img src={Web3} alt="" />
                  </div>
                  <div className="web3-right-grid">
                    <h3>
                      Web3 + <br /> Fashion
                    </h3>
                    <p>
                      <strong>Blockchain</strong> technology is changing our
                      relationship to the internet and how we engage with it.
                      It's becoming far more <strong>interactive</strong> as
                      immersive <strong>augmented reality</strong> experiences
                      come to replace passive forms of engagement. <br />
                      <br />
                      Digital <strong>collectibles</strong> have the ability to
                      redefine how brands and consumers connect to one another.
                      We see <strong>NFT</strong> trends shifting towards a more{" "}
                      <strong>tangible</strong> type of <strong>value</strong>,
                      one where consumer-brand relations can be taken to a whole
                      new level. <br />
                      <br />
                      Digital collectibles could act as a{" "}
                      <strong>ticket</strong> to a fashion show or hold{" "}
                      <strong>voting power</strong> on color choices for a new
                      collection. The sky is the limit, and we're excited to
                      push this new <strong>revolution</strong> forward.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="designer-section">
            <img src={Designer} alt="" />
            <div className="box">
              <div className="designer-sec-cont">
                <h3>DESIGNER COLLABORATIONS</h3>
                <h5>Mentorship and in-house services</h5>
                <p>
                  In order to be <strong>sustainable,</strong> Web3 needs to{" "}
                  <strong>nurture </strong>
                  the <strong>next generation</strong> of fashion brands.
                  Supporting
                  <strong> designers </strong> emerging into{" "}
                  <strong>Web3</strong> is a core part of our ethos, whether
                  through <strong>mentorship</strong> initiatives or our
                  in-house <strong>services.</strong>
                </p>
              </div>
            </div>
          </section>
          <div className="box">
            <section className="curation-section">
              <div className="cura-sec-content">
                <div className="cura-right-grid">
                  <h3>COLLECTIBLE CURATION</h3>
                  <p>
                    A pioneer in innovation, <strong>Rquisit</strong> is the
                    first <strong>fashion destination</strong> that delivers the
                    ultimate
                    <strong> curation</strong> of digital fashion and Web3
                    content. We're working hand-in-hand with fashion brands to
                    create utility-based <strong>digital collectibles</strong>{" "}
                    that can be used as <strong>wearables</strong> in{" "}
                    <strong>augmented reality</strong> or as skins on{" "}
                    <strong>gaming platforms.</strong> It's important that the
                    collectibles we feature provide sustainable value for each
                    holder.
                  </p>
                </div>
                <img src={RFAQBg} alt="" />
              </div>
            </section>
          </div>
          <section className="metaverse-section">
            <img src={Metaverse} alt="" />
            <div className="box">
              <div className="metaverse-content">
                <h3>VISIT US IN THE METAVERSE</h3>
                <p>
                  Rquisit’s <strong>headquarters</strong> is found in{" "}
                  <strong>Decentraland.</strong>
                  It features a <strong>shoppable boutique</strong> where we
                  host <strong> runway shows</strong> and{" "}
                  <strong>events.</strong> Show off your{" "}
                  <strong>digital fashion</strong> in the{" "}
                  <strong>Metaverse!</strong>
                </p>
                <a
                  target="_blank"
                  href="https://play.decentraland.org/?position=-82%2C-35&realm=dg"
                  className="btn-white"
                >
                  Jump In
                </a>
              </div>
            </div>
          </section>
          <section className="metaverse-section wwu-section">
            {/* <img src={Workwithus} alt="" /> */}
            <div className="box">
              <div className="metaverse-content wwu-content">
                <h3>APPLY TO WORK WITH US</h3>
                <a
                  target={"_blank"}
                  href="https://docs.google.com/forms/d/e/1FAIpQLScJXFfO58d9LJ5kSZxwEaNFPbptvlOmrX66BWykarkbzTLKfQ/viewform?vc=0&c=0&w=1&flr=0"
                  className="btn-white"
                >
                  Click Here
                </a>
              </div>
            </div>
          </section>
          <section className="nl-section">
            <div className="box">
              <div className="nl-content">
                <h3>Newsletter</h3>
                <p>
                  Stay up to date on new releases, interviews, events, and
                  updates from the community.
                </p>
                <div className="input-box">
                  <input type="text" placeholder="Email Address" />
                  <button className="btn-white">Sign Up</button>
                </div>
              </div>
            </div>
          </section>
          <footer>
            <div className="box">
              <div className="footer-content">
                <div className="footer-grid">
                  <a href="/about">About</a>
                  <a href="/legal">Privacy</a>
                  <a href="/legal">Terms of ServicePolicy</a>
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
          {/* <div id="mc_embed_signup">
        <form
          action="https://rquisit.us9.list-manage.com/subscribe/post?u=a0b0a4f5b94ea6d6451822e49&amp;id=bbae0adb11&amp;f_id=00b60ae1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <h2></h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
                value=""
              />
              <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style="display:none"
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style="display:none"
              ></div>
            </div>
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input
                type="text"
                name="b_a0b0a4f5b94ea6d6451822e49_bbae0adb11"
                tabIndex="-1"
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </form>
      </div> */}
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
