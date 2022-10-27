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
import $ from "jquery";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const [isHeaderMobShowing, setIsHeaderMobShowing] = useState(false);

  useEffect(() => {
    /* ScrollSmoother.create({
      smooth: 1.25,
      effects: true,
      smoothTouch: 0,
    }); */
  }, []);

  return (
    <div className="smoosth-wrapper" id="smooth-wrapper">
      <div id="smooth-cosntent">
        <div className="app">
          <section className="legal-section">
            <div className="box">
              <div className="legal-content">
                <h2>TERMS OF SERVICE</h2>
                <br />
                <p>
                  This website and mobile app are operated by Rquisit.
                  Throughout the site, the terms “we,” “us” and “our” refer to
                  Rquisit. Rquisit offers this website, including all
                  information, tools, and services available from this site to
                  you, the user, conditioned upon your acceptance of all terms,
                  conditions, policies, and notices stated here.
                  <br />
                  <br />
                  By visiting our site and/ or purchasing something from us, you
                  engage in our “Service” and agree to be bound by the following
                  terms and conditions (“Terms of Service”, “Terms”), including
                  those additional terms and conditions and policies referenced
                  herein and/or available by hyperlink. These Terms of Service
                  apply to all users of the site, including without limitation
                  users who are browsers, vendors, customers, merchants, and/ or
                  contributors of content.
                  <br />
                  <br />
                  Please read these Terms of Service carefully before accessing
                  or using our website. By accessing or using any part of the
                  site, you agree to be bound by these Terms of Service. If you
                  do not agree to all the terms and conditions of this
                  agreement, then you may not access the website or use any
                  services. If these Terms of Service are considered an offer,
                  acceptance is expressly limited to these Terms of Service.
                  <br />
                  <br />
                  Any new features or tools which are added to the current store
                  shall also be subject to the Terms of Service. You can review
                  the most current version of the Terms of Service at any time
                  on this page. We reserve the right to update, change or
                  replace any part of these Terms of Service by posting updates
                  and/or changes to our website. It is your responsibility to
                  check this page periodically for changes. Your continued use
                  of or access to the website following the posting of any
                  changes constitutes acceptance of those changes.
                  <br />
                  <br />
                  Our store is hosted on the Ethereum blockchain.
                </p>
                <h3>SECTION 1 - ONLINE STORE TERMS</h3>
                <p>
                  By agreeing to these Terms of Service, you represent that you
                  are at least the age of majority in your state or province of
                  residence, or that you are the age of majority in your state
                  or province of residence and you have given us your consent to
                  allow any of your minor dependents to use this site.You may
                  not use our products for any illegal or unauthorized purpose
                  nor may you, in the use of the Service, violate any laws in
                  your jurisdiction (including but not limited to copyright
                  laws).You must not transmit any worms or viruses or any code
                  of a destructive nature.A breach or violation of any of the
                  Terms will result in an immediate termination of your
                  Services.
                </p>
                <h3>SECTION 2 - GENERAL CONDITIONS</h3>
                <p>
                  We reserve the right to refuse service to anyone for any
                  reason at any time.You understand that your content (not
                  including credit card information), may be transferred
                  unencrypted and involve (a) transmissions over various
                  networks; and (b) changes to conform and adapt to technical
                  requirements of connecting networks or devices. Credit card
                  information is always encrypted during transfer over
                  networks.You agree not to reproduce, duplicate, copy, sell,
                  resell or exploit any portion of the Service, use of the
                  Service, or access to the Service or any contact on the
                  website through which the service is provided, without express
                  written permission by us.The headings used in this agreement
                  are included for convenience only and will not limit or
                  otherwise affect these Terms.
                </p>
                <br />
                <br />
                <h4>Your Commitments</h4>
                <br />
                <p>
                  In return for our commitment to provide the Service, we
                  require you to make the below commitments to us.
                </p>
                <br />
                <br />
                <h4>Who Can Use Rquisit?</h4>
                <br />
                <p>
                  We want our Service to be as open and inclusive as possible,
                  but we also want it to be safe, secure, and in accordance with
                  the law. So, we need you to commit to a few restrictions in
                  order to be part of the Rquisit community.
                </p>
                <br />
                <br />
                <ul>
                  <li>You must be at least 13 years old.</li>
                  <li>
                    You must not be prohibited from receiving any aspect of our
                    Service under applicable laws or engaging in payments
                    related Services if you are on an applicable denied party
                    listing.
                  </li>
                  <li>You must not be a convicted sex offender.</li>
                </ul>

                <br />
                <br />
                <h4>How You Can't Use Rquisit</h4>
                <br />
                <p>
                  Providing a safe and open Service for a broad community
                  requires that we all do our part.
                </p>
                <br />
                <br />
                <ul>
                  <li>
                    You can't impersonate others or provide inaccurate
                    information.
                  </li>
                  <li>
                    You don't have to disclose your identity on Rquisit but you
                    must provide us with accurate and up to date information
                    (including registration information). Also, you may not
                    impersonate someone you aren't, and you can't create an
                    account for someone else unless you have their express
                    permission. You can
                  </li>
                  <li>
                    You can't violate (or help or encourage others to violate)
                    these Terms or our policies.
                  </li>
                  <li>
                    You can't attempt to create accounts or access or collect
                    information in unauthorized ways.
                  </li>
                  <li>
                    This includes creating accounts or collecting information in
                    an automated way without our express permission.
                  </li>
                  <li>
                    You can't attempt to buy, sell, or transfer any aspect of
                    the content or solicit, collect, or use login credentials or
                    content of other users.
                  </li>
                  <li>
                    You can't post private or confidential information or do
                    anything that violates someone else's rights, including
                    intellectual property.
                  </li>
                </ul>
                <br />
                <br />
                <p>
                  If you provide the images of the other people, it means that
                  you have the rights to use them and provide for our usage and
                  you take the full responsibility in case of any claims from
                  the person on the photo that you used and provided for our
                  usage.
                </p>
                <br />
                <br />
                <h4>Permissions You Give to Us.</h4>
                <br />
                <p>
                  As part of our agreement, you also give us permissions that we
                  need to provide the Service.
                </p>
                <br />
                <br />
                <ul>
                  <li>
                    We do not claim ownership of your content, but you grant us
                    a license to use it.
                  </li>
                  <li>
                    When you place an order or upload content that is covered by
                    intellectual property rights (like photos or videos) on or
                    in connection with our Service, you hereby grant to us a
                    non-exclusive, royalty-free, transferable, sub-licensable,
                    worldwide license to host, use, distribute, modify, run,
                    copy, publicly perform or display, translate, and create
                    derivative works of your content (consistent with your
                    privacy and application settings). You can end this license
                    anytime by providing the written notice to Rquisit.
                  </li>
                </ul>
                <br />
                <br />
                <h3>
                  SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF
                  INFORMATION
                </h3>
                <p>
                  We are not responsible if information made available on this
                  site is not accurate, complete or current. The material on
                  this site is provided for general information only and should
                  not be relied upon or used as the sole basis for making
                  decisions without consulting primary, more accurate, more
                  complete or more timely sources of information. Any reliance
                  on the material on this site is at your own risk. This site
                  may contain certain historical information. Historical
                  information, necessarily, is not current and is provided for
                  your reference only. We reserve the right to modify the
                  contents of this site at any time, but we have no obligation
                  to update any information on our site. You agree that it is
                  your responsibility to monitor changes to our site.
                </p>
                <br />
                <br />
                <h3>SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES</h3>
                <p>
                  Prices for our products are subject to change without
                  notice.We reserve the right at any time to modify or
                  discontinue the Service (or any part or content thereof)
                  without notice at any time.We shall not be liable to you or to
                  any third-party for any modification, price change, suspension
                  or discontinuance of the Service.
                </p>
                <h3>SECTION 5 - PRODUCTS OR SERVICES (IF APPLICABLE)</h3>
                <p>
                  Products or services may be available exclusively online
                  through the website. These products or services may have
                  limited quantities and are subject to return or exchange only
                  according to our Refund Policy. We have made every effort to
                  display as accurately as possible the colors and images of our
                  products that appear at the store. We cannot guarantee that
                  your computer monitor's display of any color will be
                  accurate.We reserve the right, but are not obligated, to limit
                  the sales of our products or Services to any person,
                  geographic region or jurisdiction. We may exercise this right
                  on a case-by-case basis. We reserve the right to limit the
                  quantities of any products or services that we offer. All
                  descriptions of products or product pricing are subject to
                  change at anytime without notice, at the sole discretion of
                  us. We reserve the right to discontinue any product at any
                  time. Any offer for any product or service made on this site
                  is void where prohibited.We do not warrant that the quality of
                  any products, services, information, or other material
                  purchased or obtained by you will meet your expectations, or
                  that any errors in the Service will be corrected.
                </p>
                <br />
                <p>
                  <b>
                    Your purchase is digital unless otherwise stated. Please
                    review your purchase carefully.
                  </b>
                </p>
                <h3>SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION</h3>
                <p>
                  We reserve the right to refuse any order you place with us. We
                  may, in our sole discretion, limit or cancel quantities
                  purchased per person, per household or per order. These
                  restrictions may include orders placed by or under the same
                  customer account, the same credit card, and/or orders that use
                  the same billing and/or shipping address. In the event that we
                  make a change to or cancel an order, we may attempt to notify
                  you by contacting the e‑mail and/or billing address/phone
                  number provided at the time the order was made. We reserve the
                  right to limit or prohibit orders that, in our sole judgment,
                  appear to be placed by dealers, resellers or distributors.
                  <br />
                  <br />
                  You agree to provide current, complete and accurate purchase
                  and account information for all purchases made at our store.
                  You agree to promptly update your account and other
                  information, including your email address and credit card
                  numbers and expiration dates, so that we can complete your
                  transactions and contact you as needed.
                  <br />
                  <br />
                  For more detail, please review our{" "}
                  <a href="#">Refund Policy</a>.
                </p>
                <br />
                <br />
                <h3>SECTION 7 - OPTIONAL TOOLS</h3>
                <p>
                  We may provide you with access to third-party tools over which
                  we neither monitor nor have any control nor input.You
                  acknowledge and agree that we provide access to such tools ”as
                  is” and “as available” without any warranties, representations
                  or conditions of any kind and without any endorsement. We
                  shall have no liability whatsoever arising from or relating to
                  your use of optional third-party tools.Any use by you of
                  optional tools offered through the site is entirely at your
                  own risk and discretion and you should ensure that you are
                  familiar with and approve of the terms on which tools are
                  provided by the relevant third-party provider(s).We may also,
                  in the future, offer new services and/or features through the
                  website (including, the release of new tools and resources).
                  Such new features and/or services shall also be subject to
                  these Terms of Service.
                </p>
                <br />
                <br />
                <h3>SECTION 8 - THIRD-PARTY LINKS</h3>
                <p>
                  Certain content, products and services available via our
                  Service may include materials from third-parties.Third-party
                  links on this site may direct you to third-party websites that
                  are not affiliated with us. We are not responsible for
                  examining or evaluating the content or accuracy and we do not
                  warrant and will not have any liability or responsibility for
                  any third-party materials or websites, or for any other
                  materials, products, or services of third-parties.We are not
                  liable for any harm or damages related to the purchase or use
                  of goods, services, resources, content, or any other
                  transactions made in connection with any third-party websites.
                  Please review carefully the third-party's policies and
                  practices and make sure you understand them before you engage
                  in any transaction. Complaints, claims, concerns, or questions
                  regarding third-party products should be directed to the
                  third-party.
                </p>
                <br />
                <br />
                <h3>
                  SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS
                </h3>
                <p>
                  If, at our request, you send certain specific submissions (for
                  example contest entries) or without a request from us you send
                  creative ideas, suggestions, proposals, plans, or other
                  materials, whether online, by email, by postal mail, or
                  otherwise (collectively, 'comments'), you agree that we may,
                  at any time, without restriction, edit, copy, publish,
                  distribute, translate and otherwise use in any medium any
                  comments that you forward to us. We are and shall be under no
                  obligation (1) to maintain any comments in confidence; (2) to
                  pay compensation for any comments; or (3) to respond to any
                  comments.We may, but have no obligation to, monitor, edit or
                  remove content that we determine in our sole discretion are
                  unlawful, offensive, threatening, libellous, defamatory,
                  pornographic, obscene or otherwise objectionable or violates
                  any party’s intellectual property or these Terms of
                  Service.You agree that your comments will not violate any
                  right of any third-party, including copyright, trademark,
                  privacy, personality or other personal or proprietary right.
                  You further agree that your comments will not contain
                  libellous or otherwise unlawful, abusive or obscene material,
                  or contain any computer virus or other malware that could in
                  any way affect the operation of the Service or any related
                  website. You may not use a false e‑mail address, pretend to be
                  someone other than yourself, or otherwise mislead us or
                  third-parties as to the origin of any comments. You are solely
                  responsible for any comments you make and their accuracy. We
                  take no responsibility and assume no liability for any
                  comments posted by you or any third-party
                </p>
                <br />
                <br />
                <h3>SECTION 10 - PERSONAL INFORMATION</h3>
                <p>
                  Your submission of personal information through the store is
                  governed by our Privacy Policy. To view our Privacy Policy.
                </p>
                <h3>SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS</h3>
                <p>
                  Occasionally there may be information on our site or in the
                  Service that contains typographical errors, inaccuracies or
                  omissions that may relate to product descriptions, pricing,
                  promotions, offers, product shipping charges, transit times
                  and availability. We reserve the right to correct any errors,
                  inaccuracies or omissions, and to change or update information
                  or cancel orders if any information in the Service or on any
                  related website is inaccurate at any time without prior notice
                  (including after you have submitted your order).We undertake
                  no obligation to update, amend or clarify information in the
                  Service or on any related website, including without
                  limitation, pricing information, except as required by law. No
                  specified update or refresh date applied in the Service or on
                  any related website, should be taken to indicate that all
                  information in the Service or on any related website has been
                  modified or updated.
                </p>
                <br />
                <br />
                <h3>SECTION 12 - PROHIBITED USES</h3>
                <p>
                  In addition to other prohibitions as set forth in the Terms of
                  Service, you are prohibited from using the site or its
                  content: (a) for any unlawful purpose; (b) to solicit others
                  to perform or participate in any unlawful acts; (c) to violate
                  any international, federal, provincial or state regulations,
                  rules, laws, or local ordinances; (d) to infringe upon or
                  violate our intellectual property rights or the intellectual
                  property rights of others; (e) to harass, abuse, insult, harm,
                  defame, slander, disparage, intimidate, or discriminate based
                  on gender, sexual orientation, religion, ethnicity, race, age,
                  national origin, or disability; (f) to submit false or
                  misleading information; (g) to upload or transmit viruses or
                  any other type of malicious code that will or may be used in
                  any way that will affect the functionality or operation of the
                  Service or of any related website, other websites, or the
                  Internet; (h) to collect or track the personal information of
                  others; (i) to spam, phish, pharm, pretext, spider, crawl, or
                  scrape; (j) for any obscene or immoral purpose; or (k) to
                  interfere with or circumvent the security features of the
                  Service or any related website, other websites, or the
                  Internet. We reserve the right to terminate your use of the
                  Service or any related website for violating any of the
                  prohibited uses.
                </p>
                <br />
                <br />
                <h3>
                  SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY
                </h3>
                <p>
                  We do not guarantee, represent or warrant that your use of our
                  service will be uninterrupted, timely, secure or error-free.We
                  do not warrant that the results that may be obtained from the
                  use of the service will be accurate or reliable.You agree that
                  from time to time we may remove the service for indefinite
                  periods of time or cancel the service at any time, without
                  notice to you.You expressly agree that your use of, or
                  inability to use, the service is at your sole risk. The
                  service and all products and services delivered to you through
                  the service are (except as expressly stated by us) provided
                  'as is' and 'as available' for your use, without any
                  representation, warranties or conditions of any kind, either
                  express or implied, including all implied warranties or
                  conditions of merchantability, merchantable quality, fitness
                  for a particular purpose, durability, title, and
                  non-infringement.In no case shall Rquisit, our directors,
                  officers, employees, affiliates, agents, contractors, interns,
                  suppliers, service providers or licensors be liable for any
                  injury, loss, claim, or any direct, indirect, incidental,
                  punitive, special, or consequential damages of any kind,
                  including, without limitation lost profits, lost revenue, lost
                  savings, loss of data, replacement costs, or any similar
                  damages, whether based in contract, tort (including
                  negligence), strict liability or otherwise, arising from your
                  use of any of the service or any products procured using the
                  service, or for any other claim related in any way to your use
                  of the service or any product, including, but not limited to,
                  any errors or omissions in any content, or any loss or damage
                  of any kind incurred as a result of the use of the service or
                  any content (or product) posted, transmitted, or otherwise
                  made available via the service, even if advised of their
                  possibility. Because some states or jurisdictions do not allow
                  the exclusion or the limitation of liability for consequential
                  or incidental damages, in such states or jurisdictions, our
                  liability shall be limited to the maximum extent permitted by
                  law.
                </p>
                <h3>SECTION 14 - INDEMNIFICATION</h3>
                <p>
                  You agree to indemnify, defend and hold harmless Rquisit and
                  our parent, subsidiaries, affiliates, partners, officers,
                  directors, agents, contractors, licensors, service providers,
                  subcontractors, suppliers, interns and employees, harmless
                  from any claim or demand, including reasonable attorneys’
                  fees, made by any third-party due to or arising out of your
                  breach of these Terms of Service or the documents they
                  incorporate by reference, or your violation of any law or the
                  rights of a third-party.
                </p>
                <br />
                <br />
                <h3>SECTION 15 - SEVERABILITY</h3>
                <p>
                  In the event that any provision of these Terms of Service is
                  determined to be unlawful, void or unenforceable, such
                  provision shall nonetheless be enforceable to the fullest
                  extent permitted by applicable law, and the unenforceable
                  portion shall be deemed to be severed from these Terms of
                  Service, such determination shall not affect the validity and
                  enforceability of any other remaining provisions.
                </p>
                <br />
                <br />
                <h3>SECTION 16 - TERMINATION</h3>
                <p>
                  The obligations and liabilities of the parties incurred prior
                  to the termination date shall survive the termination of this
                  agreement for all purposes.These Terms of Service are
                  effective unless and until terminated by either you or us. You
                  may terminate these Terms of Service at any time by notifying
                  us that you no longer wish to use our Services, or when you
                  cease using our site.If in our sole judgment you fail, or we
                  suspect that you have failed, to comply with any term or
                  provision of these Terms of Service, we also may terminate
                  this agreement at any time without notice and you will remain
                  liable for all amounts due up to and including the date of
                  termination; and/or accordingly may deny you access to our
                  Services (or any part thereof).
                </p>
                <h3>SECTION 17 - ENTIRE AGREEMENT</h3>
                <p>
                  The failure of us to exercise or enforce any right or
                  provision of these Terms of Service shall not constitute a
                  waiver of such right or provision.These Terms of Service and
                  any policies or operating rules posted by us on this site or
                  in respect to The Service constitutes the entire agreement and
                  understanding between you and us and govern your use of the
                  Service, superseding any prior or contemporaneous agreements,
                  communications and proposals, whether oral or written, between
                  you and us (including, but not limited to, any prior versions
                  of the Terms of Service).Any ambiguities in the interpretation
                  of these Terms of Service shall not be construed against the
                  drafting party.
                </p>
                <br />
                <br />
                <h3>SECTION 18 - GOVERNING LAW</h3>
                <p>
                  These Terms of Service and any separate agreements whereby we
                  provide you Services shall be governed by and construed in
                  accordance with the laws of New York State.
                </p>
                <br />
                <br />
                <h3>SECTION 19 - CHANGES TO TERMS OF SERVICE</h3>
                <p>
                  You can review the most current version of the Terms of
                  Service at any time at this page.We reserve the right, at our
                  sole discretion, to update, change or replace any part of
                  these Terms of Service by posting updates and changes to our
                  website. It is your responsibility to check our website
                  periodically for changes. Your continued use of or access to
                  our website or the Service following the posting of any
                  changes to these Terms of Service constitutes acceptance of
                  those changes.
                </p>
                <div className="divider"></div>
                <h2>REFUND POLICY</h2>
                <br />
                <p>
                  At the moment, we have a non-refund policy.
                  <br />
                  Any issues with your purchase can be discussed directly with
                  the corresponding brand. Technical issues can be reported
                  directly to Rquisit.
                </p>

                <div className="divider"></div>
                <h2 id="privacy" name="privacy">
                  {" "}
                  PRIVACY
                </h2>
                <br />

                <p>
                  Rquisit (sometimes referred to as “we” or “us” throughout this
                  policy) is committed to safeguarding your privacy online.
                  Rquisit does not collect personal information about
                  individuals, such as names and mailing or email addresses,
                  unless the individual knowingly provides it. In choosing to
                  provide this information, and/or by using the website
                  www.Rquisit.com (the “Website”), you agree to be bound by the
                  terms and conditions of the Rquisit Privacy Policy (sometimes
                  referred to as the “Privacy Policy”) outlined below. We
                  reserve the right, at our discretion, to change, modify, add,
                  or remove portions from this Privacy Policy at any time. Your
                  continued use of the Website following the posting of any
                  changes to this Privacy Policy means you accept such changes.
                  We ask that our visitors periodically review this page to
                  ensure familiarity with the most current version of our
                  Privacy Policy. If you have any questions or comments about
                  this Privacy Policy or our privacy practices, you can contact
                  us.
                </p>
                <br />
                <br />
                <h4>Usage Data</h4>
                <br />
                <p>
                  When you visit the Rquisit website, our servers automatically
                  collect information, including information about the IP
                  address from which you access the site (an IP address is a
                  number that is automatically assigned to your computer
                  whenever you are surfing the web), the pages you visit, the
                  date and time you access our site, and the type of browser and
                  operating system that you are using. We use this information
                  to better understand how our site is used and we may use it to
                  guide us on what updates and enhancements to make. This
                  information is compiled and analyzed on an aggregated basis,
                  rather than on an individual basis.
                </p>
                <br />
                <br />
                <h4>Email and Other Content</h4>
                <br />
                <p>
                  You may choose to provide us with personal information in an
                  email message to one of the addresses listed throughout our
                  site. We customarily use this information only to respond to
                  your message.
                </p>
                <br />
                <p>
                  Rquisit offers visitors the opportunity to subscribe to our
                  email club. If you subscribe, you will receive newsletters
                  and/or information on Rquisit. If you are purchasing tickets
                  to an event that is being presented at our facilities by a
                  third-party producer or presenter or another organization
                  (i.e., not Rquisit), you may have the option to receive emails
                  from the event producer or presenter about their current and
                  future events. These third-party producers, presenters and
                  organizations are referred to as “Third-Party Presenters”
                  throughout this policy. Ticket purchasers will also receive
                  emails to confirm their transactions. Any information you
                  choose to provide may be used for marketing and promotional
                  purposes and we may use cookies to track the pages on our site
                  that you visit.{" "}
                  <b>
                    Email addresses that we collect for the Rquisit email club
                    are never shared, rented or sold to third parties, other
                    than certain Third Party Presenters.
                  </b>{" "}
                  However, Third-Party Presenters may have their own policies
                  that differ from the policies of Rquisit, and Rquisit is not
                  responsible for the policies or practices (privacy or
                  otherwise) of any Third-Party Presenters.
                </p>
                <br />
                <br />
                <h4>
                  Other Personally Identifiable Information That We Collect
                </h4>
                <br />
                <p>
                  Rquisit collects personally identifiable information about you
                  that you voluntarily submit to us. We may collect this
                  information in a variety of ways, including without limitation
                  when you subscribe to our email club (as described above) or
                  post or submit content on the Website. You may visit the
                  Website anonymously, and you may always refuse to supply
                  personally identifiable information, although it may prevent
                  you from using certain features on the Website. The personally
                  identifiable information which you may voluntarily provide to
                  us and we may collect may include, without limitation:
                </p>
                <br />
                <p className="p-padding">
                  Your name, address, email address, profession, and telephone
                  number.
                </p>
                <br />
                <p className="p-padding">
                  Any content (e.g., comments, photographs, information, and
                  other materials) that you post on the Website or submit to us
                  on the Website.
                </p>
                <br />
                <p className="p-padding">
                  Communications between you and us (e.g., emails).
                </p>
                <br />
                <br />
                <h4>User Content and Communication with Us</h4>
                <br />
                <p>
                  Any material or communications you post or submit on the
                  Website or transmit to us by email, including, without
                  limitation, any information, photographs, data, questions,
                  comments, or suggestions, will be treated as non-confidential
                  and non-proprietary and may be used by us for any purpose,
                  including, without limitation, reproduction, disclosure,
                  transmission, publication, broadcast and posting.
                </p>
                <br />
                <br />
                <h4>Opt-Out Process</h4>
                <br />
                <p>
                  To opt-out of any future promotional messages from us, either
                  electronic or otherwise, you should send an unsubscribe
                  request to us. We will process your request within a
                  reasonable time after receipt.
                </p>
                <br />
                <br />
                <h4>Protection for Children</h4>
                <br />
                <p>
                  New York City Center does not solicit personal information
                  from children. Visitors under thirteen years of age should
                  remember that they are required to obtain an adult's
                  permission before submitting any personal information to this
                  Website or any other website. We do not seek to collect
                  personally identifiable information from children under the
                  age of 13. When we become aware that personal information from
                  a child under 13 has been collected without such child’s
                  parent or guardian’s consent, we will use all reasonable
                  efforts to delete such information from our database. If you
                  believe that we might have collected any information from or
                  about a child under the age of 13, please contact us.
                </p>
                <br />
                <br />
                <h4>Cookies and Similar Technologies</h4>
                <p>
                  We may use “cookies,” “device identifiers” or similar types of
                  technology (e.g., pixels tags, web beacons, clear GIFs, and
                  local storage) to collect information about your use of the
                  Website, such as pages you have visited, content you have
                  viewed and search queries you have run. We may use this
                  information to help us enhance the efficiency and usefulness
                  of the Website and for other purposes to make your visit more
                  convenient or to enable us to enhance the Website. Cookies are
                  small files of information that are stored on your computer's
                  hard drive by your Web browser, and “device identifiers” are
                  files that are stored on your mobile device that identify your
                  device. The cookies we use do not contain any personal
                  information. Most Web browsers automatically accept cookies,
                  but you can change the preferences of your browser so that it
                  does not accept or blocks them or other types of local data
                  storage. If you block cookies or other types of local data
                  storage you may not be able to use certain Website features or
                  functions on the Rquisit Website.
                </p>
                <br />
                <br />
                <h4>Third-Party Cookies and Advertising</h4>
                <br />
                <p>
                  Third-party vendors that Rquisit engages, including but not
                  limited to Google Inc., may use cookies, device identifiers,
                  or similar technologies to serve ads based on a user’s prior
                  visits to our Website or for other purposes. This could be in
                  the form of an advertisement on the Google search results
                  page, a site in the Google Display Network, or another form.
                  You may opt out of Google’s use of cookies by visiting the
                  Google advertising opt-out page. You may also use a browser
                  plugin to opt-out of remarketing advertising. In addition, we
                  may use third parties to provide products and services that
                  support the Website, such as by allowing you to share content
                  or tracking aggregate usage statistics (e.g., Google
                  Analytics). We do not control these third-party technologies
                  and their use is governed by the privacy policies of the third
                  parties using such technologies.
                </p>
                <br />
                <p>
                  To learn more about advertising networks and how to opt out of
                  sharing information with them, visit
                  optout.networkadvertising.org and optout.aboutads.info.
                  Residents of the European Economic Area (EEA) can find
                  additional information about their choices with respect to
                  advertising networks and online behavioral advertising by
                  visiting{" "}
                  <a href="www.youronlinechoices.com">
                    www.youronlinechoices.com
                  </a>{" "}
                  .
                </p>
                <br />
                <br />
                <h4>How We Use Your Information</h4>
                <p>
                  In addition to other specific uses that we describe in this
                  Privacy Policy, we may use any information that we collect
                  (including personally and non-personally identifiable
                  information) to:
                </p>
                <br />
                <p className="p-padding">
                  Provide our products and services and information to you.
                </p>
                <br />
                <p className="p-padding">
                  Develop and test new products and services.
                </p>
                <br />
                <p className="p-padding">
                  Respond to your inquiries and comments and provide customer
                  service.
                </p>
                <br />
                <p className="p-padding">
                  Send you updates (e.g., relating to special offers, features,
                  and promotions), newsletters, marketing materials and other
                  information from time to time, for which you will have the
                  opportunity to either opt-in or opt-out.
                </p>
                <br />
                <p className="p-padding">
                  Provide, improve, test and monitor the Website.
                </p>
                <br />
                <p className="p-padding">
                  Diagnose or fix technology problems.
                </p>
                <br />
                <p className="p-padding">Manage our business.</p>
                <br />
                <br />
                <br />
                <h4>Data Sharing</h4>
                <p>
                  By using the Website, you agree that your name and basic
                  contact information (including telephone number, email
                  address, and street address) may be shared with Third-Party
                  Presenters if you purchase tickets to their events. You also
                  agree that your name and street address (but not your
                  telephone number or email address) may be exchanged with other
                  arts organizations and arts programmers as well as other
                  select organizations. These organizations may attempt to
                  contact you to promote products or services that they offer.
                  Such contacts will only be made with our consent, and we will
                  only grant our consent when we consider the offer to be of
                  potential interest and benefit to you. We do not sell,
                  exchange, share, or rent any lists to political parties or
                  candidates for political office. Credit card information is
                  not made available to any third party and is considered
                  completely confidential.
                </p>
                <br />
                <p>
                  We may share your personally identifiable information when we
                  have your consent. For example, when you submit or post any
                  content to the Website, you grant us permission to share that
                  information. We will not disclose your personally identifiable
                  information to third parties without your consent, except as
                  set forth below or provided elsewhere in this Privacy Policy:
                </p>
                <br />
                <p className="p-padding">
                  We may disclose your personally identifiable information to
                  our vendors, subcontractors, and partners, and other third
                  parties who provide services to us. However, they are only
                  permitted to access your information in connection with
                  performing such services and are not authorized by us to use
                  the information for their own benefit.
                </p>
                <br />
                <p className="p-padding">
                  We may disclose your personally identifiable information to
                  protect the safety, rights, or property of the public, any
                  person, or Rquisit; to investigate, prevent, or otherwise
                  address suspected fraud, harassment or other violations of any
                  law, rule or regulation or the Terms of Use for the Website;
                  to detect, prevent or otherwise address security or technical
                  issues; or as we believe is required by law, regulation, or
                  legal process.
                </p>
                <br />
                <p className="p-padding">
                  We do not sell or rent your personally identifiable
                  information to third parties; provided, however, we may engage
                  in a merger, acquisition, disposition, change of control,
                  bankruptcy, dissolution, reorganization, or similar
                  transaction or proceeding that involves the transfer of your
                  information.
                </p>
                <br />
                <p>
                  We may share non-personally identifiable information or
                  generic aggregated demographic information with our partners
                  or other third parties for any purpose.
                </p>
                <br />
                <br />
                <h4>Opting Out for Direct Mail and Data Sharing</h4>
                <br />
                <p>
                  If you do not want your name and/or contact information to be
                  used in the manner stated above in “Data Sharing,” you may
                  indicate this at the time you provide the information. If an
                  "opt-out" option is not offered, or you decide after you have
                  provided this information that you do not want us to share
                  your information with any other organization, you may also
                  notify us in an email (subject line "do not share"). We
                  cannot, however, remove your name from any third-party list;
                  you will have to contact them directly.
                </p>
                <br />
                <p>
                  The Direct Marketing Association (DMA) offers a Mail
                  Preference Service that is designed to assist consumers in
                  decreasing the amount of nonprofit or commercial mail they
                  receive at home. For more information about this service,
                  visit <a href="www.dmachoice.org">www.dmachoice.org</a>.
                </p>
                <br />
                <br />
                <h4>Security</h4>
                <br />
                <p>
                  The security of your information is very important to us. We
                  attempt to provide for the secure storage of your information
                  by using commercially reasonable safeguards. Unfortunately,
                  due to the inherent nature of the Internet and online
                  communications, we cannot ensure the security of any
                  information you transmit to us or guarantee that information
                  on the Website or our servers will be free from unauthorized
                  access by third parties such as hackers. Your use of the
                  Website demonstrates your assumption of this risk.
                </p>
                <br />
                <br />
                <h4>Other Websites, Application and Services</h4>
                <br />
                <p>
                  As a convenience to you, we may provide links to third-party
                  websites, applications and services from within the Website.
                  We are not responsible for the privacy practices or content of
                  these third-party websites and services, and by providing a
                  link we are not endorsing or promoting such third-party
                  websites, applications, and services. This Privacy Policy and
                  our Terms of Use do not apply to any third-party website,
                  application, or service. Your browsing and interaction on any
                  third-party website, application or service, including those
                  that have a link on our Website, are subject to that third
                  party's own rules and policies. When you link away from our
                  Website, you do so at your own risk.
                </p>
                <br />
                <br />
                <h4>Social Media Data and Privacy</h4>
                <br />
                <p>
                  The Website may contain links to our presence on various
                  social media platforms. As we do not operate or control such
                  platforms, this Privacy Policy and our Terms of Use do not
                  apply to your use of such platforms. In addition, you should
                  be aware that personally identifiable information which you
                  voluntarily include and transmit online in a publicly
                  accessible blog, social network or other social media platform
                  may be viewed and used by others. We are unable to control
                  such uses of your personally identifiable information, and by
                  using such services you assume the risk that the personally
                  identifiable information provided by you may be viewed and
                  used by third parties.
                </p>
                <br />
                <h4>Social Media Participation Policy</h4>
                <br />
                <p>
                  Rquisit welcomes and encourages user participation in our
                  social media communities including YouTube, Twitter, and
                  Instagram. We have established the following guidelines to
                  ensure a thoughtful and open online community. We reserve the
                  right to delete, or choose not to post, any comment including
                  comments that contain any of the following:
                </p>
                <br />
                <p className="p-padding">Comments promoting violence</p>
                <br />
                <p className="p-padding">
                  Comments promoting illegal or questionable activities
                </p>
                <br />
                <p className="p-padding">Commercial promotion</p>
                <br />
                <p className="p-padding">Misinformation</p>
                <br />
                <p className="p-padding">Personal attacks</p>
                <br />
                <p className="p-padding">Profanity</p>
                <br />
                <p className="p-padding">SPAM/off-topic comments</p>
                <br />
                <p className="p-padding">Vulgarity</p>
                <br />
                <p>
                  We welcome your opinions on Rquisit’s social media webpages
                  but, we reserve the right to moderate accordingly. Also, we
                  make an effort to protect discussions from repeated comments.
                </p>
                <br />
                <br />
                <h4>California Residents</h4>
                <br />
                <p>
                  If you are a California resident, you have the right to
                  request and obtain from us a list of what personal information
                  (if any) we disclosed to third parties for direct marketing
                  purposes in the preceding calendar year and the names and
                  addresses of those third parties. Requests may be made only
                  once a year and are free of charge.
                </p>
                <br />
                <br />
                <h4>United States of America</h4>
                <br />
                <p>
                  Our Website is maintained in the United States of America. By
                  accessing the Website from a jurisdiction outside of the
                  United States, you freely and specifically give us your
                  consent to export your personally identifiable information
                  from your local jurisdiction to our servers in the United
                  States and to store and use such information in the United
                  States as set forth in this Privacy Policy.
                </p>
                <br />
                <br />
                <h4>Information of People from Outside the United States</h4>
                <br />
                <p>
                  New York City Center is based in the United States of America
                  is governed under U.S. law. The New York City Center website
                  is intended for individuals within the United States. If you
                  are located in the European Union, New York City Center will,
                  to the extent of its knowledge of your location, process your
                  data only to the extent necessary to provide services or
                  products that you have purchased or otherwise opted into
                  receiving
                </p>
                <p>
                  If you have any questions or comments about this Privacy
                  Policy or our privacy practices, you may contact us (please
                  include the word "privacy" in the subject line).
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
                  <a href="#">Privacy</a>
                  <a href="https://deploy-preview-20--tender-montalcini-a9ead8.netlify.app/terms-of-service">
                    Terms of Service
                  </a>
                  <a href="#">Partnership</a>
                  <a href="mailto:team@rquisit.com">Contact us</a>
                </div>
                <div className="footer-grid">
                  <a href="#">FAQ</a>
                  <a href="/learnnfts">Education</a>
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
