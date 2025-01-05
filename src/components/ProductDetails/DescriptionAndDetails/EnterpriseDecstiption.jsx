import React from "react";

const Description = () => {
  return (
    <div>
    <p className="text-gray-800 font-bold text-xl mb-4">
      What We Can Do For You:
    </p>
    <ul className="text-gray-600 pl-5 space-y-2">
      <li>
        • <strong>Custom Solutions for Any Platform:</strong>{" "}
        Integrate automation seamlessly into your eCommerce, CRM,
        or PM tools, tailored to your specific workflow needs.
      </li>
      <li>
        • <strong>Third-Party API/Webhook Integration:</strong>{" "}
        Easily connect and automate data between multiple
        platforms using API/webhook integrations—no matter the
        tool.
      </li>
      <li>
        • <strong>Large Data Set Solutions with BigQuery:</strong>{" "}
        Manage and analyze your large data sets in BigQuery, and
        unlock insights to help scale your business.
      </li>
      <li>
        •{" "}
        <strong>Custom Workflows to Match Your Business:</strong>{" "}
        We design and implement workflows that automate your daily
        processes, from sales and inventory management to customer
        support and reporting.
      </li>
      <li>
        •
        <strong>
          Dynamic Dashboards in Looker Studio/Google Sheets:
        </strong>
        Visualize your business data in real-time with dynamic
        dashboards—perfect for tracking metrics and making
        data-driven decisions.
      </li>
      <li>
        • <strong>Custom Notification Systems:</strong> Stay in
        the loop with automated notifications that notify you
        about critical business events—like low stock, order
        changes, or customer updates.
      </li>
      <li>
        • <strong>Priority Tech Support:</strong> Get priority
        support via email or phone, with dedicated consultation
        hours to resolve issues and keep your system running
        smoothly.
      </li>
    </ul>
  </div>
  );
};

export default Description;
