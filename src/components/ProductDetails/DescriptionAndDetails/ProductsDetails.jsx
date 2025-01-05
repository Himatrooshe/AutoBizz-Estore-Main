import React from "react";

const Details = () => {
  return (
    <div className="text-sm sm:text-base md:text-lg">
      <h3 className="text-gray-800 font-bold text-lg sm:text-xl mb-4">
        Perfect For:
      </h3>
      <ul className="text-gray-600 pl-5 space-y-3 sm:space-y-4">
        <li>
          ✔ Shopify store owners who want real-time product tracking without the
          hassle.
        </li>
        <li>
          ✔ Anyone tired of manually exporting Shopify data into Google Sheets!
        </li>
        <li>
          ✔ Developers who need a reliable way to export Shopify data
          automatically.
        </li>
        <li>
          ✔ Entrepreneurs looking to automate Shopify workflows and focus on
          growth.
        </li>
        <li>
          ✔ Ecommerce store owners looking to create custom dashboards in
          platforms like Google Sheets, Looker Studio, Power BI, and more.
        </li>
      </ul>

      <h3 className="text-gray-800 font-bold text-lg sm:text-xl mt-6 mb-4">
        How It Works:
      </h3>
      <ol className="text-gray-600 pl-5 list-decimal space-y-3 sm:space-y-4">
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
          the email, and voila you’ll have your automated system ready to go!
        </li>
        <li>
          Enjoy seamless, real-time Shopify exports and formatted product data
          ready for analysis or reporting.
        </li>
      </ol>
    </div>
  );
};

export default Details;
