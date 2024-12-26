import React from "react";
import Icon1 from "../../assets/fb.svg";
import Icon3 from "../../assets/insta.svg";
import Icon4 from "../../assets/yt.svg";
import Icon5 from "../../assets/linked.svg";

const FooterIcons = () => {
  const icons = [
    { src: Icon1, link: "https://facebook.com", alt: "Facebook" },
    { src: Icon3, link: "https://instagram.com", alt: "Instagram" },
    { src: Icon4, link: "https://youtube.com", alt: "Youtube" },
    { src: Icon5, link: "https://instagram.com", alt: "Instagram" },
  ];

  return (
    <div className="w-full h-auto py-8 flex items-center justify-center gap-6 flex-wrap">
      {icons.map((icon, index) => (
        <a
          key={index}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-110"
        >
          <img src={icon.src} alt={icon.alt} className="w-8 h-8" />
        </a>
      ))}
    </div>
  );
};

export default FooterIcons;
