import React from "react";

const Description = () => {
  return (
    <div>
      <h3 className="text-gray-800 font-bold text-xl mb-4">Who is this for?</h3>
      <ul className="text-gray-600 pl-5 space-y-2">
        <li>
          ✔ Store owners looking to optimize their Shopify inventory management
          system.
        </li>
        <li>✔ Businesses managing multi-location Shopify inventory data.</li>
        <li>
          ✔ Anyone dealing with frequent inventory changes and large product
          catalogs.
        </li>
        <li>
          ✔ Developers who need a reliable way to export Shopify data
          automatically.
        </li>
        <li>
          ✔ Entrepreneurs looking to automate Shopify workflows and focus on
          growth.
        </li>
      </ul>

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
    </div>
  );
};

export default Description;
