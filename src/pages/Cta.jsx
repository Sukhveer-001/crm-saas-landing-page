import React from "react";

const Cta = () => {
  return (
    <section className="w-full py-24 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Ready to Get Started?</h2>

        <p className="mt-4 text-blue-100 text-lg">
          Start using our platform today and see how easy it is to manage your
          data, automate workflows, and grow faster.
        </p>

        <button className="mt-8 bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:-translate-y-1 hover:bg-gray-100 transition">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default Cta;
