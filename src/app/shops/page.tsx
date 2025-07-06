import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BadgeCheckIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
          <h1 className="text-3xl font-bold text-center text-gray-800 py-10">
            নারুয়া বাজারের দোকানপাট
          </h1>
          <p className="text-center text-gray-600">
            নারুয়া বাজারে বিভিন্ন ধরনের দোকানপাট রয়েছে যেখানে আপনি পাবেন মুদি,
            কাপড়, ইলেকট্রনিক্স এবং আরও অনেক কিছু।
          </p>
        </div>
      </div>
      {/* filter shops by category */}
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4">
          দোকানের ধরন অনুসারে ফিল্টার করুন
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            সব দোকান
          </Button>
          <Button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
            মুদি দোকান
          </Button>
          <Button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
            কাপড়ের দোকান
          </Button>
          <Button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
            ইলেকট্রনিক্স
          </Button>
        </div>
      </div>
      <div className=" container mx-auto py-10 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-4xl font-bold mt-10">নতুন দোকান</h1>
          <p className="mt-2 text-primary">
            এখানে আপনি নারুয়া বাজারের নতুন দোকান এবং আপডেট পাবেন।
          </p>
        </div>
        <div className="">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6 mt-6">
            {Array.from({ length: 20 }).map((_, index) => (
              <Link
                key={index}
                href={`/shops/${index + 1}`}
                className="w-40 lg:w-full items-center shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  key={index}
                  className="w-40 lg:w-full items-center shadow-lg rounded-lg bg-white"
                >
                  <Image
                    src="https://placehold.co/300x200.png"
                    width={300}
                    height={200}
                    alt="Latest Shop"
                    className="cursor-pointer rounded-t-lg object-cover w-full h-auto hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <Badge
                      variant="secondary"
                      className="bg-blue-500 text-white dark:bg-blue-600 "
                    >
                      <BadgeCheckIcon />
                      Verified
                    </Badge>
                    <h4 className="text-xl font-semibold text-gray-800">
                      নারুয়া বাজারের দোকান {index + 1}
                    </h4>
                    <p className="text-sm text-gray-500">
                      দোকানের ধরন: মুদি দোকান
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
