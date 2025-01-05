import React from "react";

const Description = () => {
  return (
    <div className="text-sm sm:text-base md:text-lg">
      <p className="text-gray-600 mb-2 sm:mb-4">
        <strong>Key Features You’ll Love:</strong>
      </p>
      <ul className="text-gray-600 pl-5 space-y-3 sm:space-y-4">
        <li>
          ✔ <strong>Real-Time Data Syncing:</strong> Products data are
          automatically synced to Google Sheets every hour, so you’re always
          working with current information.
        </li>
        <li>
          ✔ <strong>API Integration:</strong> Seamlessly connect Shopify with
          Google Sheets for smooth and reliable data transfer.
        </li>
        <li>
          ✔ <strong>Data Cleanup & Formatting:</strong> Messy data? Not
          anymore. Enjoy neatly formatted, ready-to-use data without the extra
          work.
        </li>
        <li>
          ✔ <strong>Source Code Included:</strong> Full access lets you tweak
          and customize as you see fit.
        </li>
        <li>
          ✔ <strong>Delivery within 2 Days:</strong> Quick turnaround to get you
          up and running fast.
        </li>
        <li>
          ✔ <strong>1 Revision Included:</strong> Fine-tune the script to match
          your exact requirements.
        </li>
      </ul>
    </div>
  );
};

export default Description;
