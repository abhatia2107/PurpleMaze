import React from "react";
import VideoModal from "./VideoModal";

import "./style.css";
import { Footer } from "../../components/Footer";
import Navbar from "./Navbar";
import PopupMsg from "../Pop-Ups/PopupMsg";

export const Home = () => {
  const videoUrl = "https://www.youtube.com/watch?v=og_ob8Xdlvk";
  return (
    <div className="container-fluid">
    <div className="homePage">
      <div className="home">
        <div className="div">
          <div className="frame">
            <div className="overlap">
              <div className="overlap-group">
                <img
                  className="rectangle"
                  alt="Rectangle"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/rectangle-6.png"
                />
                <VideoModal videoUrl={videoUrl} />
              </div>
              <div className="overlap-2">
                <img
                  className="img"
                  alt="Img"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/64088dfd259d863110d90801-doodle1-1-1.svg"
                />
                <img
                  className="img-2"
                  alt="Img"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/64088dfd55b652dcf8126b5d-doodle2-1.svg"
                />
                <div className="frame-2">
                  <div className="group">
                    <div className="overlap-group-2">
                      <p className="find-best-creatives">
                        <span className="text-wrapper">
                          Find best creatives &amp; Creators for your <br />
                          <span className="blue-italic-style">
                            {" "}
                            Social media{" "}
                          </span>
                        </span>
                        <span className="span">
                          social m <br />
                        </span>
                        <span className="text-wrapper">Marketing</span>
                      </p>
                    </div>
                  </div>
                  <PopupMsg />
                  <p className="p">
                    We analyze over 100,000 fastest growing D2c brand creatives
                    and handpick the best ones for you.
                  </p>
                  <div className="frame-3">
                    <div className="div-wrapper">
                      <div>
                        <a
                          className="text-wrapper-3"
                          style={{ textDecorationLine: "none" }}
                          href="/signup"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                    <div className="frame-4">
                      <div>
                        <a
                          className="text-wrapper-4"
                          style={{ textDecorationLine: "none" }}
                          href="/#see-pricing"
                        >
                          See Pricing Options
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-3">
            <img
              className="img-3"
              alt="Img"
              src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/64088dfd259d863110d90801-doodle1-1.svg"
            />
            ..
            <div className="frame-5">
              <div className="frame-6">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-3">
                    <p className="here-are-few-reasons">
                      <span className="text-wrapper">
                        What you get from 
                        <span className="blue-italic-style">
                          {" "} Purple Maze? {" "}
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="frame-7">
                <div className="frame-8">
                  <div className="frame-9">
                    <div className="text-wrapper-8">01</div>
                    <div className="frame-10">
                      <div className="text-wrapper-9">
                        Access to top creatives
                      </div>
                      <p className="text-wrapper-10">
                        - 3000+ top performing creatives
                        <br />
                        <br />
                        - Filter by brand, industry and format  
                        <br />
                        <br />
                        - 50+ ecomm niches & 1000+ brands
                      </p>
                    </div>
                  </div>
                  <div className="frame-9">
                    <div className="text-wrapper-8">02</div>
                    <div className="frame-10">
                      <div className="text-wrapper-9">Learn from the top brands</div>
                      <p className="text-wrapper-10">
                      - View & analyze ads, generate 6x ROI
                      <br />
                      <br />
                      - Recreate and go viral and grow big
                    
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  className="rectangle-2"
                  alt="Rectangle"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/rectangle-7.svg"
                />
              </div>
            </div>
          </div>
          <div className="frame-21">
            <div className="frame-6" id="see-pricing">
              <div className="text-wrapper-5" >OUR PRICING</div>
              <div className="group-3" >
                <div className="overlap-group-6" >
                  <p className="we-offer-great" >
                    Stay ahead of the
                    <span className="blue-italic-style"> Competition. </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="frame-22">
                <div className="frame-23">
                  <div className="frame-24">
                    <div className="frame-25">
                      <div className="text-wrapper-16">₹</div>
                      <div className="text-wrapper-17">0</div>
                      <div className="text-wrapper-18">/month</div>
                    </div>
                    <div className="text-wrapper-19">Free Plan</div>
                  </div>
                  <div className="frame-26">
                    <div className="frame-27">
                      <img
                        className="img-5"
                        alt="Vuesax bulk tick"
                        src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg"
                      />
                      <div className="text-wrapper-20">
                        Limited access to creatives
                      </div>
                    </div>

                    <div className="frame-27">
                      <img
                        className="img-5"
                        alt="Vuesax bulk tick"
                        src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg"
                      />
                      <p className="text-wrapper-20">
                        Filter by brand, keyword, industry, format
                      </p>
                    </div>
                    <div className="frame-27">
                      <img
                        className="img-5"
                        alt="Vuesax bulk tick"
                        src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg"
                      />
                      <p className="text-wrapper-20">No credit card required</p>
                    </div>

                    {/* <div className="magin-bottom-1"> </div> */}
                  </div>
                  <div className="frame-27">
                    <div className="frame-29">
                      <div className="frame-30">
                        <div>
                          <a
                            className="text-wrapper-3"
                            style={{ textDecorationLine: "none" }}
                            href="/signup"
                          >
                            Sign Up
                          </a>
                        </div>
                      </div>
                      <div className="text-wrapper-23">Current Plan</div>
                    </div>
                  </div>
                </div>
                <div className="frame-23">
                  <div className="frame-24">
                    <div className="frame-25">
                      <div className="text-wrapper-16">₹</div>
                      <div className="text-wrapper-24">99</div>
                      <div className="text-wrapper-18">/month</div>
                    </div>
                    <div className="text-wrapper-19">Pro Plan</div>
                  </div>
                  <div className="frame-26">
                    <div className="frame-27">
                      <img
                        className="img-5"
                        alt="Vuesax bulk tick"
                        src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg"
                      />
                      <div className="text-wrapper-25">
                        Get access to 3000+ creatives
                      </div>
                    </div>

                    <div className="frame-27">
                      <img
                        className="img-5"
                        alt="Vuesax bulk tick"
                        src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg"
                      />
                      <p className="text-wrapper-20">
                        Filter by brand, keyword, industry, format
                      </p>
                    </div>
                    <div className="frame-27">
                      <img
                        className="img-5"
                        alt="Vuesax bulk tick"
                        src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg"
                      />
                      <p className="text-wrapper-20">Wishlist and save</p>
                    </div>
                  </div>
                  <div className="frame-27">
                    <div className="frame-29">
                      <div className="frame-30">
                        <div>
                          <a
                            className="text-wrapper-3"
                            style={{ textDecorationLine: "none" }}
                            href="/signup"
                          >
                            Upgrade
                          </a>
                        </div>
                      </div>
                      <div className="text-wrapper-23">Cancel Anytime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-31">
              <div className="frame-32">
                <div className="frame-33">
                  <div className="text-wrapper-28">?</div>
                </div>
                <div className="frame-34">
                  <p className="text-wrapper-29">
                    How do you select the best ads?
                  </p>
                  <p className="text-wrapper-30">
                  We've devised a comprehensive evaluation protocol for the curation of Social Media ads.
<br /><br />Before an ad example is accepted into Purple Maze, we conduct a thorough assessment of the associated brand, considering factors such as:
<br />* 		Is it a rapidly expanding eCommerce brand?
<br />* 		Does it boast an estimated annual revenue of at least $1 million?
<br />* 		What's the volume of traffic it generates?
<br />* 		Details of its ad testing procedures, among other criteria.


<br /><br />Should a brand meet our stringent standards, it becomes part of our internal brand portfolio, which now comprises over 1000+ brands. We continuously analyze these brands on a weekly basis to gain insights into their successful strategies.

<br />At the creative level, we scrutinize a variety of attributes, including:

<br />* 		The ad's duration relative to the testing period.
<br />* 		The effectiveness of the hook in capturing users' attention.
<br />* 		Concept, style, visual elements, and copy.

<br /> Our dedicated curation team evaluates more than 10,000 ads each month, but only a select few pass this rigorous process. We handpick and incorporate just over 100 ads into Purple Maze each month, emphasizing quality above all else.
                  </p>
                </div>
              </div>
              <div className="frame-32">
                <div className="frame-33">
                  <div className="text-wrapper-28">?</div>
                </div>
                <div className="frame-34">
                  <p className="text-wrapper-29">
                  What are all the possibilities with Purple Maze?
                  </p>
                  <p className="text-wrapper-30">
                  You'll gain entry to a vast library of 3000+ Facebook/Instagram ad illustrations. This resource empowers you to launch your ad campaigns and videos in your industry ahead of your competitors, uncover hidden ad creatives, stay connected to the broader marketing landscape, and grasp the strategies driving today's viral trends.⁣⁣⁣

                  <br /><br />But perhaps most crucially, you'll be equipped to produce high-performing ads!⁣⁣

                  <br /><br />It's straightforward. Apply your newfound knowledge to create significantly improved ads and videos tailored to your audience!⁣
                  </p>
                </div>
              </div>
              <div className="frame-32">
                <div className="frame-33">
                  <div className="text-wrapper-28">?</div>
                </div>
                <div className="frame-34">
                  <p className="text-wrapper-29">
                    Do you offer refunds?
                  </p>
                  <p className="text-wrapper-30">
                  Should you not discover a new successful ad for your business
                  within the initial 7 days of testing our creative ideas,
                  we will provide a full refund of your payment!
                  </p>
                </div>
              </div>
              <div className="frame-32">
                <div className="frame-33">
                  <div className="text-wrapper-28">?</div>
                </div>
                <div className="frame-34">
                  <p className="text-wrapper-29">
                  Does ads have impact on ROI?
                  </p>
                  <p className="text-wrapper-30">
                  According to research, creative impact accounts for up to 50% of the variation in advertising results. Surprisingly, many leaders allocate only a fraction, not even 5%, of their focus to this aspect.⁣⁣⁣⁣⁣⁣
                  <br />
                  <br />
Now, picture the potential impact if you take action on this data and begin prioritizing the study and enhancement of ad creatives!⁣⁣
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-35">
            <div className="frame-36">
              <div className="frame-34">
                <div className="text-wrapper-5">
                  WHAT YOU GET FROM PURPLE MAZE?
                </div>
                <div className="group-4">
                  <div className="overlap-group-7">
                    <p className="the-service-we-offer">
                      Access to all <br />
                      <span className="blue-italic-style"> creatives </span> of
                      <br /> 7-figure brands
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-wrapper-32">
                We have considered our solutions to support every stage of your
                growth.
              </p>
              <div className="frame-3">
                <div className="div-wrapper">
                  <div>
                    <a
                      className="text-wrapper-3"
                      style={{ textDecorationLine: "none" }}
                      href="/signup"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
                <div className="frame-4">
                  <div>
                    <a
                      className="text-wrapper-4"
                      style={{ textDecorationLine: "none" }}
                      href="/#see-pricing"
                    >
                      See Pricing Options
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-37">
              <div className="frame-38">
                <img
                  className="IMAGE-5"
                  alt=""
                  src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64d90915bde965d8a1d78907/img/image-11@2x.png"
                />
                <div className="frame-34">
                  <div className="text-wrapper-33">Reason For choosing
                  </div>
                  <p className="text-wrapper-34">
                  Trusted by 100+ brands & agencies.
                  </p>
                </div>
              </div>
              <div className="frame-38">
                <img
                  className="IMAGE-6"
                  alt=""
                  src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/image-12@2x.png"
                />
                <div className="frame-34">
                  <div className="text-wrapper-33">Reason For choosing
</div>
                  <p className="text-wrapper-34">
                  24/7 prompt customer service
                  </p>
                </div>
              </div>
              <div className="frame-38">
                <img
                  className="IMAGE-7"
                  alt=""
                  src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64d90915bde965d8a1d78907/img/image-13@2x.png"
                />
                <div className="frame-34">
                  <div className="text-wrapper-33">Reason For choosing
</div>
                  <p className="text-wrapper-34">7 Day Money Back Guarantee.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Navbar />
    </div>

    </div>
  );
};
