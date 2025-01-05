import React from "react";

const Description = () => {
  return (
    <div>
      <h3 className="text-gray-800 font-bold text-xl mt-6 mb-4">
        How It Works
      </h3>
      <ol className="text-gray-600 pl-5 list-decimal space-y-2">
        <li>
          We will contact you via the email address you provide and request
          access to your store through our Shopify partner account.
        </li>
        <li>
          Next, we’ll set up the automation system in a Google Sheet and send it
          to you.
        </li>
        <li>
          Simply copy the Google Sheet, press the trigger button as directed in
          the email, and voila—you’ll have your automated system ready to go!
        </li>
        <li>
          Enjoy seamless, real-time Shopify exports and formatted product data
          ready for analysis or reporting.
        </li>
      </ol>
      <h3 className="text-gray-800 font-bold text-xl mt-4 mb-4">Who is this for?</h3>
      <ul className="text-gray-600 pl-5 space-y-2 mb-4">
        <li>
          ✔ Shopify store owners who want real-time order tracking without
          manual work.
        </li>
        <li>
          ✔ Businesses looking to automate order data exports for faster
          reporting and decision-making.
        </li>
        <li>
          ✔ Anyone frustrated by the repetitive task of exporting Shopify orders
          manually.
        </li>
        <li>
          ✔ Developers who need a reliable way to export Shopify data
          automatically.
        </li>
      </ul>
      
    </div>
  );
};

export default Description;
