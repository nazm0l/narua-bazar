export default function AddShopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-4">
          দোকান যুক্ত করুন
        </h1>
        <p className="text-center text-gray-600 mb-8">
          আপনার দোকান যুক্ত করতে নিচের ফর্ম পূরণ করুন।
        </p>
        <form className="bg-white p-8 rounded-lg shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <div>
              <h2 className="text-2xl font-bold mb-3 mt-6 text-gray-800 py-2">
                দোকানের তথ্য
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="shopName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  দোকানের নাম:
                </label>
                <input
                  type="text"
                  id="shopName"
                  name="shopName"
                  className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="দোকানের নাম লিখুন"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  বিবরণ:
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="দোকানের বিস্তারিত বিবরণ লিখুন"
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="location"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  অবস্থান:
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="দোকানের অবস্থান লিখুন"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  ফোন নম্বর:
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="ফোন নম্বর লিখুন"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="shopType"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  দোকানের ধরন:
                </label>
                <select
                  id="shopType"
                  name="shopType"
                  className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                >
                  <option value="">একটি ধরন নির্বাচন করুন</option>
                  <option value="grocery">মুদি দোকান</option>
                  <option value="pharmacy">ফার্মেসী</option>
                  <option value="clothing">পোশাকের দোকান</option>
                  <option value="electronics">ইলেকট্রনিক্স</option>
                  <option value="shoe">জুতার দোকান</option>
                  <option value="book">বইয়ের দোকান</option>
                  <option value="restaurant">রেস্টুরেন্ট</option>
                  <option value="sweet">মিষ্টির দোকান</option>
                  <option value="vegetable">সবজির দোকান</option>
                  <option value="meat">মাংসের দোকান</option>
                </select>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3 mt-6 text-gray-800 py-2">
                মালিকের তথ্য
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="ownerName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  মালিকের নাম:
                </label>
                <input
                  type="text"
                  id="ownerName"
                  name="ownerName"
                  className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="মালিকের নাম লিখুন"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="ownerPhoneNumber"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  মালিকের ফোন নম্বর:
                </label>
                <input
                  type="text"
                  id="ownerPhoneNumber"
                  name="ownerPhoneNumber"
                  className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="মালিকের ফোন নম্বর লিখুন"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="shopImage"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  দোকানের ছবি:
                </label>
                <input
                  type="file"
                  id="shopImage"
                  name="shopImage"
                  accept="image/*"
                  className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-150 ease-in-out w-full"
            >
              দোকান যুক্ত করুন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
