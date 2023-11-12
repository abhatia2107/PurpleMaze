import React from "react";
import VideoModal from "./VideoModal";
import "./style.css";
import { Footer } from "../../components/Footer";
import Navbar from "./Navbar";
import PopupMsg from "../Pop-Ups/PopupMsg";
import FoldableFAQ from "./FoldableFAQ";
import { Link } from "react-router-dom";

export const Home = () => {
  // const videoUrl = "https://www.youtube.com/watch?v=og_ob8Xdlvk";
  return (
    <div className="homePage complete_screen">
      <Navbar />
      <div className="flex flex-col w-full overall lg:items-center lg:flex-row lg:justify-between lg:text-white lg:justify-items-center">
        <div className="h-full lg:w-1/2 2xl:w-1/2 lg:h-full">
          <div className="flex flex-col px-16 py-10 lg:py-18 lg:my-6 max-w-2xl 2xl:max-w-6xl">
            <img
              className="w-10 h-10 doodle_1_position"
              src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/64088dfd259d863110d90801-doodle1-1-1.svg"
            />
            <span className="content-1 text-4xl lg:text-6xl 2xl:text-8xl leading-loose">
              Find best creatives &amp; Creators for
            </span>
            <span className="blue-italic-style text-4xl lg:text-6xl 2xl:text-8xl italic lg:leading-relaxed">
              Social media
            </span>
            <span className="content-1 text-4xl lg:text-6xl 2xl:text-8xl leading-relaxed">
              Marketing
            </span>
            <span className="content-2 py-8 2xl:text-4xl">
              We analyze over 100,000 fastest growing D2C brand creatives and
              handpick the best ones for you.
            </span>
            <div className="flex items-center space-x-4">
              <Link to="/signup">
                <button className="signup_color min-w-fit 2xl:text-4xl	 px-6 py-2 my-1 rounded-full lg:px-6 lg:py-2 lg:rounded-full">
                  Get Started
                </button>
              </Link>

              <a
                href="/#see-pricing"
                className="py-2 min-w-fit px-2 see_pricing lg:mx-4 2xl:text-4xl"
              >
                {" "}
                See Pricing
              </a>
            </div>
          </div>
        </div>

        <PopupMsg />

        <div className=" h:full lg:h-full lg:w-1/2">
          <img
            className="object-cover h-1/2 w-full"
            src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/rectangle-6.png"
          />
        </div>
      </div>
      <div className="flex flex-col items-center py-20 complete_screen">
        <div className="flex flex-col items-center">
          <span className="uppercase text-sm text-color-3 py-4">
            Why choose us?
          </span>
          <span className="text-xl py-2 sm:text-4xl">
            Here are few <span className="blue-italic-style">Reasons</span> why
            our
          </span>
          <span className="text-xl py-2 sm:text-4xl">
            customes choose PurpleMaze
          </span>
        </div>
        <div className="flex w-full justify-center items-center flex-col lg:flex-row py-8 ">
          <div className="flex flex-col lg:w-1/3 justify-between lg:pl-8 lg:pr-4 space-y-6 max-w-[320px]">
            <div className="flex h-1/2 py-4 bg-white rounded-md px-2 min-w-[280px] max-w-[320px] mx-2">
              <span className="text-5xl px-3 text-color-4">01</span>
              <div className="text flex flex-col lg:space-y-5">
                <span className="text-base font-medium py-1 text-color">
                  Access to top creatives
                </span>
                <p className="text-sm text-color-3">
                  3000+ top performing creatives
                </p>
                <p className="text-sm text-color-3">
                  Filter by brand, industry and format
                </p>
                <p className="text-sm text-color-3">
                  50+ ecomm niches & 1000+ brands
                </p>
              </div>
            </div>
            <div className="flex h-1/2  py-4 bg-white rounded-md px-2 min-w-[280px] mx-2">
              <span className="text-5xl px-3 text-color-4">02</span>
              <div className="text flex flex-col lg:space-y-5">
                <span className="text-base font-medium py-1 text-color">
                  Learn from the top brands
                </span>
                <p className="text-sm text-color-3">
                  View & analyze ads, generate 6x ROI
                </p>
                <p className="text-sm text-color-3">
                  Recreate and go viral and grow big
                </p>
              </div>
            </div>
          </div>
          <div className="py-4 px-2 mx-1 ">
            <img
              className="object-contain"
              src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/rectangle-7.svg"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center lg:flex-row complete_screen">
        <div className="flex flex-col px-9 ml-5">
          <span className="uppercase text-sm text-color-3 py-4">
            What we do?
          </span>
          <span className="text-xl py-2 sm:text-4xl">
            The service we offer is
          </span>
          <span className="text-xl py-2 sm:text-4xl">
            designed <span className="blue-italic-style">Specifically</span> to
          </span>
          <span className="text-xl py-2 sm:text-4xl">meet your needs</span>
          <span className="text-color-3 py-8 max-w-[75%]">
            We analyze over 100,000 fastest growing D2C brand creatives and
            handpick the best ones for you.
          </span>
          <div className="flex items-center space-x-4">
            <Link to="/signup">
              <button className="signup_color min-w-fit	 px-6 py-2 my-1 rounded-full lg:px-6 lg:py-2 lg:rounded-full">
                Get Started
              </button>
            </Link>

            <a
              href="/#see-pricing"
              className="py-2 min-w-fit px-2 see_pricing lg:mx-4"
            >
              {" "}
              See Pricing
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-around space-y-14 py-4">
          <div className="flex flex-row space-x-6 items-center bg-white px-4 py-6 max-w-[80%]">
            <img
              className="w-20 h-20"
              src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64d90915bde965d8a1d78907/img/image-11@2x.png"
            />
            <div className="flex flex-col space-y-4">
              <span className="bold">Trusted by 100+ brands & agencies.</span>
            </div>
          </div>
          <div className="flex flex-row space-x-6 items-center bg-white px-4 py-6 mx-8 max-w-[80%]">
            <img
              className="w-20 h-20"
              src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/image-12@2x.png"
            />
            <div className="flex flex-col space-y-4">
              <span className="bold">24/7 prompt customer service</span>
            </div>
          </div>
          <div className="flex flex-row space-x-6 items-center bg-white px-4 py-6 max-w-[80%]">
            <img
              className="w-20 h-20"
              src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64d90915bde965d8a1d78907/img/image-13@2x.png"
            />
            <div className="flex flex-col space-y-4">
              <span className="bold">7 Day Money Back Guarantee.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-20 space-y-10 overall">
        <div className="flex flex-col items-center">
          <span className="uppercase text-sm text-color-3 py-4">
            our pricing
          </span>
          <span className="text-xl py-2 sm:text-4xl">
            We offer great prices, premium products
          </span>
          <span className="text-xl py-2 sm:text-4xl">
            and <span className="blue-italic-style">Quality</span> Services for
            your product
          </span>
        </div>

        <div
          className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-9 "
          id="see-pricing"
        >
          <div className="flex flex-col bg-white py-2 lg:my-0">
            <div className="flex flex-col items-center space-y-4 pt-4 px-4">
              <div className="flex items-end space-x-3">
                <span className="text-xl">₹</span>
                <span className="text-6xl">0</span>
                <span className="text-xl">/mo</span>
              </div>
              <span className="">Free Plan</span>
              <div className="flex flex-col max-w-[320px] space-y-3 px-4">
                <div className="flex space-x-3">
                  <img src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg" />
                  <span className="">Search thousand of influencers</span>
                </div>
                <div className="flex space-x-3">
                  <img src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg" />
                  <span className="">
                    Manually purchase content from influencers
                  </span>
                </div>
                <div className="flex space-x-3">
                  <img src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg" />
                  <span className="">
                    <span className="font-bold">10%</span> marketplace fee
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2 py-20">
                <Link to="/signup">
                  <button className="signup_color min-w-fit my-1 px-6 py-2 rounded-full lg:px-6 lg:py-2 lg:rounded-full">
                    Sign up
                  </button>
                </Link>
                <span className="pricing_bottom">Current Plan</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white py-2 lg:my-0">
            <div className="flex flex-col items-center space-y-4 pt-4 px-4">
              <div className="flex items-end space-x-3">
                <span className="text-xl">₹</span>
                <span className="text-6xl">7999</span>
                <span className="text-xl">/year</span>
              </div>
              <span className="">Pro Plan</span>
              <div className="flex flex-col max-w-[320px] space-y-3 px-4">
                <div className="flex space-x-3">
                  <img src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg" />
                  <span className="">Get access to 3000+ creatives</span>
                </div>
                <div className="flex space-x-3">
                  <img src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg" />
                  <span className="">
                    Filter by brand, keyword, industry, format
                  </span>
                </div>
                <div className="flex space-x-3">
                  <img src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg" />
                  <span className="">Wishlist and save</span>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2 py-20">
                <Link to="/signup">
                  <button className="signup_color min-w-fit my-1 px-6 py-2 rounded-full lg:px-6 lg:py-2 lg:rounded-full">
                    Sign up
                  </button>
                </Link>
                <span className="pricing_bottom">Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 py-10 overall">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-8"
          id="faq"
        >
          <FoldableFAQ
            question="How do you select the best ads?"
            answer="We've devised a comprehensive evaluation protocol for the curation of Social Media ads.
                  Before an ad example is accepted into Purple Maze, 
                  we conduct a thorough assessment of the associated brand, considering factors such as:
                  - Is it a rapidly expanding eCommerce brand? 
                      
                  - Does it boast an estimated annual revenue of at least $1 million?
                  <br />
                  - What's the volume of traffic it generates?
                  <br />
                  - Details of its ad testing procedures, among other criteria.
                  <br /><br />
                  Should a brand meet our stringent standards, it becomes part of our internal brand portfolio, which now comprises over 1000+ brands. We continuously analyze these brands on a weekly basis to gain insights into their successful strategies.
                  <br />
                  At the creative level, we scrutinize a variety of attributes, including:
                  <br />
                  - The ad's duration relative to the testing period.
                  <br />
                  - The effectiveness of the hook in capturing users' attention.
                  <br />
                  - Concept, style, visual elements, and copy.
                  <br />
                  Our dedicated curation team evaluates more than 10,000 ads each month, but only a select few pass this rigorous process. We handpick and incorporate just over 100 ads into Purple Maze each month, emphasizing quality above all else.
                `"
          />
          <FoldableFAQ
            question="What are all the possibilities with Purple Maze?"
            answer="You'll gain entry to a vast library of 3000+ Facebook/Instagram ad illustrations. This resource empowers you to launch your ad campaigns and videos in your industry ahead of your competitors, uncover hidden ad creatives, stay connected to the broader marketing landscape, and grasp the strategies driving today's viral trends.⁣⁣⁣

    <br /><br />But perhaps most crucially, you'll be equipped to produce high-performing ads!⁣⁣

    <br /><br />It's straightforward. Apply your newfound knowledge to create significantly improved ads and videos tailored to your audience!⁣"
          />
          <FoldableFAQ
            question="Do you offer refunds?"
            answer="Should you not discover a new successful ad for your business
                    within the initial 7 days of testing our creative ideas,
                    we will provide a full refund of your payment!"
          />
          <FoldableFAQ
            question="Does ads have impact on ROI?"
            answer="According to research, creative impact accounts for up to 50% of the variation in advertising results. Surprisingly, many leaders allocate only a fraction, not even 5%, of their focus to this aspect.⁣⁣⁣⁣⁣⁣
    <br />
    <br />
Now, picture the potential impact if you take action on this data and begin prioritizing the study and enhancement of ad creatives!⁣⁣"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
