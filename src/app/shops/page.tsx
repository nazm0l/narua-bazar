import ShopCard from "@/components/ShopCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "দোকানপাট | নারুয়া বাজার",
  description: "নারুয়া বাজারের বিভিন্ন দোকানপাটের তথ্য এবং তালিকা।",
};

export default function ShopsPage() {
  return (
    <div>
      <div className="bg-gradient-to-r from-cyan-100/10 to-blue-200/30">
        <div className="container mx-auto p-4">
          {/* You can add a hero section or banner text */}
          <h1 className="text-3xl font-bold text-center text-gray-800 pt-10 pb-5">
            নারুয়া বাজারের দোকানপাট
          </h1>
          <p className="text-center text-gray-600 pb-5">
            নারুয়া বাজারে বিভিন্ন ধরনের দোকানপাট রয়েছে যেখানে আপনি পাবেন মুদি,
            কাপড়, ইলেকট্রনিক্স এবং আরও অনেক কিছু।
          </p>
        </div>
      </div>
      {/* filter shops by category */}
      <div className="container flex justify-between items-center mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4">
          দোকানের ধরন অনুসারে ফিল্টার করুন
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Input className="rounded-r-none" />
            <Button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600 rounded-l-none cursor-pointer"
            >
              অনুসন্ধান করুন
            </Button>
          </div>
          <select className="border border-gray-300 rounded-lg px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">সব দোকান</option>
            <option value="grocery">মুদি দোকান</option>
            <option value="clothing">কাপড়ের দোকান</option>
            <option value="electronics">ইলেকট্রনিক্স</option>
            <option value="furniture">ফার্নিচার</option>
          </select>
        </div>
      </div>
      <div className=" container mx-auto py-5 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6 mt-6">
            {Array.from({ length: 20 }).map((_, index) => (
              <ShopCard
                key={index}
                shop={{
                  id: index + 1,
                  name: `দোকান ${index + 1}`,
                  image: "https://placehold.co/300x200.png",
                  category: "মুদি দোকান",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
