export default function Features() {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Everything you need</h2>
          <p className="text-gray-600 mt-4">
            Simple tools to manage your workflow faster.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-white rounded-lg border-[0.5px] border-gray-300">
            <h3 className="text-xl font-semibold">Fast Setup</h3>
            <p className="text-gray-600 mt-3">
              Get started in minutes with a clean onboarding process.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border-[0.5px] border-gray-300">
            <h3 className="text-xl font-semibold">Powerful Tools</h3>
            <p className="text-gray-600 mt-3">
              Everything you need to manage your workflow in one place.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border-[0.5px] border-gray-300">
            <h3 className="text-xl font-semibold">Smart Analytics</h3>
            <p className="text-gray-600 mt-3">
              Track performance and improve decisions with insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
