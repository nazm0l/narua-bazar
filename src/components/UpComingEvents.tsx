import Image from "next/image";
import Link from "next/link";

export default function UpComingEvents() {
  return (
    <div className="container mx-auto py-10 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-4xl font-bold mt-10">আসন্ন ইভেন্ট</h1>
        <p className="mt-2 text-primary">
          নারুয়া বাজারের আসন্ন ইভেন্ট এবং কার্যক্রম সম্পর্কে জানুন।
        </p>
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <Link
              key={index}
              href={`/events/${index + 1}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100"
            >
              <div className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://placehold.co/400x200.png"
                  alt="ইভেন্ট ছবি"
                  width={400}
                  height={200}
                  className="w-full object-cover rounded-t-lg mb-5"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  ইভেন্ট শিরোনাম {index + 1}
                </h3>
                <p className="text-gray-600 mb-4">
                  এই ইভেন্টে নারুয়া বাজারের বিশেষ কার্যক্রম এবং অফার সম্পর্কে
                  বিস্তারিত তথ্য রয়েছে।
                </p>
                <span className="text-sm text-gray-500">তারিখ: 20XX/XX/XX</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
