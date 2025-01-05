import React from "react";
import FeatureCard from "./FeatureCard";

const FeatureList = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 48 48"
        >
          <linearGradient
            id="PTsiEfj2THKtO9xz06mlla_qrAVeBIrsjod_gr1"
            x1="24"
            x2="24"
            y1="5"
            y2="43"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#21ad64"></stop>
            <stop offset="1" stopColor="#088242"></stop>
          </linearGradient>
          <path
            fill="url(#PTsiEfj2THKtO9xz06mlla_qrAVeBIrsjod_gr1)"
            d="M39,16v25c0,1.105-0.895,2-2,2H11c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h17L39,16z"
          ></path>
          <path
            fill="#61e3a7"
            d="M28,5v9c0,1.105,0.895,2,2,2h9L28,5z"
          ></path>
          <path
            fill="#107c42"
            d="M39,16h-9c-0.473,0-0.917-0.168-1.257-0.444L39,27V16z"
          ></path>
          <path
            fill="#fff"
            d="M32,23H16c-0.553,0-1,0.448-1,1v12c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V24	C33,23.448,32.553,23,32,23z M17,29h4v2h-4V29z M23,29h8v2h-8V29z M31,27h-8v-2h8V27z M21,25v2h-4v-2H21z M17,33h4v2h-4V33z M23,35	v-2h8v2H23z"
          ></path>
        </svg>
      ),
      title: "Data source",
      description: "Google Sheets",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M12.21 18.62C10.6706 18.5472 9.21846 17.8843 8.15514 16.7688C7.09181 15.6533 6.49905 14.1711 6.5 12.63C6.5 9.32 9.19 6.63 12.5 6.63C15.72 6.63 18.34 9.16 18.49 12.34L16.39 11.71C16.2266 11.0168 15.8809 10.3798 15.3889 9.86488C14.8968 9.34997 14.2761 8.97581 13.591 8.78109C12.9059 8.58637 12.1813 8.57815 11.4919 8.75728C10.8026 8.93641 10.1736 9.29639 9.67001 9.80001C9.16639 10.3036 8.80641 10.9326 8.62728 11.622C8.44814 12.3113 8.45636 13.036 8.65108 13.721C8.84581 14.4061 9.21996 15.0268 9.73488 15.5189C10.2498 16.0109 10.8868 16.3566 11.58 16.52L12.21 18.62ZM22.5 12.63C22.5 12.93 22.49 13.23 22.46 13.53L20.49 12.94C20.5 12.84 20.5 12.73 20.5 12.63C20.5 8.21 16.92 4.63 12.5 4.63C8.08 4.63 4.5 8.21 4.5 12.63C4.5 17.05 8.08 20.63 12.5 20.63C12.6 20.63 12.71 20.63 12.81 20.62L13.4 22.59C13.1 22.62 12.8 22.63 12.5 22.63C6.98 22.63 2.5 18.15 2.5 12.63C2.5 7.11 6.98 2.63 12.5 2.63C18.02 2.63 22.5 7.11 22.5 12.63ZM18.73 16.89L22.5 15.63L12.5 12.63L15.5 22.63L16.76 18.86L21.03 23.13L23.01 21.15L18.73 16.89Z"
            fill="#55BAE7"
          />
        </svg>
      ),
      title: "One click setup",
      description: "Easy to deploy",
    },
  ];

  return (
    <div className="mt-6 grid grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeatureList;
