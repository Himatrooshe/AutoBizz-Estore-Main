import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-[#011223] text-[#DEEEFC] min-h-screen py-20 px-6 md:px-[55px] font-['Plus_Jakarta_Sans']">
      <motion.section
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-[#072034] max-w-7xl mx-auto p-10 md:p-14 rounded-lg mb-8 shadow-lg"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-['Inter'] mb-6 text-center">
          Who are{" "}
          <span
            style={{
              color: "transparent",
              backgroundImage: "linear-gradient(90deg, #29ABE2, #38EDCE)",
              backgroundClip: "text",
            }}
          >
            We
          </span>
          ?
        </h2>
        <p
          className="text-lg leading-10 my-5 font-Jakarta tracking-wide text-justify"
          style={{ wordSpacing: "3px" }}
        >
          AutoBizz is a dynamic technology solutions partner specializing in
          data analysis, software development, and automation. We are
          consultants, tech experts, and creative innovators solving business
          challenges with cutting-edge technology solutions. With a diverse
          global client base spanning over 25 countries, AutoBizz leverages
          advanced technologies to meet unique client needs. Our commitment to
          innovation, personalized solutions, and measurable results makes us a
          trusted partner for businesses aiming to thrive in today’s digital
          landscape. Turning your business potential into performance – that's
          the AutoBizz promise.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-[#072034] max-w-7xl mx-auto p-10 md:p-14 rounded-lg mb-8 shadow-lg"
        style={{ wordSpacing: "3px" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-['Inter'] mb-6 text-center">
          Our{" "}
          <span
            style={{
              color: "transparent",
              backgroundImage: "linear-gradient(90deg, #29ABE2, #38EDCE)",
              backgroundClip: "text",
            }}
          >
            Journey
          </span>
        </h2>
        <p className="text-lg leading-10 my-5 font-Jakarta tracking-wide text-justify">
          AutoBizz began its journey in 2020 with a simple vision to simplify
          complex business processes through innovative technology solutions.
          Starting with humble beginnings, we steadily grew, completing over
          140+ projects. We excel in diverse domains, such as automation,
          e-commerce solutions, inventory management, CRM systems, and dashboard
          development. Our talented and dedicated team members, coming from
          different parts of the world, bring a wealth of expertise and
          creativity to every project. Together, we specialize across wide
          domain of tech tool stack. Every step of this journey has been about
          growth, learning, and building solutions that make a difference. As we
          continue to innovate, we remain passionate about delivering tailored,
          impactful solutions to clients around the world.
        </p>
      </motion.section>

      <div className="bg-[#011223] text-[#DEEEFC] pb-12 px-6 md:px-[55px] font-['Plus_Jakarta_Sans']">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-[#072034] p-10 md:p-12 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-['Inter'] mb-4">
              Our{" "}
              <span
                style={{
                  color: "transparent",
                  backgroundImage: "linear-gradient(90deg, #29ABE2, #38EDCE)",
                  backgroundClip: "text",
                }}
              >
                Vision
              </span>
            </h3>
            <p
              className="text-lg leading-10 my-5 font-Jakarta tracking-wide text-justify"
              style={{ wordSpacing: "3px" }}
            >
              To be the global leader in simplifying business processes with
              smart, tech-driven solutions that enhance operational efficiency
              and business growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-[#072034] p-10 md:p-12 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-['Inter'] mb-4">
              Our{" "}
              <span
                style={{
                  color: "transparent",
                  backgroundImage: "linear-gradient(90deg, #29ABE2, #38EDCE)",
                  backgroundClip: "text",
                }}
              >
                Mission
              </span>
            </h3>
            <p
              className="text-lg leading-10 my-5 font-Jakarta tracking-wide text-justify"
              style={{ wordSpacing: "3px" }}
            >
              Our mission is to revolutionize the way businesses operate by
              problem-solving through innovative, efficient, and scalable
              technology solutions
            </p>
          </motion.div>
        </div>
      </div>
      <section className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span
            style={{
              color: "transparent",
              backgroundImage: "linear-gradient(90deg, #29ABE2, #38EDCE)",
              backgroundClip: "text",
            }}
          >
            Our Team{" "}
          </span>
          At A Glance
        </h2>

        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto bg-[#072034] p-4 rounded-lg">
          <div className="flex flex-col gap-4">
            <div className="bg-[#16304A] p-6 rounded-lg shadow-md flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#38EDCE]">3</p>
                <p>Data Analysts</p>
              </div>
            </div>
            <div className="bg-[#16304A] p-6 rounded-lg shadow-md flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#29ABE2]">2</p>
                <p>Business Analysts</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 h-full justify-between">
            <div className="bg-[#16304A] p-6 rounded-lg shadow-md flex items-center justify-center">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#29ABE2]">1</p>
                <p>Technical Manager</p>
              </div>
            </div>
            <div className="bg-[#16304A] p-6 rounded-lg shadow-md flex items-center justify-center">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#38EDCE]">1</p>
                <p>UI/UX Designer</p>
              </div>
            </div>
            <div className="bg-[#16304A] p-6 rounded-lg shadow-md flex items-center justify-center">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#38EDCE]">1</p>
                <p>Copywriter</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[#16304A] p-6 rounded-lg shadow-md flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#38EDCE]">2</p>
                <p>Front-End Engineers</p>
              </div>
            </div>
            <div className="bg-[#16304A] p-6 rounded-lg shadow-md flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#29ABE2]">2</p>
                <p>Back-End Engineers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-[#072034] max-w-7xl mx-auto p-10 md:p-14 rounded-lg mb-8 shadow-lg"
        style={{ wordSpacing: "3px" }}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          <span
            style={{
              color: "transparent",
              backgroundImage: "linear-gradient(90deg, #29ABE2, #38EDCE)",
              backgroundClip: "text",
            }}
          >
            No Pressure
          </span>{" "}
          - Your First Consultation Is On Us.
        </h3>
        <p className="text-lg leading-7 mb-6 text-justify">
          At AutoBizz, we take the time to understand your business challenges
          and explore how our technology solutions can help you achieve your
          goals. We're here to optimize your operations, whether you need
          workflow automation, tool integration, or system streamlining or even
          building a web application from scratch.
        </p>
        <p className="font-semibold mb-6 text-left">
          <strong>Our goal is simple: help your business perform better</strong>
          . Book your free consultation today!
        </p>
        <a
          href="#"
          className="bg-gradient-to-r bg-[#52A6EA] text-[#011223] px-6 py-3 rounded-md font-bold hover:opacity-90"
        >
          Book a 30 Min Free Call
        </a>
      </motion.section>
    </div>
  );
};

export default AboutUs;
