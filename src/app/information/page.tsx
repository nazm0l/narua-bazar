import { Metadata } from "next";

export const metadata: Metadata = {
  title: " তথ্য | নারুয়া বাজার",
  description: "নারুয়া বাজারের বিভিন্ন তথ্য ও আপডেট।",
};

type TInfo = {
  title: string;
  count: number;
  description: string;
}[];

const infos: TInfo = [
  {
    title: "গ্রাম",
    count: 37,
    description: "নারুয়া বাজারের অন্তর্গত গ্রামগুলোর সংখ্যা।",
  },
  {
    title: "দোকান",
    count: 120,
    description: "নারুয়া বাজারে মোট দোকানের সংখ্যা।",
  },
  {
    title: "জনসংখ্যা",
    count: 5000,
    description: "নারুয়া বাজারের মোট জনসংখ্যা।",
  },
  {
    title: "বাজার দিন",
    count: 3,
    description: "সপ্তাহে বাজার বসার দিন।",
  },
  {
    title: "ইউনিয়ন পরিষদ",
    count: 1,
    description: "নারুয়া বাজারের অন্তর্গত ইউনিয়ন পরিষদের সংখ্যা।",
  },
  {
    title: "ইভেন্ট",
    count: 5,
    description: "নারুয়া বাজারে অনুষ্ঠিত ইভেন্টের সংখ্যা।",
  },
  {
    title: "সেবা কেন্দ্র",
    count: 2,
    description: "নারুয়া বাজারে উপলব্ধ সেবা কেন্দ্রের সংখ্যা।",
  },
  {
    title: "স্কুল",
    count: 4,
    description: "নারুয়া বাজারের অন্তর্গত স্কুলের সংখ্যা।",
  },
];

export default function InfoPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-100/10 to-blue-200/30">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-extrabold text-center text-gray-800 pt-10 pb-5">
            নারুয়া বাজারের তথ্য
          </h1>
          <p className="text-center text-gray-700 pb-5">
            নারুয়া বাজারের বিভিন্ন তথ্য, আপডেট এবং ইভেন্ট সম্পর্কে জানুন। এখানে
            পাবেন বাজারের নতুন খবর এবং বিশেষ অফার।
          </p>
        </div>
      </div>
      {/* Main Content */}
      <div className="py-2 lg:py-20">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 px-4 sm:px-6 lg:px-8 py-12">
          {infos.map((info, index) => (
            <div
              key={index}
              className={`card shadow-lg rounded-lg bg-white border-2 border-primary/20 ${
                index % 2 !== 1
                  ? "hover:border-primary"
                  : "hover:border-purple-500"
              } hover:shadow-xl transition duration-500 p-4 hover:cursor-pointer`}
            >
              <div className="card-body text-center">
                <h2 className="text-2xl font-bold ">{info.title}</h2>
                <h4 className="text-6xl lg:text-9xl font-semibold text-primary mb-2">
                  {info.count}
                </h4>
                <p className="text-gray-600">{info.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Narua Bazar History  */}
      <div className="bg-linear-180 from-white-100 to-blue-200/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            এক নজরে নারুয়া ইউনিয়ন পরিষদ
          </h2>
          <p className="text-lg text-justify text-gray-600 mb-4">
            অবস্থান: রাজবাড়ী জেলার বালিয়াকান্দি উপজেলা থেকে ৮কিলোমিটার পশ্চিমে
            নারুয়া ই্উনিয়ন অবস্থিত ইউনিয়নটি একটি সুন্দর ওমনোরম পরিবেশে নারুয়া
            বাজারের পাশে ইউনিয়ন পরিষদের কমপ্লেক্স ভবন অবস্থিত। এই ইউনিয়নের
            পূর্বে বালিয়াকান্দি ইউনিয়ন, পশ্চিমে ও দক্ষিনে মাগুরা জেলা ও গড়াই নদী
            এবং উত্তরে কালুখালী উপজেলার মৃগী ইউনিয়ন ও দক্ষিনে জংগল ইউনিয়ন।
            ইউনিয়নের আয়তন ২৪.৭৪ বর্গ কিলোমিটার। ব্রিটিশ শাসনামলে লড মেয়ারের আমলে
            ১৯৬০ সালে গ্রাম পঞ্চায়েত নামে বর্তমান ইউনিয়ন পরিষদটির কাযক্রম শুরু
            হয়। ২০১১ সালের আদমশুমারী মোতাবেক ইউনিয়নের জনসংখ্যা ২৫৭৫৩ জন এবং খানা
            সংখ্যা ৬,৪৪৫টি । শিক্ষার হার ৪৪.৫৯%। প্রধান কৃষিজাত ফসলের মধ্যে
            পাট,পিয়াজ, রসুন, ধান,গম ইত্যাদী।
          </p>
        </div>
      </div>
    </div>
  );
}
