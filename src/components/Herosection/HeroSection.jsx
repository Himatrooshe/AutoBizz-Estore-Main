import React from "react";
import CountUp from "react-countup";
import hero from "../../assets/Hero_GIF_Apps_Script_Web.gif";
import fiverrLogo from "../../assets/Fiverr.svg";
import level2Logo from "../../assets/level2.svg";

const HeroSection = () => {
  return (
    <section className="bg-[#DBEAFE] py-0 sm:py-12 px-[60px]">
      <div className="container mx-auto flex flex-col-reverse xl:flex-row items-center">
        <div className="w-full text-center 4xl:text-left mt-6 md:mt-0">
          <h1 className="text-[42px] font-semibold text-[#2D7498] mb-4 4xl:text-start 2xl:text-start xl:text-start lg:text-center">
            Your Tech Simplification Partner
          </h1>
          <p className="text-[28px] text-[#6C9DB7] mb-6 4xl:text-start 2xl:text-start xl:text-start lg:text-center">
            Innovation you can Trust, Simplicity you’ll love
          </p>

          <div className="flex 2xl:flex-wrap justify-center 4xl:justify-start 2xl:justify-start xl:justify-start gap-6">
            <div className="bg-[#F5F8F9] p-4 sm:p-6 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.1)] text-center 4xl:w-[307px] 2xl:w-[307px] xl:w-[307px] lg:w-[307px] md:w-[307px] w-[100%] transition-transform transform hover:scale-105 hover:shadow-lg">
              <p className="text-[30px] sm:text-[75px] font-bold text-[#1c5a7a]">
                <CountUp start={0} end={180} duration={4.5} />+
              </p>
              <p className="text-[20px] sm:text-[26px] font-semibold text-[#1c5a7a]">
                Orders
              </p>
            </div>
            <div className="bg-[#F5F8F9] p-4 sm:p-6 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.1)] text-center 4xl:w-[307px] 2xl:w-[307px] xl:w-[307px] lg:w-[307px] md:w-[307px] w-[100%] transition-transform transform hover:scale-105 hover:shadow-lg">
              <p className="text-[30px] sm:text-[75px] font-bold text-[#1c5a7a]">
                <CountUp start={0} end={82} duration={4.5} />+
              </p>
              <p className="text-[16px] sm:text-[26px] font-semibold text-[#1c5a7a]">
                Happy Clients
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center 4xl:justify-start 2xl:justify-start xl:justify-start gap-6 mt-6">
            <div className="flex flex-col md:flex-row items-center bg-[#f5f8f9] rounded-xl p-5 md:w-[410px] w-full shadow-[0_4px_10px_rgba(0,0,0,0.1)] transition-transform transform hover:scale-105 hover:shadow-lg">
              <div className="flex -space-x-4 mb-2 md:mb-0">
                <img
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/1908090/original/avatar.jpg"
                  alt="Client 1"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white"
                />
                <img
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/adc31ab466013f70d679bc0cc8d0ce87-1363789091705869785813/JPEG_20240121_214305_694786491309636732.jpg"
                  alt="Client 2"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white"
                />
                <img
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/161541f34a9d55b4c3f4385b6dba5946-1681592818137/82e2d94a-f5cd-4724-b7b1-3444ad798bdc.jpg"
                  alt="Client 3"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white"
                />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center space-x-2 h-[40px]">
                  {"★"
                    .repeat(5)
                    .padEnd(5, "☆")
                    .split("")
                    .map((star, index) => (
                      <span
                        key={index}
                        className={`${
                          star === "★" ? "text-[#1c5a7a]" : "text-gray-400"
                        } text-[32px] leading-none`}
                      >
                        {star}
                      </span>
                    ))}
                  <p className="text-lg font-inter font-semibold text-[#1c5a7a] ml-2 leading-none flex items-center mt-2">
                    (5)
                  </p>
                </div>
                <p className="text-xl font-normal text-gray-700">
                  89+ orders review
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center bg-[#f5f8f9] rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.1)] p-4 space-x-4 4xl:w-auto 2xl:w-auto xl:w-auto lg:w-auto md:w-auto w-full transition-transform transform hover:scale-105 hover:shadow-lg">
              <img src={fiverrLogo} alt="Fiverr Logo" className="" />
              <div className="w-[1px] h-14 bg-gray-300"></div>
              <div className="flex flex-col items-center">
                <img src={level2Logo} alt="Level 2 Logo" className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mb-8">
          <img src={hero} alt="Hero Section" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
