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
    <div className="bg-[#F5F8F9] rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
      {faqList.map((faq, index) => (
        <div key={index} className="border-b last:border-none">
          <div
            className="flex justify-between items-center py-4 sm:py-6 cursor-pointer"
            onClick={() => toggleQuestion(index)}
          >
            <h2 className="text-base sm:text-lg lg:text-xl font-medium text-gray-700">
              {faq.question}
            </h2>
            <div
              className={`transition-transform duration-300 ${
                openQuestion === index ? "rotate-180" : ""
              }`}
            >
              {openQuestion === index ? (
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 7L6 1L12 7H0Z"
                    fill="#55BAE7"
                  />
                </svg>
              ) : (
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1L6 7L12 1H0Z"
                    fill="#55BAE7"
                  />
                </svg>
              )}
            </div>
          </div>

          {openQuestion === index && (
            <div className="py-2 sm:py-4 text-sm sm:text-base text-gray-600">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faqs;
