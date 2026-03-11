import React from "react";

const Testimonials = () => {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">What Our Users Say</h2>
          <p className="mt-4 text-gray-600">
            Thousands of teams trust our platform to grow their business.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition">
            <p className="text-gray-600 mb-6">
              “This platform completely changed the way we manage customer data.
              The automation tools alone save us hours every week.”
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-300"></div>

              <div>
                <h4 className="font-semibold">Sarah Johnson</h4>
                <p className="text-sm text-gray-500">Startup Founder</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition">
            <p className="text-gray-600 mb-6">
              “The analytics dashboard is incredibly powerful but still easy to
              understand. It helped our team make better decisions.”
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-300"></div>

              <div>
                <h4 className="font-semibold">Mark Chen</h4>
                <p className="text-sm text-gray-500">Product Manager</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition">
            <p className="text-gray-600 mb-6">
              “Setup took less than 10 minutes and we were already seeing
              insights about our customers. Highly recommended.”
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-300"></div>

              <div>
                <h4 className="font-semibold">David Rodriguez</h4>
                <p className="text-sm text-gray-500">Marketing Lead</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
