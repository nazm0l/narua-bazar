import Image from "next/image";
import { Badge } from "./ui/badge";
import { BadgeCheckIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

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
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-5 mt-6">
          {Array.from({ length: 8 }).map((_, index) => (
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
                <p className="text-sm text-gray-500">দোকানের ধরন: মুদি দোকান</p>
              </div>
            </div>
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
