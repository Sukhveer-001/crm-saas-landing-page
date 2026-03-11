const Working = () => {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight">
            How it works
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Start using our platform in just a few minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition">
            <div className="text-3xl font-bold mb-4 text-blue-600">01</div>

            <h3 className="text-xl font-semibold">
              Add your data
            </h3>

            <p className="mt-2 text-gray-600">
              Import contacts or create new entries easily.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition">
            <div className="text-3xl font-bold mb-4 text-blue-600">02</div>

            <h3 className="text-xl font-semibold">
              Organize everything
            </h3>

            <p className="mt-2 text-gray-600">
              Keep your contacts structured and searchable.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition">
            <div className="text-3xl font-bold mb-4 text-blue-600">03</div>

            <h3 className="text-xl font-semibold">
              Start managing
            </h3>

            <p className="mt-2 text-gray-600">
              Track activity and grow your network efficiently.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Working;
