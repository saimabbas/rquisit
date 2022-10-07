import React from "react";
import "./App.css";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Logo from "./assets/img/logo.png";
import BGC from "./assets/img/bgc-img.jpg";
import BGC2 from "./assets/img/bgc2-img.png";
import DigiFash1 from "./assets/img/digi1.jpg";
import DigiFash2 from "./assets/img/digi2.jpg";
import DigiFash3 from "./assets/img/digi3.jpeg";
import Web3 from "./assets/img/web3.jpg";
import Designer from "./assets/img/designer.png";
import CuraImg from "./assets/img/teal-img.png";
import Metaverse from "./assets/img/metaverse.png";
import Workwithus from "./assets/img/work.jpg";

function App() {
  return (
    <div className="app">
      <section className="hero-section">
        <img src={BGC} alt="Hero-img" />
        <div className="hero-content">
          <h1>future | fashion</h1>
          <div className="header-icons ">
            <a target="_blank" href="#">
              <FaFacebookF />
            </a>{" "}
            <a target="_blank" href="https://www.instagram.com/rquisit/?hl=en">
              <BsInstagram />
            </a>
            <a target="_blank" href="https://twitter.com/rquisit">
              <BsTwitter />
            </a>
          </div>
          <button className="btn-white">CONNECT WALLET</button>
        </div>
        <header>
          <div className="box">
            <div className="header-content">
              <div className="header-left header-icons">
                <a target="_blank" href="#">
                  <FaFacebookF />
                </a>{" "}
                <a
                  target="_blank"
                  href="https://www.instagram.com/rquisit/?hl=en"
                >
                  <BsInstagram />
                </a>
                <a target="_blank" href="https://twitter.com/rquisit">
                  <BsTwitter />
                </a>
              </div>
              <div className="header-center">
                <img src={Logo} alt="" />
                <div className="header-navbar">
                  <a href="#">AboutUs</a>
                  <a href="#">DigitalFashion</a>
                  <a href="#">LearnNFTs</a>
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
            <div className="digi-fash-grid">
              <img src={DigiFash1} alt="" />
              <img src={DigiFash2} alt="" />
              <img src={DigiFash3} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="pioneer-digifash">
        <div className="pioneer-digifash-grd"></div>
        <img src={BGC2} alt="" />
        <div className="box">
          <div className="pioneer-df-content">
            <h3>PIONEERING DIGITAL FASHION</h3>
            <h5>Bringing designers and fashion lovers into Web3</h5>
            <p>
              Rquisit <strong>vets,</strong> <strong>onboards,</strong> and{" "}
              <strong>curates</strong> digital fashion for brands with utility
              in mind. We aim to bring <strong>designers</strong> and{" "}
              <strong>fashion lovers</strong> into <strong>Web3</strong> by
              providing <strong>cutting-edge initiatives</strong> and
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
              <img src={Web3} alt="" />
              <div className="web3-right-grid">
                <h3>
                  Web3 + <br /> Fashion
                </h3>
                <p>
                  <strong>Blockchain</strong> technology is changing our
                  relationship to the internet and how we engage with it. It's
                  becoming far more <strong>interactive</strong> as immersive
                  <strong>augmented reality</strong> experiences come to replace
                  passive forms of engagement. <br />
                  <br />
                  Digital <strong>collectibles</strong> have the ability to
                  redefine how brands and consumers connect to one another. We
                  see <strong>NFT</strong> trends shifting towards a more
                  <strong>tangible</strong> type of <strong>value</strong>, one
                  where consumer-brand relations can be taken to a whole new
                  level. <br />
                  <br />
                  Digital collectibles could act as a <strong>ticket</strong> to
                  a fashion show or hold <strong>voting power</strong> on color
                  choices for a new collection. The sky is the limit, and we're
                  excited to push this new <strong>revolution</strong> forward
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
              the <strong>next generation</strong> of fashion brands. Supporting
              <strong> designers </strong> emerging into <strong>Web3</strong>{" "}
              is a core part of our ethos, whether through{" "}
              <strong>mentorship</strong> initiatives or our in-house
              <strong>services.</strong>
            </p>
          </div>
        </div>
      </section>
      <div className="box">
        <section className="curation-section">
          <div className="cura-sec-content">
            <img src={CuraImg} alt="" />
            <div className="cura-right-grid">
              <h3>COLLECTIBLE CURATION</h3>
              <p>
                A pioneer in innovation, <strong>Rquisit</strong> is the first
                <strong>fashion destination</strong> that delivers the ultimate
                <strong> curation</strong> of digital fashion and Web3 content.
                We're working hand-in-hand with fashion brands to create
                utility-based <strong>digital collectibles</strong> that can be
                used as <strong>wearables</strong> in{" "}
                <strong>augmented reality</strong> or as skins on{" "}
                <strong>gaming platforms.</strong> It's important that the
                collectibles we feature provide sustainable value for each
                holder.
              </p>
            </div>
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
              It features a <strong>shoppable boutique</strong> where we host{" "}
              <strong> runway shows</strong> and <strong>events.</strong> Show
              off your <strong>digital fashion</strong> in the{" "}
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
        <img src={Workwithus} alt="" />
        <div className="box">
          <div className="metaverse-content wwu-content">
            <h3>APPLY TO WORK WITH US</h3>
            <a
              target={"_blank"}
              href="https://docs.google.com/forms/d/e/1FAIpQLSdMkYl3RtKCUzOOrKo79OLNRs-iCvwwrUBII07GeRmU2Qv9OQ/viewform"
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
              Stay up to date on new releases, interviews, events, and updates
              from the community.
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
                <a target="_blank" href="">
                  <FaFacebookF />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/rquisit/?hl=en"
                >
                  <BsInstagram />
                </a>
                <a target="_blank" href="https://twitter.com/rquisit">
                  <BsTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
