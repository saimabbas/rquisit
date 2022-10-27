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
// import $ from "jquery";
import { HashLink as Linka } from "react-router-hash-link";

function App() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  const [isHeaderMobShowing, setIsHeaderMobShowing] = useState(false);
  /* $(document).ready(function () {
    $("a[href*=\\#]").on("click", function (e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top,
        },
        500
      );
    });
  }); */
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
          <section className="about-hero-section">
            <div className="box">
              <div className="about-hero-content">
                <img src={CeoImg} alt="" />
                <div>
                  <h2>OUR STORY</h2>
                  <p>
                    Rquisit is a <b>marketplace</b> and <b>creative agency</b>{" "}
                    for <b>digital fashion</b> founded by <b>Rebecca</b>, a
                    multi-hyphenate <b>startup founder</b> who has been engaged
                    in <b>Web3</b> since <b>2018</b>. Noticing the challenges
                    the fashion industry faces, from{" "}
                    <b>unsustainable production</b> practices to{" "}
                    <b>body shaming</b> marketing, Rebecca saw the
                    <b>potential</b> for <b>blockchain technology</b> to{" "}
                    <b>revolutionize</b> how brands operate. This is what
                    inspired Rquisit - a digital fashion marketplace.
                  </p>
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
          <section className="r-faq">
            <img src={RFAQBg} alt="" />
            <div className="box">
              <div className="r-faq-content">
                <h2>RQUISIT FAQs</h2>
                <div>
                  <h3>WHAT IS RQUISIT?</h3>
                  <p>
                    Rquisit is a marketplace for fashion NFT’s. A pioneer in
                    innovation, Rquisit delivers the ultimate curation of
                    fashion NFT’s and web3 content. Transitioning fashion
                    designers to web3 is a core part of our ethos. With the
                    world’s most coveted designer brands, like Tiffany’s, Coach,
                    and many more entering Web3, Rquisit intends to be the
                    premier fashion destination in the metaverse.
                  </p>
                </div>
                <div>
                  <h3>
                    WHAT IS THE DIFFERENCE BETWEEN RQUISIT AND OPENSEA (OR OTHER
                    NFT MARKETPLACES)?
                  </h3>
                  <p>
                    Rquisit vets, onboards, and curates fashion NFT’s with
                    utility in mind.
                    <br />
                    <br />
                    Rquisit is not only for those with crypto-experience. Our
                    aim is to onboard both fashion designers and fashion lovers
                    - that is why we provide the educational resources to teach
                    you how to get started and keep you updated on the latest
                    trends.
                  </p>
                </div>
                <div>
                  <h3>HOW CAN I ATTEND RQUISIT’S EVENTS?</h3>
                  <p>
                    Find us in Decentraland. Follow us on twitter to stay
                    up-to-date on the latest happenings.
                  </p>
                </div>
                <div>
                  <h3>WHAT BLOCKCHAIN IS RQUISIT ON?</h3>
                  <p>
                    Ethereum with the plan to expand to multi-chain in the near
                    future.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="r-faq r-faq-2">
            <div className="box">
              <div className="r-faq-content">
                <h2>RQUISIT FAQs</h2>
                <div>
                  <h3>WHAT IS A NON-FUNGIBLE TOKEN (NFT)?</h3>
                  <p>
                    NFTs could be a ticket to a fashion show, exclusive events,
                    or a vote on a future collection. NFT is short for
                    Non-Fungible Token and unlike its fungible counterparts such
                    as freely interchangeable cryptocurrencies, NFTs are not
                    interchangeable.
                    <br />
                    <br />
                    For example, a fungible token like Bitcoin is
                    interchangeable for something of similar value. One Bitcoin
                    can be exchanged for Ethereum (another fungible token) of a
                    similar value (that is ETH equivalent to the value of 1
                    BTC). That is not the case for NFT as its unique properties
                    mean one NFT cannot be exchanged for another, as they cannot
                    be of similar value.
                    <br />
                    <br />
                    You can learn more about What is an NFT on our blog.
                  </p>
                </div>
                <div>
                  <h3>HOW TO BUY / MINT AN NFT?</h3>
                  <p>
                    You will need to create a crypto wallet such as MetaMask or
                    Coinbase, and then connect your wallet to rquisit.com. When
                    purchasing an NFT please note that you might incur gas fees
                    (transaction costs).
                  </p>
                </div>
                <div>
                  <h3>WHAT IS A CRYPTO WALLET? WHY DO I NEED ONE?</h3>
                  <p>
                    A crypto wallet is an application or hardware device that
                    allows individuals to store and transfer digital assets like
                    cryptocurrencies and Non-Fungible Tokens (NFTs). There are
                    several providers available, with MetaMask being the most
                    popular one.
                    <br />
                    <br />
                    After you register and download any crypto wallet, you take
                    control of two 42-character keys. This is a public key,
                    known as your wallet address, and a private key. You might
                    consider your public key to be like your shareable bank
                    account info, so you only have to copy and paste when people
                    ask for your address. Your private key works like a password
                    and should always remain private, for security.
                    <br />
                    <br />
                    Creating a crypto wallet is essential to transact with
                    cryptocurrencies or NFTs, either on Rquisit or any other
                    marketplace.
                    <br />
                    <br />
                    For further information on how to set-up a MetaMask wallet,
                    please see our blog post.
                  </p>
                </div>
                <div>
                  <h3>HOW DO I PURCHASE ETHEREUM (ETH)?</h3>
                  <p>
                    To deposit Ethereum on a MetaMask wallet you can either
                    transfer ETH from a centralized exchange such as Coinbase,
                    Binance or Kraken to your wallet, using your wallet’s public
                    address (starting by 0x…) as destination. Or, you may use
                    for instance MoonPay (https://www.moonpay.com/buy) to buy
                    ETH with your credit card and have it sent to your MetaMask
                    wallet.
                    <br />
                    <br />
                    For further information, please refer to the following
                    tutorial:
                    https://metamask.zendesk.com/hc/en-us/articles/360028141672-Direct-deposit-receive-tokens-to-your-MetaMask-wallet
                  </p>
                </div>
                <div>
                  <h3>WHAT ARE GAS FEES?</h3>
                  <p>
                    Gas fees are the transaction paid in proof-of-work mining
                    models, such as the Ethereum or Bitcoin. Miners represent
                    decentralized computers that use computing power to process
                    and enable transactions. For every transaction, miners get
                    paid via gas fees. These fees guarantee that transactions
                    are processed on the blockchain.
                  </p>
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
                  <Linka to="/legal#privacy">Your link text</Linka>

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
