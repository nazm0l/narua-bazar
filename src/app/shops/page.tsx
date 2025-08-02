import ShopCard from "@/components/ShopCard";
import ShopCardSkeleton from "@/components/ShopCardSkeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "দোকানপাট | নারুয়া বাজার",
  description: "নারুয়া বাজারের বিভিন্ন দোকানপাটের তথ্য এবং তালিকা।",
};

type TShop = {
  id: number;
  name: string;
  image: string;
  category: string;
}[];

const shops: TShop = [
  {
    id: 1,
    name: "মায়া সাইকেল স্টোর",
    image: "https://placehold.co/300x200.png",
    category: "রিপেয়ার ও সেবা",
  },
  {
    id: 2,
    name: "সুন্দরী ফ্যাশন হাউজ",
    image: "https://placehold.co/300x200.png",
    category: "কাপড়ের দোকান",
  },
  {
    id: 3,
    name: "আল-আমিন মুদি দোকান",
    image: "https://placehold.co/300x200.png",
    category: "মুদি দোকান",
  },
  {
    id: 4,
    name: "নতুন ইলেকট্রনিক্স",
    image: "https://placehold.co/300x200.png",
    category: "ইলেকট্রনিক্স",
  },
  {
    id: 5,
    name: "সুন্দরী ফার্নিচার",
    image: "https://placehold.co/300x200.png",
    category: "ফার্নিচার",
  },
  {
    id: 6,
    name: "শহীদ মুদি দোকান",
    image: "https://placehold.co/300x200.png",
    category: "মুদি দোকান",
  },
  {
    id: 7,
    name: "সুন্দরী কাপড়ের দোকান",
    image: "https://placehold.co/300x200.png",
    category: "কাপড়ের দোকান",
  },
  {
    id: 8,
    name: "আল-আমিন ইলেকট্রনিক্স",
    image: "https://placehold.co/300x200.png",
    category: "ইলেকট্রনিক্স",
  },
  {
    id: 9,
    name: "নতুন ফার্নিচার",
    image: "https://placehold.co/300x200.png",
    category: "ফার্নিচার",
  },
  {
    id: 10,
    name: "মায়া মুদি দোকান",
    image: "https://placehold.co/300x200.png",
    category: "মুদি দোকান",
  },
];

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
          <select className="border border-gray-300 rounded-lg px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">সব দোকান</option>
            <option value="grocery">মুদি দোকান</option>
            {shops.map((shop) => (
              <option key={shop.id} value={shop.category}>
                {shop.category}
              </option>
            ))}
          </select>
          <div className="flex items-center">
            <Input className="rounded-r-none" />
            <Button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600 rounded-l-none cursor-pointer"
            >
              অনুসন্ধান করুন
            </Button>
          </div>
        </div>
      </div>
      <div className=" container mx-auto py-5 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6 mt-6">
            {shops.map((shop) => (
              <ShopCard key={shop.id} shop={shop} />
            ))}
            <ShopCardSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
}
