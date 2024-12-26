import React from "react";
import { motion } from "framer-motion";

function TermsAndConditions() {
  return (
    <div className="bg-[#011223] text-[#DEEEFC] min-h-screen py-20 px-6 md:px-[55px] font-['Plus_Jakarta_Sans']">
      <motion.section
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-[#072034] max-w-7xl mx-auto p-10 md:p-14 rounded-lg mb-8 shadow-lg"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-['Inter'] mb-6 text-center">
          Our {" "}
          <span
            style={{
              color: "transparent",
              backgroundImage: "linear-gradient(90deg, #29ABE2, #38EDCE)",
              backgroundClip: "text",
            }}
          >
            Terms {" "}
          </span>
          of Use
        </h2>
        <p className="text-center pb-4">   Effective: January 2025</p>
        <div className="bg-[#DEEEFC] p-[0.5px]"></div>

        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          These terms and conditions outline the rules and regulations for the
          use of AutoBizz's website, located at{" "}
          <a
            href="https://autobizz-e-store"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            https://autobizz-e-store
          </a>
          .
        </p>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          By accessing this website, we assume you accept these terms and
          conditions. If you do not agree to all the terms and conditions stated
          on this page, please do not continue to use AutoBizz.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold font-['Inter'] my-4">
          Terminology
        </h3>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          In these Terms and Conditions, the following definitions apply:
          <ul className="list-disc ml-5">
            <li>
              "Client," "You," and "Your" refer to you, the user accessing this
              website and agreeing to the Company’s terms and conditions.
            </li>
            <li>
              "The Company," "Ourselves," "We," "Our," and "Us" refer to
              AutoBizz.
            </li>
            <li>
              "Party," "Parties," or "Us" refer to both the Client and the
              Company.
            </li>
          </ul>
          Any use of the above terminology in the singular, plural, or any
          capitalization is interchangeable and refers to the same.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold font-['Inter'] my-4">
          Cookies
        </h3>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          AutoBizz employs the use of cookies. By accessing AutoBizz, you agree
          to the use of cookies in accordance with our Privacy Policy. Cookies
          are used to enhance website functionality and improve user experience.
          Some affiliate and advertising partners may also use cookies.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold font-['Inter'] my-4">
          License
        </h3>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          Unless otherwise stated, AutoBizz and/or its licensors own the
          intellectual property rights for all content on the website. These
          rights are reserved. You may access content for personal use but must
          not:
          <ul className="list-disc ml-5">
            <li>Republish content from AutoBizz.</li>
            <li>Sell, rent, or sub-license content from AutoBizz.</li>
            <li>Reproduce, duplicate, or copy material from AutoBizz.</li>
            <li>Redistribute AutoBizz’s content without permission.</li>
          </ul>
        </p>

        <h3 className="text-2xl md:text-3xl font-bold font-['Inter'] my-4">
          Account Creation
        </h3>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          Users may create accounts on the AutoBizz website. By creating an
          account, you agree to:
          <ul className="list-disc ml-5">
            <li>
              Provide accurate, current, and complete information during the
              registration process.
            </li>
            <li>
              Maintain the confidentiality of your account login credentials.
            </li>
            <li>
              Accept responsibility for all activities under your account.
            </li>
          </ul>
          AutoBizz reserves the right to suspend or terminate accounts for
          violations of these terms or unauthorized activities.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold font-['Inter'] my-4">
          Purchases
        </h3>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          AutoBizz allows users to purchase services through one-time payments.
          By making a purchase, you agree to:
          <ul className="list-disc ml-5">
            <li>Use valid payment methods for transactions.</li>
            <li>
              Ensure the accuracy of all billing and shipping information.
            </li>
            <li>
              Comply with applicable laws and regulations regarding online
              purchases.
            </li>
          </ul>
          AutoBizz reserves the right to refuse or cancel any order for reasons
          including product availability, pricing errors, or suspected
          fraudulent activity.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold font-['Inter'] my-4">
          Intellectual Property
        </h3>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          All content on this website, including but not limited to the logo,
          visual design, trademarks, and branding, is the exclusive property of
          AutoBizz. Unauthorized use, reproduction, or distribution of this
          content is prohibited.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold font-['Inter'] my-4">
          User Comments
        </h3>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          AutoBizz allows users to post comments in specific sections of the
          website. The opinions expressed in these comments are solely those of
          the users and not AutoBizz. While we monitor comments and may remove
          inappropriate or offensive material, we are not liable for the
          comments posted.
        </p>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          By posting comments, you warrant that:
          <ul className="list-disc ml-5">
            <li>You own the necessary rights and permissions.</li>
            <li>
              Your comments do not violate intellectual property laws or contain
              unlawful, offensive, or defamatory material.
            </li>
            <li>
              Your comments are not used for solicitation or unlawful
              activities.
            </li>
            <li>
              You grant AutoBizz a non-exclusive license to use, reproduce,
              edit, and authorize others to use your comments in any media
              format.
            </li>
          </ul>
        </p>

        <h3 className="text-2xl md:text-3xl font-bold font-['Inter'] my-4">
          Hyperlinking to Our Content
        </h3>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          Certain organizations, such as government agencies, search engines,
          and news organizations, may link to our website without prior
          approval. Other organizations may request permission to hyperlink,
          provided the link is not deceptive and does not imply sponsorship or
          endorsement by AutoBizz.
        </p>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          Approved organizations may hyperlink to our website using:
          <ul className="list-disc ml-5">
            <li>Our corporate name.</li>
            <li>The website’s URL.</li>
            <li>A description that makes contextual sense.</li>
          </ul>
        </p>

        <h3 className="text-2xl md:text-3xl font-bold font-['Inter'] my-4">
          Content Liability
        </h3>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          AutoBizz is not responsible for content appearing on external websites
          linked to ours. Links or content violating third-party rights must not
          be placed on any website linking to AutoBizz.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold font-['Inter'] my-4">
          Privacy Policy
        </h3>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          Please review our Privacy Policy for details regarding the handling of
          your data.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold font-['Inter'] my-4">
          Reservation of Rights
        </h3>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          AutoBizz reserves the right to request the removal of links to our
          website. We may also amend these terms and conditions at any time.
          Continued linking implies agreement to updated terms.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold font-['Inter'] my-4">
          Feedback and Suggestions
        </h3>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          AutoBizz welcomes feedback and suggestions from users to improve our
          services. By submitting feedback, you agree that:
          <ul className="list-disc ml-5">
            <li>
              AutoBizz may use, implement, or modify your feedback without
              obligation to provide compensation or credit.
            </li>
            <li>
              Your feedback becomes the property of AutoBizz, and we are not
              obligated to maintain confidentiality regarding submitted
              suggestions.
            </li>
          </ul>
        </p>

        <h3 className="text-2xl md:text-3xl font-bold font-['Inter'] my-4">
          Disclaimer
        </h3>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          To the maximum extent permitted by law, AutoBizz is not liable for any
          direct, indirect, incidental, or consequential damages arising from
          the use of our website or services.
        </p>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          As long as the website is provided free of charge, AutoBizz is not
          liable for any loss or damage resulting from its use.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold font-['Inter'] my-4">
          Changes to Terms and Conditions
        </h3>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          AutoBizz reserves the right to modify these terms and conditions at
          any time. Changes will be effective immediately upon posting on the
          website. Continued use of the website constitutes acceptance of
          updated terms.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold font-['Inter'] my-4">
          Contact Us
        </h3>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          For inquiries, please email us at{" "}
          <a
            href="mailto:support@autobizz.net"
            className="text-blue-400 hover:text-blue-600"
          >
            support@autobizz.net
          </a>
          .
        </p>
      </motion.section>
    </div>
  );
}

export default TermsAndConditions;
