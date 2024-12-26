import React, { useState } from "react";

const Faqs = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqList = [
    {
      question: "Will I own the file/system?",
      answer: "Yes, absolutely.",
    },
    {
      question:
        "What If there is a minor changes or any bugs I face after receiving the system?",
      answer:
        "No worries, we have a post-purchase up to one month of support for any kind of tech support or minor changes if needed.",
    },
    {
      question: "I don’t speak English!",
      answer:
        "No worries, the system and setup process is so simple that we can help through chat/email support in your language (We have done this so many times, the power of Modern Translation Technology, I know right).",
    },
    {
      question: "Can I ask for a refund?",
      answer:
        "You can ask for refund before we give you access to your file/System. Once the system has been shared with you, it is not possible to refund after that point.",
    },
  ];

  return (
    <div className="bg-[#F5F8F9] lg:w-[850px] rounded-xl shadow-lg p-4">
      {faqList.map((faq, index) => (
        <div key={index} className="border-b last:border-none">
          <div
            className="flex justify-between items-center py-4 cursor-pointer"
            onClick={() => toggleQuestion(index)}
          >
            <h2 className="text-lg font-medium">{faq.question}</h2>
            <div
              className={`transition-transform duration-900 ${
                openQuestion === index ? "rotate-180" : ""
              }`}
            >
              {openQuestion === index ? (
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5.5498L5 0.549805L10 5.5498H0Z"
                    fill="#55BAE7"
                  />
                </svg>
              ) : (
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0.549805L5 5.5498L10 0.549805H0Z"
                    fill="#55BAE7"
                  />
                </svg>
              )}
            </div>
          </div>

          {openQuestion === index && (
            <div className="py-2 text-gray-600">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faqs;
