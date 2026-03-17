import Link from "next/link";
import { Button } from "./ui/button";
import ShopCard from "./ShopCard";

async function getShops() {
  try {
    const res = await fetch("http://localhost:5000/api/v1/shop", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch shops");
    const data = await res.json();
    return data.data.slice(0, 8); // Return first 8 shops
  } catch (error) {
    console.error("Error fetching shops:", error);
    return [];
  }
}

export default async function LatestShops() {
  const shops = await getShops();

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
          {shops.map((shop: any) => (
            <ShopCard
              key={shop._id}
              shop={{
                id: shop._id,
                name: shop.name,
                image: shop.imageUrl || "https://placehold.co/300x200.png",
                category: shop.category,
              }}
            />
          ))}
          {shops.length === 0 && (
            <p className="col-span-full text-center text-gray-500 py-10">
              কোনো দোকান পাওয়া যায়নি।
            </p>
          )}
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
