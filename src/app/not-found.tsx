import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-xl text-gray-700">পৃষ্ঠাটি পাওয়া যায়নি</p>
        <p className="mt-2 text-gray-500">
          দয়া করে ঠিকানা পরীক্ষা করুন বা হোম পৃষ্ঠায় ফিরে যান।
        </p>
      </div>
      <div className="mt-8">
        <Link
          href="/"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          হোম পৃষ্ঠায় ফিরে যান
        </Link>
      </div>
    </div>
  );
}
