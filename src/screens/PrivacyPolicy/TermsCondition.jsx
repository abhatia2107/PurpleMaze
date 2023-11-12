import React from "react";
import Navbar from "../Home/Navbar";
import { Footer } from "../../components/Footer";
import LogInHeader from "../Search/LogInHeader";

const TermsCondition = () => {
  const accessAuth = JSON.parse(localStorage.getItem("accessAuth"));

  const renderHeader = accessAuth?.accessToken ? <LogInHeader /> : <Navbar />;
  return (
    <div className="flex flex-col">
      {renderHeader}

      <div className="flex flex-col px-6 py-4">
        <h1 className="text-center font-bold">Terms and Conditions</h1>
        <p>
          Welcome to PurpleMaze! This website is owned by One Orange Digital and
          is operated under the brand name, Purple Maze(“we”, “us” or
          “PurpleMaze”).
        </p>
        <p>
          By accessing and using the website, you (“you” or “user” or
          “customer”) are agreeing to these terms and conditions (“Terms of
          Service” or “Terms”). We strongly urge you to read the Terms of
          Service in detail before registering, accessing or using the Services
          (defined below). Supplemental terms may apply to certain Services,
          such as policies for a particular service, activity or promotion or
          new feature and such supplemental terms will be disclosed to you in
          connection with the applicable Services. Supplemental terms are in
          addition to, and shall be deemed a part of, the Terms for the purposes
          of the applicable Services. We may amend the Terms at any time by
          posting an updated version on this website. The updated version of
          these Terms shall supersede the previous version of the Terms and take
          effect immediately upon posting and may be notified. You have the
          right to opt-out of agreeing to these Terms or any future updated
          version of the Terms, and therefore also using the website, or any of
          the products or services you avail from this website. For the purpose
          of these Terms of Use, wherever the context so requires, the term
          “User” shall mean and include any natural or legal person who has
          agreed to these Terms of Use on behalf of itself or any other legal
          entity. It is clarified that the Privacy Policy (that is provided
          separately), form an integral part of these Terms of Use and should be
          read contemporaneously with the Terms of Use. Illegality or
          unenforceability of one or more provisions of these Terms of Use shall
          not affect the legality and enforceability of the other terms of the
          Terms of Use. For avoidance of doubt, if any of the provisions becomes
          void or unenforceable, the rest of the provisions of these Terms of
          Use shall be binding upon the User.
        </p>
        <h5>Account</h5>
        <p>
          In order to use the Website, you may be required to create an account
          or provide certain information relevant to your use (for instance, if
          you are registering for our newsletter, your email address). When
          registering for an account or providing such information, you must
          provide accurate and complete information and promptly update this
          information to keep it current. If you provide any information that is
          inaccurate or incomplete, or we have reason to believe that the
          information is inaccurate or incomplete, we may suspend or terminate
          your account and/ or your use of the Services. You are solely
          responsible for all activities that occur through your account. To
          protect your account from unauthorized use, do not provide your
          username or password to anyone else. Please notify us immediately of
          any unauthorized use of your account or any other breach of security
          by sending an email to support@purplemaze.com
        </p>
        <h5>Eligibility</h5>
        <p>
          By accessing the website and/ or using the Services, you are
          representing the following: 1. You are 18 years of age or older; and
          2. You are capable of entering into a legally binding agreement. If
          you allow anyone to use your account, including individuals under 18
          years of age, you will still be responsible for ensuring that such
          individuals comply with the terms. You will be responsible for all
          actions these individuals take in and/or through your account. You
          also acknowledge that Purple Mazedoes not have the responsibility of
          ensuring that you meet the aforesaid requirements. You agree to comply
          with all applicable laws when using the Services, and you may only use
          the Services for lawful purposes. Purple Mazereserves the right to
          terminate your subscription and / or refuse to provide you with access
          to the Website, or any part thereof, or access to any of the products
          or services offered therein, if it is discovered that you are under
          the age of 18 (eighteen) years and the consent to use the products or
          services is not made by your parent/legal guardian or any information
          provided by you is inaccurate. You acknowledge that Purple Mazedoes
          not have the responsibility to ensure that you conform to the
          aforesaid eligibility criteria. It shall be your sole responsibility
          to ensure that you meet the required qualification. Any persons under
          the age of 18 (eighteen) should seek the consent of their
          parents/legal guardians before providing any information about
          themselves or their parents and other family members on the website.
          Please be aware that Purplemaze reserves the right to revoke your
          access to the website, subject to our reasonable discretion. In this
          regard, we may also choose to suspend your Purple MazeAccount or your
          access to the same. As a registered User, in such an event, you may
          contact our support team to assist you/resolve the situation.
        </p>
        <h5>Privacy</h5>
        <p>
          We collect, hold, use and transfer your personal data in accordance
          with our Privacy Policy. By agreeing to the Terms of Use, you hereby
          agree to our Privacy Policy, which may be updated and/or modified by
          us from time to time. You understand and agree that, to the extent
          permitted by applicable law, any data provided by you in connection
          with the Services may be shared with our afﬁliates or partners, and/
          or used by us for enhancing the Services, including but not limited to
          creating new products. Please refer to the Privacy Policy for further
          clarity on the subject.
        </p>
        <h5>Disclaimer</h5>
        <p>
          To the fullest extent permissible pursuant to applicable law, the
          materials on this website are provided "as is" and without warranties
          of any kind either expressed or implied and Purple Mazedisclaims all
          warranties, expressed or implied, including, but not limited to,
          implied warranties of merchantability and fitness for a particular
          purpose. Purple Mazedoes not warrant that the functions contained in
          the materials will be uninterrupted or error-free, that defects will
          be corrected, or that this website or the server that makes it
          available are free of viruses or other harmful components. [insert
          brand name]does not warrant or make any representations regarding the
          use or the results of the use of the materials on this website in
          terms of their correctness, accuracy, reliability, or otherwise.
          Please use common sense and use proper safety procedures when using
          all tools. The information and descriptions contained herein are not
          intended to be complete descriptions of all terms, exclusions and
          conditions applicable to the products and services, but are provided
          solely for general informational purposes. Prices and availability are
          subject to change. This website is linked to other websites which are
          not maintained by Purple Mazeand we are not responsible for the
          content of those websites. The inclusion of any link to such websites
          does not imply approval of or endorsement by Purple Mazeof the
          websites or the content thereof.{" "}
        </p>
        <h5>Limitation of Liability</h5>
        <p>
          While Purple Mazeuses reasonable efforts to include accurate and up to
          date information on this website, errors or omissions sometimes occur.
          Purple Mazemakes no warranties or representations as to the accuracy
          of this website. Under no circumstances, including, but not limited
          to, negligence, shall One Orange Digital or Purple Mazeor any party
          involved in creating, producing, or delivering the website be liable
          to you for any direct, incidental, consequential, indirect, or
          punitive damages that result from the use of, or the inability to use,
          the materials on this website, even if PurpleMazeor any authorized
          representative has been advised of the possibility of such damages. In
          no event shall Purplemaze’s total liability to you for all damages,
          losses, and causes of action exceed the amount paid by you, if any,
          for accessing this website. Purple Mazealso assumes no responsibility,
          and shall not be liable for, any damages to, or viruses that may
          infect, your computer equipment or other property as a result of your
          access to, use of, or browsing in the website or your downloading of
          any materials, data, text, images, video, or audio from this website.
        </p>
        <h5>Restrictions on use of Materials</h5>
        <p>
          Except as otherwise expressly permitted, no materials from this
          website or any website owned, operated, licensed or controlled by
          Purplemaze may be copied, reproduced, republished, uploaded, posted,
          transmitted, or distributed in any way. You may download material
          displayed on this website for your use only provided you also retain
          all copyright and other proprietary notices contained on the
          materials. You may not distribute, modify, transmit, reuse, repost, or
          use the content of this website for public or commercial purposes,
          including the text, images, audio, and video without PurpleMaze’s
          written permission. PurpleMazeneither warrants nor represents that
          your use of materials displayed on this website will not infringe
          rights of third parties not owned by or affiliated with PurpleMaze.
        </p>
        <h5>Trademarks and Copyrights</h5>
        <p>
          All trademarks, trade names, logos, copyrights, registrations, and
          icons are proprietary to One Orange Digital. Nothing contained on the
          website should be construed as granting, by implication, estoppel, or
          otherwise, any license or right to use any trademark or other
          intellectual property displayed on this website without the written
          permission of Purple Mazeor such third party that may own the
          trademarks displayed on this website. Your use of the trademarks
          displayed on this website, or any other content on this website,
          except as provided herein, is strictly prohibited.
        </p>
        <h5>Governing Law; Venue</h5>
        <p>
          These Terms will be governed by and construed in accordance with the
          laws of India, excluding its conflict of law provisions. You agree
          that any judicial proceedings will be brought in and you hereby
          consent to the exclusive jurisdiction of courts.
        </p>
        <h5>Contacting PurpleMaze</h5>
        <p>
          For questions, comments, complaints, or claims please contact us at:
          Purple Maze support@purplemaze.co
        </p>
      </div>
      <Footer />
    </div>
  );
};
export default TermsCondition;
