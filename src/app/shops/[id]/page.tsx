import Image from "next/image";

export default function SingleShopPage({ params }: { params: { id: string } }) {
  return (
    <div>
      {/* Single Shop Page */}
      <h1 className="text-3xl font-bold text-center text-gray-800 bg-primary/30 pt-10 pb-10">
        দোকানের বিস্তারিত
      </h1>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white flex flex-col lg:flex-row items-center gap-8 p-6 rounded-lg shadow-md">
          <div>
            <Image
              src="https://placehold.co/800x300.png"
              alt="Shop Image"
              width={800}
              height={300}
              className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              দোকান {params.id}
            </h2>
            <p className="text-gray-600 mb-4">
              এখানে দোকানের বিস্তারিত বিবরণ থাকবে। আপনি পাবেন দোকানের অবস্থান,
              যোগাযোগের তথ্য এবং অন্যান্য গুরুত্বপূর্ণ তথ্য।
            </p>
            <div className="flex items-center gap-4">
              <span className="text-gray-500">📍 অবস্থান: মাছ বাজার</span>
              <span className="text-gray-500">📞 ফোন: 0123456789</span>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            দোকানের পণ্যসমূহ
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-8 gap-2">
            {Array.from({ length: 20 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100 mb-4"
              >
                <Image
                  src={`https://placehold.co/200x150.png`}
                  alt="পণ্যের ছবি"
                  width={200}
                  height={150}
                  className="w-full object-cover"
                />
                <div className="p-2">
                  <h4 className="text-lg text-center font-semibold text-gray-800">
                    পণ্য {index + 1}
                  </h4>
                  {/* <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    এই পণ্যের বিস্তারিত বিবরণ এখানে থাকবে।
                  </p> */}
                  {/* <span className="text-blue-600 font-medium">৳ 100</span> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
