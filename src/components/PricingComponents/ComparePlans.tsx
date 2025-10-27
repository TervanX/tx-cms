"use client";
import React from "react";
import PricingComparisonTable from "./PricinComparisonTable";

interface ComparePlanProps {
  isAnnualBilling?: boolean;
}

const ComparePlan: React.FC<ComparePlanProps> = ({ isAnnualBilling = true }) => {
  return (
    <div id="compare-plans" className="bg-white mt-8 rounded mb-8">
      <PricingComparisonTable isAnnualBilling={isAnnualBilling} />
    </div>
  );
};

export default ComparePlan;

import { FAQItem } from '@/app/types/pricing.types';

export const pricingFAQData: FAQItem[] = [
  {
    question: "What is included in my trial plans?",
    answer: "Trial plans include 100 credits, and almost all of the features of the plan you selected.<br><br>The ability to link a non-Gmail/Microsoft account to send email campaigns is not included. You must be on a paid plan or a direct trial setup by one our sales representatives in order to link a non-Gmail/Microsoft email account."
  },
  {
    question: "What happens after my trial is over?",
    answer: "You will have the option to convert to a paying plan or downgrade to our Starter plan which is free forever."
  },
  {
    question: "What are Apollo Credits?",
    answer: "Apollo credits are the currency that Apollo uses to retrieve contact data within the Apollo platform.<br><br>Some common actions that uses credits are:<br><ul><li>Accessing a contact's emails uses 1 credit.</li><li>Accessing a contact's phone number uses 8 credits.</li><li>Data enrichment uses up to 9 credits per record.</li><li>1 Power-up run uses 1 credit.</li></ul>"
  },
  {
    question: "Can I cancel, upgrade, or downgrade anytime?",
    answer: "Yes. You can cancel, upgrade, or downgrade your plan at any time from your billing settings in the app.<br><ul><li>Upgrades (plan or seat count) take effect immediately.</li><li>Downgrades (plan, seat count) take effect immediately and access will update. Downgrades (add-ons) take effect at the end of your billing cycle. Refunds will not be processed for downgrades mid-term. Your updated price will apply starting with your next billing cycle.</li><li>Cancellations take effect at the end of your billing cycle.</li><li>Add-on downgrades take effect at the end of your billing cycle.</li><li>Add-on credits purchased mid-cycle will be available until the end of the current billing period, even if you downgrade before then.</li></ul>"
  },
  {
    question: "Is my business too small for Apollo?",
    answer: "We've structured our pricing so that Apollo can become a no-brainer investment for companies of all sizes.<br><br>For a very low price, Apollo provides you with Credits that will give you email addresses, mobile numbers and more details for every contact that could potentially buy your product.<br><br>From there, we provide you with a sequencing platform that allows you to A/B test your emails, record your calls, automate your follow-ups, and create a repeatable process of setting up sales conversations.<br><br>After setting up sales conversations, you can use our Opportunities feature to actually manage your sales pipeline and continue to use our database to pull information for more stakeholders within accounts and our emailing tools to automate your follow-ups and find out when your potential buyers are opening your emails.<br><br>After closing your first deal with Apollo, you're left with a framework to repeatedly close business and scale your customer acquisition efforts."
  },
  {
    question: "Does Apollo work with large enterprises?",
    answer: "Of course! Apollo works with a number of Fortune 500 companies and large enterprises such as Ernst & Young, Oracle, and Lyft.<br><br>Due to the complex needs of many large enterprises, we suggest talking to sales about our Custom plans to ensure that you have all of the integrations, security, and governance that you need."
  },
  {
    question: "What is a record selection limit?",
    answer: "This is a limit imposed on the number of new records you can select from our database at a time.<br><br>The key difference is that with a record selection limit, to save 10,000 leads you would need to click a button to select 25 leads and add them, 2,000 times. Then you could select all 10,000 of them to export all at once.<br><br>Without the record selection limit, you can save and export 10,000 leads all with one click."
  },
  {
    question: "Do I have to pay to send email campaigns?",
    answer: "No. Email campaigns are included on every account; however, you can only connect Gmail email accounts on non-paying plans. After paying, you are able to connect email accounts from Microsoft Office or any other provider."
  },
  {
    question: "Does Apollo integrate with my existing workflow?",
    answer: "Apollo integrates with Salesforce, HubSpot, Outreach, SalesLoft, Marketo, Sendgrid, LinkedIn, and all email providers to ensure that your workflow is upleveled wherever you live. We also offer API Access on our Custom plans for more advanced integrations."
  },
  {
    question: "Can I purchase additional credits if I need more?",
    answer: "Absolutely! Once you're signed up and logged in, you can easily add more credits to your account at any time. See our current credit rates here."
  },
  {
    question: "Why don't I have access to all the features listed here?",
    answer: "Some features shown on this page are only available with our new credit system. All new customers are automatically on this new system. If you're an existing customer and don't see certain features, your team may still be on our legacy system.<br><br>We're gradually rolling out the new credit system to existing customers. If you have questions about your team's status, contact support."
  }
];