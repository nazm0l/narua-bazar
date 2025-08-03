import Image from "next/image";
import Link from "next/link";

export default function ShopRequestSection() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-sky-200">
      <div className="container mx-auto grid grid-cols-2 gap-6 items-center p-6">
        <div className="mb-6">
          <Image
            src="https://placehold.co/400x200.png"
            alt="Shop Request"
            width={400}
            height={200}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="p-6">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            আপনার দোকান যুক্ত করুন
          </h2>
          <p className="mb-4 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            নারুয়া বাজারে আপনার দোকান যুক্ত করুন এবং আমাদের সাথে ব্যবসা বাড়ান।
            আপনার দোকান যুক্ত করতে নিচের বাটনে ক্লিক করুন।
          </p>
          <Link
            href="/shops/add"
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            দোকান যুক্ত করুন
          </Link>
        </div>
      </div>
    </section>
  );
}
