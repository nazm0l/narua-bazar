import Link from "next/link";
import { Button } from "./ui/button";
import ShopCard from "./ShopCard";

export default function LatestShops() {
  return (
    <div className="py-10 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-4xl font-bold mt-10">নতুন দোকান</h1>
        <p className="mt-2 text-primary">
          এখানে আপনি নারুয়া বাজারের নতুন দোকান এবং আপডেট পাবেন।
        </p>
      </div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-6">
          {Array.from({ length: 8 }).map((_, index) => (
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
      <div className="mt-10 text-center">
        <Link href="/shops" className="inline-block">
          <Button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 cursor-pointer">
            সব দোকান দেখুন
          </Button>
        </Link>
      </div>
    </div>
  );
}
