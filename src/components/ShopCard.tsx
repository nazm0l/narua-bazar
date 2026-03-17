import { BadgeCheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

export default function ShopCard({
  shop,
}: {
  shop: { id: string | number; name: string; image: string; category: string };
}) {
  return (
    <Link href={`/shops/${shop.id}`} className="block">
      <div className="w-full shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
        <div className="aspect-video overflow-hidden rounded-t-lg">
          <Image
            src={shop.image}
            width={400}
            height={225}
            alt={shop.name}
            className="cursor-pointer object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h4 className="text-xl font-semibold text-gray-800">
            {shop.name}
            <div className="relative group inline-block ml-2">
              <Badge
                variant="secondary"
                className="p-0 bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
              </Badge>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 w-max px-2 py-1 text-sm text-white bg-blue-500 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                Verified
              </span>
            </div>
          </h4>
          <p className="text-sm text-gray-500">দোকানের ধরন: {shop.category}</p>
        </div>
      </div>
    </Link>
  );
}
