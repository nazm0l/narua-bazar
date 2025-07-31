import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "সংবাদ | নারুয়া বাজার",
  description: "নারুয়া বাজারের সর্বশেষ সংবাদ ও আপডেট।",
};

export default function NewsPage() {
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-10">
          {/* News Section */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2 border-gray-300">
              📰 <span>সর্বশেষ সংবাদ</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100"
                >
                  <Link href={`/news/${index + 1}`}>
                    <Image
                      src="https://placehold.co/600x300.png"
                      alt="সংবাদ ছবি"
                      width={600}
                      height={300}
                      className="w-full object-cover"
                    />
                  </Link>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      সংবাদ শিরোনাম {index + 1}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      এই সংবাদে নারুয়া বাজারের সর্বশেষ আপডেট এবং ইভেন্ট সম্পর্কে
                      বিস্তারিত তথ্য রয়েছে।
                    </p>
                    <Link
                      href={`/news/${index + 1}`}
                      className="text-blue-600 font-medium hover:underline"
                    >
                      আরও পড়ুন →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-blue-700 mb-6 flex items-center gap-2 border-b pb-2 border-blue-200">
              🎉 <span>সাম্প্রতিক ইভেন্ট</span>
            </h2>
            <div className="space-y-6">
              {Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-blue-50 border-l-4 border-blue-400 rounded-md shadow hover:shadow-lg transition duration-300 overflow-hidden"
                >
                  <Image
                    src="https://placehold.co/600x300.png"
                    alt="সংবাদ ছবি"
                    width={600}
                    height={300}
                    className="w-full object-cover"
                  />
                  <div className="p-5">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mb-2">
                      ইভেন্ট
                    </span>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">
                      ইভেন্ট শিরোনাম {index + 1}
                    </h3>
                    <p className="text-blue-700 mb-4 text-sm leading-relaxed">
                      এই ইভেন্টে নারুয়া বাজারের বিশেষ কার্যক্রম এবং অফার
                      সম্পর্কে বিস্তারিত তথ্য রয়েছে।
                    </p>
                    <Link
                      href="/news/event-details"
                      className="text-blue-600 font-medium hover:underline"
                    >
                      বিস্তারিত দেখুন →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
