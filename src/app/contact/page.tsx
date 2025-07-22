import { Metadata } from "next";

export const metadata: Metadata = {
  title: " যোগাযোগ | নারুয়া বাজার",
  description: "নারুয়া বাজারের সাথে যোগাযোগের তথ্য এবং ফর্ম।",
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-100/10 to-blue-200/30">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-extrabold text-center text-gray-800 pt-10 pb-5">
            নারুয়া বাজারের সংবাদ
          </h1>
          <p className="text-center text-gray-700 pb-5">
            নারুয়া বাজারের সর্বশেষ সংবাদ, আপডেট এবং ইভেন্ট সম্পর্কে জানুন। এখানে
            পাবেন বাজারের নতুন খবর এবং বিশেষ অফার।
          </p>
        </div>
      </div>
      {/* Main Content */}
      <div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            আমাদের সাথে যোগাযোগ করুন
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mt-10 mb-4">
                আমাদের অফিসের ঠিকানা
              </h3>
              <p className="text-gray-600 mb-2">
                নারুয়া বাজার, উপজেলা সদর, জেলা সদর, বাংলাদেশ
              </p>
              <p className="text-gray-600">📞 ফোন: 0123456789</p>
              <p className="text-gray-600">✉️ ইমেইল: info@naruabazar.com</p>
            </div>
            <div>
              <form className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <input
                    type="text"
                    placeholder="আপনার নাম"
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="আপনার ইমেইল"
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <textarea
                  placeholder="আপনার বার্তা"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                  rows={5}
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  পাঠান
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
