import React from "react";
import { motion } from "framer-motion";

function PrivacyAndPolicy() {
  return (
    <div className="bg-[#011223] text-[#DEEEFC] min-h-screen py-20 px-6 md:px-[55px] font-['Plus_Jakarta_Sans'] text-justify">
      <motion.section
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-[#072034] max-w-7xl mx-auto p-10 md:p-14 rounded-lg mb-8 shadow-lg"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-['Inter'] mb-6 text-center">
          AutoBizz E-commerce Policy{" "}
          <span
            style={{
              color: "transparent",
              backgroundImage: "linear-gradient(90deg, #29ABE2, #38EDCE)",
              backgroundClip: "text",
            }}
          >
            Privacy
          </span>
          ?
        </h2>
        <p className="text-center pb-4">   Effective: January 2025</p>
        <div className="bg-[#DEEEFC] p-[0.5px]"></div>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide text-justify"
          style={{ wordSpacing: "3px" }}
        >
          At AutoBizz, we are committed to safeguarding your privacy and
          personal information. This Privacy Policy explains how we collect,
          use, and protect your data when you visit our website{" "}
          <a
            href="https://autobizz-e-store"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Improves security
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
          By using our website, you agree to the terms outlined in this policy.
          We collect two types of information: personal and non-personal.
        </p>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          Personal information includes details such as your name, email
          address, and any other data you provide when you contact us or
          purchase our service. Non-personal information includes technical
          details like your IP address, browser type, and the pages you visit on
          our site. This information helps us improve our website, respond to
          your inquiries, and personalize your experience. Your email address
          may also be used to send newsletters or updates about our services.
        </p>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          To enhance your browsing experience, we use cookies and tracking
          technologies. Cookies, which are small files stored on your device,
          help us remember your preferences and analyze website traffic. We use
          essential cookies for website functionality, analytics cookies to
          track user behavior, and marketing cookies for personalized
          advertisements. You can disable cookies through your browser settings,
          but this may limit some features on our site.
        </p>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          Additionally, we may use third-party services, such as Google
          Analytics, to analyze website traffic and user behavior. These third
          parties have their own privacy policies, and we do not control the
          data they collect. We take reasonable measures to protect your
          personal information from unauthorized access, disclosure, alteration,
          or destruction. However, as no online transmission or storage method
          is completely secure, we cannot guarantee absolute security. You have
          the right to access, correct, or request the deletion of your personal
          information.
        </p>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          To exercise these rights, you can contact us via email at{" "}
          <a
            href="mailto:support@autobizz.net"
            className="text-blue-400 hover:text-blue-600"
          >
            support@autobizz.net
          </a>
          .
        </p>

        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          This Privacy Policy may be updated periodically, and any changes will
          be reflected on this page. We encourage you to review the policy
          regularly to stay informed. If you have any questions or concerns,
          feel free to reach out to us at <a
            href="mailto:support@autobizz.net"
            className="text-blue-400 hover:text-blue-600"
          >
            support@autobizz.net
          </a>.
        </p>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide"
          style={{ wordSpacing: "3px" }}
        >
          By using our website, you consent to the terms of this policy. Thank
          you for taking the time to understand how we protect your privacy.
        </p>
      </motion.section>
    </div>
  );
}

export default PrivacyAndPolicy;
