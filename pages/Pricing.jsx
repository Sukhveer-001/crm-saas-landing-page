import React from "react";

const Pricing = () => {
  return (
    <section className="w-full py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Pricing</h1>
          <p className="mt-4 text-gray-600">
            Choose the plan that works best for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Starter */}
          <div className="border rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition text-center flex flex-col">
            <h2 className="text-3xl font-semibold mb-3">Starter</h2>

            <div className="flex justify-center items-end gap-1 mb-6">
              <span className="text-6xl font-bold text-blue-600">$10</span>
              <span className="text-gray-500">/mo</span>
            </div>

            <ul className="space-y-4 text-gray-600 text-left mx-auto">
              <li className="flex gap-2">
                <span className="text-green-500">✔</span> Basic Analytics
              </li>

              <li className="flex gap-2">
                <span className="text-green-500">✔</span> 100 Contacts
              </li>

              <li className="flex gap-2">
                <span className="text-green-500">✔</span> Email Support
              </li>

              <li className="flex gap-2 text-gray-400">✖ Automation Tools</li>

              <li className="flex gap-2 text-gray-400">✖ Custom Dashboard</li>

              <li className="flex gap-2 text-gray-400">✖ API Access</li>

              <li className="flex gap-2 text-gray-400">✖ Team Collaboration</li>
            </ul>

            <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>

          {/* Pro */}
          <div className="relative border-2 border-blue-600 rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 shadow-lg  transition text-center flex flex-col md:scale-105 bg-white">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm px-4 py-1 rounded-full">
              Most Popular
            </span>
            <h2 className="text-3xl font-semibold mb-3">Pro ⭐</h2>

            <div className="flex justify-center items-end gap-1 mb-6">
              <span className="text-6xl font-bold text-blue-600">$29</span>
              <span className="text-gray-500">/mo</span>
            </div>

            <ul className="space-y-4 text-gray-600 text-left mx-auto">
              <li className="flex gap-2">
                <span className="text-green-500">✔</span> Advanced Analytics
              </li>

              <li className="flex gap-2">
                <span className="text-green-500">✔</span> 10,000 Contacts
              </li>

              <li className="flex gap-2">
                <span className="text-green-500">✔</span> Priority Email Support
              </li>

              <li className="flex gap-2">
                <span className="text-green-500">✔</span> Automation Tools
              </li>

              <li className="flex gap-2">
                <span className="text-green-500">✔</span> Custom Dashboard
              </li>

              <li className="flex gap-2 text-gray-400">✖ API Access</li>

              <li className="flex gap-2 text-gray-400">✖ Team Collaboration</li>
            </ul>

            <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold">
              Get Started
            </button>
          </div>

          {/* Enterprise */}
          <div className="border rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition text-center flex flex-col">
            <h2 className="text-3xl font-semibold mb-3">Enterprise</h2>

            <div className="flex justify-center items-end gap-1 mb-6">
              <span className="text-6xl font-bold text-blue-600">$99</span>
              <span className="text-gray-500">/mo</span>
            </div>

            <ul className="space-y-4 text-gray-600 text-left mx-auto">
              <li className="flex gap-2">
                <span className="text-green-500">✔</span> Advanced Analytics
              </li>

              <li className="flex gap-2">
                <span className="text-green-500">✔</span> Unlimited Contacts
              </li>

              <li className="flex gap-2">
                <span className="text-green-500">✔</span> Priority Support
              </li>

              <li className="flex gap-2">
                <span className="text-green-500">✔</span> Automation Tools
              </li>

              <li className="flex gap-2">
                <span className="text-green-500">✔</span> Custom Dashboard
              </li>

              <li className="flex gap-2">
                <span className="text-green-500">✔</span> API Access
              </li>

              <li className="flex gap-2">
                <span className="text-green-500">✔</span> Team Collaboration
              </li>
            </ul>

            <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
