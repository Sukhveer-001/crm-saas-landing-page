import React from "react";

const FaqSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to know before getting started.
          </p>
        </div>
        <div className="space-y-6">
          <div className="border-[0.5px] border-gray-300 rounded-lg p-6">
            <h3 className="font-semibold text-lg">Can I cancel anytime?</h3>
            <p className="mt-2 text-gray-600">
              Yes, you can cancel your subscription anytime with no extra fees.
            </p>
          </div>

          <div className="border-[0.5px] border-gray-300 rounded-lg p-6">
            <h3 className="font-semibold text-lg">Is my data secure?</h3>
            <p className="mt-2 text-gray-600">
              We use industry standard encryption and security practices.
            </p>
          </div>

          <div className="border-[0.5px] border-gray-300 rounded-lg p-6">
            <h3 className="font-semibold text-lg">
              Do you offer customer support?
            </h3>
            <p className="mt-2 text-gray-600">
              Yes, our team is available to help you whenever you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
