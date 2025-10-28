import Image from "next/image";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function SingleNewsPage({ params }: PageProps) {
  return (
    <div>
      {/* Single News Page */}
      {/* Banner Ads  */}
      <div className="container mx-auto mt-20">
        <Image
          src="https://placehold.co/1200x80.png"
          alt="Banner Ads"
          width={1200}
          height={80}
          className="w-full object-cover mb-6"
        />
      </div>
      <div className="container mx-auto flex px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <div className="flex-col lg:flex-1/6 justify-center bg-white p-6">
          <Image
            src="https://placehold.co/800x300.png"
            alt="সংবাদের ছবি"
            width={800}
            height={300}
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
            সংবাদ শিরোনাম {params?.slug}
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-gray-500">🗓️ তারিখ: 01 জানুয়ারি 2025</span>
            <span className="text-gray-500">📰 উৎস: নারুয়া বাজার নিউজ</span>
          </div>
          <div className="mt-6">
            <p className="text-lg text-gray-600 text-justify">
              এখানে সংবাদটির বিস্তারিত বিবরণ থাকবে। আপনি পাবেন সংবাদটির মূল
              বিষয়বস্তু এবং অন্যান্য গুরুত্বপূর্ণ তথ্য। নারুয়া বাজারের সর্বশেষ
              আপডেট এবং ইভেন্ট সম্পর্কে জানুন। এখানে সংবাদটির বিস্তারিত বিবরণ
              থাকবে। আপনি পাবেন সংবাদটির মূল বিষয়বস্তু এবং অন্যান্য গুরুত্বপূর্ণ
              তথ্য। নারুয়া বাজারের সর্বশেষ আপডেট এবং ইভেন্ট সম্পর্কে জানুন।এখানে
              সংবাদটির বিস্তারিত বিবরণ থাকবে। আপনি পাবেন সংবাদটির মূল বিষয়বস্তু
              এবং অন্যান্য গুরুত্বপূর্ণ তথ্য। নারুয়া বাজারের সর্বশেষ আপডেট এবং
              ইভেন্ট সম্পর্কে জানুন।
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          {/* Square Ads  */}
          <Image
            src="https://placehold.co/300x250.png"
            alt="Square Ads"
            width={300}
            height={250}
            className="w-full object-cover mt-6"
          />
          <Image
            src="https://placehold.co/300x650.png"
            alt="Square Ads"
            width={300}
            height={650}
            className="w-full object-cover mt-6"
          />
        </div>
      </div>
      {/* Banner Ads  */}
      <div className="container mx-auto mt-20">
        <Image
          src="https://placehold.co/1200x80.png"
          alt="Banner Ads"
          width={1200}
          height={80}
          className="w-full object-cover mb-6"
        />
      </div>
    </div>
  );
}
