export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 text-center min-h-[calc(100vh-80px)] flex flex-col justify-center items-center">
      <div className="inline-flex items-center px-4 py-2 bg-primary/15 dark:bg-primary text-primary dark:text-white rounded-full text-sm font-medium border border-primary-200 dark:border-primary-800">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        নারুয়া বাজারের সব তথ্য একসাথে
      </div>
      <div>
        <h1 className="mt-4 text-4xl md:text-7xl font-bold text-gray-900 leading-[1.2]">
          আপনার হাতের মুঠোয় <br />
          <span className="text-primary">নারুয়া বাজারের সব তথ্য</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg md:text-xl text-gray-700">
          স্বাগতম নারুয়া বাজারের সবচেয়ে বড় ও জনপ্রিয় তথ্যভাণ্ডারে। দোকান,
          খবর, শিক্ষা প্রতিষ্ঠান, স্বাস্থ্যসেবা ও আরও অনেক কিছু এখন এক জায়গায়।
          সহজেই আপনার প্রয়োজনীয় দোকান খুঁজুন, তথ্য দেখুন, আর থাকুন সব সময়
          আপডেট।
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mt-8">
        <div className="text-center">
          <div className="text-4xl font-bold text-[#0284C7] dark:text-primary">
            ৫০০+
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            দোকান
          </div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-[#0284C7] dark:text-primary">
            ২০+
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            শিক্ষাপ্রতিষ্ঠান
          </div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-[#0284C7] dark:text-primary">
            ৮+
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            গ্রাম/এলাকা
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-6 sm:flex-row items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center">
          <svg
            className="w-4 h-4 mr-1 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          ভেরিফাইড দোকান
        </div>
        <div className="flex items-center">
          <svg
            className="w-4 h-4 mr-1 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          স্থানীয় খবর
        </div>
        <div className="flex items-center">
          <svg
            className="w-4 h-4 mr-1 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          শিক্ষাপ্রতিষ্ঠানের তালিকা
        </div>
      </div>
    </section>
  );
}
