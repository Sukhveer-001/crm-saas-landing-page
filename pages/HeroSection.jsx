import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">

        {/* small label */}
        <span className="text-sm text-gray-500 mb-4">
          Simple CRM for freelancers
        </span>

        {/* headline */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Manage your contacts
          <br />
          without the chaos
        </h1>

        {/* sub text */}
        <p className="mt-6 text-gray-600 max-w-xl text-lg">
          Track conversations, organize leads, and never lose a potential
          client again. A lightweight CRM designed for people who hate
          complicated software.
        </p>

        {/* buttons */}
        <div className="mt-10 flex gap-4 flex-col sm:flex-row">
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition"
          >
            Get Started Free
          </Link>

          <Link
            to="/features"
            className="px-6 py-3 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-100 transition"
          >
            See Features
          </Link>
        </div>

        {/* hero visual */}
        <div className="mt-16 w-full max-w-4xl rounded-xl border border-gray-200 shadow-sm hover:-translate-y-1 hover:shadow-2xl overflow-hidden">
          <img
            src="/images/3163379.jpg"
            alt="dashboard preview"
            className="w-full"
          />
        </div>

      </div>
    </section>
  )
}